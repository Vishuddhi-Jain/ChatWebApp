import Channel from '../model/channelSchema.js';
export const createChannel = async(request,response)=>{
    try{       
    const channel = request.body;
            const newchannel = new Channel (channel);
            await newchannel.save();
            return response.status(200).json("Channel created Successfully");
    
    }catch(error){
        console.log('Error :',error.message);
    }
}
