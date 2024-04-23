import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadeedcoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadeedcoffees);
  return (
    <>
      <h1 className=" text-red-600 text-3xl font-black">
        my coffee house; {coffees.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            setCoffees={setCoffees}
            coffees={coffees}
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
