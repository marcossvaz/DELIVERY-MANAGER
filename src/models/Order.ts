
export interface Order {
    id?: string;
    created_at?: string;
    client_id: string;
    order_items_id: string;
    delivery_id: string;
    payment_id: string;
}