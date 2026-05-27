import {
  useEffect,
  useState,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import DashboardLayout from "../components/layout/DashboardLayout";

import DashboardHeader from "../components/layout/DashboardHeader";

import Loader from "../components/common/Loader";

import EmptyState from "../components/common/EmptyState";

import FoodTable from "../components/food/FoodTable";

import AddFoodModal from "../components/food/AddFoodModal";

import EditFoodModal from "../components/food/EditFoodModal";

import {
  getFoods,
  deleteFood,
} from "../features/food/foodSlice";

export default function Food() {

  const dispatch =
    useDispatch();

  const {
    foods,
    loading,
    error,
  } = useSelector(
    (state) =>
      state.foods
  );

  const [
    openModal,
    setOpenModal,
  ] = useState(false);

  const [
    selectedFood,
    setSelectedFood,
  ] = useState(null);

  useEffect(() => {

    dispatch(
      getFoods()
    );

  }, [dispatch]);

  const handleDeleteFood =
    async (foodId) => {

      const confirmDelete =
        window.confirm(
          "Delete this food item?"
        );

      if (
        !confirmDelete
      ) {
        return;
      }

      await dispatch(
        deleteFood(
          foodId
        )
      );
    };

  if (loading) {

    return <Loader />;
  }

  return (
    <DashboardLayout>

      <DashboardHeader
        title="Foods"
        subtitle="Manage restaurant foods"
        buttonText="Add Food"
        buttonAction={() =>
          setOpenModal(
            true
          )
        }
      />

      <AddFoodModal
        isOpen={
          openModal
        }
        onClose={() =>
          setOpenModal(
            false
          )
        }
      />

      <EditFoodModal
        selectedFood={
          selectedFood
        }
        closeModal={() =>
          setSelectedFood(
            null
          )
        }
      />

      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-400 rounded-2xl px-5 py-4 mb-6">

          {error}

        </div>
      )}

      {foods?.length >
      0 ? (

        <FoodTable
          foods={foods}
          onEdit={
            setSelectedFood
          }
          onDelete={
            handleDeleteFood
          }
        />

      ) : (

        <EmptyState
          title="No Foods Found"
          description="Add your first food item."
        />

      )}

    </DashboardLayout>
  );
}