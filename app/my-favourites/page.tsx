"use client";
import { MealCard } from "@/components/MealCard";
import { title } from "@/components/primitives";
import { getItem, setItem } from "@/config/utils";
import { MealListProps } from "@/types";
import { useEffect, useState } from "react";

export default function FavouritePage() {
  const [meals, setMeals] = useState<MealListProps["item"][]>([]);

  useEffect(() => {
    const items = getItem("myFavourites");
    if (items) {
      setMeals(
        items.map((item: MealListProps["item"]) => ({
          ...item,
          isFavourite: true,
        }))
      );
    }
  }, []);

  const onClick = (item: MealListProps["item"]) => {
    const updatedMeals = meals.filter((meal) => meal.idMeal !== item.idMeal);
    setItem("myFavourites", updatedMeals);
    setItem(
      "favourites",
      updatedMeals.map((meal) => meal.idMeal)
    );
    setMeals(updatedMeals);
  };

  return (
    <div>
      <h1 className={title()}>My Favourites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
        {meals.map((item) => (
          <MealCard key={item.idMeal} item={item} onClick={onClick} />
        ))}
      </div>
    </div>
  );
}
