import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
      trim: true,
    },

    model: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    fuelType: {
      type: String,
      required: true,
      enum: ["Petrol", "Diesel", "CNG", "Electric", "Hybrid"],
    },

    transmission: {
      type: String,
      required: true,
      enum: ["Manual", "Automatic"],
    },

    kilometersDriven: {
      type: Number,
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },


    // New Fields

    condition: {
      type: String,
      enum: ["Used", "Certified", "Luxury"],
      default: "Used",
    },


    owner: {
      type: String,
      enum: [
        "1st Owner",
        "2nd Owner",
        "3rd Owner",
        "Multiple Owners"
      ],
      default: "1st Owner",
    },


    location: {
      type: String,
      required: true,
      trim: true,
    },


    registrationYear: {
      type: Number,
    },


    color: {
      type: String,
    },


    insurance: {
      type: String,
      enum: [
        "Valid",
        "Expired"
      ],
      default: "Valid",
    },
    sellerName: {
  type: String,
},

sellerEmail: {
  type: String,
},

sellerPhone: {
  type: String,
},

status: {
  type: String,
  enum: ["Pending", "Approved", "Rejected"],
  default: "Approved",
},

isSellRequest: {
  type: Boolean,
  default: false,
},

seller: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Admin",
},
  },
  {
    timestamps: true,
  }
);


const Car = mongoose.model("Car", carSchema);

export default Car;