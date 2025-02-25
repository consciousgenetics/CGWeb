"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = OrderConfirmation;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const cart_1 = __importDefault(require("./components/cart"));
const email_body_1 = __importDefault(require("./components/email-body"));
const layout_1 = __importDefault(require("./components/layout"));
const shipping_address_1 = __importDefault(require("./components/shipping-address"));
const style_1 = require("./components/style");
const utils_1 = require("./utils");
function OrderConfirmation({ order }) {
    const convertMoney = (amount) => {
        return (0, utils_1.convertToLocale)({
            // @ts-ignore
            amount,
            currency_code: order.currency_code,
        });
    };
    return ((0, jsx_runtime_1.jsx)(layout_1.default, { preview: "Order confirmation", children: (0, jsx_runtime_1.jsxs)(components_1.Section, { className: "w-full px-5 mt-5 mb-12", align: "left", children: [(0, jsx_runtime_1.jsx)(components_1.Img, { className: "max-w-[291px] mb-20", src: "https://cdn.sanity.io/images/1wtf7iqx/production/e04b80a29759293982d74afcde82a169505a3aaa-1166x112.png" }), (0, jsx_runtime_1.jsx)(components_1.Heading, { className: "pb-3", style: style_1.title, children: "Thank you for your order!" }), (0, jsx_runtime_1.jsx)(email_body_1.default, { paragraphs: [
                        "Thank you so much for your recent order with us! We're excited to let you know that we've received your order and it's now being processed.",
                    ] }), (0, jsx_runtime_1.jsx)(cart_1.default, { currency_code: order.currency_code, items: order.items, date: new Date(order.created_at).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                    }), details: {
                        subtotal: convertMoney(order.item_subtotal),
                        discount: convertMoney(order.discount_total),
                        shipping: convertMoney(order.shipping_total),
                        taxes: convertMoney(order.tax_total),
                        total: convertMoney(order.total),
                    } }), (0, jsx_runtime_1.jsx)(shipping_address_1.default, { method: order.shipping_methods?.[0]?.name, shippingAddress: order.shipping_address, billingAddress: order.billing_address })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9zdG9yZS9lbWFpbC9fdGVtcGxhdGVzL29yZGVyLWNvbmZpcm1hdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQSxvQ0FnREM7O0FBeERELHdEQUFnRTtBQUNoRSw2REFBcUM7QUFDckMseUVBQWdEO0FBQ2hELGlFQUF5QztBQUN6QyxxRkFBZ0U7QUFDaEUsOENBQTJDO0FBQzNDLG1DQUEwQztBQUUxQyxTQUF3QixpQkFBaUIsQ0FBQyxFQUFFLEtBQUssRUFBdUI7SUFDdEUsTUFBTSxZQUFZLEdBQUcsQ0FBQyxNQUFzQixFQUFFLEVBQUU7UUFDOUMsT0FBTyxJQUFBLHVCQUFlLEVBQUM7WUFDckIsYUFBYTtZQUNiLE1BQU07WUFDTixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNMLHVCQUFDLGdCQUFNLElBQUMsT0FBTyxFQUFDLG9CQUFvQixZQUNsQyx3QkFBQyxvQkFBTyxJQUFDLFNBQVMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsTUFBTSxhQUN0RCx1QkFBQyxnQkFBRyxJQUNGLFNBQVMsRUFBQyxxQkFBcUIsRUFDL0IsR0FBRyxFQUFDLHdHQUF3RyxHQUM1RyxFQUNGLHVCQUFDLG9CQUFPLElBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUUsYUFBSywwQ0FFNUIsRUFDVix1QkFBQyxvQkFBUyxJQUNSLFVBQVUsRUFBRTt3QkFDViw2SUFBNkk7cUJBQzlJLEdBQ0QsRUFDRix1QkFBQyxjQUFJLElBQ0gsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQ2xDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUNsQixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRTt3QkFDM0QsS0FBSyxFQUFFLE1BQU07d0JBQ2IsR0FBRyxFQUFFLFNBQVM7d0JBQ2QsSUFBSSxFQUFFLFNBQVM7cUJBQ2hCLENBQUMsRUFDRixPQUFPLEVBQUU7d0JBQ1AsUUFBUSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO3dCQUMzQyxRQUFRLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7d0JBQzVDLFFBQVEsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQzt3QkFDNUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO3dCQUNwQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7cUJBQ2pDLEdBQ0QsRUFDRix1QkFBQywwQkFBbUIsSUFDbEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFDekMsZUFBZSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsRUFDdkMsY0FBYyxFQUFFLEtBQUssQ0FBQyxlQUFlLEdBQ3JDLElBQ00sR0FDSCxDQUNWLENBQUM7QUFDSixDQUFDIn0=