import {
  useState,
} from "react";

import {
  FiGrid,
  FiShoppingBag,
  FiPlusCircle,
  FiLock,
  FiLogOut,
  FiCamera,
  FiX,
  FiUser,
  FiPhone,
} from "react-icons/fi";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  logout,
} from "../../features/auth/authSlice";

export default function Sidebar() {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const dispatch =
    useDispatch();

  const {
    user,
  } = useSelector(
    (state) =>
      state.auth
  );

  const [
    openProfileModal,
    setOpenProfileModal,
  ] = useState(false);

  const [
    profileData,
    setProfileData,
  ] = useState({
    name:
      localStorage.getItem(
        "profileName"
      ) ||
      user?.name ||
      "",

    phone:
      localStorage.getItem(
        "profilePhone"
      ) || "",

    image:
      localStorage.getItem(
        "profileImage"
      ) ||
      user?.image ||
      "/user.png",

    email:
      user?.email || "",
  });

  const sidebarMenus = [
    {
      label:
        "Dashboard",

      icon: <FiGrid />,

      path:
        "/dashboard",
    },

    {
      label: "Orders",

      icon:
        <FiShoppingBag />,

      path: "/orders",
    },

    {
      label: "Foods",

      icon:
        <FiPlusCircle />,

      path: "/foods",
    },

    {
      label:
        "Change Password",

      icon: <FiLock />,

      path:
        "/change-password",
    },
  ];

  const logoutUser =
    () => {

      dispatch(
        logout()
      );

      navigate("/");
    };

  const updateInput =
    (event) => {

      setProfileData({
        ...profileData,

        [event.target.name]:
          event.target.value,
      });
    };

  const updateProfileImage =
    (event) => {

      const file =
        event.target.files[0];

      if (!file)
        return;

      setProfileData({
        ...profileData,

        image:
          URL.createObjectURL(
            file
          ),
      });
    };

  const saveProfile =
    () => {

      localStorage.setItem(
        "profileName",
        profileData.name
      );

      localStorage.setItem(
        "profilePhone",
        profileData.phone
      );

      localStorage.setItem(
        "profileImage",
        profileData.image
      );

      setOpenProfileModal(
        false
      );
    };

  return (
    <>

      <div className="hidden lg:flex w-72 min-h-screen bg-[#0F172A] border-r border-white/5 flex-col justify-between sticky top-0">

        <div>

          <div className="px-8 py-8 border-b border-white/5">

            <h1 className="text-4xl font-black text-red-500 tracking-wide">

              Zomato

            </h1>

            <p className="text-gray-400 mt-2">

              Restaurant Partner

            </p>

          </div>

          <div className="p-5 space-y-3">

            {sidebarMenus.map(
              (menu) => (
                <button
                  key={
                    menu.path
                  }
                  onClick={() =>
                    navigate(
                      menu.path
                    )
                  }
                  className={`w-full flex items-center gap-4 px-5 h-14 rounded-2xl transition font-semibold

                  ${
                    location.pathname ===
                    menu.path
                      ? "bg-red-500 text-white"
                      : "bg-[#111827] hover:bg-[#1F2937] text-gray-300"
                  }
                  `}
                >

                  <span className="text-xl">

                    {
                      menu.icon
                    }

                  </span>

                  {
                    menu.label
                  }

                </button>
              )
            )}

          </div>

        </div>

        <div className="p-5 border-t border-white/5">

          <div
            onClick={() =>
              setOpenProfileModal(
                true
              )
            }
            className="flex items-center gap-4 bg-[#111827] p-4 rounded-3xl cursor-pointer hover:bg-[#1F2937] transition"
          >

            <img
              src={
                profileData.image
              }
              alt="profile"
              className="w-14 h-14 rounded-2xl object-cover border-2 border-red-500"
            />

            <div>

              <h3 className="text-white font-semibold text-lg">

                {
                  profileData.name
                }

              </h3>

              <p className="text-gray-400 text-sm">

                {
                  profileData.email
                }

              </p>

            </div>

          </div>

          <button
            onClick={
              logoutUser
            }
            className="w-full mt-5 h-14 rounded-2xl bg-red-500 hover:bg-red-600 transition flex items-center justify-center gap-3 text-white font-semibold"
          >

            <FiLogOut />

            Logout

          </button>

        </div>

      </div>

      {openProfileModal && (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">

          <div className="bg-[#111827] w-full max-w-lg rounded-3xl border border-white/10 overflow-hidden">

            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">

              <h2 className="text-3xl font-bold text-white">

                Update Profile

              </h2>

              <button
                onClick={() =>
                  setOpenProfileModal(
                    false
                  )
                }
                className="w-10 h-10 rounded-xl bg-[#1F2937] hover:bg-red-500 transition flex items-center justify-center text-white"
              >

                <FiX />

              </button>

            </div>

            <div className="p-8 space-y-5">

              <div className="flex justify-center">

                <label className="cursor-pointer relative">

                  <img
                    src={
                      profileData.image
                    }
                    alt="profile"
                    className="w-40 h-40 rounded-3xl object-cover border-4 border-red-500"
                  />

                  <div className="absolute bottom-3 right-3 w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center text-white text-xl">

                    <FiCamera />

                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={
                      updateProfileImage
                    }
                  />

                </label>

              </div>

              <div className="relative">

                <FiUser className="absolute top-5 left-4 text-gray-400" />

                <input
                  type="text"
                  name="name"
                  value={
                    profileData.name
                  }
                  onChange={
                    updateInput
                  }
                  placeholder="Full Name"
                  className="w-full h-14 rounded-2xl bg-[#1F2937] border border-white/10 pl-12 pr-4 text-white outline-none"
                />

              </div>

              <div className="relative">

                <FiPhone className="absolute top-5 left-4 text-gray-400" />

                <input
                  type="text"
                  name="phone"
                  value={
                    profileData.phone
                  }
                  onChange={
                    updateInput
                  }
                  placeholder="Phone Number"
                  className="w-full h-14 rounded-2xl bg-[#1F2937] border border-white/10 pl-12 pr-4 text-white outline-none"
                />

              </div>

              <input
                type="email"
                value={
                  profileData.email
                }
                disabled
                className="w-full h-14 rounded-2xl bg-[#0F172A] border border-white/5 px-4 text-gray-500 outline-none cursor-not-allowed"
              />

              <button
                onClick={
                  saveProfile
                }
                className="w-full h-14 rounded-2xl bg-red-500 hover:bg-red-600 transition text-white font-semibold text-lg"
              >

                Save Changes

              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}