import type { SubscriberArgs, SubscriberConfig } from "@medusajs/medusa";
export default function orderShippedHandler({ event, container, }: SubscriberArgs<{
    id: string;
}>): Promise<void>;
export declare const config: SubscriberConfig;
