import { defineConfig } from 'vite';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
	root: 'src',
	base: isProduction ? '/vault/' : 'development',
	publicDir: '../public',
	plugins: [],
	server: { port: 5173 },
	build: {
		outDir: '../dist',
	},
});
