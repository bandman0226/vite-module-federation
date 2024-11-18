import {defineConfig} from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
    plugins: [
        federation({
            name: 'shell',
            remotes: {
                remoteApp: 'http://localhost:5001/assets/remoteEntry.js',
            },
            shared: []
        })
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
    },
})
