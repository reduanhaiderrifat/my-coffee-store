import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const leadedData = useLoaderData();
  const [users, setusers] = useState(leadedData);
  const handledelete = (id) => {
    fetch(`https://my-coffee-store-server-eight.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("jsdjlasjdksa");
        }
        const reaminig = users.filter((user) => user._id !== id);
        setusers(reaminig);
      });
  };
  return (
    <div>
      <h1>This is users data : {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>CreatAt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, idx) => (
              <tr key={user._id} className="bg-base-200">
                <th>{idx + 1}</th>
                <td>{user.email}</td>
                <td>{user.createAt}</td>
                <td onClick={() => handledelete(user._id)} className="btn">
                  X
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
