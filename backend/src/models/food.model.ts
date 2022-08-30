import { Schema, model } from "mongoose";

export interface Food {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string[];
  restaurant: string;
  quantity: number;
}

export const FoodSchema = new Schema<Food>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: [String], required: true },
  restaurant: { type: String, required: true },
  quantity: { type: Number, required: true },
},{
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    },
    timestamps:true
}
);

export const FoodModel = model<Food>('food', FoodSchema);
