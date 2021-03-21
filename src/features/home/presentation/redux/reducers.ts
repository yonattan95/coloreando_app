import { ColorItem, ColorsResponse } from "../../models/colors_response";
import { DOWNLOADING_COLORS, FETCH_COLORS, FETCH_COLORS_ERROR } from "./types";

const state = {
  colorList: [],
  page: 0,
  isDownloadingColors: false
}

export const mainReducer = (initState = state, { type, payload }) => {
  switch (type) {
    //para obtener los colores del api
    case FETCH_COLORS:
      const { data, page, total, total_pages }: ColorsResponse = payload;
      return {
        ...initState,
        page,
        colorList: data,
        total,
        totalPages: total_pages,
        isDownloadingColors: false
      }
    //para capturar los errores de la llamada al api
    case FETCH_COLORS_ERROR:
      const { message }: Error = payload;
      return {
        ...initState,
        fetchColorsErrorMessage: message,
        isDownloadingColors: false
      }
    case DOWNLOADING_COLORS:
      return {
        ...initState,
        isDownloadingColors: true
      }
    default:
      return initState;
  }
}


//selectors

//para obtener la lista de colores del api
export const colorListSelector = (state): ColorItem[] => state.index.colorList;
export const pageSelector = (state): number =>
  state.index.page === 0 ? 1 : state.index.page;
export const totalPagesSelector = (state): number => state.index.totalPages;
export const isDownLoadingColorsSelector = (state): number => state.index.isDownloadingColors;
export const currentColorSelector = (state, colorId: number): ColorItem =>
  state.index.colorList.find((color: ColorItem) => color.id === colorId);


