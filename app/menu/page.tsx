import { Card, CardFooter, Image, CardBody, Link } from "@nextui-org/react";
import { getCategories } from "@/config/services/category";
import { CategoryCardProps } from "@/types";

export default async function MenuPage() {
  const categories: CategoryCardProps[] = await getCategories();
  return (
    <div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {categories.map((item, index) => (
          <Link key={item.idCategory} href={`/meals-page/${item.strCategory}`}>
            <Card shadow="sm" isPressable>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.idCategory}
                  className="w-full object-cover h-[140px]"
                  src={item.strCategoryThumb}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.strCategory}</b>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
