import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import Checker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), Checker({ typescript: true })],
  server: {
    port: 7777,
  },
});
