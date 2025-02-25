"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CtaButton = CtaButton;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const style_1 = require("./style");
function CtaButton({ href, label }) {
    return ((0, jsx_runtime_1.jsx)(components_1.Button, { className: "text-center my-6 border-[1.5px] border-black mx-auto w-full rounded-full py-[6px] text-accent text-[32px] leading-[150%]", style: {
            border: "1.5px solid",
            ...style_1.arial_font,
        }, href: href, children: label }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9zdG9yZS9lbWFpbC9fdGVtcGxhdGVzL2NvbXBvbmVudHMvYnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDhCQWFDOztBQWhCRCx3REFBaUQ7QUFDakQsbUNBQXFDO0FBRXJDLFNBQWdCLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQW1DO0lBQ3hFLE9BQU8sQ0FDTCx1QkFBQyxtQkFBTSxJQUNMLFNBQVMsRUFBQywwSEFBMEgsRUFDcEksS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFLGFBQWE7WUFDckIsR0FBRyxrQkFBVTtTQUNkLEVBQ0QsSUFBSSxFQUFFLElBQUksWUFFVCxLQUFLLEdBQ0MsQ0FDVixDQUFDO0FBQ0osQ0FBQyJ9