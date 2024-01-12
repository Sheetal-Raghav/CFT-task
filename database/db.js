const mongoose=require('mongoose')

function connect(){
    mongoose.connect("mongodb+srv://CFT-backend-task:12345@cluster0.qdqun07.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log("database connected successfully")
    })
    .catch((err)=>{
        console.log("there is some error:",err)
    })
}

module.exports=connect;
