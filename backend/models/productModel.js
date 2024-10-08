const mongoose=require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter Product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true, "Please Enter Product Description"]
    }
    ,
    price:{
        type:Number,
        required:[true, "Please Enter Product Price"],
        maxLength:[8, "Price connot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
        
    },
    image:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }],
    category:{
        type:String,
        required:[true, "Please Enter Product Category"]

    },
    Stock:{
        type:String,
        required:[true, "Please Enter Product Stock"],
        maxLength:[4, "Stock cannot exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
       {
        name:{
            type:String,
            required:true

        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            
        }
       }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("Product", productSchema)