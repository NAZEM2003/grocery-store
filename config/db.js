const { default: mongoose } = require("mongoose");

const connectToDB = async() => {
    try{
        if(mongoose.connections[0].readyState){
            return true
        }
        mongoose.connect(process.env.MONGODB_URL);
        return true
    }
    catch(err){
        console.log(err);
    }
};
export default connectToDB;