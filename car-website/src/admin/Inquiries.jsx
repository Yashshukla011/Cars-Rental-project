import { useEffect, useState } from "react";
import API from "../api/axios";

const Inquiries = () => {

  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchInquiries();
  }, []);


const fetchInquiries = async () => {
  setLoading(true);

  try {
    const res = await API.get("/inquiries");
    console.log("Inquiry Response:", res.data);
    setInquiries(res.data.data || []);
  } catch (error) {
    console.log("Inquiry Fetch Error:", error.response?.data || error.message);
  } finally {
    setLoading(false);
  }
};

  const updateStatus = async (id, status) => {

    try {

      await API.put(`/inquiries/${id}`, {
        status: status
      });


      fetchInquiries();


    } catch (error) {

      console.log("Update Error:", error);

    }

  };



  const deleteInquiry = async (id) => {

    try {

      await API.delete(`/inquiries/${id}`);

      fetchInquiries();


    } catch(error) {

      console.log("Delete Error:", error);

    }

  };



  if(loading){

    return (
      <h1 className="text-center text-2xl mt-10">
        Loading Inquiries...
      </h1>
    );

  }



  return (

    <div className="p-8">


      <h1 className="text-3xl font-bold mb-6">
        Customer Inquiries
      </h1>



      {
        inquiries.length === 0 ? (

          <h2 className="text-xl text-gray-500">
            No inquiries found
          </h2>

        ) : (


          <div className="grid gap-5">


          {
            inquiries.map((item)=>(


              <div
              key={item._id}
              className="bg-white shadow-lg rounded-xl p-6"
              >


                <h2 className="text-2xl font-bold">
                  {item.name}
                </h2>


                <p className="mt-2">
                  Email : {item.email}
                </p>


                <p>
                  Phone : {item.phone}
                </p>


                <p>
                  Message : {item.message}
                </p>


                <p>
                  Car : {item.car?.company} {item.car?.model}
                </p>



                <p className="mt-3 font-bold text-blue-600">
                  Status : {item.status}
                </p>



                <div className="flex gap-3 mt-5">


                  <button
                  onClick={() =>
                    updateStatus(item._id,"Contacted")
                  }
                  className="bg-green-600 text-white px-5 py-2 rounded-lg"
                  >
                    Contacted
                  </button>



                  <button
                  onClick={() =>
                    updateStatus(item._id,"Sold")
                  }
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg"
                  >
                    Sold
                  </button>



                  <button
                  onClick={() =>
                    deleteInquiry(item._id)
                  }
                  className="bg-red-600 text-white px-5 py-2 rounded-lg"
                  >
                    Delete
                  </button>



                </div>


              </div>


            ))
          }


          </div>


        )
      }



    </div>

  );

};


export default Inquiries;
