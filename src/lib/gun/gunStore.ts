import { writable } from 'svelte/store';
import GUN from 'gun';
import 'gun/sea';
import 'gun/lib/load.js';
import 'gun/lib/open.js';
import { browser } from '$app/environment';

export const gun = browser
	? new GUN({ peers: [`https://${window.location.host}/gun`] })
	: global.gun;

export const messages = writable<Array<string>>([]);
