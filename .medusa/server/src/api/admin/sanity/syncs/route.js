"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const sanity_full_sync_1 = require("../../../../workflows/sanity-full-sync");
const POST = async (req, res) => {
    const { transaction } = await (0, sanity_full_sync_1.sanityFullSyncWorkflow)(req.scope).run({
        input: {},
    });
    res.json({ transaction_id: transaction.transactionId });
};
exports.POST = POST;
const GET = async (req, res) => {
    const wfEngine = req.scope.resolve(utils_1.Modules.WORKFLOW_ENGINE);
    const [executions, count] = await wfEngine.listAndCountWorkflowExecutions({
        workflow_id: sanity_full_sync_1.sanityFullSyncWorkflow.getName(),
    }, { order: { created_at: "DESC" } });
    res.json({ workflow_executions: executions, count });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3Nhbml0eS9zeW5jcy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBb0Q7QUFFcEQsNkVBQWdGO0FBRXpFLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDckMsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLE1BQU0sSUFBQSx5Q0FBc0IsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2xFLEtBQUssRUFBRSxFQUFFO0tBQ1YsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLGNBQWMsRUFBRSxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztBQUMxRCxDQUFDLENBQUM7QUFOVyxRQUFBLElBQUksUUFNZjtBQUVLLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ25ELE1BQU0sUUFBUSxHQUEyQixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDeEQsZUFBTyxDQUFDLGVBQWUsQ0FDeEIsQ0FBQztJQUVGLE1BQU0sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEdBQUcsTUFBTSxRQUFRLENBQUMsOEJBQThCLENBQ3ZFO1FBQ0UsV0FBVyxFQUFFLHlDQUFzQixDQUFDLE9BQU8sRUFBRTtLQUM5QyxFQUNELEVBQUUsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQ2xDLENBQUM7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDdkQsQ0FBQyxDQUFDO0FBYlcsUUFBQSxHQUFHLE9BYWQifQ==