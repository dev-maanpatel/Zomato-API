import {
  useEffect,
  useState,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import DashboardLayout from "../components/layout/DashboardLayout";
import FoodTable from "../components/food/FoodTable";

import AddFood from "../components/food/AddFoodModal";
import DashboardHeader from "../components/layout/DashboardHeader";

import Loader from "../components/common/Loader";

import EmptyState from "../components/common/EmptyState";

import {
  getFoods,
} from "../features/food/foodSlice";

export default function Food() {
  const dispatch =
    useDispatch();

  const [openModal, setOpenModal] =
    useState(false);

  const {
    foods,
    loading,
  } = useSelector(
    (state) => state.foods
  );

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);

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
          setOpenModal(true)
        }
      />

      <AddFood
        isOpen={
          openModal
        }
        onClose={() =>
          setOpenModal(false)
        }
      />

      {foods?.length >
      0 ? (
        <FoodTable
          foods={foods}
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