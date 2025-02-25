import { OrderLineItemDTO } from "@medusajs/framework/types";
export default function Cart({ details, items, currency_code, }: {
    date?: string;
    items: OrderLineItemDTO[];
    currency_code: string;
    details?: {
        subtotal: string;
        discount: string;
        shipping: string;
        taxes: string;
        total: string;
    };
}): import("react/jsx-runtime").JSX.Element;
