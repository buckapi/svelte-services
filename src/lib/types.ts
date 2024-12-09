export interface Specialist {
    id: string;
    full_name: string;
    specialization?: string;
    description?: string;
    location?: string;
    images: string[];
    [key: string]: any;
} 