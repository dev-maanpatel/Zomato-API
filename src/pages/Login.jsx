import {
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import {
  loginUser,
} from "../features/auth/authSlice";

import Loader from "../components/common/Loader";

export default function Login() {

  const dispatch =
    useDispatch();

  const navigate =
    useNavigate();

  const {
    loading,
    error,
  } = useSelector(
    (state) => state.auth
  );

  const [showPassword, setShowPassword] =
    useState(false);

  const [loginForm, setLoginForm] =
    useState({
      email: "",
      password: "",
    });

  const changeInputValue =
    (event) => {

      setLoginForm({
        ...loginForm,

        [event.target.name]:
          event.target.value,
      });
    };

  const submitLoginForm =
    async (event) => {

      event.preventDefault();

      const response =
        await dispatch(
          loginUser(
            loginForm
          )
        );

      if (
        response?.payload
      ) {

        navigate(
          "/dashboard"
        );
      }
    };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-5 overflow-hidden relative">

      <div className="absolute w-[500px] h-[500px] bg-red-500/20 blur-[140px] rounded-full top-[-120px] left-[-120px]"></div>

      <div className="absolute w-[400px] h-[400px] bg-orange-500/10 blur-[140px] rounded-full bottom-[-120px] right-[-120px]"></div>

      {
        loading && (
          <Loader />
        )
      }

      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-[#111111]/90 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl relative z-10">

        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-red-500 via-red-600 to-orange-500 p-16 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

          <div>

            <h1 className="text-6xl font-black text-white leading-tight">

              Zomato
              <br />
              Partner

            </h1>

            <p className="text-white/80 text-lg leading-8 mt-8 max-w-md">

              Manage orders, foods, restaurant profile and customer experience with powerful dashboard.

            </p>

          </div>

          <div className="flex items-center gap-5 mt-10">

            <div className="bg-white/10 border border-white/20 rounded-3xl px-6 py-5 backdrop-blur-md">

              <h2 className="text-3xl font-black text-white">

                10K+

              </h2>

              <p className="text-white/70 mt-1">

                Restaurants

              </p>

            </div>

            <div className="bg-white/10 border border-white/20 rounded-3xl px-6 py-5 backdrop-blur-md">

              <h2 className="text-3xl font-black text-white">

                24/7

              </h2>

              <p className="text-white/70 mt-1">

                Support

              </p>

            </div>

          </div>

        </div>

        <div className="p-8 lg:p-16 flex flex-col justify-center">

          <div>

            <h2 className="text-5xl font-black text-white">

              Welcome Back

            </h2>

            <p className="text-gray-400 mt-3 text-lg">

              Login to continue your restaurant dashboard

            </p>

          </div>

          {
            error && (
              <div className="mt-6 bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-4 rounded-2xl">

                {error}

              </div>
            )
          }

          <form
            onSubmit={
              submitLoginForm
            }
            className="space-y-6 mt-10"
          >

            <div className="relative">

              <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={
                  loginForm.email
                }
                onChange={
                  changeInputValue
                }
                className="w-full h-16 bg-[#1a1a1a] border border-white/10 rounded-2xl pl-14 pr-5 text-white outline-none focus:border-red-500 transition"
                required
              />

            </div>

            <div className="relative">

              <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Enter Password"
                value={
                  loginForm.password
                }
                onChange={
                  changeInputValue
                }
                className="w-full h-16 bg-[#1a1a1a] border border-white/10 rounded-2xl pl-14 pr-14 text-white outline-none focus:border-red-500 transition"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
              >

                {
                  showPassword
                    ? <FiEyeOff />
                    : <FiEye />
                }

              </button>

            </div>

            <button
              type="submit"
              className="w-full h-16 bg-red-500 hover:bg-red-600 rounded-2xl text-white text-lg font-bold transition-all duration-300"
            >

              Login Now

            </button>

          </form>

          <p className="text-gray-400 mt-8 text-center">

            Don’t have account?
            {" "}

            <Link
              to="/register"
              className="text-red-500 font-semibold hover:text-red-400"
            >

              Create Account

            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}