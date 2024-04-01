// import { handleErrorWithSentry } from '@sentry/sveltekit';
// import * as Sentry from '@sentry/sveltekit';

// Sentry.init({
// 	dsn: 'https://abc15e7088ad402787f01c9fe892b988@glitchtip.poddle.network/1',
// 	tracesSampleRate: 1.0,

// 	// This sets the sample rate to be 10%. You may want this to be 100% while
// 	// in development and sample at a lower rate in production
// 	replaysSessionSampleRate: 1.0,

// 	// If the entire session is not sampled, use the below sample rate to sample
// 	// sessions when an error occurs.
// 	replaysOnErrorSampleRate: 1.0,

// 	enabled: true,
// 	environment: import.meta.env.DEV ? 'DEV Client' : 'PROD Client'
// });

// // If you have a custom error handler, pass it to `handleErrorWithSentry`
// export const handleError = handleErrorWithSentry();
