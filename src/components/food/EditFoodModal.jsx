import {
  useEffect,
  useState,
} from "react";

import {
  useDispatch,
} from "react-redux";

import Modal from "../common/Modal";

import {
  updateFood,
} from "../../features/food/foodSlice";

export default function EditFoodModal({
  selectedFood,
  closeModal,
}) {
  const dispatch =
    useDispatch();

  const [previewImage, setPreviewImage] =
    useState("");

  const [foodForm, setFoodForm] =
    useState({
      title: "",
      price: "",
      category: "",
      description: "",
      isAvailable: true,
      image: null,
    });

  useEffect(() => {
    if (selectedFood) {
      setFoodForm({
        title:
          selectedFood.title,

        price:
          selectedFood.price,

        category:
          selectedFood.category,

        description:
          selectedFood.description,

        isAvailable:
          selectedFood.isAvailable,

        image: null,
      });

      setPreviewImage(
        selectedFood.image
          ? `https://zomato-clone-api-5e4m.onrender.com${selectedFood.image}`
          : ""
      );
    }
  }, [selectedFood]);

  const updateInputField = (
    event
  ) => {
    setFoodForm({
      ...foodForm,

      [event.target.name]:
        event.target.value,
    });
  };

  const selectFoodImage = (
    event
  ) => {
    const selectedFile =
      event.target.files[0];

    if (!selectedFile) return;

    setFoodForm({
      ...foodForm,

      image: selectedFile,
    });

    setPreviewImage(
      URL.createObjectURL(
        selectedFile
      )
    );
  };

  const submitUpdatedFood =
    async (event) => {
      event.preventDefault();

      const formData =
        new FormData();

      Object.keys(
        foodForm
      ).forEach((key) => {
        formData.append(
          key,
          foodForm[key]
        );
      });

      await dispatch(
        updateFood({
          id: selectedFood._id,

          formData,
        })
      );

      closeModal();
    };

  return (
    <Modal
      isOpen={
        !!selectedFood
      }
      onClose={
        closeModal
      }
      title="Edit Food Item"
    >
      <form
        onSubmit={
          submitUpdatedFood
        }
        className="space-y-5"
      >

        <div className="flex justify-center">

          <label className="cursor-pointer">

            <div className="w-40 h-40 rounded-3xl overflow-hidden border-2 border-dashed border-red-500 bg-[#1F2937]">

              {previewImage && (
                <img
                  src={
                    previewImage
                  }
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              )}

            </div>

            <input
              type="file"
              accept="image/*"
              onChange={
                selectFoodImage
              }
              className="hidden"
            />

          </label>

        </div>

        <input
          type="text"
          name="title"
          value={
            foodForm.title
          }
          onChange={
            updateInputField
          }
          className="input-primary"
        />

        <input
          type="number"
          name="price"
          value={
            foodForm.price
          }
          onChange={
            updateInputField
          }
          className="input-primary"
        />

        <textarea
          rows="4"
          name="description"
          value={
            foodForm.description
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

          Update Food

        </button>

      </form>
    </Modal>
  );
}