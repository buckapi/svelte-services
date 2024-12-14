export interface Visit {
    appName: string;
    browser: string;
    country: string;
    created: string;
    datetime: string;
    device: string;
    id: string;
    ip: string;
    updated: string;
}

export interface VisitsResponse {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    items: Visit[];
} 