import { OrderAddressDTO } from "@medusajs/framework/types";
export default function CustomerInformation({ method, shippingAddress, billingAddress, }: {
    method?: string;
    shippingAddress?: OrderAddressDTO;
    billingAddress?: OrderAddressDTO;
}): import("react/jsx-runtime").JSX.Element;
