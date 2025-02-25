"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToLocale = exports.isEmpty = exports.isArray = exports.isObject = void 0;
const isObject = (input) => input instanceof Object;
exports.isObject = isObject;
const isArray = (input) => Array.isArray(input);
exports.isArray = isArray;
const isEmpty = (input) => {
    return (input === null ||
        input === undefined ||
        ((0, exports.isObject)(input) && Object.keys(input).length === 0) ||
        ((0, exports.isArray)(input) && input.length === 0) ||
        (typeof input === "string" && input.trim().length === 0));
};
exports.isEmpty = isEmpty;
const convertToLocale = ({ amount, currency_code, locale = "en-US", maximumFractionDigits, minimumFractionDigits, }) => {
    return currency_code && !(0, exports.isEmpty)(currency_code)
        ? new Intl.NumberFormat(locale, {
            currency: currency_code,
            maximumFractionDigits,
            minimumFractionDigits,
            style: "currency",
        }).format(amount)
        : amount.toString();
};
exports.convertToLocale = convertToLocale;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2VtYWlsL190ZW1wbGF0ZXMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssWUFBWSxNQUFNLENBQUM7QUFBbkQsUUFBQSxRQUFRLFlBQTJDO0FBQ3pELE1BQU0sT0FBTyxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQS9DLFFBQUEsT0FBTyxXQUF3QztBQUNyRCxNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO0lBQ3BDLE9BQU8sQ0FDTCxLQUFLLEtBQUssSUFBSTtRQUNkLEtBQUssS0FBSyxTQUFTO1FBQ25CLENBQUMsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQUNwRCxDQUFDLElBQUEsZUFBTyxFQUFDLEtBQUssQ0FBQyxJQUFLLEtBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQ3pELENBQUM7QUFDSixDQUFDLENBQUM7QUFSVyxRQUFBLE9BQU8sV0FRbEI7QUFVSyxNQUFNLGVBQWUsR0FBRyxDQUFDLEVBQzlCLE1BQU0sRUFDTixhQUFhLEVBQ2IsTUFBTSxHQUFHLE9BQU8sRUFDaEIscUJBQXFCLEVBQ3JCLHFCQUFxQixHQUNDLEVBQUUsRUFBRTtJQUMxQixPQUFPLGFBQWEsSUFBSSxDQUFDLElBQUEsZUFBTyxFQUFDLGFBQWEsQ0FBQztRQUM3QyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUM1QixRQUFRLEVBQUUsYUFBYTtZQUN2QixxQkFBcUI7WUFDckIscUJBQXFCO1lBQ3JCLEtBQUssRUFBRSxVQUFVO1NBQ2xCLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBZlcsUUFBQSxlQUFlLG1CQWUxQiJ9