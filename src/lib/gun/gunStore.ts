import { writable } from 'svelte/store';
import GUN from 'gun';
import 'gun/sea';
import 'gun/lib/load.js';
import 'gun/lib/open.js';
import { browser, dev } from '$app/environment';

export const gun = browser ? new GUN({ peers: [`${window.location.origin}/gun`] }) : global.gun;

export const messages = writable<Array<string>>([]);
