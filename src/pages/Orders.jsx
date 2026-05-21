import {
  useEffect,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import DashboardLayout from "../components/layout/DashboardLayout";

import DashboardHeader from "../components/layout/DashboardHeader";

import OrderTable from "../components/orders/OrderTable";

import Loader from "../components/common/Loader";

import {
  getOrders,
} from "../features/order/orderSlice";

export default function Orders() {
  const dispatch =
    useDispatch();

  const {
    orders,
    loading,
  } = useSelector(
    (state) =>
      state.orders
  );

  useEffect(() => {
    dispatch(
      getOrders()
    );
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <DashboardLayout>
      <DashboardHeader
        title="Orders"
        subtitle="Manage customer orders"
      />

      <OrderTable
        orders={orders}
      />
    </DashboardLayout>
  );
}