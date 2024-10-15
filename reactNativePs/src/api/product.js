import api from "./index";

const getAllItems = async () => {
  const response = await api.get("mini-project/api/items");
  return response.data;
};

const getItemById = async (id) => {
  const response = await api.get(`mini-project/api/items/${id}`);
  return response.data;
};

const createItem = async (item) => {
  const response = await api.post(`mini-project/api/items/${id}`, item);
  return response.data;
};

export { getAllItems, getItemById, createItem };
