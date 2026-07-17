import Car from "../Models/car.model.js";

export const getDashboard = async (req, res) => {
  try {
    const totalCars = await Car.countDocuments();

    const latestCar = await Car.findOne().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      totalCars,
      latestCar,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};