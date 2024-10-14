import api from "./index";

const getAllItems = async () => {
  const response = await api.get("/items");
  return response.data;
};

const getItemById = async (id) => {
  const response = await api.get(`/items/${id}`);
  return response.data;
};

const createItem = async (item) => {
  const response = await api.post("/items", item);
  return response.data;
};

export { getAllItems, getItemById, createItem };
