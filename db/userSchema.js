import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    enrollno: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    },
    comment: {
        type: String
    }
})


const usermodel = mongoose.model('user', userSchema);
export default usermodel