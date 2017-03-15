var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
    imagePath:'http://3.bp.blogspot.com/-HMxziJtnz9c/ULrQVN4Jm5I/AAAAAAAAAsk/fEuJTRsEh2w/s1600/11.jpg',
    title:'Jordan Carver',
    description:'abcdfef',
        price:15
    }),
    new Product({
        imagePath:'https://kdmag.files.wordpress.com/2012/12/jordan-carver-knuckle-dragger-magazine-glamour-model-24.jpg',
        title:'Jordan Carver',
        description:'efsfsf',
        price:20
    }),
    new Product({
        imagePath:'http://www3.pictures.zimbio.com/fp/Abigail+Ratchford+Sexy+Photo+Shoot+Memorial+dPAFnufYSNkl.jpg',
        title:'Abigail Ratchford',
        description:'sfsgdfgfgsf',
        price:12
    }),
    new Product({
        imagePath:'http://urbasm.org/wp-content/uploads/2015/12/final-marilyn-monroe-1-e1449192424240.jpg',
        title:'Abigail Ratchford',
        description:'fsdfsdfsdghg',
        price:10
    }),
    new Product({
        imagePath:'http://drunkenstepfather.com/wp-content/uploads/2013/12/Helen_Flanagan_Special_NutsUK_131213_08.jpg',
        title:'Henen Flanagan',
        description:'sdgffhergwgrhreh',
        price:25
    }),
    new Product({
        imagePath:'http://www.naaktsporten.be/u/20110727/naaktsportfoto88.jpg',
        title:'Naakt Sport',
        description:'hertarejrys',
        price:17
    }),
    new Product({
        imagePath:'http://images.ftvgirlsfan.com/wp-content/uploads/2016/10/ftv-girls-michele-on-remote-trail-4.jpg',
        title:'Michele Amour',
        description:'rfhgbekfbwekfjbw',
        price:10
    }),
    new Product({
        imagePath:'http://image.ournakedgirls.com/Un0L1rO.jpg',
        title:'Kinga',
        description:'kjgbwkrjbgwejbfwlejf',
        price:10
    }),
    new Product({
        imagePath:'http://cnnude.com/uploads/allimg/160730/1-160I01J351.jpg',
        title:'Mei Qi',
        description:'wejfbwljgwlekbglwgb',
        price:15
    })
    ];

var done=0;
for(var i=0;i<products.length;i++)
{
    products[i].save(function(err,result){
        done++;
        if(done===products.length){
            exit();
        }
    });
}
var exit=function() {
    mongoose.disconnect();
}
