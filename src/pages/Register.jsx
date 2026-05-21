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
  FiPhone,
  FiMapPin,
  FiUser,
  FiCamera,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

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

  const [showPassword, setShowPassword] =
    useState(false);

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
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-5 relative overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-red-500/20 blur-[140px] rounded-full top-[-120px] left-[-120px]"></div>

      <div className="absolute w-[400px] h-[400px] bg-orange-500/10 blur-[140px] rounded-full bottom-[-120px] right-[-120px]"></div>

      {
        loading && (
          <Loader />
        )
      }

      <div className="w-full max-w-7xl grid lg:grid-cols-2 bg-[#111111]/90 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl relative z-10">

        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-red-500 via-red-600 to-orange-500 p-16 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

          <div>

            <h1 className="text-6xl font-black text-white leading-tight">

              Grow Your
              <br />
              Restaurant

            </h1>

            <p className="text-white/80 text-lg leading-8 mt-8 max-w-md">

              Join Zomato Partner and manage foods, customers and orders with modern dashboard UI.

            </p>

          </div>

          <div className="bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-md">

            <h2 className="text-3xl font-black text-white">

              Fast Setup

            </h2>

            <p className="text-white/70 mt-2 leading-7">

              Create account and start managing your restaurant instantly.

            </p>

          </div>

        </div>

        <div className="p-8 lg:p-14 overflow-y-auto max-h-screen">

          <h2 className="text-5xl font-black text-white">

            Create Account

          </h2>

          <p className="text-gray-400 mt-3 text-lg">

            Register your restaurant partner dashboard

          </p>

          {
            error && (
              <div className="mt-6 bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-4 rounded-2xl">

                {error}

              </div>
            )
          }

          <form
            onSubmit={
              submitRegisterForm
            }
            className="space-y-5 mt-10"
          >

            <div className="flex justify-center">

              <label className="relative cursor-pointer group">

                <img
                  src={
                    previewImage ||
                    "/user.png"
                  }
                  alt="profile"
                  className="w-36 h-36 rounded-[30px] object-cover border-4 border-red-500"
                />

                <div className="absolute inset-0 bg-black/40 rounded-[30px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition">

                  <FiCamera className="text-white text-3xl" />

                </div>

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

            <div className="relative">

              <FiUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

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
                className="w-full h-16 bg-[#1a1a1a] border border-white/10 rounded-2xl pl-14 pr-5 text-white outline-none focus:border-red-500 transition"
                required
              />

            </div>

            <div className="relative">

              <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

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
                  registerForm.password
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

            <div className="relative">

              <FiPhone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

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
                className="w-full h-16 bg-[#1a1a1a] border border-white/10 rounded-2xl pl-14 pr-5 text-white outline-none focus:border-red-500 transition"
              />

            </div>

            <div className="relative">

              <FiMapPin className="absolute left-5 top-5 text-gray-500 text-xl" />

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
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-2xl pl-14 pr-5 py-5 text-white outline-none focus:border-red-500 transition resize-none"
              ></textarea>

            </div>

            <button
              type="submit"
              className="w-full h-16 bg-red-500 hover:bg-red-600 rounded-2xl text-white text-lg font-bold transition-all duration-300"
            >

              Create Account

            </button>

          </form>

          <p className="text-gray-400 mt-8 text-center">

            Already have account?
            {" "}

            <Link
              to="/"
              className="text-red-500 font-semibold hover:text-red-400"
            >

              Login

            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}