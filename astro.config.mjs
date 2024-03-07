import { defineConfig } from "astro/config";
import tailwindcss from "tailwindcss";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  plugins: [tailwindcss("./tailwind.config.js")],
  integrations: [tailwind()]
});