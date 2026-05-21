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
    <div className="min-h-screen bg-black flex items-center justify-center p-5">

      {loading && (
        <Loader />
      )}

      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-[#111827] rounded-[40px] overflow-hidden border border-white/10">

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-red-500 to-red-700 p-16">

          <h1 className="text-6xl font-black text-white leading-tight">

            Welcome
            <br />
            Back

          </h1>

          <p className="text-white/80 mt-6 text-lg leading-8">

            Manage your restaurant orders, foods and customers with modern dashboard experience.

          </p>

        </div>

        <div className="p-8 lg:p-16">

          <h2 className="text-5xl font-black text-white">

            Login

          </h2>

          <p className="text-gray-400 mt-3">

            Restaurant Partner Dashboard

          </p>

          {error && (
            <div className="mt-6 bg-red-500/20 border border-red-500/20 text-red-400 px-5 py-4 rounded-2xl">

              {error}

            </div>
          )}

          <form
            onSubmit={
              submitLoginForm
            }
            className="space-y-5 mt-10"
          >

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
              className="input-primary"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={
                loginForm.password
              }
              onChange={
                changeInputValue
              }
              className="input-primary"
              required
            />

            <button
              type="submit"
              className="btn-primary w-full"
            >

              Login Now

            </button>

          </form>

          <p className="text-gray-400 mt-8">

            Don't have account?
            {" "}

            <Link
              to="/register"
              className="text-red-500 font-semibold"
            >

              Create Account

            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}