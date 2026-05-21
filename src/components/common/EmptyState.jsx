import {
  FiInbox,
} from "react-icons/fi";

export default function EmptyState({
  title = "No Data Found",
  description = "There is nothing to display right now.",
  buttonText,
  onClick,
}) {
  return (
    <div className="w-full min-h-[350px] bg-[#111827] border border-white/5 rounded-3xl flex flex-col items-center justify-center text-center p-8">

      <div className="w-20 h-20 rounded-full bg-[#1F2937] flex items-center justify-center text-red-500 text-4xl">

        <FiInbox />

      </div>

      <h2 className="text-3xl font-bold text-white mt-6">

        {title}

      </h2>

      <p className="text-gray-400 mt-3 max-w-md leading-relaxed">

        {description}

      </p>

      {buttonText && (
        <button
          onClick={onClick}
          className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 transition rounded-2xl text-white font-semibold"
        >

          {buttonText}

        </button>
      )}
    </div>
  );
}