import mongoose from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: mongoose.Schema.Types.ObjectId,   // One Who is Subscribing
        ref: "User",
    },
    channel: {
        type: mongoose.Schema.Types.ObjectId,   // One To Whom 'Subscriber' is Subscribing
        ref: "User"
    }
}, {timestamps: true});

export const Subscription = mongoose.model("Subscription", subscriptionSchema);