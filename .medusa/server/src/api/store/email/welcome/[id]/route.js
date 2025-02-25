"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("@medusajs/framework/utils");
const welcome_1 = __importDefault(require("../../_templates/welcome"));
const lib_1 = require("../../lib");
async function POST(req, res) {
    const { id } = req.params;
    const customerService = req.scope.resolve(utils_1.Modules.CUSTOMER);
    const productService = req.scope.resolve(utils_1.Modules.PRODUCT);
    const customer = await customerService.retrieveCustomer(id);
    const products = await productService.listProducts({}, { take: 2 });
    try {
        await (0, lib_1.sendEmail)({
            to: customer.email,
            subject: "Welcome to our newsletter!",
            react: (0, jsx_runtime_1.jsx)(welcome_1.default, { products: products }),
        });
        res.json({ message: "Email sent!" });
    }
    catch (e) {
        res.json({ message: "Email failed" });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2VtYWlsL3dlbGNvbWUvW2lkXS9yb3V0ZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxvQkFvQkM7O0FBeEJELHFEQUFvRDtBQUNwRCx1RUFBK0M7QUFDL0MsbUNBQXNDO0FBRS9CLEtBQUssVUFBVSxJQUFJLENBQUMsR0FBa0IsRUFBRSxHQUFtQjtJQUNoRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUUxQixNQUFNLGVBQWUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUQsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTFELE1BQU0sUUFBUSxHQUFHLE1BQU0sZUFBZSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVELE1BQU0sUUFBUSxHQUFHLE1BQU0sY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVwRSxJQUFJLENBQUM7UUFDSCxNQUFNLElBQUEsZUFBUyxFQUFDO1lBQ2QsRUFBRSxFQUFFLFFBQVEsQ0FBQyxLQUFLO1lBQ2xCLE9BQU8sRUFBRSw0QkFBNEI7WUFDckMsS0FBSyxFQUFFLHVCQUFDLGlCQUFPLElBQUMsUUFBUSxFQUFFLFFBQVEsR0FBSTtTQUN2QyxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDWCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQztBQUNILENBQUMifQ==