// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Ignacio Gea",
      meta: [
        {
          name: "description",
          content: "Ignacio's personal website",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ],
      link: [{ rel: "icon", href: "/favicon.svg" }],
      bodyAttrs: {
        class: "py-8 px-12 bg-gray-300 min-h-screen flex flex-col",
      },
    },
  },
});
