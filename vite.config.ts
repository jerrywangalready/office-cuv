import {defineConfig, loadEnv} from 'vite'
import type {UserConfig, ConfigEnv} from "vite";
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/viet'

import { resolve, join } from 'path'
import { wrapperEnv } from './build/utils'

import {fileURLToPath, URL} from 'node:url'
import Components from 'unplugin-vue-components/vite';
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [AntDesignVueResolver()],
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            'components': fileURLToPath(new URL('./src/components', import.meta.url))
        }
    }
})
