import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

const pb = new PocketBase('https://db.conectavet.cl:8080');

// Crear un store para los especialistas
export const specialists = writable<any[]>([]);

// Función para inicializar la suscripción
export async function initializeRealtimeSpecialists() {
    try {
        // Autenticación
        await pb.collection('users').authWithPassword('platform@conectavet.cl', 'HVPO86drd_D5Zon');

        // Suscribirse a cambios
        pb.collection('members').subscribe('*', async () => {
            // Actualizar lista cuando hay cambios
            const records = await pb.collection('members').getFullList(200, {
                sort: '-created',
            });
            specialists.set(records);
        });

        // Cargar lista inicial
        const initialRecords = await pb.collection('members').getFullList(200, {
            sort: '-created',
        });
        specialists.set(initialRecords);
    } catch (error) {
        console.error('Error al inicializar realtime:', error);
    }
}

// Función para limpiar la suscripción
export function cleanup() {
    pb.collection('members').unsubscribe('*');
}

export default pb;
