import {
  GetCurrencyExchangeRateResponse,
  PossibleCurrencies,
} from "types/Currencies";
import { baseUrl } from "./config";

export const getCurrencyExchangeRate = async (currency: PossibleCurrencies) => {
  try {
    const data: GetCurrencyExchangeRateResponse = await fetch(
      baseUrl + "/get-exchange-rate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currency }),
      }
    ).then((res) => res.json());
    return data;
  } catch (error) {
    console.log(error);
  }
};
