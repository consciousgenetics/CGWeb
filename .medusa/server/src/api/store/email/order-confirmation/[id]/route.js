"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("@medusajs/framework/utils");
const order_confirmation_1 = __importDefault(require("../../_templates/order-confirmation"));
const lib_1 = require("../../lib");
async function POST(req, res) {
    const { id } = req.params;
    const orderService = req.scope.resolve(utils_1.Modules.ORDER);
    const order = await orderService.retrieveOrder(id, {
        relations: [
            "items",
            "shipping_methods",
            "shipping_address",
            "billing_address",
            "summary",
        ],
        select: [
            "email",
            "total",
            "item_subtotal",
            "discount_total",
            "shipping_total",
            "currency_code",
        ],
    });
    try {
        await (0, lib_1.sendEmail)({
            to: order.email,
            subject: "Thank you for your order",
            react: (0, jsx_runtime_1.jsx)(order_confirmation_1.default, { order: order }),
        });
        res.json({ message: "Email sent!" });
    }
    catch (e) {
        res.json({ message: "Email failed" });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2VtYWlsL29yZGVyLWNvbmZpcm1hdGlvbi9baWRdL3JvdXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLG9CQWtDQzs7QUF0Q0QscURBQW9EO0FBQ3BELDZGQUFvRTtBQUNwRSxtQ0FBc0M7QUFFL0IsS0FBSyxVQUFVLElBQUksQ0FBQyxHQUFrQixFQUFFLEdBQW1CO0lBQ2hFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBRTFCLE1BQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV0RCxNQUFNLEtBQUssR0FBRyxNQUFNLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFO1FBQ2pELFNBQVMsRUFBRTtZQUNULE9BQU87WUFDUCxrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLGlCQUFpQjtZQUNqQixTQUFTO1NBQ1Y7UUFDRCxNQUFNLEVBQUU7WUFDTixPQUFPO1lBQ1AsT0FBTztZQUNQLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGVBQWU7U0FDaEI7S0FDRixDQUFDLENBQUM7SUFFSCxJQUFJLENBQUM7UUFDSCxNQUFNLElBQUEsZUFBUyxFQUFDO1lBQ2QsRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2YsT0FBTyxFQUFFLDBCQUEwQjtZQUNuQyxLQUFLLEVBQUUsdUJBQUMsNEJBQWlCLElBQUMsS0FBSyxFQUFFLEtBQUssR0FBSTtTQUMzQyxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDWCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQztBQUNILENBQUMifQ==