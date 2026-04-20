
export interface Order {
    id?: string;
    created_at?: Date;
    client_id: string;
    delivery_id: string;
    payment_id: string;
}