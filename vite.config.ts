import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0', // Escucha en todas las interfaces de red
		port: 5734       // Puerto que deseas usar
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
