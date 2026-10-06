import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Every page is a multi-page entry: an HTML shell that loads its own React entry.
const page = (name: string) => path.resolve(import.meta.dirname, name);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: page("index.html"),
        about: page("about.html"),
        contactus: page("contactus.html"),
        item1: page("item1.html"),
        item2: page("item2.html"),
        item3: page("item3.html"),
        designSystem: page("design-system.html"),
      },
    },
  },
});
