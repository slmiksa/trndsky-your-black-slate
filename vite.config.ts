import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  vite: {
    environments: {
      client: {
        build: {
          outDir: "dist",
        },
      },
      ssr: {
        build: {
          outDir: "dist/server",
        },
      },
    },
  },
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/",
      },
    },
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/services" },
      { path: "/software" },
      { path: "/partners" },
      { path: "/contact" },
    ],
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: false,
    },
  },
});
