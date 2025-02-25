"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EmailBody;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const style_1 = require("./style");
function EmailBody({ firstName, paragraphs, signature, }) {
    const greeting = firstName ? `Hi ${firstName},` : "Hi,";
    return ((0, jsx_runtime_1.jsxs)(components_1.Text, { className: "mb-[50px]", style: style_1.body, children: [greeting, " ", (0, jsx_runtime_1.jsx)("br", {}), paragraphs.map((paragraph, index) => ((0, jsx_runtime_1.jsxs)("span", { style: style_1.body, children: [paragraph, (0, jsx_runtime_1.jsx)("br", {}), " ", (0, jsx_runtime_1.jsx)("br", {})] }, index))), signature && ((0, jsx_runtime_1.jsxs)("span", { style: style_1.body, children: ["Warm regards,", (0, jsx_runtime_1.jsx)("br", {}), " The Munchies Team"] }))] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtYm9keS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvc3RvcmUvZW1haWwvX3RlbXBsYXRlcy9jb21wb25lbnRzL2VtYWlsLWJvZHkudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBU0EsNEJBd0JDOztBQWpDRCx3REFBK0M7QUFDL0MsbUNBQStCO0FBUS9CLFNBQXdCLFNBQVMsQ0FBQyxFQUNoQyxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsR0FDTTtJQUNmLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBRXhELE9BQU8sQ0FDTCx3QkFBQyxpQkFBSSxJQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFFLFlBQUksYUFDcEMsUUFBUSxPQUFFLGdDQUFNLEVBQ2hCLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUNwQyxrQ0FBa0IsS0FBSyxFQUFFLFlBQUksYUFDMUIsU0FBUyxFQUNWLGdDQUFNLE9BQUMsZ0NBQU0sS0FGSixLQUFLLENBR1QsQ0FDUixDQUFDLEVBQ0QsU0FBUyxJQUFJLENBQ1osa0NBQU0sS0FBSyxFQUFFLFlBQUksOEJBRWYsZ0NBQU0sMEJBQ0QsQ0FDUixJQUNJLENBQ1IsQ0FBQztBQUNKLENBQUMifQ==