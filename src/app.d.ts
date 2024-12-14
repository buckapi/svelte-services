/// <reference types="@sveltejs/kit" />

declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

// Variables de entorno privadas
declare module '$env/static/private' {
	export const POCKETBASE_EMAIL: string;
	export const POCKETBASE_PASSWORD: string;
}

// Variables de entorno públicas
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_APP_NAME: string;
		PUBLIC_API_URL: string;
	}
}

// Asegurarse de que no haya redeclaraciones
declare module '$env/static/public' {
	// Vacío para evitar conflictos
}

export {};
