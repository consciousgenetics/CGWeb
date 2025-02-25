"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const validators_1 = require("@medusajs/medusa/api/admin/customers/validators");
const subscribe_to_newsletter_1 = __importDefault(require("../../../workflows/subscribe-to-newsletter"));
async function POST(req, res) {
    const input = validators_1.CreateCustomer.parse(req.body);
    await (0, subscribe_to_newsletter_1.default)(req.scope).run({
        input,
    });
    res.sendStatus(200);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3N1YnNjcmliZS10by1uZXdzbGV0dGVyL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTUEsb0JBV0M7QUFoQkQsZ0ZBQWlGO0FBQ2pGLHlHQUVvRDtBQUU3QyxLQUFLLFVBQVUsSUFBSSxDQUN4QixHQUFpQyxFQUNqQyxHQUFtQjtJQUVuQixNQUFNLEtBQUssR0FBRywyQkFBYyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFN0MsTUFBTSxJQUFBLGlDQUE2QixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDakQsS0FBSztLQUNOLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEIsQ0FBQyJ9