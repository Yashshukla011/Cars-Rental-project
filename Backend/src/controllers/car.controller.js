import Car from "../Models/car.model.js";

const getCars = async (req, res) => {
  try {
    const cars = await Car.find({
  status: "Approved",
});

    res.status(200).json({
      success: true,
      totalCars: cars.length,
      data: cars,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    res.status(200).json({
      success: true,
      data: car,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const addCar = async (req, res) => {
  try {
    const car = await Car.create(req.body);

    res.status(201).json({
      success: true,
      message: "Car Added Successfully",
      data: car,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getSellRequests = async (req, res) => {

  try {

    const cars = await Car.find({
      isSellRequest: true,
    });

    res.status(200).json({
      success: true,
      data: cars,
    });

  } catch (error) {
   console.log(error); 
    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
const approveCar = async (req, res) => {

  try {

    const car = await Car.findByIdAndUpdate(
      req.params.id,
      {
        status: "Approved",
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Car Approved Successfully",
      data: car,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
const rejectCar = async (req, res) => {

  try {

    const car = await Car.findByIdAndUpdate(
      req.params.id,
      {
        status: "Rejected",
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Car Rejected",
      data: car,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
const sellCar = async (req, res) => {
  try {

    const car = await Car.create({
      ...req.body,
         seller: req.admin.id,
      status: "Pending",
      isSellRequest: true,
    });

    res.status(201).json({
      success: true,
      message: "Sell Request Submitted Successfully",
      data: car,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
const updateCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Car Updated Successfully",
      data: car,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);

    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Car Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const searchCars = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const cars = await Car.find({
      $or: [
        { company: { $regex: keyword, $options: "i" } },
        { model: { $regex: keyword, $options: "i" } },
      ],
    });

    res.status(200).json({
      success: true,
      totalCars: cars.length,
      data: cars,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getMyCars = async (req, res) => {
  try {

    console.log("Logged User:", req.admin);

    const cars = await Car.find({
      seller: req.admin._id,
    });

    console.log("Cars:", cars);

    res.json({
      success: true,
      data: cars,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export {
  getCars,
  getCarById,
  addCar,
  updateCar,
  deleteCar,
  sellCar,
  getSellRequests,
  approveCar,
  rejectCar,
};