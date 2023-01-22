import mongoose,{ Schema } from "mongoose";

export const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imageURL:{
        type: String,
        required: true
    },
    createdAt:{
        type: String,
        default: Date.now
    }
});

export const ProductModel = mongoose.model("Product", ProductSchema);