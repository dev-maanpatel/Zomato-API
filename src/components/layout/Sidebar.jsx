import {
    FiGrid,
    FiShoppingBag,
    FiPlusCircle,
    FiLock,
    FiLogOut,
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

    const { user } =
        useSelector(
            (state) => state.auth
        );

    const sidebarMenus = [
        {
            label: "Dashboard",
            icon: <FiGrid />,
            path: "/dashboard",
        },

        {
            label: "Orders",
            icon: (
                <FiShoppingBag />
            ),
            path: "/orders",
        },

        {
            label: "Foods",
            icon: (
                <FiPlusCircle />
            ),
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

    const logoutUser = () => {
        dispatch(
            logout()
        );
        navigate("/");
    };

    return (
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
                  
                  ${location.pathname ===
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

                <div className="flex items-center gap-4 bg-[#111827] p-4 rounded-3xl">

                    <img
                        src={
                            user?.image ||
                            "/user.png"
                        }
                        alt="profile"
                        className="w-14 h-14 rounded-2xl object-cover border-2 border-red-500"
                    />

                    <div>

                        <h3 className="text-white font-semibold text-lg">

                            {user?.name}

                        </h3>

                        <p className="text-gray-400 text-sm">

                            Restaurant Owner

                        </p>

                    </div>

                </div>

                <button
                    onClick={logoutUser}
                    className="w-full mt-5 h-14 rounded-2xl bg-red-500 hover:bg-red-600 transition flex items-center justify-center gap-3 text-white font-semibold"
                >

                    <FiLogOut />

                    Logout

                </button>

            </div>

        </div>
    );
}