/// <reference types="@sveltejs/kit" />

declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

declare module '$env/static/private' {
	export const POCKETBASE_EMAIL: string;
	export const POCKETBASE_PASSWORD: string;
}

declare module '$env/static/public' {
	export const PUBLIC_APP_NAME: string;
	export const PUBLIC_API_URL: string;
}

export {};
