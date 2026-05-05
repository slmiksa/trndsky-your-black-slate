import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
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
