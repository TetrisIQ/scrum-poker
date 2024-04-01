// import { sequence } from '@sveltejs/kit/hooks';
// import { handleErrorWithSentry, sentryHandle } from '@sentry/sveltekit';
// import * as Sentry from '@sentry/sveltekit';

// console.log('LOAD SERVER SENTRY');
// Sentry.init({
// 	dsn: 'https://abc15e7088ad402787f01c9fe892b988@glitchtip.poddle.network/1',
// 	tracesSampleRate: 1.0,
// 	enabled: true,
// 	environment: import.meta.env.DEV ? 'DEV Server' : 'PROD Server'
// });

// // If you have custom handlers, make sure to place them after `sentryHandle()` in the `sequence` function.
// export const handle = sequence(sentryHandle());

// // If you have a custom error handler, pass it to `handleErrorWithSentry`
// export const handleError = handleErrorWithSentry();
