import { useEffect, useState } from "react";
import API from "../api/axios";
import { FaCar, FaChartLine, FaMoneyBill } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
const Dashboard = () => {

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();


  useEffect(() => {
    fetchCars();
  }, []);


  const fetchCars = async () => {

    try {

      const res = await API.get("/cars");

      setCars(res.data.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };


  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("admin");

    navigate("/admin/login");

  };


  const averagePrice = cars.length
    ? Math.floor(
        cars.reduce(
          (sum, car) => sum + Number(car.price),
          0
        ) / cars.length
      )
    : 0;



  return (

<div className="min-h-screen bg-gray-100">


{/* Header */}

<div className="bg-white shadow px-8 py-5 flex justify-between items-center">


<h1 className="text-3xl font-bold text-gray-800">
Admin Dashboard
</h1>


{/* <button

onClick={logout}

className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"

>
Logout
</button> */}


</div>



<div className="p-8">


{/* Stats Cards */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">


<div className="bg-white rounded-xl shadow p-6">

<FaCar className="text-blue-600 text-5xl mb-4"/>

<h2 className="text-4xl font-bold">
{cars.length}
</h2>

<p className="text-gray-500">
Total Cars
</p>

</div>



<div className="bg-green-600 text-white rounded-xl shadow p-6">

<FaChartLine className="text-5xl mb-4"/>


<h2 className="text-xl">
Latest Car
</h2>


<h1 className="text-3xl font-bold mt-3">

{
cars.length
?
cars[cars.length-1].company
:
"No Cars"
}

</h1>


<p>
{
cars.length
?
cars[cars.length-1].model
:
""
}
</p>


</div>




<div className="bg-yellow-400 rounded-xl shadow p-6">

<FaMoneyBill className="text-5xl mb-4"/>


<h2 className="text-xl font-semibold">
Average Price
</h2>


<h1 className="text-3xl font-bold mt-3">

₹ {averagePrice.toLocaleString()}

</h1>


</div>



</div>





{/* Buttons */}

<div className="flex flex-wrap gap-4 mt-8">


<Link

to="/admin/add-car"

className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"

>
+ Add Car
</Link>



<Link

to="/admin/view-cars"

className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"

>
View Cars
</Link>




<Link

to="/admin/sell-requests"

className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700"

>
Sell Requests
</Link>
<Link
to="/admin/inquiries"
className="
bg-white
shadow-lg
rounded-xl
p-6
hover:shadow-2xl
transition
flex
items-center
gap-4
"
>

<div className="
bg-blue-600
text-white
p-4
rounded-full
">

<FaEnvelope className="text-2xl"/>

</div>


<div>

<h2 className="text-xl font-bold">
Customer Inquiries
</h2>

<p className="text-gray-500">
View customer requests
</p>

</div>


</Link>

</div>





{/* Table */}


<div className="bg-white mt-10 rounded-xl shadow overflow-hidden">


<div className="bg-blue-600 text-white px-6 py-4">

<h2 className="text-2xl font-bold">
Recently Added Cars
</h2>

</div>



{
loading ?

<h2 className="text-center py-10">
Loading...
</h2>


:


<table className="w-full">


<thead className="bg-gray-100">

<tr>

<th className="py-4">
Image
</th>

<th>
Company
</th>

<th>
Model
</th>

<th>
Price
</th>

<th>
Fuel
</th>

<th>
Year
</th>

</tr>

</thead>




<tbody>


{
cars
.slice()
.reverse()
.slice(0,5)
.map((car)=>(


<tr

key={car._id}

className="border-b text-center hover:bg-gray-50"

>


<td className="py-3">

<img

src={car.imageUrl}

className="w-24 h-16 rounded object-cover mx-auto"

/>

</td>


<td>
{car.company}
</td>


<td>
{car.model}
</td>


<td>
₹ {Number(car.price).toLocaleString()}
</td>


<td>
{car.fuelType}
</td>


<td>
{car.year}
</td>


</tr>


))

}



</tbody>



</table>


}



</div>



</div>


</div>

  );

};


export default Dashboard;