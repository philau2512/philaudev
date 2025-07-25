import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react'; // eslint-disable-line camelcase
export default defineConfig({
  plugins: [react(), tailwindcss()],
});