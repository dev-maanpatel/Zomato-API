import apiClient from "../../api/axios";

export const fetchOrders =
  async () => {
    const response =
      await apiClient.get(
        "/orders"
      );

    return response.data.data;
  };

export const changeOrderStatus =
  async (
    orderId,
    status
  ) => {
    const response =
      await apiClient.put(
        `/orders/${orderId}`,
        { status }
      );

    return response.data.data;
  };