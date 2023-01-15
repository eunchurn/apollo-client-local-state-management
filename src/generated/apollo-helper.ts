import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type DataKeySpecifier = ('category' | 'city' | 'company' | 'fundedDate' | 'numEmps' | 'permalink' | 'raisedAmt' | 'raisedCurrency' | 'round' | 'state' | DataKeySpecifier)[];
export type DataFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	fundedDate?: FieldPolicy<any> | FieldReadFunction<any>,
	numEmps?: FieldPolicy<any> | FieldReadFunction<any>,
	permalink?: FieldPolicy<any> | FieldReadFunction<any>,
	raisedAmt?: FieldPolicy<any> | FieldReadFunction<any>,
	raisedCurrency?: FieldPolicy<any> | FieldReadFunction<any>,
	round?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('getAllData' | 'getDataByField' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	getAllData?: FieldPolicy<any> | FieldReadFunction<any>,
	getDataByField?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Data?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DataKeySpecifier | (() => undefined | DataKeySpecifier),
		fields?: DataFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;