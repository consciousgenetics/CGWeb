"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Layout;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const footer_1 = __importDefault(require("./footer"));
const style_1 = require("./style");
function Layout({ children, preview, }) {
    return ((0, jsx_runtime_1.jsxs)(components_1.Section, { children: [(0, jsx_runtime_1.jsxs)(components_1.Head, { children: [(0, jsx_runtime_1.jsx)(components_1.Font, { fontFamily: "Arial", fallbackFontFamily: "Helvetica", fontWeight: 400, fontStyle: "normal" }), (0, jsx_runtime_1.jsx)(components_1.Font, { fontFamily: "Times", fallbackFontFamily: "serif", fontWeight: 400, fontStyle: "normal" })] }), (0, jsx_runtime_1.jsx)(components_1.Preview, { children: preview }), (0, jsx_runtime_1.jsx)(components_1.Tailwind, { config: {
                    theme: {
                        extend: {
                            colors: {
                                background: "#FFF6E6",
                                accent: "#FF5227",
                            },
                        },
                    },
                }, children: (0, jsx_runtime_1.jsx)(components_1.Section, { className: "bg-white", style: style_1.arial_font, children: (0, jsx_runtime_1.jsxs)(components_1.Container, { className: "bg-background h-full w-full max-w-[640px]", children: [(0, jsx_runtime_1.jsx)(components_1.Section, { className: " text-accent", children: children }), (0, jsx_runtime_1.jsx)(footer_1.default, {})] }) }) })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9zdG9yZS9lbWFpbC9fdGVtcGxhdGVzL2NvbXBvbmVudHMvbGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVlBLHlCQTZDQzs7QUF6REQsd0RBT2lDO0FBRWpDLHNEQUE4QjtBQUM5QixtQ0FBcUM7QUFFckMsU0FBd0IsTUFBTSxDQUFDLEVBQzdCLFFBQVEsRUFDUixPQUFPLEdBSVI7SUFDQyxPQUFPLENBQ0wsd0JBQUMsb0JBQU8sZUFDTix3QkFBQyxpQkFBSSxlQUNILHVCQUFDLGlCQUFJLElBQ0gsVUFBVSxFQUFDLE9BQU8sRUFDbEIsa0JBQWtCLEVBQUMsV0FBVyxFQUM5QixVQUFVLEVBQUUsR0FBRyxFQUNmLFNBQVMsRUFBQyxRQUFRLEdBQ2xCLEVBQ0YsdUJBQUMsaUJBQUksSUFDSCxVQUFVLEVBQUMsT0FBTyxFQUNsQixrQkFBa0IsRUFBQyxPQUFPLEVBQzFCLFVBQVUsRUFBRSxHQUFHLEVBQ2YsU0FBUyxFQUFDLFFBQVEsR0FDbEIsSUFDRyxFQUNQLHVCQUFDLG9CQUFPLGNBQUUsT0FBTyxHQUFXLEVBQzVCLHVCQUFDLHFCQUFRLElBQ1AsTUFBTSxFQUFFO29CQUNOLEtBQUssRUFBRTt3QkFDTCxNQUFNLEVBQUU7NEJBQ04sTUFBTSxFQUFFO2dDQUNOLFVBQVUsRUFBRSxTQUFTO2dDQUNyQixNQUFNLEVBQUUsU0FBUzs2QkFDbEI7eUJBQ0Y7cUJBQ0Y7aUJBQ0YsWUFFRCx1QkFBQyxvQkFBTyxJQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFFLGtCQUFVLFlBQzdDLHdCQUFDLHNCQUFTLElBQUMsU0FBUyxFQUFDLDJDQUEyQyxhQUM5RCx1QkFBQyxvQkFBTyxJQUFDLFNBQVMsRUFBQyxjQUFjLFlBQUUsUUFBUSxHQUFXLEVBQ3RELHVCQUFDLGdCQUFNLEtBQUcsSUFDQSxHQUNKLEdBQ0QsSUFDSCxDQUNYLENBQUM7QUFDSixDQUFDIn0=