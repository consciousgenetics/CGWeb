import type { SubscriberArgs, SubscriberConfig } from "@medusajs/medusa";
export default function orderCreatedHandler({ event, container, }: SubscriberArgs<{
    id: string;
}>): Promise<void>;
export declare const config: SubscriberConfig;
