import {
  FiPlus,
} from "react-icons/fi";

export default function DashboardHeader({
  title,
  subtitle,
  buttonText,
  buttonAction,
}) {
  return (
    <div className="flex items-center justify-between mb-8">

      <div>

        <h1 className="text-4xl font-bold text-white">

          {title}

        </h1>

        <p className="text-gray-400 mt-2">

          {subtitle}

        </p>

      </div>

      {buttonText && (
        <button
          onClick={
            buttonAction
          }
          className="bg-red-500 hover:bg-red-600 transition px-6 py-4 rounded-2xl text-white font-semibold flex items-center gap-3"
        >

          <FiPlus />

          {buttonText}

        </button>
      )}

    </div>
  );
}