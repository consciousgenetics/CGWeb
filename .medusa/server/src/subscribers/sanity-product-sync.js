"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = upsertSanityProduct;
const sanity_sync_products_1 = require("../workflows/sanity-sync-products");
async function upsertSanityProduct({ event: { data }, container, }) {
    await (0, sanity_sync_products_1.sanityProductSyncWorkflow)(container).run({
        input: {
            product_ids: [data.id],
        },
    });
}
exports.config = {
    event: ["product.created", "product.updated"],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXR5LXByb2R1Y3Qtc3luYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdWJzY3JpYmVycy9zYW5pdHktcHJvZHVjdC1zeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLHNDQVNDO0FBWEQsNEVBQThFO0FBRS9ELEtBQUssVUFBVSxtQkFBbUIsQ0FBQyxFQUNoRCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFDZixTQUFTLEdBQ3NCO0lBQy9CLE1BQU0sSUFBQSxnREFBeUIsRUFBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDN0MsS0FBSyxFQUFFO1lBQ0wsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUN2QjtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFWSxRQUFBLE1BQU0sR0FBcUI7SUFDdEMsS0FBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7Q0FDOUMsQ0FBQyJ9