import resolve from "@rollup/plugin-node-resolve";
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';

export default {
    input: "index.js",
    output: {
        file: "build/index.js",
        format: "cjs"
    },
    plugins: [
        resolve(),
        babel({ presets: ['@babel/preset-env'] })
    ],
};