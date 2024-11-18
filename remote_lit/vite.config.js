import {defineConfig} from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
    plugins: [
        federation({
            name: 'remote_lit',
            filename: 'remote_lit.js',
            exposes: {
                './LitElement': './src/my-element.js',
            },
            shared: ['lit', 'lit-html']
        })
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
    },
})
