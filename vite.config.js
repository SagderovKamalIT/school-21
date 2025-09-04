import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // base: "/school-21/", 
    base: './',
  plugins: [react()],
  assetsInclude: ["**/*.glb"], 
   
});
