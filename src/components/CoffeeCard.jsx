import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Proptypes from "prop-types";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, details, category, photo, taste, quantity, supplier } =
    coffee;
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://my-coffee-store-server-eight.vercel.app/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your order has been deleted.",
                icon: "success",
              });
              const reaming = coffees.filter((c) => c._id !== id);
              setCoffees(reaming);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <img className="w-56" src={photo} alt="" />
      <div className=" flex justify-between items-center mx-4 w-full">
        <div className=" space-y-4">
          <h2 className="card-title">{name}</h2>
          <p>{category}</p>
          <p>{taste}</p>
          <p>{details}</p>
          <p>{supplier}</p>
          <p>{quantity}</p>
        </div>
        <div className="flex flex-col gap-3">
          <button className="btn ">Veiw</button>
          <Link to={`/updateCoffee/${_id}`}>
            {" "}
            <button className="btn ">Edit</button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-orange-500"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: Proptypes.object.isRequired,
  coffees: Proptypes.any.isRequired,
  setCoffees: Proptypes.any.isRequired,
};
export default CoffeeCard;
