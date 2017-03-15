var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
    imagePath:'http://www.yes2soccer.com/wp-content/uploads/2014/12/519U3MsMPfL.jpg',
    title:'Nike Mercurial Fade Soccer Ball',
    description:'The Nike Mercurial Fade Football features high-contrast graphics for easier visual tracking and a machine-stitched casing for superior touch',
        price:15
    }),
    new Product({
        imagePath:'http://www.ua.all.biz/img/ua/catalog/2071685.jpeg',
        title:'Adidas Goalkeeper Gloves Latex',
        description:'Goalie Gloves for Kids/ Junionrs Soccer Accessories Equipment',
        price:20
    }),
    new Product({
        imagePath:'https://static.kaymu.pk/p/other-5493-9135401-1-zoom.jpg',
        title:'Nike CR7 White Blue Futsal Gripper 2',
        description:'New Ronaldo Futsal shoes ',
        price:12
    }),
    new Product({
        imagePath:'https://static.kaymu.pk/p/nike-4498-9959201-1-product.jpg',
        title:'Nike Dunk SB 2012 ',
        description:'Nike Dunk SB 2012 New High Cut Mens Shoes',
        price:10
    }),
    new Product({
        imagePath:'http://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/17373/m/m48551-1._reebok-running-shoes-active-sports-lp-ii-product-code-m48551-.jpg',
        title:'Reebok Kobe 11 XI',
        description:'016 Reebok Kobe 11 XI Elite Low Mens Running Shoes ',
        price:25
    }),
    new Product({
        imagePath:'https://static.kaymu.pk/p/other-5624-0077002-1-product.jpg',
        title:'Naakt Sport Tennis Ball',
        description:'12 Pcs Of Adidas Tennis Ball (WS)',
        price:17
    }),
    new Product({
        imagePath:'https://s-media-cache-ak0.pinimg.com/736x/a8/8a/94/a88a94dee2fefc9072c337e1bad27937.jpg',
        title:'Manchester United FC T-shirt',
        description:'Manchester United FC T-shirt for Men',
        price:10
    }),
    new Product({
        imagePath:'https://static.daraz.lk/p/other-7030-1414202-1-product.jpg',
        title:'Kinga',
        description:'Childrens Tri Scooter With Lighting Up Wheels - Red',
        price:10
    }),
    new Product({
        imagePath:'https://static.kaymu.pk/p/adidas-0102-260562-1-product.jpg',
        title:'Adidas Track suit',
        description:'Track suit - Men',
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
