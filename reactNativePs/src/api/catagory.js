import api from "./index";

const getAllCategories = async () => {
  const response = await api.get("mini-project/api/categories/");
  return response.data;
};

const getCategoryById = async (id) => {
  const response = await api.get(`mini-project/api/categories/${id}`);
  return response.data;
};

const createCategory = async (category) => {
  const response = await api.post("mini-project/api/categories/", category);
  return response.data;
};

export { getAllCategories, getCategoryById, createCategory };
