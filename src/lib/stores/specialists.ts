import { writable } from 'svelte/store';
import type { Specialist } from '$lib/types';
import pb from '$lib/services/pocketbase';

// Crear el store
export const specialists = writable<Specialist[]>([]);

// Estado para controlar si ya se inicializó
let initialized = false;

// Función para inicializar el store
export async function initializeSpecialists() {
    if (initialized) return;
    
    try {
        // Obtener datos iniciales
        const records = await pb.collection('specialists').getFullList<Specialist>();
        specialists.set(records);

        // Suscribirse a cambios en tiempo real
        pb.collection('specialists').subscribe<Specialist>('*', function(e) {
            specialists.update(current => {
                if (e.action === 'create') {
                    return [...current, e.record];
                }
                if (e.action === 'delete') {
                    return current.filter(item => item.id !== e.record.id);
                }
                if (e.action === 'update') {
                    return current.map(item => 
                        item.id === e.record.id ? e.record : item
                    );
                }
                return current;
            });
        });

        initialized = true;
    } catch (error) {
        console.error('Error initializing specialists:', error);
    }
}

// Función para limpiar suscripciones
export function cleanup() {
    pb.collection('specialists').unsubscribe();
    initialized = false;
} 