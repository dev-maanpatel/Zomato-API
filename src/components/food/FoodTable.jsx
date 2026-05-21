import {
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

export default function FoodTable({
  foods,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-[#111827] border border-white/5 rounded-3xl overflow-hidden">

      <div className="px-8 py-6 border-b border-white/5">

        <h2 className="text-3xl font-bold text-white">

          Food Menu

        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-[#1F2937]">

            <tr>

              <th className="px-8 py-5 text-left">

                Image

              </th>

              <th className="px-8 py-5 text-left">

                Food

              </th>

              <th className="px-8 py-5 text-left">

                Category

              </th>

              <th className="px-8 py-5 text-left">

                Price

              </th>

              <th className="px-8 py-5 text-left">

                Status

              </th>

              <th className="px-8 py-5 text-left">

                Actions

              </th>

            </tr>

          </thead>

          <tbody>

            {foods?.length >
            0 ? (
              foods.map(
                (food) => (
                  <tr
                    key={
                      food._id
                    }
                    className="border-t border-white/5 hover:bg-[#1F2937] transition"
                  >

                    <td className="px-8 py-5">

                      <img
                        src={
                          food?.image
                            ? `https://zomato-clone-api-5e4m.onrender.com${food.image}`
                            : "/food.png"
                        }
                        alt={
                          food?.title
                        }
                        className="w-16 h-16 rounded-2xl object-cover"
                      />

                    </td>

                    <td className="px-8 py-5 text-white font-semibold">

                      {
                        food?.title
                      }

                    </td>

                    <td className="px-8 py-5 text-gray-400">

                      {
                        food?.category
                      }

                    </td>

                    <td className="px-8 py-5 text-green-400 font-bold">

                      ₹
                      {
                        food?.price
                      }

                    </td>

                    <td className="px-8 py-5">

                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          food?.isAvailable
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >

                        {food?.isAvailable
                          ? "Available"
                          : "Unavailable"}

                      </span>

                    </td>

                    <td className="px-8 py-5">

                      <div className="flex items-center gap-3">

                        <button
                          onClick={() =>
                            onEdit(
                              food
                            )
                          }
                          className="w-10 h-10 rounded-xl bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white transition flex items-center justify-center"
                        >

                          <FiEdit2 />

                        </button>

                        <button
                          onClick={() =>
                            onDelete(
                              food._id
                            )
                          }
                          className="w-10 h-10 rounded-xl bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white transition flex items-center justify-center"
                        >

                          <FiTrash2 />

                        </button>

                      </div>

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

                  No Food Items Found

                </td>

              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}