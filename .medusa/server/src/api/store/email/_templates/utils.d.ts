export declare const isObject: (input: any) => boolean;
export declare const isArray: (input: any) => input is any[];
export declare const isEmpty: (input: any) => boolean;
type ConvertToLocaleParams = {
    amount: number;
    currency_code: string;
    locale?: string;
    maximumFractionDigits?: number;
    minimumFractionDigits?: number;
};
export declare const convertToLocale: ({ amount, currency_code, locale, maximumFractionDigits, minimumFractionDigits, }: ConvertToLocaleParams) => string;
export {};
