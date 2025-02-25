"use strict";
const { loadEnv } = require('@medusajs/utils');
loadEnv('test', process.cwd());
module.exports = {
    transform: {
        "^.+\\.[jt]s$": [
            "@swc/jest",
            {
                jsc: {
                    parser: { syntax: "typescript", decorators: true },
                },
            },
        ],
    },
    testEnvironment: "node",
    moduleFileExtensions: ["js", "ts", "json"],
    modulePathIgnorePatterns: ["dist/"],
};
if (process.env.TEST_TYPE === "integration:http") {
    module.exports.testMatch = ["**/integration-tests/http/*.spec.[jt]s"];
}
else if (process.env.TEST_TYPE === "integration:modules") {
    module.exports.testMatch = ["**/src/modules/*/__tests__/**/*.[jt]s"];
}
else if (process.env.TEST_TYPE === "unit") {
    module.exports.testMatch = ["**/src/**/__tests__/**/*.unit.spec.[jt]s"];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamVzdC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9qZXN0LmNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzlDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7QUFFOUIsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLFNBQVMsRUFBRTtRQUNULGNBQWMsRUFBRTtZQUNkLFdBQVc7WUFDWDtnQkFDRSxHQUFHLEVBQUU7b0JBQ0gsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO2lCQUNuRDthQUNGO1NBQ0Y7S0FDRjtJQUNELGVBQWUsRUFBRSxNQUFNO0lBQ3ZCLG9CQUFvQixFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUM7SUFDMUMsd0JBQXdCLEVBQUUsQ0FBQyxPQUFPLENBQUM7Q0FDcEMsQ0FBQTtBQUVELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEtBQUssa0JBQWtCLEVBQUUsQ0FBQztJQUNqRCxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUE7QUFDdkUsQ0FBQztLQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEtBQUsscUJBQXFCLEVBQUUsQ0FBQztJQUMzRCxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUE7QUFDdEUsQ0FBQztLQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFLENBQUM7SUFDNUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFBO0FBQ3pFLENBQUMifQ==