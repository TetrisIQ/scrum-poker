// import { sentrySvelteKit } from '@sentry/sveltekit';
// import type { SentrySvelteKitPluginOptions } from '@sentry/sveltekit/types/vite/sentryVitePlugins';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import type { Plugin } from 'vite';

export default defineConfig({
	plugins: [
		// import.meta.url.includes('private')
		// 	? sentrySvelteKit({
		// 			sourceMapsUploadOptions: {
		// 				org: 'poddle',
		// 				project: 'poker',
		// 				url: 'https://glitchtip.poddle.network/'
		// 			}
		// 	  })
		// 	: pass(),
		sveltekit()
	],
	server: {
		host: '127.0.0.1',
		port: 8765
	}
});

// function pass(options?: SentrySvelteKitPluginOptions): Promise<Plugin[]> {
// 	return new Promise((resolveOuter) => {
// 		resolveOuter(
// 			new Promise((resolveInner) => {
// 				setTimeout(resolveInner, 1000);
// 			})
// 		);
// 	});
// }
