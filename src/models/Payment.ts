export interface Payment {
    id: string;
    type: string;
    order_id: string;
    client_id: string;
    total: number;
}