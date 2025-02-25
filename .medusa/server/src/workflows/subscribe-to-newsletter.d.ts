import { CreateCustomerDTO } from "@medusajs/framework/types";
export type WorkflowInput = CreateCustomerDTO;
declare const subscribeToNewsletterWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateCustomerDTO, string, []>;
export default subscribeToNewsletterWorkflow;
