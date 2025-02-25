import { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
export default function subscribeNewsletterHandler({ event, container, }: SubscriberArgs<{
    id: string;
}>): Promise<void>;
export declare const config: SubscriberConfig;
