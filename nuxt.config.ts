// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
    ],
    content: {
        documentDriven: true
    },
    css: [
        '@/assets/style/index.scss'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/style/global.scss" as *;'
                    // css: ['@/assets/style/global.scss']
                },
            },
        },
    },
})
