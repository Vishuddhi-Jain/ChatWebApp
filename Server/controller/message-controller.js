import Message from '../model/messageSchema.js';
export const addMessages = async(request,response,next)=>{
    try{
        const{from,to,message}=request.body;
        const data= await Message.create({
            message:{text:message},
            users:[from,to],
            sender:from,
        })
        if(data){
            return response.json({msg:"Message added successfully"})
        }
        return response.json({msg:"Fail to added message in database"})
    }
    catch(ex){
        next(ex);
    }
}
export const getAllMessages= async(request,response,next)=>{
    try{
    const{from,to}=request.body;
    const messages= await Message.find({
        users:{
            $all : [from,to],
        },
    }).sort({updatedAt:1})
    const projectmessages = messages.map((msg)=>{
        return {fromself:msg.sender.toString()===from,
            message:msg.message.text,}
        
    })
     response.json(projectmessages)
}
catch(ex){
    next(ex);
}
}