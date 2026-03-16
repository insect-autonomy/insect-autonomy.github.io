import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://insect-autonomy.github.io",
  base: "/",          // important for user/organization pages
  output: "static",
});