"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Welcome;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const email_body_1 = __importDefault(require("./components/email-body"));
const layout_1 = __importDefault(require("./components/layout"));
const products_list_1 = __importDefault(require("./components/products-list"));
const style_1 = require("./components/style");
function Welcome({ products }) {
    return ((0, jsx_runtime_1.jsx)(layout_1.default, { preview: "Welcome to Munchies!", children: (0, jsx_runtime_1.jsxs)(components_1.Section, { className: "w-full px-5 my-20", align: "left", children: [(0, jsx_runtime_1.jsx)(components_1.Img, { src: "https://cdn.sanity.io/images/1wtf7iqx/production/0ebbdf446bb2d4e4287c722fb82fe385d13d6dea-2400x1260.png", className: "rounded-lg mb-8 w-full max-w-[560px]" }), (0, jsx_runtime_1.jsx)(components_1.Heading, { className: "pb-3", style: style_1.title, children: "Get ready for some sweet! \uD83C\uDF6A" }), (0, jsx_runtime_1.jsx)(email_body_1.default, { paragraphs: [
                        "Welcome to the Munchies family – your new go-to spot for the most delicious, freshly baked cookies!  We’re thrilled to have you here and can’t wait to satisfy your sweet tooth with our mouthwatering treats.",
                        "What’s Baking at Munchies?",
                        ". Freshly Baked Goodness: All our cookies are made fresh, with love, using the finest ingredients.",
                        ". Exclusive Offers: Be the first to know about our seasonal specials and flash cookie sales",
                        ". Cookie Lover Perks: Sign up for rewards, and get cookies on your birthday!",
                        "Let’s make your cookie dreams come true!",
                    ], signature: true }), (0, jsx_runtime_1.jsx)(products_list_1.default, { products: products })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3RvcmUvZW1haWwvX3RlbXBsYXRlcy93ZWxjb21lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQU9BLDBCQTBCQzs7QUFoQ0Qsd0RBQWdFO0FBQ2hFLHlFQUFnRDtBQUNoRCxpRUFBeUM7QUFDekMsK0VBQXNEO0FBQ3RELDhDQUEyQztBQUUzQyxTQUF3QixPQUFPLENBQUMsRUFBRSxRQUFRLEVBQThCO0lBQ3RFLE9BQU8sQ0FDTCx1QkFBQyxnQkFBTSxJQUFDLE9BQU8sRUFBQyxzQkFBc0IsWUFDcEMsd0JBQUMsb0JBQU8sSUFBQyxTQUFTLEVBQUMsbUJBQW1CLEVBQUMsS0FBSyxFQUFDLE1BQU0sYUFDakQsdUJBQUMsZ0JBQUcsSUFDRixHQUFHLEVBQUMseUdBQXlHLEVBQzdHLFNBQVMsRUFBQyxzQ0FBc0MsR0FDaEQsRUFDRix1QkFBQyxvQkFBTyxJQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLGFBQUssdURBRTVCLEVBQ1YsdUJBQUMsb0JBQVMsSUFDUixVQUFVLEVBQUU7d0JBQ1YsZ05BQWdOO3dCQUNoTiw0QkFBNEI7d0JBQzVCLG9HQUFvRzt3QkFDcEcsNkZBQTZGO3dCQUM3Riw4RUFBOEU7d0JBQzlFLDBDQUEwQztxQkFDM0MsRUFDRCxTQUFTLFNBQ1QsRUFDRix1QkFBQyx1QkFBWSxJQUFDLFFBQVEsRUFBRSxRQUFRLEdBQUksSUFDNUIsR0FDSCxDQUNWLENBQUM7QUFDSixDQUFDIn0=