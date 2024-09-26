export default defineNuxtConfig({
  server: {
    host: '0.0.0.0', // default: localhost
    port: 3000 // or any port number you prefer
  },
  app: {
    head: {
      htmlAttrs: { lang: 'fa' },
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/logo_init.png', // Ensure the image is in the 'public/' directory
        },
      ],
    },
  },

  devtools: { enabled: true },
  modules: ["nuxt-icons", "@nuxt/ui", "@nuxtjs/google-fonts"],
  colorMode: {
    preference: 'light',
  },
  googleFonts: {
    families: {
      Poppins: true,
    },
  },

  compatibilityDate: "2024-08-05",
});
