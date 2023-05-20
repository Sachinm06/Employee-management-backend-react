const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/EMS')


//Model creation

const Employee=mongoose.model('employee',
{
    id:String,
    name:String,
    designation:String,
    salary:Number,
    experience:Number
})


module.exports={
    Employee
}