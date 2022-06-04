import mongoose, { Schema } from 'mongoose';

// User Schema For Post Data
const useSchema: Schema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  phone: {
    type: Number,
    require: true,
    unique: true
  },
  address: {
    type: String,
    require: true
  }
},
  {
    timestamps: true
  })

const User = mongoose.model('User', useSchema);
export default User;