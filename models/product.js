var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var schema = new Schema({
    imagePath:{type:String,Required:true},
    title:{type:String,Required:true},
    description:{type:String,Required:true},
    price:{type:Number,Required:true}
});

module.exports=mongoose.model('Product',schema);
