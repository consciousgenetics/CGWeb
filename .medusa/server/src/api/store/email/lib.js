"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = sendEmail;
const resend_1 = require("resend");
const companyName = "munchies";
const email = "munchies@medusajs.dev";
const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
async function sendEmail(payload, options) {
    return await resend.emails.send({
        from: `${companyName} <${email}>`,
        react: null,
        ...payload,
    }, options);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9zdG9yZS9lbWFpbC9saWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFXQSw4QkFZQztBQXJCRCxtQ0FBZ0M7QUFJaEMsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDO0FBQy9CLE1BQU0sS0FBSyxHQUFHLHVCQUF1QixDQUFDO0FBRXRDLE1BQU0sTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFL0MsS0FBSyxVQUFVLFNBQVMsQ0FDN0IsT0FBeUMsRUFDekMsT0FBbUM7SUFFbkMsT0FBTyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUM3QjtRQUNFLElBQUksRUFBRSxHQUFHLFdBQVcsS0FBSyxLQUFLLEdBQUc7UUFDakMsS0FBSyxFQUFFLElBQUk7UUFDWCxHQUFHLE9BQU87S0FDWCxFQUNELE9BQU8sQ0FDUixDQUFDO0FBQ0osQ0FBQyJ9