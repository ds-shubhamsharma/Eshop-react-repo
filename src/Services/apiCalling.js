import axios from "./axios";
import { apiEndPoints } from "../config/config";

const productListData = async () => {
  try {
    return axios.get(apiEndPoints.productList).then((response) => {
      // console.log('response', response)
      if (response) {
        return response;
      } else {
        return [];
      }
    });
  } catch (error) {}
};

export { productListData };
