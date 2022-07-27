import axios from "axios";
import * as esbuild from 'esbuild-wasm';
import localforage from 'localforage';

const fileCache = localforage.createInstance({
  name: 'filecache'
});

export const fetchPlugin = (inputCode: string) => {
    return {
        name: 'fetch-plugin',
        setup(build: esbuild.PluginBuild) {
            build.onLoad({ filter: /(^index\.js$)/}, () => {
                return {
                    loader: 'jsx',
                    contents: inputCode,
                };
            });

            build.onLoad({ filter: /.css$/ }, async (args: any) => {
                // Check to see if we have already fetched this file and if it is already in the cache
                const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(args.path);

                // if it is, return it immediately
                if (cachedResult) {
                    return cachedResult;
                }

                const { data, request } = await axios.get(args.path);

                const escaped = data
                    .replace(/\n/g, '')
                    .replace(/"/g, '\\"')
                    .replace(/'/g, "\\'");

                const contents =
                `
                    const style = document.createElement('style');
                    style.innerText = '${escaped}';
                    document.head.appendChild(style);
                `;

                const result: esbuild.OnLoadResult = {
                    loader: 'jsx',
                    contents,
                    resolveDir: new URL('./', request.responseURL).pathname
                };

                // Store the response in cache
                await fileCache.setItem(args.path, result);

                return result;
            });

            build.onLoad({ filter: /.*/ }, async (args: any) => {
                // Check to see if we have already fetched this file and if it is already in the cache
                const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(args.path);

                // if it is, return it immediately
                if (cachedResult) {
                    return cachedResult;
                }

                const { data, request } = await axios.get(args.path);

                const contents = fileType === 'css' ? 
                `
                    const style = document.createElement('style');
                    style.innerText = '${escaped}';
                    document.head.appendChild(style);
                `: data;

                const result: esbuild.OnLoadResult = {
                    loader: 'jsx',
                    contents,
                    resolveDir: new URL('./', request.responseURL).pathname
                };

                // Store the response in cache
                await fileCache.setItem(args.path, result);

                return result;
            });
        }
    };
};