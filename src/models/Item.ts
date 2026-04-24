export interface Item {
    id: string;
    sku: string;
    item_name: string;
    item_size: number;
    item_price: number;
}

export interface Sku {
    name: string,
    brand: string,
    type: string
}