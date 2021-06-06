import {IGlobalState} from "./state";
import {CurrencyState} from "./currencyReducer";

export const getCurrency = (state: IGlobalState): CurrencyState => state.currency
