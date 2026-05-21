import {
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

export default function FoodCard({
  food,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-[#111827] border border-white/5 rounded-3xl overflow-hidden hover:border-red-500 transition duration-300 group">

      <div className="relative overflow-hidden">

        <img
          src={
            food?.image
              ? `https://zomato-clone-api-5e4m.onrender.com${food.image}`
              : "/food.png"
          }
          alt={food?.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="absolute top-4 left-4 bg-red-500 text-white text-sm px-4 py-2 rounded-full font-semibold">

          {food?.category}

        </div>

      </div>

      <div className="p-5">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">

            {food?.title}

          </h2>

          <span className="text-green-400 font-bold text-xl">

            ₹{food?.price}

          </span>

        </div>

        <p className="text-gray-400 mt-4 line-clamp-2">

          {food?.description}

        </p>

        <div className="flex items-center justify-between mt-6">

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

          <div className="flex items-center gap-3">

            <button
              onClick={() =>
                onEdit(food)
              }
              className="w-11 h-11 rounded-2xl bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white transition flex items-center justify-center"
            >

              <FiEdit2 />

            </button>

            <button
              onClick={() =>
                onDelete(
                  food._id
                )
              }
              className="w-11 h-11 rounded-2xl bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white transition flex items-center justify-center"
            >

              <FiTrash2 />

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}