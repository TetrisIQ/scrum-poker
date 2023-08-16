import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'poddle',
				project: 'poker',
				url: 'https://glitchtip.poddle.network/',
				authToken: 'process.env.SENTRY_AUTH_TOKEN'
			}
		}),
		sveltekit()
	],
	server: {
		host: '127.0.0.1',
		port: 8765
	}
});
