import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
   channelUsers:[
 {   
     username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    image:{
        type:String     
    }
}  
   ],
   message:[
       {
           senderemail:{
            type:String,
            required:true,
            trim:true,
            unique:true,
           },
           message:{
            type:String, 
           }
       }
   ]
   
    
});
const Channel = mongoose.model('channel',channelSchema);
export default Channel;