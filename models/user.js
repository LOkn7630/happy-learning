var mongoose=require("mongoose");
let Schema= mongoose.Schema

let bookmarkSchema=new Schema({
	video:{type:mongoose.ObjectId, ref:'Media'},
	timestamp:{type:String},
	text:{type:String},
})

let courseSchema=new Schema({
	course:{type:mongoose.ObjectId, ref:'Course'},
	completed_videos:[{type:mongoose.ObjectId, ref:'Media'}],
	last_view: new Schema({
		video:{type:mongoose.ObjectId, ref:'Media'},
		timestamp:{type:String}

	}),
	Bookmarks:[bookmarkSchema]
})

let userSchema= new Schema({
	outlookId: String,
    name: String,
    email: String,
	accessToken:  String,
	isAdmin: {type: Boolean, default: false},
	enrolled_courses:[courseSchema],
},{
	versionKey: false // set to false then it wont create in mongodb
})

module.exports=mongoose.model("User", userSchema);