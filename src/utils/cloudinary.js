import { v4 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        // Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, { resource_type: 'auto' })

        //File upload successful, delete the local file
        console.log(`File uploaded to Cloudinary: ${response.url}`);
        return response;
        
    } catch (error) {
        fs.unlinkSync(localFilePath); // Delete the local file if upload fails
        return null;
    }
};

export { uploadOnCloudinary };