export let transform: {
    "^.+\\.[jt]s$": (string | {
        jsc: {
            parser: {
                syntax: string;
                decorators: boolean;
            };
        };
    })[];
};
export let testEnvironment: string;
export let moduleFileExtensions: string[];
export let modulePathIgnorePatterns: string[];
export let testMatch: string[];
