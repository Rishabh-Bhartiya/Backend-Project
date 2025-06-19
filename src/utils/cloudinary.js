import cloudinaryModule from 'cloudinary';
import fs from 'fs';

const cloudinary = cloudinaryModule.v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      // console.log("❌ localFilePath is empty");
      return null;
    }

    // console.log("📤 Uploading to Cloudinary from:", localFilePath);

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto',
    });

    // console.log("✅ Cloudinary upload response:", response);

  // Intentionally remove the local file after upload
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    // console.log("RESPONSE", response);
    
    return response;

  } catch (error) {
    console.error("❌ Cloudinary Upload Error:", error);

    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return null;
  }
};


export { uploadOnCloudinary };
