
import {
  useDispatch,
} from "react-redux";

import StatusBadge from "./StatusBadge";

import {
  updateOrderStatus,
} from "../../features/order/orderSlice";

export default function OrderTable({
  orders,
}) {
  const dispatch =
    useDispatch();

  const changeOrderStatus =
    (
      orderId,
      updatedStatus
    ) => {
      dispatch(
        updateOrderStatus({
          id: orderId,

          status:
            updatedStatus,
        })
      );
    };

  return (
    <div className="bg-[#111827] border border-white/5 rounded-3xl overflow-hidden">

      <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-white">

            Restaurant Orders

          </h2>

          <p className="text-gray-400 mt-2">

            Manage all customer orders

          </p>

        </div>

        <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500 text-white text-xl font-bold">

          {orders?.length ||
            0}

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#1F2937]">

            <tr>

              <th className="text-left px-8 py-5">

                Order ID

              </th>

              <th className="text-left px-8 py-5">

                Customer

              </th>

              <th className="text-left px-8 py-5">

                Items

              </th>

              <th className="text-left px-8 py-5">

                Total

              </th>

              <th className="text-left px-8 py-5">

                Status

              </th>

              <th className="text-left px-8 py-5">

                Update

              </th>

            </tr>

          </thead>

          <tbody>

            {orders?.length >
            0 ? (
              orders.map(
                (order) => (
                  <tr
                    key={
                      order._id
                    }
                    className="border-t border-white/5 hover:bg-[#1F2937] transition"
                  >

                    <td className="px-8 py-5">

                      <div>

                        <h3 className="text-white font-semibold">

                          #
                          {order?._id?.slice(
                            0,
                            8
                          )}

                        </h3>

                        <p className="text-gray-500 text-sm mt-1">

                          {moment(
                            order?.createdAt
                          ).fromNow()}

                        </p>

                      </div>

                    </td>

                    <td className="px-8 py-5">

                      <div className="space-y-1">

                        <h3 className="text-white font-semibold">

                          {order?.user
                            ?.name ||
                            "Customer"}

                        </h3>

                        <p className="text-gray-400 text-sm">

                          {order?.user
                            ?.email}

                        </p>

                      </div>

                    </td>

                    <td className="px-8 py-5">

                      <div className="space-y-2">

                        {order?.items?.map(
                          (
                            item,
                            index
                          ) => (
                            <div
                              key={
                                index
                              }
                              className="flex items-center gap-2 text-sm"
                            >

                              <span className="text-white">

                                {
                                  item
                                    ?.food
                                    ?.title
                                }

                              </span>

                              <span className="text-gray-400">

                                ×
                                {
                                  item?.quantity
                                }

                              </span>

                            </div>
                          )
                        )}

                      </div>

                    </td>

                    <td className="px-8 py-5">

                      <span className="text-green-400 font-bold text-lg">

                        ₹
                        {
                          order?.totalPrice
                        }

                      </span>

                    </td>

                    <td className="px-8 py-5">

                      <StatusBadge
                        orderStatus={
                          order?.status
                        }
                      />

                    </td>

                    <td className="px-8 py-5">

                      <select
                        value={
                          order?.status
                        }
                        onChange={(
                          event
                        ) =>
                          changeOrderStatus(
                            order._id,
                            event
                              .target
                              .value
                          )
                        }
                        className="bg-[#0F172A] border border-white/10 text-white rounded-2xl px-4 py-3 outline-none focus:border-red-500 transition"
                      >

                        <option value="pending">

                          Pending

                        </option>

                        <option value="confirmed">

                          Confirmed

                        </option>

                        <option value="preparing">

                          Preparing

                        </option>

                        <option value="out_for_delivery">

                          Out For Delivery

                        </option>

                        <option value="delivered">

                          Delivered

                        </option>

                        <option value="cancelled">

                          Cancelled

                        </option>

                      </select>

                    </td>

                  </tr>
                )
              )
            ) : (
              <tr>

                <td
                  colSpan="6"
                  className="text-center py-16 text-gray-500 text-lg"
                >

                  No Orders Found

                </td>

              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}