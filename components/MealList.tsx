"use client";

import { useEffect, useState } from "react";
import { MealCard } from "./MealCard";
import { MealListProps } from "@/types";
import { getItem, setItem } from "@/config/utils";

export const MealList: React.FC<{
  meals: MealListProps["item"][];
  isFavourite?: boolean;
}> = ({ meals }) => {
  const [updatedMeal, setUpdatedMeal] = useState<MealListProps["item"][]>([]);

  useEffect(() => {
    const items = getItem("favourites");
    if (items) {
      setUpdatedMeal(
        meals.map((meal) =>
          items.includes(meal.idMeal) ? { ...meal, isFavourite: true } : meal
        )
      );
    } else {
      setUpdatedMeal(meals);
    }
  }, [meals]);

  const onClick = (item: MealListProps["item"]) => {
    const localStorageData = getItem("favourites");
    const items = localStorageData ? (localStorageData as string[]) : [];

    const isFavourite = items.includes(item.idMeal);
    const updatedItems = isFavourite
      ? items.filter((idMeal) => idMeal !== item.idMeal)
      : [...items, item.idMeal];

    setItem("favourites", updatedItems);

    const updatedMeals = updatedMeal.map((meal) =>
      meal.idMeal === item.idMeal
        ? { ...item, isFavourite: !isFavourite }
        : meal
    );

    setUpdatedMeal(updatedMeals);

    if (!isFavourite) {
      const myFavouritesData = getItem("myFavourites") || [];
      const updatedMyFavourites = [item, ...myFavouritesData];
      setItem("myFavourites", updatedMyFavourites);
    } else {
      const myFavouritesData = (getItem("myFavourites") || []).filter(
        (meal: MealListProps["item"]) => meal.idMeal !== item.idMeal
      );
      setItem("myFavourites", myFavouritesData);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
      {updatedMeal.map((item) => (
        <MealCard key={item.idMeal} item={item} onClick={onClick} />
      ))}
    </div>
  );
};
