"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
(0, utils_1.loadEnv)(process.env.NODE_ENV, process.cwd());
exports.default = (0, utils_1.defineConfig)({
    projectConfig: {
        redisUrl: process.env.REDIS_URL,
        databaseUrl: process.env.DATABASE_URL,
        databaseLogging: true,
        http: {
            storeCors: process.env.STORE_CORS,
            adminCors: process.env.ADMIN_CORS,
            authCors: process.env.AUTH_CORS,
            jwtSecret: process.env.JWT_SECRET || "supersecret",
            cookieSecret: process.env.COOKIE_SECRET || "supersecret",
        },
    },
    admin: {
        backendUrl: "https://munchies.medusajs.app",
        // backendUrl: "http://localhost:9000",
    },
    modules: [
        {
            resolve: "./modules/sanity",
            options: {
                api_token: process.env.SANITY_API_TOKEN,
                project_id: process.env.SANITY_PROJECT_ID,
                api_version: new Date().toISOString().split("T")[0],
                dataset: "production",
                studio_url: "https://munchies-tinloof.vercel.app/cms",
                type_map: {
                    collection: "collection",
                    category: "category",
                    product: "product",
                },
            },
        },
        {
            resolve: "@medusajs/file",
            key: utils_1.Modules.FILE,
            options: {
                providers: [
                    {
                        resolve: "@medusajs/medusa/file-s3",
                        id: "s3",
                        options: {
                            authentication_method: "s3-iam-role",
                            file_url: process.env.S3_FILE_URL,
                            region: process.env.S3_REGION,
                            bucket: process.env.S3_BUCKET,
                            endpoint: process.env.S3_ENDPOINT,
                        },
                    },
                ],
            },
        },
        {
            resolve: "@medusajs/medusa/payment",
            key: utils_1.Modules.PAYMENT,
            options: {
                providers: [
                    {
                        resolve: "@medusajs/medusa/payment-stripe",
                        id: "stripe",
                        options: {
                            apiKey: process.env.STRIPE_API_KEY,
                        },
                    },
                ],
            },
        },
    ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkdXNhLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21lZHVzYS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBMkU7QUFFM0UsSUFBQSxlQUFPLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFFN0Msa0JBQWUsSUFBQSxvQkFBWSxFQUFDO0lBQzFCLGFBQWEsRUFBRTtRQUNiLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVM7UUFDL0IsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWTtRQUNyQyxlQUFlLEVBQUUsSUFBSTtRQUNyQixJQUFJLEVBQUU7WUFDSixTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVO1lBQ2pDLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVU7WUFDakMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUztZQUMvQixTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksYUFBYTtZQUNsRCxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLElBQUksYUFBYTtTQUN6RDtLQUNGO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsVUFBVSxFQUFFLCtCQUErQjtRQUMzQyx1Q0FBdUM7S0FDeEM7SUFDRCxPQUFPLEVBQUU7UUFDUDtZQUNFLE9BQU8sRUFBRSxrQkFBa0I7WUFDM0IsT0FBTyxFQUFFO2dCQUNQLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQjtnQkFDdkMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCO2dCQUN6QyxXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxPQUFPLEVBQUUsWUFBWTtnQkFDckIsVUFBVSxFQUFFLHlDQUF5QztnQkFDckQsUUFBUSxFQUFFO29CQUNSLFVBQVUsRUFBRSxZQUFZO29CQUN4QixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsT0FBTyxFQUFFLFNBQVM7aUJBQ25CO2FBQ0Y7U0FDRjtRQUNEO1lBQ0UsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixHQUFHLEVBQUUsZUFBTyxDQUFDLElBQUk7WUFDakIsT0FBTyxFQUFFO2dCQUNQLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsMEJBQTBCO3dCQUNuQyxFQUFFLEVBQUUsSUFBSTt3QkFDUixPQUFPLEVBQUU7NEJBQ1AscUJBQXFCLEVBQUUsYUFBYTs0QkFDcEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVzs0QkFDakMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUzs0QkFDN0IsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUzs0QkFDN0IsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVzt5QkFDbEM7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsMEJBQTBCO1lBQ25DLEdBQUcsRUFBRSxlQUFPLENBQUMsT0FBTztZQUNwQixPQUFPLEVBQUU7Z0JBQ1AsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQ0FBaUM7d0JBQzFDLEVBQUUsRUFBRSxRQUFRO3dCQUNaLE9BQU8sRUFBRTs0QkFDUCxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjO3lCQUNuQztxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQyJ9