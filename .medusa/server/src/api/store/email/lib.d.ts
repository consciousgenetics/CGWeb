import type { CreateEmailOptions, CreateEmailRequestOptions } from "resend";
export type ReactEmailProps<T> = React.FC<Readonly<T>>;
export declare function sendEmail(payload: Omit<CreateEmailOptions, "from">, options?: CreateEmailRequestOptions): Promise<import("resend").CreateEmailResponse>;
