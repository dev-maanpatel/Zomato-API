import apiClient from "../../api/axios";

export const fetchFoods =
  async () => {
    const response =
      await apiClient.get(
        "/foods"
      );

    return response.data.data;
  };

export const createFood =
  async (formData) => {
    const response =
      await apiClient.post(
        "/foods",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data.data;
  };

export const editFood =
  async (
    foodId,
    formData
  ) => {
    const response =
      await apiClient.put(
        `/foods/${foodId}`,
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data.data;
  };

export const removeFood =
  async (foodId) => {
    await apiClient.delete(
      `/foods/${foodId}`
    );

    return foodId;
  };