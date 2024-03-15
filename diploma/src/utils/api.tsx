import axios from "axios";
import { OrderModel } from "../models/models";

const connect = axios.create({
  baseURL: import.meta.env.VITE_HOST || "http://localhost:7070/api/",
});

export const getTopSalesApi = async () => {
  try {
    const response = await connect.get("/top-sales");
    return response.data;
  } catch (error) {
    throw new Error(`Error while fetching top sales: ${error.message}`);
  }
};

export const getCategoriesApi = async () => {
  try {
    const response = await connect.get("/categories");
    return response.data;
  } catch (error) {
    throw new Error(`Error while fetching categories: ${error.message}`);
  }
};

export const getItemCategoryApi = async (
  id: string | number = 0,
  offset: number = 0,
  q: string = "",
) => {
  try {
    const response = await connect.get("/items", {
      params: { categoryId: id, offset, q },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error while fetching items: ${error.message}`);
  }
};

export const getItemDetailApi = async (id: string | number) => {
  try {
    const response = await connect.get(`/items/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error while fetching item detail: ${error.message}`);
  }
};

export const getOrderApi = (order: OrderModel) => {
  try {
    return connect.post(`/order`, order);
  } catch (error) {
    throw new Error(`Error while fetching item detail: ${error.message}`);
  }
};
