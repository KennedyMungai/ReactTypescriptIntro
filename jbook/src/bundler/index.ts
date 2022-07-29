import * as esbuild from 'esbuild-wasm';
import { fetchPlugin } from '../plugins/fetch-plugin';
import { unpkgPathPlugin } from '../plugins/unpkg-path-plugin';

export default async (rawCode: string) => {
    await esbuild.startService({
        worker: true,
        wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm'
    });
}