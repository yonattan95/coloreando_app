import { Dispatch } from "redux";
import { getColors } from "../../data_sources/color_remote_data_source";
import { ColorsResponse } from "../../models/colors_response";
import { DOWNLOADING_COLORS, FETCH_COLORS, FETCH_COLORS_ERROR } from "./types";

export const fetchColorList = (page?: number) => {
  return async (dispath: Dispatch, getStore) => {
    const { index } = getStore();
    const isFirstFetch = index.page === 0;
    let result: Error | ColorsResponse | null = null;
    if (isFirstFetch) {
      dispath({
        type: DOWNLOADING_COLORS
      })
      result = await getColors(1)
    } else {
      if (page && (index.page !== page)) {
        dispath({
          type: DOWNLOADING_COLORS
        })
        result = await getColors(page)
      }
    }
    if (result !== null) {
      if (result instanceof Error) {
        console.log(result.message);
        dispath({
          type: FETCH_COLORS_ERROR,
          payload: null
        });
      } else {
        dispath({
          type: FETCH_COLORS,
          payload: result
        });
      }
    }
  }
}
