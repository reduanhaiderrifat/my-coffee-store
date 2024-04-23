import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const taste = form.taste.value;
    const supplier = form.supplier.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const newCoffee = {
      name,
      details,
      category,
      photo,
      taste,
      quantity,
      supplier,
    };
    console.log(newCoffee);
    fetch("https://my-coffee-store-server-eight.vercel.app/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "You add coffee succesfully!",
            icon: "success",
            confirmButtonText: "Next",
          });
        }
      });
  };
  return (
    <div className="px-2 mx-auto bg-[#F2F3F0] py-5">
      <h2>Add cofffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/*  */}
        <div className="flex gap-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="name"
                id=""
                placeholder="coffee name"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text"> Quantity</span>
            </label>
            <label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="quantity"
                id=""
                placeholder="coffee Quantity"
              />
            </label>
          </div>
        </div>
        {/* tase and suppleir */}
        <div className="flex gap-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text"> Supplier</span>
            </label>
            <label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="supplier"
                id=""
                placeholder="coffee supplier"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text"> Taste</span>
            </label>
            <label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="taste"
                id=""
                placeholder="coffee Taste"
              />
            </label>
          </div>
        </div>
        {/* Category */}
        <div className="flex gap-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text"> Category</span>
            </label>
            <label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="category"
                id=""
                placeholder="coffee category"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text"> Details</span>
            </label>
            <label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="details"
                id=""
                placeholder="coffee Details"
              />
            </label>
          </div>
        </div>
        {/*photo  */}
        <div className="">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text"> Photo</span>
            </label>
            <label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="photo"
                id=""
                placeholder="coffee photo"
              />
            </label>
          </div>
        </div>
        <input
          className="btn btn-block mt-6 bg-orange-500"
          type="submit"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
