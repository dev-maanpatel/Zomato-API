import {
  useEffect,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import DashboardLayout from "../components/layout/DashboardLayout";
import DashboardHeader from "../components/layout/DashboardHeader";
import Loader from "../components/common/Loader";

import EmptyState from "../components/common/EmptyState";

import {
  getFoods,
} from "../features/food/foodSlice";

import {
  getOrders,
} from "../features/order/orderSlice";

export default function Dashboard() {
  const dispatch =
    useDispatch();

  const {
    foods,
    loading:
      foodLoading,
  } = useSelector(
    (state) => state.foods
  );

  const {
    orders,
    loading:
      orderLoading,
  } = useSelector(
    (state) => state.orders
  );

  useEffect(() => {
    dispatch(getFoods());

    dispatch(getOrders());
  }, [dispatch]);

  if (
    foodLoading ||
    orderLoading
  ) {
    return <Loader />;
  }

  return (
    <DashboardLayout>

      <DashboardHeader
        title="Dashboard"
        subtitle="Restaurant Overview"
      />

      <div className="grid xl:grid-cols-3 gap-6">

        <div className="bg-[#111827] rounded-3xl p-8 border border-white/5">

          <h3 className="text-gray-400 text-lg">

            Total Foods

          </h3>

          <h1 className="text-6xl font-black text-white mt-4">

            {
              foods?.length
            }

          </h1>

        </div>

        <div className="bg-[#111827] rounded-3xl p-8 border border-white/5">

          <h3 className="text-gray-400 text-lg">

            Total Orders

          </h3>

          <h1 className="text-6xl font-black text-white mt-4">

            {
              orders?.length
            }

          </h1>

        </div>

        <div className="bg-[#111827] rounded-3xl p-8 border border-white/5">

          <h3 className="text-gray-400 text-lg">

            Revenue

          </h3>

          <h1 className="text-6xl font-black text-green-400 mt-4">

            ₹
            {orders?.reduce(
              (
                total,
                order
              ) =>
                total +
                order.totalPrice,
              0
            )}

          </h1>

        </div>

      </div>

      {foods?.length ===
        0 && (
        <div className="mt-8">

          <EmptyState
            title="No Foods Available"
            description="Start by adding your first food item."
          />

        </div>
      )}

    </DashboardLayout>
  );
}