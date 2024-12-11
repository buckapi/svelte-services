import type { PageLoad } from './$types';
import type { VisitsResponse } from '$lib/types/visit';

export const load = (async ({ fetch }): Promise<VisitsResponse> => {
    try {
        // Asegúrate de que esta URL sea la correcta para tu API
        const response = await fetch('https://db.conectavet.cl:8080/api/collections/visits/records');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Datos cargados:', data);
        return data;
    } catch (error) {
        console.error('Error cargando visitas:', error);
        return {
            page: 1,
            perPage: 10,
            totalItems: 0,
            totalPages: 0,
            items: []
        };
    }
}) satisfies PageLoad; 