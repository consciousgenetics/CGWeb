import type { SubscriberArgs, SubscriberConfig } from "@medusajs/medusa";
export default function upsertSanityProduct({ event: { data }, container, }: SubscriberArgs<{
    id: string;
}>): Promise<void>;
export declare const config: SubscriberConfig;
