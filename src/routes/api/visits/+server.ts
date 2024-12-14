import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import { POCKETBASE_EMAIL, POCKETBASE_PASSWORD } from '$env/static/private';

// Crear una instancia de PocketBase con manejo de errores
const createPocketBaseClient = () => {
    try {
        return new PocketBase('https://db.conectavet.cl:8080');
    } catch (error) {
        console.error('Error al crear cliente PocketBase:', error);
        throw new Error('Error de conexión con la base de datos');
    }
};

export const POST: RequestHandler = async ({ request }) => {
    try {
        const pb = createPocketBaseClient();
        const visitData = await request.json();
        
        console.log('Datos recibidos:', visitData);
        
        const record = await pb.collection('visits').create(visitData);
        
        return json({ 
            success: true, 
            data: record 
        });
    } catch (error) {
        console.error('Error en POST /api/visits:', error);
        return json({ 
            success: false, 
            error: 'Error al procesar la visita',
            details: error instanceof Error ? error.message : 'Error desconocido'
        }, { 
            status: 500 
        });
    }
};

export const GET: RequestHandler = async () => {
    try {
        const pb = createPocketBaseClient();
        
        const records = await pb.collection('visits').getList(1, 50, {
            sort: '-created',
            expand: 'device'
        });
        
        return json({
            success: true,
            visits: records.items
        });
    } catch (error) {
        console.error('Error detallado en GET /api/visits:', error);
        return json({
            success: false,
            error: 'Error al obtener las visitas',
            details: error instanceof Error ? error.message : 'Error desconocido'
        }, { 
            status: 500 
        });
    }
}; 