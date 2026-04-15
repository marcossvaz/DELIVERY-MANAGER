

export interface Delivery {
    id: string;
    delivery_id: string;
    modality: string;
    status_id: Status; // TODO add model Status
    adrress_id: string; // TODO add model address
}

enum Status {
    PENDING = 'PENDING',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED',
    CANCELLED = 'CANCELLED',
    FAILED = 'FAILED'
}