import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import image from '@rollup/plugin-image'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
    output: {
         publicPath: 'auto',
        base: 'https://github.com/NieneB/participatory-tool/',
        filename: "bundle.js"
    },
    plugins: [
        react(),
        image(),
        createHtmlPlugin({
            template: '/index.html',
            
        })
    ],
}
)