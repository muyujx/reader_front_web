import {
    defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import proxyConfig from './proxyConfig'

// https://vitejs.dev/config/
export default defineConfig({

    server: {
        proxy: {
            '/api': {
                target: proxyConfig.target.host,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, proxyConfig.target.replace)
            },
            '/resource': {
                target: proxyConfig.resourceTarget,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/resource/, '/resource')
            }
        }
    },

    build: {
        assetsDir: 'static/img/',
        rollupOptions: {
            output: {
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
            },
        },
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ]
});