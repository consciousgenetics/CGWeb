"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const subscribeCustomerToNewsletter = (0, workflows_sdk_1.createStep)("subscribe-customer-to-newsletter", async (input, { container }) => {
    const customerModuleService = container.resolve(utils_1.Modules.CUSTOMER);
    let customer = await customerModuleService
        .listCustomers({ email: input.email }, { select: ["id", "metadata"] })
        .then((customers) => (customers.length > 0 ? customers[0] : null));
    const metadata = { newsletter: true };
    let response;
    if (!customer) {
        customer = await customerModuleService.createCustomers({
            ...input,
            metadata: {
                ...input.metadata,
                ...metadata,
            },
        });
        response = {
            id: customer.id,
            compensate: "created",
        };
    }
    else if (customer.metadata?.newsletter) {
        response = {
            id: customer.id,
            compensate: "nothing",
        };
    }
    else {
        await customerModuleService.updateCustomers(customer.id, {
            metadata: { ...customer.metadata, ...metadata },
        });
        response = {
            id: customer.id,
            compensate: "updated",
        };
    }
    return new workflows_sdk_1.StepResponse(response);
}, async (input, { container }) => {
    const customerModuleService = container.resolve(utils_1.Modules.CUSTOMER);
    if (input.compensate === "nothing") {
        return;
    }
    if (input.compensate === "created") {
        await customerModuleService.deleteCustomers(input.id);
        return;
    }
    if (input.compensate === "updated") {
        const customer = await customerModuleService.retrieveCustomer(input.id);
        await customerModuleService.updateCustomers(input.id, {
            metadata: {
                ...customer.metadata,
                newsletter: false,
            },
        });
    }
});
const subscribeToNewsletterWorkflow = (0, workflows_sdk_1.createWorkflow)("subscribe-to-newsletter", function (input) {
    const medusaCustomerResponse = subscribeCustomerToNewsletter(input);
    if (medusaCustomerResponse.compensate !== "nothing") {
        (0, core_flows_1.emitEventStep)({
            eventName: medusaCustomerResponse.compensate === "created"
                ? "customer.created"
                : "customer.updated",
            data: {
                id: medusaCustomerResponse.id,
            },
        });
    }
    return new workflows_sdk_1.WorkflowResponse(medusaCustomerResponse.id);
});
exports.default = subscribeToNewsletterWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaWJlLXRvLW5ld3NsZXR0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3N1YnNjcmliZS10by1uZXdzbGV0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EscURBQW9EO0FBQ3BELHFFQUsyQztBQUMzQyw0REFBNEQ7QUFFNUQsTUFBTSw2QkFBNkIsR0FBRyxJQUFBLDBCQUFVLEVBQzlDLGtDQUFrQyxFQUNsQyxLQUFLLEVBQUUsS0FBd0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDaEQsTUFBTSxxQkFBcUIsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVsRSxJQUFJLFFBQVEsR0FBRyxNQUFNLHFCQUFxQjtTQUN2QyxhQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUM7U0FDckUsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFckUsTUFBTSxRQUFRLEdBQWlCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDO0lBT3BELElBQUksUUFBZ0MsQ0FBQztJQUVyQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDZCxRQUFRLEdBQUcsTUFBTSxxQkFBcUIsQ0FBQyxlQUFlLENBQUM7WUFDckQsR0FBRyxLQUFLO1lBQ1IsUUFBUSxFQUFFO2dCQUNSLEdBQUcsS0FBSyxDQUFDLFFBQVE7Z0JBQ2pCLEdBQUcsUUFBUTthQUNaO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsUUFBUSxHQUFHO1lB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