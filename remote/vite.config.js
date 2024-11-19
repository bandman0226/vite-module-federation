import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
    plugins: [
        federation({
            name: 'litremote',
            filename: 'remoteEntry.js',
            exposes: {
                './RemoteElement': './src/remote-element.ts',
            },
            shared: ['lit']
        })
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false
    }
});
