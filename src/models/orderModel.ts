import mongoose, { Schema } from "mongoose";

const orderSchema: Schema = new Schema({
  desctiption: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true
  },
  orderId: {
    type: Number,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
},
  {
    timestamps: true
  })

const Order = mongoose.model('Orders', orderSchema);

export default Order;