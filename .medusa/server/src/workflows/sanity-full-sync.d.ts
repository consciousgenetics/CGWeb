type Input = {
    category_ids?: string[];
    product_ids?: string[];
    collection_ids?: string[];
};
export declare const sanityFullSyncWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<Input, {
    product_total: {
        total: number | import("@medusajs/framework/workflows-sdk").WorkflowData<number>;
    } & {
        total: number;
    } & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<{
        total: number;
    }> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): import("@medusajs/framework/workflows-sdk").WorkflowData<{
            total: number;
        }>;
    } & import("@medusajs/framework/workflows-sdk").StepFunctionReturnConfig<{
        total: number;
    }>;
    category_total: {
        total: number | import("@medusajs/framework/workflows-sdk").WorkflowData<number>;
    } & {
        total: number;
    } & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<{
        total: number;
    }> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): import("@medusajs/framework/workflows-sdk").WorkflowData<{
            total: number;
        }>;
    } & import("@medusajs/framework/workflows-sdk").StepFunctionReturnConfig<{
        total: number;
    }>;
    collection_total: {
        total: number | import("@medusajs/framework/workflows-sdk").WorkflowData<number>;
    } & {
        total: number;
    } & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<{
        total: number;
    }> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): import("@medusajs/framework/workflows-sdk").WorkflowData<{
            total: number;
        }>;
    } & import("@medusajs/framework/workflows-sdk").StepFunctionReturnConfig<{
        total: number;
    }>;
}, []>;
export {};
