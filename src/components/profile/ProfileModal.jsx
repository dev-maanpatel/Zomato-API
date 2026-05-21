import {
  useEffect,
  useState,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  FiCamera,
} from "react-icons/fi";

import Modal from "../common/Modal";

import {
  updateProfile,
} from "../../features/auth/authSlice";

export default function ProfileModal({
  isOpen,
  onClose,
}) {
  const dispatch =
    useDispatch();

  const { user } =
    useSelector(
      (state) => state.auth
    );

  const [previewImage, setPreviewImage] =
    useState("");

  const [profileForm, setProfileForm] =
    useState({
      name: "",
      phone: "",
      address: "",
      image: null,
    });

  useEffect(() => {
    if (user) {
      setProfileForm({
        name:
          user?.name || "",

        phone:
          user?.phone || "",

        address:
          user?.address || "",

        image: null,
      });

      setPreviewImage(
        user?.image || ""
      );
    }
  }, [user]);

  const updateInputField = (
    event
  ) => {
    setProfileForm({
      ...profileForm,

      [event.target.name]:
        event.target.value,
    });
  };

  const selectProfileImage =
    (event) => {
      const selectedFile =
        event.target.files[0];

      if (!selectedFile)
        return;

      setProfileForm({
        ...profileForm,

        image:
          selectedFile,
      });

      setPreviewImage(
        URL.createObjectURL(
          selectedFile
        )
      );
    };

  const submitProfileUpdate =
    async (event) => {
      event.preventDefault();

      const formData =
        new FormData();

      formData.append(
        "name",
        profileForm.name
      );

      formData.append(
        "phone",
        profileForm.phone
      );

      formData.append(
        "address",
        profileForm.address
      );

      if (
        profileForm.image
      ) {
        formData.append(
          "image",
          profileForm.image
        );
      }

      await dispatch(
        updateProfile(
          formData
        )
      );

      onClose();
    };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Profile"
      width="max-w-xl"
    >
      <form
        onSubmit={
          submitProfileUpdate
        }
        className="space-y-5"
      >

        <div className="flex justify-center">

          <label className="relative cursor-pointer">

            <img
              src={
                previewImage ||
                "/user.png"
              }
              alt="profile"
              className="w-36 h-36 rounded-3xl object-cover border-4 border-red-500"
            />

            <div className="absolute bottom-2 right-2 w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center text-white text-xl">

              <FiCamera />

            </div>

            <input
              type="file"
              accept="image/*"
              onChange={
                selectProfileImage
              }
              className="hidden"
            />

          </label>

        </div>

        <input
          type="text"
          name="name"
          placeholder="Restaurant Name"
          value={
            profileForm.name
          }
          onChange={
            updateInputField
          }
          className="input-primary"
          required
        />

        <input
          type="email"
          value={
            user?.email ||
            ""
          }
          readOnly
          className="input-primary opacity-70 cursor-not-allowed"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={
            profileForm.phone
          }
          onChange={
            updateInputField
          }
          className="input-primary"
        />

        <textarea
          rows="4"
          name="address"
          placeholder="Restaurant Address"
          value={
            profileForm.address
          }
          onChange={
            updateInputField
          }
          className="input-primary resize-none"
        ></textarea>

        <button
          type="submit"
          className="btn-primary w-full"
        >

          Save Changes

        </button>

      </form>
    </Modal>
  );
}