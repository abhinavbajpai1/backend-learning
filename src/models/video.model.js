import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const VideoSchema = new Schema({
    Videofile : {
        type : String, // cloudinary
        required : true
    },
    thumbnail : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    description : {
         
        type : String,
        required : true
    
    },
    duration : {
        type : String,
        required : true
    },
    views : {
        type : Number,
        default : 0
    },
    isPublished : {
        type : Boolean,
        default : true
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
},{
    timestamps:true})

VideoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video",VideoSchema)