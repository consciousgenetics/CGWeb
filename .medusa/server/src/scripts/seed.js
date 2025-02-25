"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = seedDemoData;
const core_flows_1 = require("@medusajs/medusa/core-flows");
const utils_1 = require("@medusajs/framework/utils");
async function seedDemoData({ container }) {
    const logger = container.resolve(utils_1.ContainerRegistrationKeys.LOGGER);
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    const fulfillmentModuleService = container.resolve(utils_1.Modules.FULFILLMENT);
    const salesChannelModuleService = container.resolve(utils_1.Modules.SALES_CHANNEL);
    const storeModuleService = container.resolve(utils_1.Modules.STORE);
    const countries = ["gb", "de", "dk", "se", "fr", "es", "it"];
    logger.info("Seeding store data...");
    const [store] = await storeModuleService.listStores();
    let defaultSalesChannel = await salesChannelModuleService.listSalesChannels({
        name: "Default Sales Channel",
    });
    if (!defaultSalesChannel.length) {
        // create the default sales channel
        const { result: salesChannelResult } = await (0, core_flows_1.createSalesChannelsWorkflow)(container).run({
            input: {
                salesChannelsData: [
                    {
                        name: "Default Sales Channel",
                    },
                ],
            },
        });
        defaultSalesChannel = salesChannelResult;
    }
    await (0, core_flows_1.updateStoresWorkflow)(container).run({
        input: {
            selector: { id: store.id },
            update: {
                supported_currencies: [
                    {
                        currency_code: "eur",
                        is_default: true,
                    },
                    {
                        currency_code: "usd",
                    },
                ],
                default_sales_channel_id: defaultSalesChannel[0].id,
            },
        },
    });
    logger.info("Seeding region data...");
    const { result: regionResult } = await (0, core_flows_1.createRegionsWorkflow)(container).run({
        input: {
            regions: [
                {
                    name: "Europe",
                    currency_code: "eur",
                    countries,
                    payment_providers: ["pp_system_default"],
                },
            ],
        },
    });
    const region = regionResult[0];
    logger.info("Finished seeding regions.");
    logger.info("Seeding tax regions...");
    await (0, core_flows_1.createTaxRegionsWorkflow)(container).run({
        input: countries.map((country_code) => ({
            country_code,
        })),
    });
    logger.info("Finished seeding tax regions.");
    logger.info("Seeding stock location data...");
    const { result: stockLocationResult } = await (0, core_flows_1.createStockLocationsWorkflow)(container).run({
        input: {
            locations: [
                {
                    name: "European Warehouse",
                    address: {
                        city: "Copenhagen",
                        country_code: "DK",
                        address_1: "",
                    },
                },
            ],
        },
    });
    const stockLocation = stockLocationResult[0];
    await remoteLink.create({
        [utils_1.Modules.STOCK_LOCATION]: {
            stock_location_id: stockLocation.id,
        },
        [utils_1.Modules.FULFILLMENT]: {
            fulfillment_provider_id: "manual_manual",
        },
    });
    logger.info("Seeding fulfillment data...");
    const { result: shippingProfileResult } = await (0, core_flows_1.createShippingProfilesWorkflow)(container).run({
        input: {
            data: [
                {
                    name: "Default",
                    type: "default",
                },
            ],
        },
    });
    const shippingProfile = shippingProfileResult[0];
    const fulfillmentSet = await fulfillmentModuleService.createFulfillmentSets({
        name: "European Warehouse delivery",
        type: "shipping",
        service_zones: [
            {
                name: "Europe",
                geo_zones: [
                    {
                        country_code: "gb",
                        type: "country",
                    },
                    {
                        country_code: "de",
                        type: "country",
                    },
                    {
                        country_code: "dk",
                        type: "country",
                    },
                    {
                        country_code: "se",
                        type: "country",
                    },
                    {
                        country_code: "fr",
                        type: "country",
                    },
                    {
                        country_code: "es",
                        type: "country",
                    },
                    {
                        country_code: "it",
                        type: "country",
                    },
                ],
            },
        ],
    });
    await remoteLink.create({
        [utils_1.Modules.STOCK_LOCATION]: {
            stock_location_id: stockLocation.id,
        },
        [utils_1.Modules.FULFILLMENT]: {
            fulfillment_set_id: fulfillmentSet.id,
        },
    });
    await (0, core_flows_1.createShippingOptionsWorkflow)(container).run({
        input: [
            {
                name: "Standard Shipping",
                price_type: "flat",
                provider_id: "manual_manual",
                service_zone_id: fulfillmentSet.service_zones[0].id,
                shipping_profile_id: shippingProfile.id,
                type: {
                    label: "Standard",
                    description: "Ship in 2-3 days.",
                    code: "standard",
                },
                prices: [
                    {
                        currency_code: "usd",
                        amount: 10,
                    },
                    {
                        currency_code: "eur",
                        amount: 10,
                    },
                    {
                        region_id: region.id,
                        amount: 10,
                    },
                ],
                rules: [
                    {
                        attribute: "enabled_in_store",
                        value: '"true"',
                        operator: "eq",
                    },
                    {
                        attribute: "is_return",
                        value: "false",
                        operator: "eq",
                    },
                ],
            },
            {
                name: "Express Shipping",
                price_type: "flat",
                provider_id: "manual_manual",
                service_zone_id: fulfillmentSet.service_zones[0].id,
                shipping_profile_id: shippingProfile.id,
                type: {
                    label: "Express",
                    description: "Ship in 24 hours.",
                    code: "express",
                },
                prices: [
                    {
                        currency_code: "usd",
                        amount: 10,
                    },
                    {
                        currency_code: "eur",
                        amount: 10,
                    },
                    {
                        region_id: region.id,
                        amount: 10,
                    },
                ],
                rules: [
                    {
                        attribute: "enabled_in_store",
                        value: '"true"',
                        operator: "eq",
                    },
                    {
                        attribute: "is_return",
                        value: "false",
                        operator: "eq",
                    },
                ],
            },
        ],
    });
    logger.info("Finished seeding fulfillment data.");
    await (0, core_flows_1.linkSalesChannelsToStockLocationWorkflow)(container).run({
        input: {
            id: stockLocation.id,
            add: [defaultSalesChannel[0].id],
        },
    });
    logger.info("Finished seeding stock location data.");
    logger.info("Seeding publishable API key data...");
    const { result: publishableApiKeyResult } = await (0, core_flows_1.createApiKeysWorkflow)(container).run({
        input: {
            api_keys: [
                {
                    title: "Webshop",
                    type: "publishable",
                    created_by: "",
                },
            ],
        },
    });
    const publishableApiKey = publishableApiKeyResult[0];
    await (0, core_flows_1.linkSalesChannelsToApiKeyWorkflow)(container).run({
        input: {
            id: publishableApiKey.id,
            add: [defaultSalesChannel[0].id],
        },
    });
    logger.info("Finished seeding publishable API key data.");
    logger.info("Seeding product data...");
    const { result: categoryResult } = await (0, core_flows_1.createProductCategoriesWorkflow)(container).run({
        input: {
            product_categories: [
                {
                    name: "Shirts",
                    is_active: true,
                },
                {
                    name: "Sweatshirts",
                    is_active: true,
                },
                {
                    name: "Pants",
                    is_active: true,
                },
                {
                    name: "Merch",
                    is_active: true,
                },
            ],
        },
    });
    await (0, core_flows_1.createProductsWorkflow)(container).run({
        input: {
            products: [
                {
                    title: "Medusa T-Shirt",
                    category_ids: [
                        categoryResult.find((cat) => cat.name === "Shirts").id,
                    ],
                    description: "Reimagine the feeling of a classic T-shirt. With our cotton T-shirts, everyday essentials no longer have to be ordinary.",
                    handle: "t-shirt",
                    weight: 400,
                    status: utils_1.ProductStatus.PUBLISHED,
                    images: [
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",
                        },
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-back.png",
                        },
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-front.png",
                        },
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-back.png",
                        },
                    ],
                    options: [
                        {
                            title: "Size",
                            values: ["S", "M", "L", "XL"],
                        },
                        {
                            title: "Color",
                            values: ["Black", "White"],
                        },
                    ],
                    variants: [
                        {
                            title: "S / Black",
                            sku: "SHIRT-S-BLACK",
                            options: {
                                Size: "S",
                                Color: "Black",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "S / White",
                            sku: "SHIRT-S-WHITE",
                            options: {
                                Size: "S",
                                Color: "White",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "M / Black",
                            sku: "SHIRT-M-BLACK",
                            options: {
                                Size: "M",
                                Color: "Black",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "M / White",
                            sku: "SHIRT-M-WHITE",
                            options: {
                                Size: "M",
                                Color: "White",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "L / Black",
                            sku: "SHIRT-L-BLACK",
                            options: {
                                Size: "L",
                                Color: "Black",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "L / White",
                            sku: "SHIRT-L-WHITE",
                            options: {
                                Size: "L",
                                Color: "White",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "XL / Black",
                            sku: "SHIRT-XL-BLACK",
                            options: {
                                Size: "XL",
                                Color: "Black",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "XL / White",
                            sku: "SHIRT-XL-WHITE",
                            options: {
                                Size: "XL",
                                Color: "White",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                    ],
                    sales_channels: [
                        {
                            id: defaultSalesChannel[0].id,
                        },
                    ],
                },
            ],
        },
    });
    await (0, core_flows_1.createProductsWorkflow)(container).run({
        input: {
            products: [
                {
                    title: "Medusa Sweatshirt",
                    category_ids: [
                        categoryResult.find((cat) => cat.name === "Sweatshirts").id,
                    ],
                    description: "Reimagine the feeling of a classic sweatshirt. With our cotton sweatshirt, everyday essentials no longer have to be ordinary.",
                    handle: "sweatshirt",
                    weight: 400,
                    status: utils_1.ProductStatus.PUBLISHED,
                    images: [
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
                        },
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-back.png",
                        },
                    ],
                    options: [
                        {
                            title: "Size",
                            values: ["S", "M", "L", "XL"],
                        },
                    ],
                    variants: [
                        {
                            title: "S",
                            sku: "SWEATSHIRT-S",
                            options: {
                                Size: "S",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "M",
                            sku: "SWEATSHIRT-M",
                            options: {
                                Size: "M",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "L",
                            sku: "SWEATSHIRT-L",
                            options: {
                                Size: "L",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "XL",
                            sku: "SWEATSHIRT-XL",
                            options: {
                                Size: "XL",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                    ],
                    sales_channels: [
                        {
                            id: defaultSalesChannel[0].id,
                        },
                    ],
                },
            ],
        },
    });
    await (0, core_flows_1.createProductsWorkflow)(container).run({
        input: {
            products: [
                {
                    title: "Medusa Sweatpants",
                    category_ids: [categoryResult.find((cat) => cat.name === "Pants").id],
                    description: "Reimagine the feeling of classic sweatpants. With our cotton sweatpants, everyday essentials no longer have to be ordinary.",
                    handle: "sweatpants",
                    weight: 400,
                    status: utils_1.ProductStatus.PUBLISHED,
                    images: [
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatpants-gray-front.png",
                        },
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatpants-gray-back.png",
                        },
                    ],
                    options: [
                        {
                            title: "Size",
                            values: ["S", "M", "L", "XL"],
                        },
                    ],
                    variants: [
                        {
                            title: "S",
                            sku: "SWEATPANTS-S",
                            options: {
                                Size: "S",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "M",
                            sku: "SWEATPANTS-M",
                            options: {
                                Size: "M",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "L",
                            sku: "SWEATPANTS-L",
                            options: {
                                Size: "L",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "XL",
                            sku: "SWEATPANTS-XL",
                            options: {
                                Size: "XL",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                    ],
                    sales_channels: [
                        {
                            id: defaultSalesChannel[0].id,
                        },
                    ],
                },
            ],
        },
    });
    await (0, core_flows_1.createProductsWorkflow)(container).run({
        input: {
            products: [
                {
                    title: "Medusa Shorts",
                    category_ids: [categoryResult.find((cat) => cat.name === "Merch").id],
                    description: "Reimagine the feeling of classic shorts. With our cotton shorts, everyday essentials no longer have to be ordinary.",
                    handle: "shorts",
                    weight: 400,
                    status: utils_1.ProductStatus.PUBLISHED,
                    images: [
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/shorts-vintage-front.png",
                        },
                        {
                            url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/shorts-vintage-back.png",
                        },
                    ],
                    options: [
                        {
                            title: "Size",
                            values: ["S", "M", "L", "XL"],
                        },
                    ],
                    variants: [
                        {
                            title: "S",
                            sku: "SHORTS-S",
                            options: {
                                Size: "S",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "M",
                            sku: "SHORTS-M",
                            options: {
                                Size: "M",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "L",
                            sku: "SHORTS-L",
                            options: {
                                Size: "L",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                        {
                            title: "XL",
                            sku: "SHORTS-XL",
                            options: {
                                Size: "XL",
                            },
                            manage_inventory: false,
                            prices: [
                                {
                                    amount: 10,
                                    currency_code: "eur",
                                },
                                {
                                    amount: 15,
                                    currency_code: "usd",
                                },
                            ],
                        },
                    ],
                    sales_channels: [
                        {
                            id: defaultSalesChannel[0].id,
                        },
                    ],
                },
            ],
        },
    });
    logger.info("Finished seeding product data.");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zY3JpcHRzL3NlZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUE0QkEsK0JBczBCQztBQWwyQkQsNERBYXFDO0FBU3JDLHFEQUltQztBQUVwQixLQUFLLFVBQVUsWUFBWSxDQUFDLEVBQUUsU0FBUyxFQUFZO0lBQ2hFLE1BQU0sTUFBTSxHQUFXLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0UsTUFBTSxVQUFVLEdBQWUsU0FBUyxDQUFDLE9BQU8sQ0FDOUMsaUNBQXlCLENBQUMsV0FBVyxDQUN0QyxDQUFDO0lBQ0YsTUFBTSx3QkFBd0IsR0FBOEIsU0FBUyxDQUFDLE9BQU8sQ0FDM0UsZUFBTyxDQUFDLFdBQVcsQ0FDcEIsQ0FBQztJQUNGLE1BQU0seUJBQXlCLEdBQzdCLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNDLE1BQU0sa0JBQWtCLEdBQXdCLFNBQVMsQ0FBQyxPQUFPLENBQy9ELGVBQU8sQ0FBQyxLQUFLLENBQ2QsQ0FBQztJQUVGLE1BQU0sU0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFN0QsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RELElBQUksbUJBQW1CLEdBQUcsTUFBTSx5QkFBeUIsQ0FBQyxpQkFBaUIsQ0FBQztRQUMxRSxJQUFJLEVBQUUsdUJBQXVCO0tBQzlCLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQyxtQ0FBbUM7UUFDbkMsTUFBTSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxHQUFHLE1BQU0sSUFBQSx3Q0FBMkIsRUFDdEUsU0FBUyxDQUNWLENBQUMsR0FBRyxDQUFDO1lBQ0osS0FBSyxFQUFFO2dCQUNMLGlCQUFpQixFQUFFO29CQUNqQjt3QkFDRSxJQUFJLEVBQUUsdUJBQXVCO3FCQUM5QjtpQkFDRjthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsbUJBQW1CLEdBQUcsa0JBQWtCLENBQUM7SUFDM0MsQ0FBQztJQUVELE1BQU0sSUFBQSxpQ0FBb0IsRUFBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDeEMsS0FBSyxFQUFFO1lBQ0wsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDMUIsTUFBTSxFQUFFO2dCQUNOLG9CQUFvQixFQUFFO29CQUNwQjt3QkFDRSxhQUFhLEVBQUUsS0FBSzt3QkFDcEIsVUFBVSxFQUFFLElBQUk7cUJBQ2pCO29CQUNEO3dCQUNFLGFBQWEsRUFBRSxLQUFLO3FCQUNyQjtpQkFDRjtnQkFDRCx3QkFBd0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQ3BEO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDdEMsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBRyxNQUFNLElBQUEsa0NBQXFCLEVBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzFFLEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxJQUFJLEVBQUUsUUFBUTtvQkFDZCxhQUFhLEVBQUUsS0FBSztvQkFDcEIsU0FBUztvQkFDVCxpQkFBaUIsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUN6QzthQUNGO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFDSCxNQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBRXpDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUN0QyxNQUFNLElBQUEscUNBQXdCLEVBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzVDLEtBQUssRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLFlBQVk7U0FDYixDQUFDLENBQUM7S0FDSixDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFFN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sRUFBRSxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsR0FBRyxNQUFNLElBQUEseUNBQTRCLEVBQ3hFLFNBQVMsQ0FDVixDQUFDLEdBQUcsQ0FBQztRQUNKLEtBQUssRUFBRTtZQUNMLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxJQUFJLEVBQUUsb0JBQW9CO29CQUMxQixPQUFPLEVBQUU7d0JBQ1AsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLFlBQVksRUFBRSxJQUFJO3dCQUNsQixTQUFTLEVBQUUsRUFBRTtxQkFDZDtpQkFDRjthQUNGO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFDSCxNQUFNLGFBQWEsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU3QyxNQUFNLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDdEIsQ0FBQyxlQUFPLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDeEIsaUJBQWlCLEVBQUUsYUFBYSxDQUFDLEVBQUU7U0FDcEM7UUFDRCxDQUFDLGVBQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNyQix1QkFBdUIsRUFBRSxlQUFlO1NBQ3pDO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQzNDLE1BQU0sRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUUsR0FDckMsTUFBTSxJQUFBLDJDQUE4QixFQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNsRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUU7Z0JBQ0o7b0JBQ0UsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsSUFBSSxFQUFFLFNBQVM7aUJBQ2hCO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUNMLE1BQU0sZUFBZSxHQUFHLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWpELE1BQU0sY0FBYyxHQUFHLE1BQU0sd0JBQXdCLENBQUMscUJBQXFCLENBQUM7UUFDMUUsSUFBSSxFQUFFLDZCQUE2QjtRQUNuQyxJQUFJLEVBQUUsVUFBVTtRQUNoQixhQUFhLEVBQUU7WUFDYjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsWUFBWSxFQUFFLElBQUk7d0JBQ2xCLElBQUksRUFBRSxTQUFTO3FCQUNoQjtvQkFDRDt3QkFDRSxZQUFZLEVBQUUsSUFBSTt3QkFDbEIsSUFBSSxFQUFFLFNBQVM7cUJBQ2hCO29CQUNEO3dCQUNFLFlBQVksRUFBRSxJQUFJO3dCQUNsQixJQUFJLEVBQUUsU0FBUztxQkFDaEI7b0JBQ0Q7d0JBQ0UsWUFBWSxFQUFFLElBQUk7d0JBQ2xCLElBQUksRUFBRSxTQUFTO3FCQUNoQjtvQkFDRDt3QkFDRSxZQUFZLEVBQUUsSUFBSTt3QkFDbEIsSUFBSSxFQUFFLFNBQVM7cUJBQ2hCO29CQUNEO3dCQUNFLFlBQVksRUFBRSxJQUFJO3dCQUNsQixJQUFJLEVBQUUsU0FBUztxQkFDaEI7b0JBQ0Q7d0JBQ0UsWUFBWSxFQUFFLElBQUk7d0JBQ2xCLElBQUksRUFBRSxTQUFTO3FCQUNoQjtpQkFDRjthQUNGO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFFSCxNQUFNLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDdEIsQ0FBQyxlQUFPLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDeEIsaUJBQWlCLEVBQUUsYUFBYSxDQUFDLEVBQUU7U0FDcEM7UUFDRCxDQUFDLGVBQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNyQixrQkFBa0IsRUFBRSxjQUFjLENBQUMsRUFBRTtTQUN0QztLQUNGLENBQUMsQ0FBQztJQUVILE1BQU0sSUFBQSwwQ0FBNkIsRUFBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDakQsS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsSUFBSSxFQUFFLG1CQUFtQjtnQkFDekIsVUFBVSxFQUFFLE1BQU07Z0JBQ2xCLFdBQVcsRUFBRSxlQUFlO2dCQUM1QixlQUFlLEVBQUUsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuRCxtQkFBbUIsRUFBRSxlQUFlLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxVQUFVO29CQUNqQixXQUFXLEVBQUUsbUJBQW1CO29CQUNoQyxJQUFJLEVBQUUsVUFBVTtpQkFDakI7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOO3dCQUNFLGFBQWEsRUFBRSxLQUFLO3dCQUNwQixNQUFNLEVBQUUsRUFBRTtxQkFDWDtvQkFDRDt3QkFDRSxhQUFhLEVBQUUsS0FBSzt3QkFDcEIsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7b0JBQ0Q7d0JBQ0UsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFO3dCQUNwQixNQUFNLEVBQUUsRUFBRTtxQkFDWDtpQkFDRjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsU0FBUyxFQUFFLGtCQUFrQjt3QkFDN0IsS0FBSyxFQUFFLFFBQVE7d0JBQ2YsUUFBUSxFQUFFLElBQUk7cUJBQ2Y7b0JBQ0Q7d0JBQ0UsU0FBUyxFQUFFLFdBQVc7d0JBQ3RCLEtBQUssRUFBRSxPQUFPO3dCQUNkLFFBQVEsRUFBRSxJQUFJO3FCQUNmO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixVQUFVLEVBQUUsTUFBTTtnQkFDbEIsV0FBVyxFQUFFLGVBQWU7Z0JBQzVCLGVBQWUsRUFBRSxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25ELG1CQUFtQixFQUFFLGVBQWUsQ0FBQyxFQUFFO2dCQUN2QyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLFdBQVcsRUFBRSxtQkFBbUI7b0JBQ2hDLElBQUksRUFBRSxTQUFTO2lCQUNoQjtnQkFDRCxNQUFNLEVBQUU7b0JBQ047d0JBQ0UsYUFBYSxFQUFFLEtBQUs7d0JBQ3BCLE1BQU0sRUFBRSxFQUFFO3FCQUNYO29CQUNEO3dCQUNFLGFBQWEsRUFBRSxLQUFLO3dCQUNwQixNQUFNLEVBQUUsRUFBRTtxQkFDWDtvQkFDRDt3QkFDRSxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUU7d0JBQ3BCLE1BQU0sRUFBRSxFQUFFO3FCQUNYO2lCQUNGO2dCQUNELEtBQUssRUFBRTtvQkFDTDt3QkFDRSxTQUFTLEVBQUUsa0JBQWtCO3dCQUM3QixLQUFLLEVBQUUsUUFBUTt3QkFDZixRQUFRLEVBQUUsSUFBSTtxQkFDZjtvQkFDRDt3QkFDRSxTQUFTLEVBQUUsV0FBVzt3QkFDdEIsS0FBSyxFQUFFLE9BQU87d0JBQ2QsUUFBUSxFQUFFLElBQUk7cUJBQ2Y7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0lBRWxELE1BQU0sSUFBQSxxREFBd0MsRUFBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDNUQsS0FBSyxFQUFFO1lBQ0wsRUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFO1lBQ3BCLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUNqQztLQUNGLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLENBQUMsQ0FBQztJQUVyRCxNQUFNLENBQUMsSUFBSSxDQUFDLHFDQUFxQyxDQUFDLENBQUM7SUFDbkQsTUFBTSxFQUFFLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxHQUFHLE1BQU0sSUFBQSxrQ0FBcUIsRUFDckUsU0FBUyxDQUNWLENBQUMsR0FBRyxDQUFDO1FBQ0osS0FBSyxFQUFFO1lBQ0wsUUFBUSxFQUFFO2dCQUNSO29CQUNFLEtBQUssRUFBRSxTQUFTO29CQUNoQixJQUFJLEVBQUUsYUFBYTtvQkFDbkIsVUFBVSxFQUFFLEVBQUU7aUJBQ2Y7YUFDRjtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxpQkFBaUIsR0FBRyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVyRCxNQUFNLElBQUEsOENBQWlDLEVBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3JELEtBQUssRUFBRTtZQUNMLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFO1lBQ3hCLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUNqQztLQUNGLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsNENBQTRDLENBQUMsQ0FBQztJQUUxRCxNQUFNLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFFdkMsTUFBTSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxNQUFNLElBQUEsNENBQStCLEVBQ3RFLFNBQVMsQ0FDVixDQUFDLEdBQUcsQ0FBQztRQUNKLEtBQUssRUFBRTtZQUNMLGtCQUFrQixFQUFFO2dCQUNsQjtvQkFDRSxJQUFJLEVBQUUsUUFBUTtvQkFDZCxTQUFTLEVBQUUsSUFBSTtpQkFDaEI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLGFBQWE7b0JBQ25CLFNBQVMsRUFBRSxJQUFJO2lCQUNoQjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixTQUFTLEVBQUUsSUFBSTtpQkFDaEI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE9BQU87b0JBQ2IsU0FBUyxFQUFFLElBQUk7aUJBQ2hCO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUVILE1BQU0sSUFBQSxtQ0FBc0IsRUFBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDMUMsS0FBSyxFQUFFO1lBQ0wsUUFBUSxFQUFFO2dCQUNSO29CQUNFLEtBQUssRUFBRSxnQkFBZ0I7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDWixjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLEVBQUU7cUJBQ3ZEO29CQUNELFdBQVcsRUFDVCwwSEFBMEg7b0JBQzVILE1BQU0sRUFBRSxTQUFTO29CQUNqQixNQUFNLEVBQUUsR0FBRztvQkFDWCxNQUFNLEVBQUUscUJBQWEsQ0FBQyxTQUFTO29CQUMvQixNQUFNLEVBQUU7d0JBQ047NEJBQ0UsR0FBRyxFQUFFLDZFQUE2RTt5QkFDbkY7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLDRFQUE0RTt5QkFDbEY7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLDZFQUE2RTt5QkFDbkY7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLDRFQUE0RTt5QkFDbEY7cUJBQ0Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLEtBQUssRUFBRSxNQUFNOzRCQUNiLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQzt5QkFDOUI7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLE9BQU87NEJBQ2QsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQzt5QkFDM0I7cUJBQ0Y7b0JBQ0QsUUFBUSxFQUFFO3dCQUNSOzRCQUNFLEtBQUssRUFBRSxXQUFXOzRCQUNsQixHQUFHLEVBQUUsZUFBZTs0QkFDcEIsT0FBTyxFQUFFO2dDQUNQLElBQUksRUFBRSxHQUFHO2dDQUNULEtBQUssRUFBRSxPQUFPOzZCQUNmOzRCQUNELGdCQUFnQixFQUFFLEtBQUs7NEJBQ3ZCLE1BQU0sRUFBRTtnQ0FDTjtvQ0FDRSxNQUFNLEVBQUUsRUFBRTtvQ0FDVixhQUFhLEVBQUUsS0FBSztpQ0FDckI7Z0NBQ0Q7b0NBQ0UsTUFBTSxFQUFFLEVBQUU7b0NBQ1YsYUFBYSxFQUFFLEtBQUs7aUNBQ3JCOzZCQUNGO3lCQUNGO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxXQUFXOzRCQUNsQixHQUFHLEVBQUUsZUFBZTs0QkFDcEIsT0FBTyxFQUFFO2dDQUNQLElBQUksRUFBRSxHQUFHO2dDQUNULEtBQUssRUFBRSxPQUFPOzZCQUNmOzRCQUNELGdCQUFnQixFQUFFLEtBQUs7NEJBQ3ZCLE1BQU0sRUFBRTtnQ0FDTjtvQ0FDRSxNQUFNLEVBQUUsRUFBRTtvQ0FDVixhQUFhLEVBQUUsS0FBSztpQ0FDckI7Z0NBQ0Q7b0NBQ0UsTUFBTSxFQUFFLEVBQUU7b0NBQ1YsYUFBYSxFQUFFLEtBQUs7aUNBQ3JCOzZCQUNGO3lCQUNGO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxXQUFXOzRCQUNsQixHQUFHLEVBQUUsZUFBZTs0QkFDcEIsT0FBTyxFQUFFO2dDQUNQLElBQUksRUFBRSxHQUFHO2dDQUNULEtBQUssRUFBRSxPQUFPOzZCQUNmOzRCQUNELGdCQUFnQixFQUFFLEtBQUs7NEJBQ3ZCLE1BQU0sRUFBRTtnQ0FDTjtvQ0FDRSxNQUFNLEVBQUUsRUFBRTtvQ0FDVixhQUFhLEVBQUUsS0FBSztpQ0FDckI7Z0NBQ0Q7b0NBQ0UsTUFBTSxFQUFFLEVBQUU7b0NBQ1YsYUFBYSxFQUFFLEtBQUs7aUNBQ3JCOzZCQUNGO3lCQUNGO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxXQUFXOzRCQUNsQixHQUFHLEVBQUUsZUFBZTs0QkFDcEIsT0FBTyxFQUFFO2dDQUNQLElBQUksRUFBRSxHQUFHO2dDQUNULEtBQUssRUFBRSxPQUFPOzZCQUNmOzRCQUNELGdCQUFnQixFQUFFLEtBQUs7NEJBQ3ZCLE1BQU0sRUFBRTtnQ0FDTjtvQ0FDRSxNQUFNLEVBQUUsRUFBRTtvQ0FDVixhQUFhLEVBQUUsS0FBSztpQ0FDckI7Z0NBQ0Q7b0NBQ0UsTUFBTSxFQUFFLEVBQUU7b0NBQ1YsYUFBYSxFQUFFLEtBQUs7aUNBQ3JCOzZCQUNGO3lCQUNGO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxXQUFXOzRCQUNsQixHQUFHLEVBQUUsZUFBZTs0QkFDcEIsT0FBTyxFQUFFO2dDQUNQLElBQUksRUFBRSxHQUFHO2dDQUNULEtBQUssRUFBRSxPQUFPOzZCQUNmOzRCQUNELGdCQUFnQixFQUFFLEtBQUs7NEJBQ3ZCLE1BQU0sRUFBRTtnQ0FDTjtvQ0FDRSxNQUFNLEVBQUUsRUFBRTtvQ0FDVixhQUFhLEVBQUUsS0FBSztpQ0FDckI7Z0NBQ0Q7b0NBQ0UsTUFBTSxFQUFFLEVBQUU7b0NBQ1YsYUFBYSxFQUFFLEtBQUs7aUNBQ3JCOzZCQUNGO3lCQUNGO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxXQUFXOzRCQUNsQixHQUFHLEVBQUUsZUFBZTs0QkFDcEIsT0FBTyxFQUFFO2dDQUNQLElBQUksRUFBRSxHQUFHO2dDQUNULEtBQUssRUFBRSxPQUFPOzZCQUNmOzRCQUNELGdCQUFnQixFQUFFLEtBQUs7NEJBQ3ZCLE1BQU0sRUFBRTtnQ0FDTjtvQ0FDRSxNQUFNLEVBQUUsRUFBRTtvQ0FDVixhQUFhLEVBQUUsS0FBSztpQ0FDckI7Z0NBQ0Q7b0NBQ0UsTUFBTSxFQUFFLEVBQUU7b0NBQ1YsYUFBYSxFQUFFLEtBQUs7aUNBQ3JCOzZCQUNGO3lCQUNGO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxZQUFZOzRCQUNuQixHQUFHLEVBQUUsZ0JBQWdCOzRCQUNyQixPQUFPLEVBQUU7Z0NBQ1AsSUFBSSxFQUFFLElBQUk7Z0NBQ1YsS0FBSyxFQUFFLE9BQU87NkJBQ2Y7NEJBQ0QsZ0JBQWdCLEVBQUUsS0FBSzs0QkFDdkIsTUFBTSxFQUFFO2dDQUNOO29DQUNFLE1BQU0sRUFBRSxFQUFFO29DQUNWLGFBQWEsRUFBRSxLQUFLO2lDQUNyQjtnQ0FDRDtvQ0FDRSxNQUFNLEVBQUUsRUFBRTtvQ0FDVixhQUFhLEVBQUUsS0FBSztpQ0FDckI7NkJBQ0Y7eUJBQ0Y7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLFlBQVk7NEJBQ25CLEdBQUcsRUFBRSxnQkFBZ0I7NEJBQ3JCLE9BQU8sRUFBRTtnQ0FDUCxJQUFJLEVBQUUsSUFBSTtnQ0FDVixLQUFLLEVBQUUsT0FBTzs2QkFDZjs0QkFDRCxnQkFBZ0IsRUFBRSxLQUFLOzRCQUN2QixNQUFNLEVBQUU7Z0NBQ047b0NBQ0UsTUFBTSxFQUFFLEVBQUU7b0NBQ1YsYUFBYSxFQUFFLEtBQUs7aUNBQ3JCO2dDQUNEO29DQUNFLE1BQU0sRUFBRSxFQUFFO29DQUNWLGFBQWEsRUFBRSxLQUFLO2lDQUNyQjs2QkFDRjt5QkFDRjtxQkFDRjtvQkFDRCxjQUFjLEVBQUU7d0JBQ2Q7NEJBQ0UsRUFBRSxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7eUJBQzlCO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUNILE1BQU0sSUFBQSxtQ0FBc0IsRUFBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDMUMsS0FBSyxFQUFFO1lBQ0wsUUFBUSxFQUFFO2dCQUNSO29CQUNFLEtBQUssRUFBRSxtQkFBbUI7b0JBQzFCLFlBQVksRUFBRTt3QkFDWixjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxDQUFDLEVBQUU7cUJBQzVEO29CQUNELFdBQVcsRUFDVCwrSEFBK0g7b0JBQ2pJLE1BQU0sRUFBRSxZQUFZO29CQUNwQixNQUFNLEVBQUUsR0FBRztvQkFDWCxNQUFNLEVBQUUscUJBQWEsQ0FBQyxTQUFTO29CQUMvQixNQUFNLEVBQUU7d0JBQ047NEJBQ0UsR0FBRyxFQUFFLHNGQUFzRjt5QkFDNUY7d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLHFGQUFxRjt5QkFDM0Y7cUJBQ0Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLEtBQUssRUFBRSxNQUFNOzRCQUNiLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQzt5QkFDOUI7cUJBQ0Y7b0JBQ0QsUUFBUSxFQUFFO3dCQUNSOzRCQUNFLEtBQUssRUFBRSxHQUFHOzRCQUNWLEdBQUcsRUFBRSxjQUFjOzRCQUNuQixPQUFPLEVBQUU7Z0NBQ1AsSUFBSSxFQUFFLEdBQUc7NkJBQ1Y7NEJBQ0QsZ0JBQWdCLEVBQUUsS0FBSzs0QkFDdkIsTUFBTSxFQUFFO2dDQUNOO29DQUNFLE1BQU0sRUFBRSxFQUFFO29DQUNWLGFBQWEsRUFBRSxLQUFLO2lDQUNyQjtnQ0FDRDtvQ0FDRSxNQUFNLEVBQUUsRUFBRTtvQ0FDVixhQUFhLEVBQUUsS0FBSztpQ0FDckI7NkJBQ0Y7eUJBQ0Y7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsR0FBRyxFQUFFLGNBQWM7NEJBQ25CLE9BQU8sRUFBRTtnQ0FDUCxJQUFJLEVBQUUsR0FBRzs2QkFDVjs0QkFDRCxnQkFBZ0IsRUFBRSxLQUFLOzRCQUN2QixNQUFNLEVBQUU7Z0NBQ047b0NBQ0UsTUFBTSxFQUFFLEVBQUU7b0NBQ1YsYUFBYSxFQUFFLEtBQUs7aUNBQ3JCO2dDQUNEO29DQUNFLE1BQU0sRUFBRSxFQUFFO29DQUNWLGFBQWEsRUFBRSxLQUFLO2lDQUNyQjs2QkFDRjt5QkFDRjt3QkFDRDs0QkFDRSxLQUFLLEVBQUUsR0FBRzs0QkFDVixHQUFHLEVBQUUsY0FBYzs0QkFDbkIsT0FBTyxFQUFFO2dDQUNQLElBQUksRUFBRSxHQUFHOzZCQUNWOzRCQUNELGdCQUFnQixFQUFFLEtBQUs7NEJBQ3ZCLE1BQU0sRUFBRTtnQ0FDTjtvQ0FDRSxNQUFNLEVBQUUsRUFBRTtvQ0FDVixhQUFhLEVBQUUsS0FBSztpQ0FDckI7Z0NBQ0Q7b0NBQ0UsTUFBTSxFQUFFLEVBQUU7b0NBQ1YsYUFBYSxFQUFFLEtBQUs7aUNBQ3JCOzZCQUNGO3lCQUNGO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxJQUFJOzRCQUNYLEdBQUcsRUFBRSxlQUFlOzRCQUNwQixPQUFPLEVBQUU7Z0NBQ1AsSUFBSSxFQUFFLElBQUk7NkJBQ1g7NEJBQ0QsZ0JBQWdCLEVBQUUsS0FBSzs0QkFDdkIsTUFBTSxFQUFFO2dDQUNOO29DQUNFLE1BQU0sRUFBRSxFQUFFO29DQUNWLGFBQWEsRUFBRSxLQUFLO2lDQUNyQjtnQ0FDRDtvQ0FDRSxNQUFNLEVBQUUsRUFBRTtvQ0FDVixhQUFhLEVBQUUsS0FBSztpQ0FDckI7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7b0JBQ0QsY0FBYyxFQUFFO3dCQUNkOzRCQUNFLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO3lCQUM5QjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFDSCxNQUFNLElBQUEsbUNBQXNCLEVBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzFDLEtBQUssRUFBRTtZQUNMLFFBQVEsRUFBRTtnQkFDUjtvQkFDRSxLQUFLLEVBQUUsbUJBQW1CO29CQUMxQixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDckUsV0FBVyxFQUNULDZIQUE2SDtvQkFDL0gsTUFBTSxFQUFFLFlBQVk7b0JBQ3BCLE1BQU0sRUFBRSxHQUFHO29CQUNYLE1BQU0sRUFBRSxxQkFBYSxDQUFDLFNBQVM7b0JBQy9CLE1BQU0sRUFBRTt3QkFDTjs0QkFDRSxHQUFHLEVBQUUsbUZBQW1GO3lCQUN6Rjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsa0ZBQWtGO3lCQUN4RjtxQkFDRjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsS0FBSyxFQUFFLE1BQU07NEJBQ2IsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO3lCQUM5QjtxQkFDRjtvQkFDRCxRQUFRLEVBQUU7d0JBQ1I7NEJBQ0UsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsR0FBRyxFQUFFLGNBQWM7NEJBQ25CLE9BQU8sRUFBRTtnQ0FDUCxJQUFJLEVBQUUsR0FBRzs2QkFDVjs0QkFDRCxnQkFBZ0IsRUFBRSxLQUFLOzRCQUN2QixNQUFNLEVBQUU7Z0NBQ047b0NBQ0UsTUFBTSxFQUFFLEVBQUU7b0NBQ1YsYUFBYSxFQUFFLEtBQUs7aUNBQ3JCO2dDQUNEO29DQUNFLE1BQU0sRUFBRSxFQUFFO29DQUNWLGFBQWEsRUFBRSxLQUFLO2lDQUNyQjs2QkFDRjt5QkFDRjt3QkFDRDs0QkFDRSxLQUFLLEVBQUUsR0FBRzs0QkFDVixHQUFHLEVBQUUsY0FBYzs0QkFDbkIsT0FBTyxFQUFFO2dDQUNQLElBQUksRUFBRSxHQUFHOzZCQUNWOzRCQUNELGdCQUFnQixFQUFFLEtBQUs7NEJBQ3ZCLE1BQU0sRUFBRTtnQ0FDTjtvQ0FDRSxNQUFNLEVBQUUsRUFBRTtvQ0FDVixhQUFhLEVBQUUsS0FBSztpQ0FDckI7Z0NBQ0Q7b0NBQ0UsTUFBTSxFQUFFLEVBQUU7b0NBQ1YsYUFBYSxFQUFFLEtBQUs7aUNBQ3JCOzZCQUNGO3lCQUNGO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxHQUFHOzRCQUNWLEdBQUcsRUFBRSxjQUFjOzRCQUNuQixPQUFPLEVBQUU7Z0NBQ1AsSUFBSSxFQUFFLEdBQUc7NkJBQ1Y7NEJBQ0QsZ0JBQWdCLEVBQUUsS0FBSzs0QkFDdkIsTUFBTSxFQUFFO2dDQUNOO29DQUNFLE1BQU0sRUFBRSxFQUFFO29DQUNWLGFBQWEsRUFBRSxLQUFLO2lDQUNyQjtnQ0FDRDtvQ0FDRSxNQUFNLEVBQUUsRUFBRTtvQ0FDVixhQUFhLEVBQUUsS0FBSztpQ0FDckI7NkJBQ0Y7eUJBQ0Y7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLElBQUk7NEJBQ1gsR0FBRyxFQUFFLGVBQWU7NEJBQ3BCLE9BQU8sRUFBRTtnQ0FDUCxJQUFJLEVBQUUsSUFBSTs2QkFDWDs0QkFDRCxnQkFBZ0IsRUFBRSxLQUFLOzRCQUN2QixNQUFNLEVBQUU7Z0NBQ047b0NBQ0UsTUFBTSxFQUFFLEVBQUU7b0NBQ1YsYUFBYSxFQUFFLEtBQUs7aUNBQ3JCO2dDQUNEO29DQUNFLE1BQU0sRUFBRSxFQUFFO29DQUNWLGFBQWEsRUFBRSxLQUFLO2lDQUNyQjs2QkFDRjt5QkFDRjtxQkFDRjtvQkFDRCxjQUFjLEVBQUU7d0JBQ2Q7NEJBQ0UsRUFBRSxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7eUJBQzlCO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUNILE1BQU0sSUFBQSxtQ0FBc0IsRUFBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDMUMsS0FBSyxFQUFFO1lBQ0wsUUFBUSxFQUFFO2dCQUNSO29CQUNFLEtBQUssRUFBRSxlQUFlO29CQUN0QixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDckUsV0FBVyxFQUNULHFIQUFxSDtvQkFDdkgsTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLE1BQU0sRUFBRSxHQUFHO29CQUNYLE1BQU0sRUFBRSxxQkFBYSxDQUFDLFNBQVM7b0JBQy9CLE1BQU0sRUFBRTt3QkFDTjs0QkFDRSxHQUFHLEVBQUUsa0ZBQWtGO3lCQUN4Rjt3QkFDRDs0QkFDRSxHQUFHLEVBQUUsaUZBQWlGO3lCQUN2RjtxQkFDRjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsS0FBSyxFQUFFLE1BQU07NEJBQ2IsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO3lCQUM5QjtxQkFDRjtvQkFDRCxRQUFRLEVBQUU7d0JBQ1I7NEJBQ0UsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsR0FBRyxFQUFFLFVBQVU7NEJBQ2YsT0FBTyxFQUFFO2dDQUNQLElBQUksRUFBRSxHQUFHOzZCQUNWOzRCQUNELGdCQUFnQixFQUFFLEtBQUs7NEJBQ3ZCLE1BQU0sRUFBRTtnQ0FDTjtvQ0FDRSxNQUFNLEVBQUUsRUFBRTtvQ0FDVixhQUFhLEVBQUUsS0FBSztpQ0FDckI7Z0NBQ0Q7b0NBQ0UsTUFBTSxFQUFFLEVBQUU7b0NBQ1YsYUFBYSxFQUFFLEtBQUs7aUNBQ3JCOzZCQUNGO3lCQUNGO3dCQUNEOzRCQUNFLEtBQUssRUFBRSxHQUFHOzRCQUNWLEdBQUcsRUFBRSxVQUFVOzRCQUNmLE9BQU8sRUFBRTtnQ0FDUCxJQUFJLEVBQUUsR0FBRzs2QkFDVjs0QkFDRCxnQkFBZ0IsRUFBRSxLQUFLOzRCQUN2QixNQUFNLEVBQUU7Z0NBQ047b0NBQ0UsTUFBTSxFQUFFLEVBQUU7b0NBQ1YsYUFBYSxFQUFFLEtBQUs7aUNBQ3JCO2dDQUNEO29DQUNFLE1BQU0sRUFBRSxFQUFFO29DQUNWLGFBQWEsRUFBRSxLQUFLO2lDQUNyQjs2QkFDRjt5QkFDRjt3QkFDRDs0QkFDRSxLQUFLLEVBQUUsR0FBRzs0QkFDVixHQUFHLEVBQUUsVUFBVTs0QkFDZixPQUFPLEVBQUU7Z0NBQ1AsSUFBSSxFQUFFLEdBQUc7NkJBQ1Y7NEJBQ0QsZ0JBQWdCLEVBQUUsS0FBSzs0QkFDdkIsTUFBTSxFQUFFO2dDQUNOO29DQUNFLE1BQU0sRUFBRSxFQUFFO29DQUNWLGFBQWEsRUFBRSxLQUFLO2lDQUNyQjtnQ0FDRDtvQ0FDRSxNQUFNLEVBQUUsRUFBRTtvQ0FDVixhQUFhLEVBQUUsS0FBSztpQ0FDckI7NkJBQ0Y7eUJBQ0Y7d0JBQ0Q7NEJBQ0UsS0FBSyxFQUFFLElBQUk7NEJBQ1gsR0FBRyxFQUFFLFdBQVc7NEJBQ2hCLE9BQU8sRUFBRTtnQ0FDUCxJQUFJLEVBQUUsSUFBSTs2QkFDWDs0QkFDRCxnQkFBZ0IsRUFBRSxLQUFLOzRCQUN2QixNQUFNLEVBQUU7Z0NBQ047b0NBQ0UsTUFBTSxFQUFFLEVBQUU7b0NBQ1YsYUFBYSxFQUFFLEtBQUs7aUNBQ3JCO2dDQUNEO29DQUNFLE1BQU0sRUFBRSxFQUFFO29DQUNWLGFBQWEsRUFBRSxLQUFLO2lDQUNyQjs2QkFDRjt5QkFDRjtxQkFDRjtvQkFDRCxjQUFjLEVBQUU7d0JBQ2Q7NEJBQ0UsRUFBRSxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7eUJBQzlCO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNoRCxDQUFDIn0=