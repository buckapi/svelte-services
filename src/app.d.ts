/// <reference types="@sveltejs/kit" />

declare namespace App {
	interface Locals {
		// ...
	}
}

declare module '$env/static/public' {
	export const PUBLIC_POCKETBASE_URL: string;
}

export {};
