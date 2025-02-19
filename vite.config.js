import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import image from '@rollup/plugin-image'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
    plugins: [
        react(),
        image(),
        createHtmlPlugin({
            entry: 'src/index.tsx',
            template: 'public/index.html',
            inject: {
                data: {
                    title: 'index',
                    injectScript: `<script src="./inject.js"></script>`,
                },
            }
        })
    ],
}
)