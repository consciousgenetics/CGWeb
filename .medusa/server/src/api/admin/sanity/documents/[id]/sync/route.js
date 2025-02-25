"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const sanity_sync_products_1 = require("../../../../../../workflows/sanity-sync-products");
const POST = async (req, res) => {
    const { transaction } = await (0, sanity_sync_products_1.sanityProductSyncWorkflow)(req.scope).run({
        input: { product_ids: [req.params.id] },
    });
    res.json({ transaction_id: transaction.transactionId });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3Nhbml0eS9kb2N1bWVudHMvW2lkXS9zeW5jL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDJGQUE2RjtBQUV0RixNQUFNLElBQUksR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNwRCxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsTUFBTSxJQUFBLGdEQUF5QixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDckUsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUUsR0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTtLQUNqRCxDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsY0FBYyxFQUFFLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQztBQU5XLFFBQUEsSUFBSSxRQU1mIn0=