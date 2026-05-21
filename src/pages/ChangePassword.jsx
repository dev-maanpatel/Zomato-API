import {
  FiArrowLeft,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import {
  useNavigate,
} from "react-router-dom";

import {
  useState,
} from "react";

export default function ChangePassword() {

  const navigate = useNavigate();

  const [showOld, setShowOld] =
    useState(false);

  const [showNew, setShowNew] =
    useState(false);

  const [showConfirm, setShowConfirm] =
    useState(false);

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">

      <div className="w-full max-w-2xl bg-[#181818] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">

        <div className="flex items-center justify-between px-8 py-6 border-b border-white/5">

          <div className="flex items-center gap-4">

            <button
              onClick={() =>
                navigate("/dashboard")
              }
              className="w-12 h-12 rounded-2xl bg-[#232323] hover:bg-red-500 transition flex items-center justify-center text-white"
            >

              <FiArrowLeft size={20} />

            </button>

            <div>

              <h1 className="text-3xl font-bold text-white">

                Change Password

              </h1>

              <p className="text-gray-400 mt-1">

                Update your account password

              </p>

            </div>

          </div>

        </div>

        <div className="p-8 space-y-6">

          <div>

            <label className="text-sm text-gray-400 block mb-3">

              Current Password

            </label>

            <div className="relative">

              <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

              <input
                type={
                  showOld
                    ? "text"
                    : "password"
                }
                placeholder="Enter current password"
                className="w-full h-16 bg-[#232323] border border-white/10 rounded-2xl pl-14 pr-14 text-white outline-none focus:border-red-500 transition"
              />

              <button
                type="button"
                onClick={() =>
                  setShowOld(
                    !showOld
                  )
                }
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
              >

                {
                  showOld
                    ? <FiEyeOff />
                    : <FiEye />
                }

              </button>

            </div>

          </div>

          <div>

            <label className="text-sm text-gray-400 block mb-3">

              New Password

            </label>

            <div className="relative">

              <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

              <input
                type={
                  showNew
                    ? "text"
                    : "password"
                }
                placeholder="Enter new password"
                className="w-full h-16 bg-[#232323] border border-white/10 rounded-2xl pl-14 pr-14 text-white outline-none focus:border-red-500 transition"
              />

              <button
                type="button"
                onClick={() =>
                  setShowNew(
                    !showNew
                  )
                }
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
              >

                {
                  showNew
                    ? <FiEyeOff />
                    : <FiEye />
                }

              </button>

            </div>

          </div>

          <div>

            <label className="text-sm text-gray-400 block mb-3">

              Confirm Password

            </label>

            <div className="relative">

              <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

              <input
                type={
                  showConfirm
                    ? "text"
                    : "password"
                }
                placeholder="Confirm new password"
                className="w-full h-16 bg-[#232323] border border-white/10 rounded-2xl pl-14 pr-14 text-white outline-none focus:border-red-500 transition"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirm(
                    !showConfirm
                  )
                }
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
              >

                {
                  showConfirm
                    ? <FiEyeOff />
                    : <FiEye />
                }

              </button>

            </div>

          </div>

          <button
            className="w-full h-16 bg-red-500 hover:bg-red-600 rounded-2xl text-white text-lg font-semibold transition"
          >

            Update Password

          </button>

        </div>

      </div>

    </div>
  );
}