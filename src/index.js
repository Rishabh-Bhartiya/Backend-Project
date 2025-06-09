import 'dotenv/config'
import connectDB from "./db/index.js";
import dotenv from "dotenv";


 
 
 connectDB()
 
 /*
 const app = express()
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR : ", error);
            throw error;
        });
        app.listen(process.env.PORT, () => {
            console.log(`App is Listening on PORT ${process.env.PORT}`);            
        });
    } catch (error) {
        console.error("ERROR :  ", error);
        throw error;
    }
})()
*/