"use client";

import { MealCardProps } from "@/types";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export const MealCard: React.FC<MealCardProps> = ({ item, onClick }) => {
  const clickHandler = () => {
    onClick(item);
  };
  return (
    <Card shadow="sm">
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={item.idMeal}
          className="w-full object-cover h-[140px]"
          src={item.strMealThumb}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{item.strMeal}</b>
        <Button
          size="sm"
          className="ml-2"
          color="primary"
          onClick={clickHandler}
        >
          {item.isFavourite ? "Remove from Favourites" : "Add to Favourites"}
        </Button>
      </CardFooter>
    </Card>
  );
};
