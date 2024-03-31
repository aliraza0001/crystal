import { MealList } from "@/components/MealList";
import { title } from "@/components/primitives";
import { getCategoryDetails } from "@/config/services/category";
import { MealsPageProps } from "@/types";

const MealsPage: React.FC<MealsPageProps> = async ({ params: { slug } }) => {
  const category = slug ? slug[0] : "Chicken";
  const meals = await getCategoryDetails(category);

  return (
    <div>
      <h1 className={title()}>Meals Page</h1>
      <MealList meals={meals} />
    </div>
  );
};

export default MealsPage;
