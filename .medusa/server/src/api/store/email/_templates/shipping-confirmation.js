"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ShippingConfirmation;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const email_body_1 = __importDefault(require("./components/email-body"));
const layout_1 = __importDefault(require("./components/layout"));
const style_1 = require("./components/style");
function ShippingConfirmation() {
    return ((0, jsx_runtime_1.jsx)(layout_1.default, { preview: "Shipping confirmation", children: (0, jsx_runtime_1.jsxs)(components_1.Section, { className: "w-full max-w-[565px] mb-16 px-5", align: "left", children: [(0, jsx_runtime_1.jsx)(components_1.Img, { className: "max-w-[291px]", src: "https://cdn.sanity.io/images/1wtf7iqx/production/e04b80a29759293982d74afcde82a169505a3aaa-1166x112.png" }), (0, jsx_runtime_1.jsx)(components_1.Heading, { className: "mb-3 mt-16", style: style_1.title, children: "Your order is on its way!" }), (0, jsx_runtime_1.jsx)(email_body_1.default, { paragraphs: [
                        "Great news! Your order [Order Number] has been shipped and is on its way to you.",
                        "If you have any questions about your delivery, please don't hesitate to contact us at [Customer Support Email] or [Customer Support Phone Number]. We're always happy to assist!",
                        "We hope you're as excited as we are for your purchase to arrive. Thank you for shopping with Munchies!",
                    ], signature: true })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctY29uZmlybWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9zdG9yZS9lbWFpbC9fdGVtcGxhdGVzL3NoaXBwaW5nLWNvbmZpcm1hdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSx1Q0FzQkM7O0FBM0JELHdEQUFnRTtBQUNoRSx5RUFBZ0Q7QUFDaEQsaUVBQXlDO0FBQ3pDLDhDQUEyQztBQUUzQyxTQUF3QixvQkFBb0I7SUFDMUMsT0FBTyxDQUNMLHVCQUFDLGdCQUFNLElBQUMsT0FBTyxFQUFDLHVCQUF1QixZQUNyQyx3QkFBQyxvQkFBTyxJQUFDLFNBQVMsRUFBQyxpQ0FBaUMsRUFBQyxLQUFLLEVBQUMsTUFBTSxhQUMvRCx1QkFBQyxnQkFBRyxJQUNGLFNBQVMsRUFBQyxlQUFlLEVBQ3pCLEdBQUcsRUFBQyx3R0FBd0csR0FDNUcsRUFDRix1QkFBQyxvQkFBTyxJQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFFLGFBQUssMENBRWxDLEVBQ1YsdUJBQUMsb0JBQVMsSUFDUixVQUFVLEVBQUU7d0JBQ1Ysa0ZBQWtGO3dCQUNsRixrTEFBa0w7d0JBQ2xMLHdHQUF3RztxQkFDekcsRUFDRCxTQUFTLFNBQ1QsSUFDTSxHQUNILENBQ1YsQ0FBQztBQUNKLENBQUMifQ==