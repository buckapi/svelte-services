<script lang="ts">
    import type { VisitsResponse } from '$lib/types/visit';

    export let data: VisitsResponse;
    
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString();
    };

    console.log('Datos recibidos:', data); // Para depuración
</script>

<div class="visits-container">
    <h1 class="title">Registro de Visitas</h1>
    <p class="total-visits">Total de visitas: {data.totalItems}</p>
    
    {#if data && data.items && data.items.length > 0}
        <div class="table-wrapper">
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
        </div>
    {:else}
        <p class="no-data">No hay visitas para mostrar</p>
    {/if}
</div> 

<style>
    .visits-container {
        max-width: 1200px;
        margin: 2rem auto;
        padding: 0 1rem;
    }

    .title {
        color: #2c3e50;
        font-size: 2rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .total-visits {
        font-size: 1.1rem;
        color: #666;
        margin-bottom: 2rem;
    }

    .table-wrapper {
        overflow-x: auto;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    .visits-table {
        width: 100%;
        border-collapse: collapse;
        background-color: white;
    }

    .visits-table th {
        background-color: #3498db;
        color: white;
        padding: 1rem;
        text-align: left;
    }

    .visits-table td {
        padding: 0.8rem 1rem;
        border-bottom: 1px solid #eee;
    }

    .visits-table tr:hover {
        background-color: #f5f6fa;
    }

    .no-data {
        text-align: center;
        color: #666;
        font-style: italic;
        padding: 2rem;
        background-color: #f8f9fa;
        border-radius: 8px;
    }

    @media (max-width: 768px) {
        .title {
            font-size: 1.5rem;
        }

        .visits-table th,
        .visits-table td {
            padding: 0.6rem;
            font-size: 0.9rem;
        }
    }
</style> 