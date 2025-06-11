import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, // Cloudinary URL for the video file
            required: [true, "Video file is required"]
        },
        thumbnail: {
            type: String, // Cloudinary URL for the thumbnail image
            required: [true, "Thumbnail is required"]
        },
        title: {
            type: String,
            required: [true, "Title is required"],
        },
        description: {
            type: String,
            required: [true, "Description is required"],
        },
        duration: {
            type: Number, // Duration in seconds
            required: true,
        },
        veiws: {
            type: Number,
            default: 0, // Default view count is 0
        },
        isPublic: {
            type: Boolean,
            default: true, // Default visibility is public
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User", // Reference to the User model
            required: true, // Owner is required
        },
    },
    {
        timestamps: true
    }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);

