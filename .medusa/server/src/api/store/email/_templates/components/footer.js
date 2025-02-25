"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Footer;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const style_1 = require("./style");
const getYear = () => {
    const date = new Date();
    return date.getFullYear();
};
function Footer() {
    const year = getYear();
    return ((0, jsx_runtime_1.jsx)(components_1.Section, { className: "bg-accent text-background", children: (0, jsx_runtime_1.jsxs)(components_1.Tailwind, { config: {
                theme: {
                    extend: {
                        colors: {
                            background: "#FFF6E6",
                            accent: "#FF5227",
                        },
                    },
                },
            }, children: [(0, jsx_runtime_1.jsx)(components_1.Section, { className: "mx-auto my-10 w-fit text-background ", children: (0, jsx_runtime_1.jsxs)(components_1.Row, { children: [(0, jsx_runtime_1.jsx)(components_1.Column, { className: "pr-12", align: "center", children: (0, jsx_runtime_1.jsx)(components_1.Link, { href: "/", className: "text-background uppercase", style: style_1.footer, children: "INSTAGRAM" }) }), (0, jsx_runtime_1.jsx)(components_1.Column, { className: "pr-12", align: "center", children: (0, jsx_runtime_1.jsx)(components_1.Link, { href: "/", className: "text-background uppercase", style: style_1.footer, children: "FACEBOOK" }) }), (0, jsx_runtime_1.jsx)(components_1.Column, { className: "pr-0", align: "center", children: (0, jsx_runtime_1.jsx)(components_1.Link, { href: "/", className: "text-background uppercase", style: style_1.footer, children: "LINKEDIN" }) })] }) }), (0, jsx_runtime_1.jsx)(components_1.Section, { className: "text-center", children: (0, jsx_runtime_1.jsxs)(components_1.Text, { style: style_1.footer, className: "pb-5", children: ["\u00A9 ", year, " MUNCHIES"] }) })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9zdG9yZS9lbWFpbC9fdGVtcGxhdGVzL2NvbXBvbmVudHMvZm9vdGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWNBLHlCQTBEQzs7QUF4RUQsd0RBT2lDO0FBQ2pDLG1DQUFpQztBQUVqQyxNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUU7SUFDbkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM1QixDQUFDLENBQUM7QUFDRixTQUF3QixNQUFNO0lBQzVCLE1BQU0sSUFBSSxHQUFHLE9BQU8sRUFBRSxDQUFDO0lBRXZCLE9BQU8sQ0FDTCx1QkFBQyxvQkFBTyxJQUFDLFNBQVMsRUFBQywyQkFBMkIsWUFDNUMsd0JBQUMscUJBQVEsSUFDUCxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFO29CQUNMLE1BQU0sRUFBRTt3QkFDTixNQUFNLEVBQUU7NEJBQ04sVUFBVSxFQUFFLFNBQVM7NEJBQ3JCLE1BQU0sRUFBRSxTQUFTO3lCQUNsQjtxQkFDRjtpQkFDRjthQUNGLGFBRUQsdUJBQUMsb0JBQU8sSUFBQyxTQUFTLEVBQUMsc0NBQXNDLFlBQ3ZELHdCQUFDLGdCQUFHLGVBQ0YsdUJBQUMsbUJBQU0sSUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxRQUFRLFlBQ3RDLHVCQUFDLGlCQUFJLElBQ0gsSUFBSSxFQUFDLEdBQUcsRUFDUixTQUFTLEVBQUMsMkJBQTJCLEVBQ3JDLEtBQUssRUFBRSxjQUFNLDBCQUdSLEdBQ0EsRUFFVCx1QkFBQyxtQkFBTSxJQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLFFBQVEsWUFDdEMsdUJBQUMsaUJBQUksSUFDSCxJQUFJLEVBQUMsR0FBRyxFQUNSLFNBQVMsRUFBQywyQkFBMkIsRUFDckMsS0FBSyxFQUFFLGNBQU0seUJBR1IsR0FDQSxFQUNULHVCQUFDLG1CQUFNLElBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsUUFBUSxZQUNyQyx1QkFBQyxpQkFBSSxJQUNILElBQUksRUFBQyxHQUFHLEVBQ1IsU0FBUyxFQUFDLDJCQUEyQixFQUNyQyxLQUFLLEVBQUUsY0FBTSx5QkFHUixHQUNBLElBQ0wsR0FDRSxFQUVWLHVCQUFDLG9CQUFPLElBQUMsU0FBUyxFQUFDLGFBQWEsWUFDOUIsd0JBQUMsaUJBQUksSUFBQyxLQUFLLEVBQUUsY0FBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLHdCQUNoQyxJQUFJLGlCQUNGLEdBQ0MsSUFDRCxHQUNILENBQ1gsQ0FBQztBQUNKLENBQUMifQ==