import { gun } from '$lib/gun/gunStore';
import type { PageLoad } from './$types';

// Loading the data on the server, so we have faster loading times and improvements for SEO
export const load = (async ({ params }) => {
	return {};
}) satisfies PageLoad;
