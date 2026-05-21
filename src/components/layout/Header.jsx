import {
  FiBell,
  FiMenu,
  FiPlus,
  FiSearch,
} from "react-icons/fi";

import {
  useSelector,
} from "react-redux";

export default function Header({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  onMenuClick,
}) {
  const { user } =
    useSelector(
      (state) => state.auth
    );

  return (
    <header className="w-full bg-[#0F172A] border-b border-white/5 px-5 md:px-8 py-5 flex items-center justify-between gap-5 sticky top-0 z-40">

      <div className="flex items-center gap-4">

        <button
          onClick={onMenuClick}
          className="lg:hidden w-12 h-12 rounded-2xl bg-[#111827] hover:bg-[#1F2937] transition flex items-center justify-center text-white"
        >

          <FiMenu className="text-xl" />

        </button>

        <div>

          <h1 className="text-3xl font-bold text-white">

            {title}

          </h1>

          <p className="text-gray-400 mt-1 text-sm md:text-base">

            {subtitle}

          </p>

        </div>

      </div>

      <div className="flex items-center gap-3">

        <div className="hidden md:flex items-center gap-3 w-72 h-12 px-4 rounded-2xl bg-[#111827] border border-white/5">

          <FiSearch className="text-gray-400 text-lg" />

          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent outline-none text-white placeholder:text-gray-500"
          />

        </div>

        <button className="relative w-12 h-12 rounded-2xl bg-[#111827] hover:bg-[#1F2937] transition flex items-center justify-center text-white">

          <FiBell className="text-xl" />

          <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-red-500"></span>

        </button>

        {buttonText && (
          <button
            onClick={
              onButtonClick
            }
            className="hidden sm:flex items-center gap-3 h-12 px-5 rounded-2xl bg-red-500 hover:bg-red-600 transition text-white font-semibold"
          >

            <FiPlus />

            {buttonText}

          </button>
        )}

        <div className="flex items-center gap-3 bg-[#111827] px-3 py-2 rounded-2xl border border-white/5">

          <img
            src={
              user?.image ||
              "/user.png"
            }
            alt="profile"
            className="w-11 h-11 rounded-xl object-cover"
          />

          <div className="hidden xl:block">

            <h3 className="text-white text-sm font-semibold leading-none">

              {user?.name}

            </h3>

            <p className="text-gray-400 text-xs mt-1">

              Restaurant Owner

            </p>

          </div>

        </div>

      </div>

    </header>
  );
}