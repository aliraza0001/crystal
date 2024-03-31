import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type CategoryCardProps = {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
};

export interface MealsPageProps {
  params: {
    slug: undefined | string[];
  };
}

export interface MealListProps {
  item: {
    idMeal: string;
    strMealThumb: string;
    strMeal: string;
    strInstructions: string;
    isFavourite?: boolean; // Added optional isFavourite property
  };
}

export interface MealCardProps {
  item: {
    idMeal: string;
    strMealThumb: string;
    strMeal: string;
    strInstructions: string;
    isFavourite?: boolean;
  };
  onClick: (item: {
    idMeal: string;
    strMealThumb: string;
    strMeal: string;
    strInstructions: string;
  }) => void;
  isMyFavourite?: boolean;
}
