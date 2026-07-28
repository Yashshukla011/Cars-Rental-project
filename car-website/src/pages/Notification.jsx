import { useEffect, useState } from "react";
import API from "../api/axios";

const Notifications = () => {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {

    try {

      const res = await API.get("/notifications");

      setNotifications(res.data.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Notifications
      </h1>

      {
        notifications.length === 0 ?

        <h2>No Notifications</h2>

        :

        notifications.map((item)=>(

          <div
          key={item._id}
          className="bg-white shadow-lg rounded-xl p-5 mb-4"
          >

            <h2 className="font-bold text-xl">
              {item.name}
            </h2>

            <p>{item.message}</p>

            <p className="text-blue-600 mt-2">
              Status : {item.status}
            </p>

          </div>

        ))
      }

    </div>

  );

};

export default Notifications;