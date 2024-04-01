import GUN from 'gun';
// import 'gun/sea';
import 'gun/lib/load.js';
import 'gun/lib/open.js';
import { browser } from '$app/environment';

export function createGunInstance() {
	return browser ? new GUN({ peers: [`${window.location.origin}/gun`] }) : global.gun;
}

export function testConnection() {
	return new WebSocket(
		`${window.location.origin.replace('https', 'wss').replace('http', 'ws')}/gun`,
		[]
	);
}

export const gun = createGunInstance();
