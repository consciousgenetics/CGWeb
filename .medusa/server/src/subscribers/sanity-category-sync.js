"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = upsertSanityProduct;
const sanity_sync_categories_1 = require("../workflows/sanity-sync-categories");
async function upsertSanityProduct({ event: { data }, container, }) {
    await (0, sanity_sync_categories_1.sanityCategorySyncWorkflow)(container).run({
        input: {
            category_ids: [data.id],
        },
    });
}
exports.config = {
    event: ["product-category.created", "product-category.updated"],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXR5LWNhdGVnb3J5LXN5bmMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3Vic2NyaWJlcnMvc2FuaXR5LWNhdGVnb3J5LXN5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0Esc0NBU0M7QUFYRCxnRkFBaUY7QUFFbEUsS0FBSyxVQUFVLG1CQUFtQixDQUFDLEVBQ2hELEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUNmLFNBQVMsR0FDc0I7SUFDL0IsTUFBTSxJQUFBLG1EQUEwQixFQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM5QyxLQUFLLEVBQUU7WUFDTCxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQ3hCO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVZLFFBQUEsTUFBTSxHQUFxQjtJQUN0QyxLQUFLLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSwwQkFBMEIsQ0FBQztDQUNoRSxDQUFDIn0=