import { MealList } from "@/components/MealList";
import { title } from "@/components/primitives";
import { getRandomMeal } from "@/config/services/meals";

const MealGenerator = async () => {
  const meal = await getRandomMeal();
  return (
    <div>
      <h1 className={title()}>Meal Generator</h1>
      <MealList meals={meal} />
    </div>
  );
};

export default MealGenerator;
