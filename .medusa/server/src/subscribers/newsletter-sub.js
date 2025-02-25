"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = subscribeNewsletterHandler;
const utils_1 = require("@medusajs/framework/utils");
const resend_1 = require("resend");
async function subscribeNewsletterHandler({ event, container, }) {
    const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
    try {
        const customerModuleService = container.resolve(utils_1.Modules.CUSTOMER);
        const customer = await customerModuleService.retrieveCustomer(event.data.id);
        // const audiences = await resend.audiences.list();
        // const audienceId = audiences.data?.data?.[0].id;
        // if (!audienceId) throw new Error("No audience found");
        // const { data, error } = await resend.contacts.create({
        //   audienceId,
        //   email: customer.email,
        // });
        // if (error) throw new Error("Error subscribing email");
        const response = await fetch("https://munchies.medusajs.app/store/email/welcome/" + event.data.id, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-publishable-api-key": process.env.MEDUSA_PUBLISHABLE_KEY,
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }
    catch (error) {
        console.error("Error:", error);
    }
}
exports.config = {
    event: ["customer.created", "customer.updated"],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci1zdWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3Vic2NyaWJlcnMvbmV3c2xldHRlci1zdWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsNkNBMENDO0FBN0NELHFEQUFvRDtBQUNwRCxtQ0FBZ0M7QUFFakIsS0FBSyxVQUFVLDBCQUEwQixDQUFDLEVBQ3ZELEtBQUssRUFDTCxTQUFTLEdBQ3NCO0lBQy9CLE1BQU0sTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFdEQsSUFBSSxDQUFDO1FBQ0gsTUFBTSxxQkFBcUIsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVsRSxNQUFNLFFBQVEsR0FBRyxNQUFNLHFCQUFxQixDQUFDLGdCQUFnQixDQUMzRCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDZCxDQUFDO1FBRUYsbURBQW1EO1FBRW5ELG1EQUFtRDtRQUVuRCx5REFBeUQ7UUFFekQseURBQXlEO1FBQ3pELGdCQUFnQjtRQUNoQiwyQkFBMkI7UUFDM0IsTUFBTTtRQUVOLHlEQUF5RDtRQUV6RCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FDMUIsb0RBQW9ELEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQ3BFO1lBQ0UsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0I7YUFDNUQ7U0FDRixDQUNGLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzVELENBQUM7SUFDSCxDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7QUFDSCxDQUFDO0FBRVksUUFBQSxNQUFNLEdBQXFCO0lBQ3RDLEtBQUssRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDO0NBQ2hELENBQUMifQ==