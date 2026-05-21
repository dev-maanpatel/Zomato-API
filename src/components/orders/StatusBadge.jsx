export default function StatusBadge({
  orderStatus,
}) {
  const getStatusStyles =
    () => {
      switch (
        orderStatus
      ) {
        case "pending":
          return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/20";

        case "confirmed":
          return "bg-blue-500/20 text-blue-400 border border-blue-500/20";

        case "preparing":
          return "bg-orange-500/20 text-orange-400 border border-orange-500/20";

        case "out_for_delivery":
          return "bg-purple-500/20 text-purple-400 border border-purple-500/20";

        case "delivered":
          return "bg-green-500/20 text-green-400 border border-green-500/20";

        case "cancelled":
          return "bg-red-500/20 text-red-400 border border-red-500/20";

        default:
          return "bg-gray-500/20 text-gray-400 border border-gray-500/20";
      }
    };

  const formatStatusText =
    () => {
      if (
        orderStatus ===
        "out_for_delivery"
      ) {
        return "Out For Delivery";
      }

      return orderStatus;
    };

  return (
    <span
      className={`px-4 py-2 rounded-full text-sm font-semibold capitalize ${getStatusStyles()}`}
    >

      {formatStatusText()}

    </span>
  );
}