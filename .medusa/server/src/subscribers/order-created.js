"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = orderCreatedHandler;
async function orderCreatedHandler({ event, container, }) {
    try {
        const response = await fetch("https://munchies.medusajs.app/store/email/order-confirmation/" +
            event.data.id, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-publishable-api-key": process.env.MEDUSA_PUBLISHABLE_KEY,
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }
    catch (error) {
        console.error("Error:", error);
    }
}
exports.config = {
    event: ["order.placed"],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY3JlYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdWJzY3JpYmVycy9vcmRlci1jcmVhdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLHNDQXNCQztBQXRCYyxLQUFLLFVBQVUsbUJBQW1CLENBQUMsRUFDaEQsS0FBSyxFQUNMLFNBQVMsR0FDc0I7SUFDL0IsSUFBSSxDQUFDO1FBQ0gsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQzFCLCtEQUErRDtZQUM3RCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFDZjtZQUNFLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCO2FBQzVEO1NBQ0YsQ0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUM1RCxDQUFDO0lBQ0gsQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0FBQ0gsQ0FBQztBQUVZLFFBQUEsTUFBTSxHQUFxQjtJQUN0QyxLQUFLLEVBQUUsQ0FBQyxjQUFjLENBQUM7Q0FDeEIsQ0FBQyJ9