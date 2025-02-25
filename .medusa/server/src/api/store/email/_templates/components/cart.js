"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Cart;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const utils_1 = require("../utils");
const style_1 = require("./style");
function Cart({ details, items, currency_code, }) {
    return ((0, jsx_runtime_1.jsxs)(components_1.Section, { className: "mb-10", children: [(0, jsx_runtime_1.jsx)(components_1.Section, { className: "mb-4", children: (0, jsx_runtime_1.jsx)(components_1.Text, { className: "w-fit uppercase font-bold", style: style_1.bodySmall, children: "Order summary" }) }), items.map((item) => {
                return ((0, jsx_runtime_1.jsx)(CartLine, { line: item, currency_code: currency_code }, item.id));
            }), details && ((0, jsx_runtime_1.jsxs)(components_1.Section, { className: "max-w-[365px]", align: "right", children: [(0, jsx_runtime_1.jsx)(CheckoutLine, { title: "Subtotal", price: details.subtotal }), (0, jsx_runtime_1.jsx)(CheckoutLine, { title: "Order discount", price: details.discount }), (0, jsx_runtime_1.jsx)(CheckoutLine, { title: "Shipping", price: details.shipping }), (0, jsx_runtime_1.jsx)(CheckoutLine, { title: "Taxes", price: details.taxes }), (0, jsx_runtime_1.jsx)(components_1.Hr, { className: "h-px bg-accent mb-4" }), (0, jsx_runtime_1.jsx)(CheckoutLine, { title: "Total", price: details.total })] }))] }));
}
function CartLine({ line, currency_code, }) {
    const price = (0, utils_1.convertToLocale)({
        amount: (line.unit_price || 0) * (line.quantity || 1),
        currency_code,
    });
    return ((0, jsx_runtime_1.jsx)(components_1.Section, { className: "mb-3", children: (0, jsx_runtime_1.jsxs)(components_1.Row, { children: [(0, jsx_runtime_1.jsx)(components_1.Column, { className: "mx-0 w-[100px] h-[100px]  ", children: (0, jsx_runtime_1.jsx)(components_1.Section, { className: "w-fit rounded-lg", children: (0, jsx_runtime_1.jsx)(components_1.Img, { src: line.thumbnail, width: "100", height: "100px", style: { border: "1px solid" }, alt: "Product image", className: "rounded-lg border-accent" }) }) }), (0, jsx_runtime_1.jsxs)(components_1.Column, { className: "pl-2 align-top ", children: [(0, jsx_runtime_1.jsx)(components_1.Text, { className: "w-full font-bold pb-1 leading-[130%]", style: style_1.bodySmall, children: line.product_title }), (0, jsx_runtime_1.jsx)(components_1.Text, { className: "w-full text-inactive leading-[120%]", style: style_1.bodySmall, children: line.variant_title })] }), (0, jsx_runtime_1.jsx)(components_1.Column, { align: "right", className: "align-top", children: (0, jsx_runtime_1.jsx)(components_1.Text, { className: "font-bold leading-[140%]", style: style_1.bodySmall, children: price }) })] }) }));
}
function CheckoutLine({ title, subtitle, price, }) {
    return ((0, jsx_runtime_1.jsxs)(components_1.Row, { className: "mb-3", children: [(0, jsx_runtime_1.jsxs)(components_1.Column, { className: "w-full", children: [(0, jsx_runtime_1.jsx)(components_1.Text, { className: "font-bold leading-[150%] pb-1", style: style_1.bodySmall, children: title }), subtitle && ((0, jsx_runtime_1.jsx)(components_1.Text, { className: "leading-[150%]", style: style_1.bodyXSmall, children: subtitle }))] }), (0, jsx_runtime_1.jsx)(components_1.Column, { className: "align-right w-fit whitespace-nowrap align-top", children: (0, jsx_runtime_1.jsx)(components_1.Text, { className: "font-bold leading-[150%]", style: style_1.bodySmall, children: price }) })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3RvcmUvZW1haWwvX3RlbXBsYXRlcy9jb21wb25lbnRzL2NhcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsdUJBd0NDOztBQTVDRCx3REFBOEU7QUFDOUUsb0NBQTJDO0FBQzNDLG1DQUFnRDtBQUVoRCxTQUF3QixJQUFJLENBQUMsRUFDM0IsT0FBTyxFQUNQLEtBQUssRUFDTCxhQUFhLEdBWWQ7SUFDQyxPQUFPLENBQ0wsd0JBQUMsb0JBQU8sSUFBQyxTQUFTLEVBQUMsT0FBTyxhQUN4Qix1QkFBQyxvQkFBTyxJQUFDLFNBQVMsRUFBQyxNQUFNLFlBQ3ZCLHVCQUFDLGlCQUFJLElBQUMsU0FBUyxFQUFDLDJCQUEyQixFQUFDLEtBQUssRUFBRSxpQkFBUyw4QkFFckQsR0FDQyxFQUNULEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDbEIsT0FBTyxDQUNMLHVCQUFDLFFBQVEsSUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFnQixhQUFhLEVBQUUsYUFBYSxJQUFyQyxJQUFJLENBQUMsRUFBRSxDQUFrQyxDQUNyRSxDQUFDO1lBQ0osQ0FBQyxDQUFDLEVBQ0QsT0FBTyxJQUFJLENBQ1Ysd0JBQUMsb0JBQU8sSUFBQyxTQUFTLEVBQUMsZUFBZSxFQUFDLEtBQUssRUFBQyxPQUFPLGFBQzlDLHVCQUFDLFlBQVksSUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsUUFBUSxHQUFJLEVBQzFELHVCQUFDLFlBQVksSUFBQyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEdBQUksRUFDaEUsdUJBQUMsWUFBWSxJQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEdBQUksRUFDMUQsdUJBQUMsWUFB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