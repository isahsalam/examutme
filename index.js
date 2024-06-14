const express= require("express")
const PORT= 6666
const app = express()
const mongoose=require("mongoose")


app.use(express.json())
mongoose.connect("mongoose")
app.listen(PORT,()=>{
    console.log("server is running on PORT")
})

const scoreSchema=new mongoose.Schema({
    surName:{type:String,required:[true,"kindly fill your first name"]},
    otherName:{type:String,required:[true,"kindly fill your other name"]},
    firstName:{type:String,required:[true,"kindly fill your other name"]},
    birthYear:{type:Number,required:[true,"kindly fill your first name"]},
    age:{type:Number},
    sex:{type:String, enum:["male","female"]},
    state:{type:String, required:[true,"insert your state of origin"]},
    subjects:{type:Array,required:[true,"please filln in all your subject correctly"]},
    scores:{type:Object,required:[true,"kindly input your definite score"]},
    total:{type:Number},
    isPassed:{type:Boolean,default:function(){
if(this.total<200){
    return false
}else{
    return true
}



    }}
},{timestamps:true})
const scoreModel=mongoose.model("post utme score",scoreSchema)
// CREATE FIRST USER
app.post("/createuser",async(req,res)=>{
    const{firstName,lastName,birthYear,sex,state,subjects,scores}
    try{ 


    }catch (error){
        res.status(500)
    }
// })
// (SO HELP ME GOD`FIRST```` CONNECT YOUR EXPRESS TO SERVER)

const express= require("express")
const PORT=2244

const app=express()
app.get (express.json())
app.listen(PORT,()=>{

    console.log(`server is connwcted succesfully to ${PORT}`)
})
