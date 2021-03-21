import axios from "axios";
import { Network } from "../../../config/network";
import { ColorsResponse } from "../models/colors_response";

export async function getColors(page: number): Promise<ColorsResponse | Error> {
  try {
    const response = await axios.get<ColorsResponse>(`${Network.mainApi}/colors?page=${page}`);

    if (response.status !== 200) {
      return new Error(response.statusText);
    }
    return response.data;
  } catch (error) {
    return new Error(error.message);
  }
}


