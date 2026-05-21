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
  registerUser,
} from "../features/auth/authSlice";

import Loader from "../components/common/Loader";

export default function Register() {
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

  const [previewImage, setPreviewImage] =
    useState("");

  const [
    registerForm,
    setRegisterForm,
  ] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    image: null,
  });

  const changeInputValue =
    (event) => {
      setRegisterForm({
        ...registerForm,

        [event.target.name]:
          event.target.value,
      });
    };

  const chooseProfileImage =
    (event) => {
      const selectedFile =
        event.target.files[0];

      if (!selectedFile)
        return;

      setRegisterForm({
        ...registerForm,

        image:
          selectedFile,
      });

      setPreviewImage(
        URL.createObjectURL(
          selectedFile
        )
      );
    };

  const submitRegisterForm =
    async (event) => {
      event.preventDefault();

      const formData =
        new FormData();

      Object.keys(
        registerForm
      ).forEach((key) => {
        formData.append(
          key,
          registerForm[
            key
          ]
        );
      });

      const response =
        await dispatch(
          registerUser(
            formData
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

      <div className="w-full max-w-7xl grid lg:grid-cols-2 bg-[#111827] rounded-[40px] overflow-hidden border border-white/10">

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-red-500 to-red-700 p-16">

          <h1 className="text-6xl font-black text-white leading-tight">

            Join
            <br />
            Zomato

          </h1>

          <p className="text-white/80 mt-6 text-lg leading-8">

            Create your restaurant dashboard and manage foods & orders easily.

          </p>

        </div>

        <div className="p-8 lg:p-14 overflow-y-auto max-h-screen">

          <h2 className="text-5xl font-black text-white">

            Register

          </h2>

          <p className="text-gray-400 mt-3">

            Restaurant Partner Account

          </p>

          {error && (
            <div className="mt-6 bg-red-500/20 border border-red-500/20 text-red-400 px-5 py-4 rounded-2xl">

              {error}

            </div>
          )}

          <form
            onSubmit={
              submitRegisterForm
            }
            className="space-y-5 mt-10"
          >

            <div className="flex justify-center">

              <label className="cursor-pointer">

                <img
                  src={
                    previewImage ||
                    "/user.png"
                  }
                  alt="profile"
                  className="w-32 h-32 rounded-3xl object-cover border-4 border-red-500"
                />

                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={
                    chooseProfileImage
                  }
                />

              </label>

            </div>

            <input
              type="text"
              name="name"
              placeholder="Restaurant Name"
              value={
                registerForm.name
              }
              onChange={
                changeInputValue
              }
              className="input-primary"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={
                registerForm.email
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
                registerForm.password
              }
              onChange={
                changeInputValue
              }
              className="input-primary"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={
                registerForm.phone
              }
              onChange={
                changeInputValue
              }
              className="input-primary"
            />

            <textarea
              rows="4"
              name="address"
              placeholder="Restaurant Address"
              value={
                registerForm.address
              }
              onChange={
                changeInputValue
              }
              className="input-primary resize-none"
            ></textarea>

            <button
              type="submit"
              className="btn-primary w-full"
            >

              Create Account

            </button>

          </form>

          <p className="text-gray-400 mt-8">

            Already have account?
            {" "}

            <Link
              to="/"
              className="text-red-500 font-semibold"
            >

              Login

            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}