import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const ASSET_URL = env.ASSET_URL || "";
  console.log(ASSET_URL);

  return {
    plugins: [react()],
    base: `/${ASSET_URL}/`,
  };
});
