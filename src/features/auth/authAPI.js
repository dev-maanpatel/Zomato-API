import apiClient from "../../api/axios";

export const registerRequest =
  async (formData) => {
    const response =
      await apiClient.post(
        "/auth/register",
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

export const loginRequest =
  async (loginData) => {
    const response =
      await apiClient.post(
        "/auth/login",
        loginData
      );

    return response.data.data;
  };

export const profileRequest =
  async () => {
    const response =
      await apiClient.get(
        "/auth/me"
      );

    return response.data.data;
  };