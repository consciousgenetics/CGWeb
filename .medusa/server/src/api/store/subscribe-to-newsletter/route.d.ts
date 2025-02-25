import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { WorkflowInput } from "../../../workflows/subscribe-to-newsletter";
export declare function POST(req: MedusaRequest<WorkflowInput>, res: MedusaResponse): Promise<void>;
