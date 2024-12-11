import axios from 'axios';
import { UAParser } from 'ua-parser-js';

export class VisitTracker {
    private apiUrl: string;
    private appName: string;
    constructor() {
        // URL por defecto si no está definida la variable de entorno
        this.apiUrl = 'https://db.conectavet.cl:8080';
        this.appName = 'Serviapp';
    }

    async getVisitorInfo() {
        const parser = new UAParser();
        const uaResult = parser.getResult();
        
        const ipInfo = await axios.get('https://ipapi.co/json/')
            .then(res => res.data)
            .catch(() => ({}));

        return {
            appName: this.appName,
            browser: `${uaResult.browser.name} ${uaResult.browser.version}`,
            device: uaResult.device.type || 'Desktop',
            ip: ipInfo.ip || 'Unknown',
            country: ipInfo.country_name || 'Unknown',
            datetime: new Date().toISOString()
        };
    }

    async trackVisit() {
        try {
            const data = await this.getVisitorInfo();
            await axios.post(`${this.apiUrl}/api/collections/visits/records`, data);
        } catch (error) {
            console.error('Error al registrar visita:', error);
        }
    }
} 