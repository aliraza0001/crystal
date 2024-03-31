import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Meal App</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1: Menu */}
        <Link href="/menu">
          <div className="bg-gray-800 shadow-md rounded-md p-6 transition duration-300 transform hover:scale-105">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <p>Explore our delicious menu and find your favorite meals.</p>
          </div>
        </Link>
        {/* Section 2: My Favourites */}
        <Link href="/my-favourites">
          <div className="bg-gray-800 shadow-md rounded-md p-6 transition duration-300 transform hover:scale-105">
            <h2 className="text-xl font-bold mb-4">My Favourites</h2>
            <p>View all your favorite meals in one place.</p>
          </div>
        </Link>
        {/* Section 3: Meal Generator */}
        <Link href="/meal-generator">
          <div className="bg-gray-800 shadow-md rounded-md p-6 transition duration-300 transform hover:scale-105">
            <h2 className="text-xl font-bold mb-4">Meal Generator</h2>
            <p>Feeling adventurous? Let us surprise you with a random meal!</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
