import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: "0.0.0.0", // bind to all network interfaces
		port: 5173, // or your port of choice
		strictPort: true, // fail if the port’s taken
	},
});
