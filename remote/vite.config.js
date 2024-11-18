import {defineConfig} from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
    plugins: [
        federation({
            name: 'remote_App',
            filename: 'remoteEntry.js',
            exposes: {
                './RemoteElement': './src/remote-element.ts',
            },
            shared: ['lit']
        })
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false
    },
})
