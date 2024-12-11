<script lang="ts">
    import type { VisitsResponse } from '$lib/types/visit';

    export let data: VisitsResponse;
    
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString();
    };

    console.log('Datos recibidos:', data); // Para depuración
</script>

<div class="visits-container">
    <h1>Registro de Visitas</h1>
    <p>Total de visitas: {data.totalItems}</p>
    
    <!-- Agregar verificación de datos -->
    {#if data && data.items && data.items.length > 0}
        <table class="visits-table">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>País</th>
                    <th>Dispositivo</th>
                    <th>Navegador</th>
                    <th>IP</th>
                </tr>
            </thead>
            <tbody>
                {#each data.items as visit}
                    <tr>
                        <td>{formatDate(visit.datetime)}</td>
                        <td>{visit.country}</td>
                        <td>{visit.device}</td>
                        <td>{visit.browser}</td>
                        <td>{visit.ip}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {:else}
        <p>No hay visitas para mostrar</p>
    {/if}
</div> 