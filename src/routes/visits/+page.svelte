<script lang="ts">
    import { onMount } from 'svelte';
    import { env } from '$env/dynamic/public';
    
    interface Visit {
        id: string;
        collectionId: string;
        collectionName: string;
        created: string;
        updated: string;
        browser: string;
        device: string;
        appName: string;
        ip: string;
        country: string;
        datetime: string;
        userAgent: string;
        visitCount: number;
        location: null | any;
        deviceId?: string;
        deviceType?: string;
        deviceModel?: string;
        deviceVendor?: string;
        deviceOs?: string;
        deviceOsVersion?: string;
    }

    interface DeviceInfo {
        type: string;
        model: string;
        vendor: string;
        os: string;
        osVersion: string;
    }

    interface VisitsPerDevice {
        [deviceId: string]: Visit[];
    }

    let visits: Visit[] = [];
    let visitsPerDevice: VisitsPerDevice = {};
    let loading = true;
    let error: string | null = null;

    function parseDeviceInfo(deviceString: string): DeviceInfo {
        try {
            return JSON.parse(deviceString);
        } catch {
            return {
                type: 'unknown',
                model: 'unknown',
                vendor: 'unknown',
                os: 'unknown',
                osVersion: 'unknown'
            };
        }
    }

    onMount(async () => {
        try {
            const response = await fetch(`${env.PUBLIC_API_URL}/api/collections/visits/records`);
            const result = await response.json();
            
            if (!result.items) {
                throw new Error('Error al cargar las visitas');
            }

            visits = result.items;
            
            visitsPerDevice = visits.reduce<VisitsPerDevice>((acc, visit) => {
                const deviceId = visit.userAgent;
                if (!acc[deviceId]) {
                    acc[deviceId] = [];
                }
                acc[deviceId].push({
                    ...visit,
                    deviceId,
                    deviceType: parseDeviceInfo(visit.device).type,
                    deviceModel: parseDeviceInfo(visit.device).model,
                    deviceVendor: parseDeviceInfo(visit.device).vendor,
                    deviceOs: parseDeviceInfo(visit.device).os,
                    deviceOsVersion: parseDeviceInfo(visit.device).osVersion
                });
                return acc;
            }, {});

        } catch (err) {
            error = err instanceof Error ? err.message : 'Error desconocido';
            console.error('Error al cargar visitas:', err);
        } finally {
            loading = false;
        }
    });

    function formatDate(dateStr: string): string {
        return new Date(dateStr).toLocaleString();
    }
</script>

<div class="visits-container">
    <h1>Registro de Visitas</h1>
    
    {#if loading}
        <div class="loading">Cargando visitas...</div>
    {:else if error}
        <div class="error-message">
            {error}
        </div>
    {:else if Object.keys(visitsPerDevice).length === 0}
        <div class="no-visits">
            No hay visitas registradas aún.
        </div>
    {:else}
        {#each Object.entries(visitsPerDevice) as [deviceId, deviceVisits]}
            <div class="device-section">
                <h2>Dispositivo {deviceId}</h2>
                <div class="device-info">
                    <p>Navegador: {deviceVisits[0].browser}</p>
                    <p>Sistema Operativo: {deviceVisits[0].deviceOs} {deviceVisits[0].deviceOsVersion}</p>
                    <p>Tipo: {deviceVisits[0].deviceType}</p>
                    {#if deviceVisits[0].deviceModel !== 'unknown'}
                        <p>Modelo: {deviceVisits[0].deviceModel}</p>
                    {/if}
                    {#if deviceVisits[0].deviceVendor !== 'unknown'}
                        <p>Fabricante: {deviceVisits[0].deviceVendor}</p>
                    {/if}
                    <p>País: {deviceVisits[0].country}</p>
                    <p>IP: {deviceVisits[0].ip}</p>
                    <p>Total visitas: {deviceVisits.length}</p>
                </div>
                
                <table>
                    <thead>
                        <tr>
                            <th>Fecha y Hora</th>
                            <th>Contador de Visitas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each deviceVisits as visit}
                            <tr>
                                <td>{formatDate(visit.datetime)}</td>
                                <td>{visit.visitCount}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        {/each}
    {/if}
</div>

<style>
    .visits-container {
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .loading {
        text-align: center;
        padding: 2rem;
        color: #666;
    }

    .error-message {
        padding: 1rem;
        margin: 1rem 0;
        background-color: #fff3f3;
        border: 1px solid #ffcdd2;
        border-radius: 4px;
        color: #d32f2f;
    }

    .no-visits {
        padding: 2rem;
        text-align: center;
        color: #666;
        background-color: #f5f5f5;
        border-radius: 8px;
    }

    .device-section {
        margin-bottom: 2rem;
        padding: 1rem;
        border: 1px solid #ddd;
        border-radius: 8px;
    }

    .device-info {
        margin: 1rem 0;
        padding: 1rem;
        background-color: #f5f5f5;
        border-radius: 4px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 1rem;
    }

    th, td {
        padding: 0.5rem;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #f0f0f0;
    }
</style> 