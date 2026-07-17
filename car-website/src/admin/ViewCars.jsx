import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";

const ViewCars = () => {

  const [cars,setCars]=useState([]);

  useEffect(()=>{
    fetchCars();
  },[]);

  const fetchCars=async()=>{
    try{
      const res=await API.get("/cars");
      setCars(res.data.data);
    }
    catch(err){
      console.log(err);
    }
  }

  const deleteCar=async(id)=>{

    const confirmDelete=window.confirm("Delete this car?");

    if(!confirmDelete) return;

    try{

      await API.delete(`/cars/${id}`);

      alert("Deleted Successfully");

      fetchCars();

    }catch(err){
      console.log(err);
    }

  }

  return(

<div className="p-8">

<h1 className="text-3xl font-bold mb-6">
All Cars
</h1>

<table className="w-full border">

<thead className="bg-blue-600 text-white">

<tr>

<th>Image</th>
<th>Company</th>
<th>Model</th>
<th>Price</th>
<th>Fuel</th>
<th>Year</th>
<th>Action</th>

</tr>

</thead>

<tbody>

{
cars.map((car)=>(

<tr key={car._id} className="text-center border-b">

<td>

<img
src={car.imageUrl}
className="w-24 h-16 object-cover mx-auto"
/>

</td>

<td>{car.company}</td>

<td>{car.model}</td>

<td>₹ {car.price}</td>

<td>{car.fuelType}</td>

<td>{car.year}</td>

<td>

<Link
to={`/admin/edit/${car._id}`}
className="bg-yellow-500 text-white px-3 py-2 rounded mr-2"
>

Edit

</Link>

<button

onClick={()=>deleteCar(car._id)}

className="bg-red-600 text-white px-3 py-2 rounded"

>

Delete

</button>

</td>

</tr>

))
}

</tbody>

</table>

</div>

  )

}

export default ViewCars;