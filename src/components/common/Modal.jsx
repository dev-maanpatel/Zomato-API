import {
  FiX,
} from "react-icons/fi";

import {
  useEffect,
} from "react";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  width = "max-w-2xl",
}) {
  useEffect(() => {
    const handleEscape = (
      event
    ) => {
      if (
        event.key === "Escape"
      ) {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    document.body.style.overflow =
      isOpen
        ? "hidden"
        : "auto";

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow =
        "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">

      <div
        className={`w-full ${width} bg-[#111827] border border-white/10 rounded-3xl overflow-hidden animate-fadeIn`}
      >

        <div className="flex items-center justify-between px-8 py-6 border-b border-white/5">

          <h2 className="text-3xl font-bold text-white">

            {title}

          </h2>

          <button
            onClick={onClose}
            className="w-11 h-11 rounded-2xl bg-[#1F2937] hover:bg-red-500 transition flex items-center justify-center text-white"
          >

            <FiX />

          </button>

        </div>

        <div className="p-8">

          {children}

        </div>

      </div>
    </div>
  );
}