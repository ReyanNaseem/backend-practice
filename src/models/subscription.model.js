import { Schema, model } from "mongoose";

const subscriptionSchema = new Schema(
    {
        subscriber: {
            type: Schema.Types.ObjectId, //okne who is subscribing
            ref: "User"
        },
        channel: {
            type: Schema.Types.ObjectId, //okne to whom 'subscriber' is subscribing
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

export const Subscription = model("Subscription", subscriptionSchema);