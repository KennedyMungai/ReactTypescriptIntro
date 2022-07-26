import * as esbuild from 'esbuild-wasm';
import axios from 'axios';
import localforage from 'localforage';

const fileCache = localforage.createInstance({
  name: 'filecache'
});

export const unpkgPathPlugin = () => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        console.log('onResolve', args);

        if (args.path === 'index.js') {
          return { path: args.path, namespace: 'a' };
        } 

        if (args.path.includes('./') || args.path.includes('../')) {
          return{
            namespace: 'a',
            path: new URL(args.path, args.importer + '/').href
          };
        }

        return {
          namespace: 'a',
          path: `https://unpkg.com/${args.path}`
        };
      });
      build.onLoad({ filter: /.*/ }, async (args: any) => {
        console.log('onLoad', args);
        if (args.path === 'index.js') {
          return {
            loader: 'jsx',
            contents: `
              import React, { useState } from 'react';
              console.log(React, useState);
            `,
          };
        }

        // Check to see if we have already fetched this file and if it is already in the cache
        const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(args.path);

        // if it is, return it immediately
        if (cachedResult) {
          return cachedResult;
        }
        
        const { data, request } = await axios.get(args.path);
        
        const result = {
          loader: 'jsx',
          contents: data,
          resolveDir: new URL('./', request.responseURL).pathname
        };

        // Store the response in cache
        await fileCache.setItem(args.path, result);

        return result;
      });
    },
  };
};