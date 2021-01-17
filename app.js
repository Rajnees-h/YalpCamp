const app = require('express')();
const port = process.env.PORT || 3000;

app.set('view engine','ejs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));


var campgrounds = [
    {name:"First Name" , image:"https://images-na.ssl-images-amazon.com/images/I/71GveW4leGL._SX355_.jpg"},
    {name:"Second Name" , image:"https://www.oregonlive.com/resizer/0FVk7bpZHdb--Lw10Y-443t0ylM=/450x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/DUNWFNGOAVCRLAHO4ZPTBKNJEM.jpg"},
    {name:"Third Name" , image:"https://exp.cdn-hotels.com/hotels/46000000/45190000/45184700/45184623/b30852a9_z.jpg?impolicy=fcrop&w=500&h=333&q=high"},

    {name:"First Name" , image:"https://images-na.ssl-images-amazon.com/images/I/71GveW4leGL._SX355_.jpg"},
    {name:"Second Name" , image:"https://st.depositphotos.com/1203257/1762/i/600/depositphotos_17623797-stock-photo-the-campground.jpg"},
    {name:"Third Name" , image:"https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGdyb3VuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"},

    {name:"First Name" , image:"https://images.unsplash.com/photo-1531116495593-07e38d7f4872?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"},
    {name:"Second Name" , image:"https://st.depositphotos.com/1203257/1762/i/600/depositphotos_17623797-stock-photo-the-campground.jpg"},
    {name:"Third Name" , image:"https://images-na.ssl-images-amazon.com/images/I/71GveW4leGL._SX355_.jpg"},

    {name:"First Name" , image:"https://images-na.ssl-images-amazon.com/images/I/71GveW4leGL._SX355_.jpg"},
    {name:"Second Name" , image:"https://media-cdn.tripadvisor.com/media/photo-s/0e/74/d1/48/bridge-bay-campground.jpg"},
    {name:"Third Name" , image:"https://images-na.ssl-images-amazon.com/images/I/71GveW4leGL._SX355_.jpg"},

    {name:"First Name" , image:"https://images-na.ssl-images-amazon.com/images/I/71GveW4leGL._SX355_.jpg"},
    {name:"Second Name" , image:"https://st.depositphotos.com/1203257/1762/i/600/depositphotos_17623797-stock-photo-the-campground.jpg"},
    {name:"Third Name" , image:"https://images-na.ssl-images-amazon.com/images/I/71GveW4leGL._SX355_.jpg"},
];

app.get('/', function(req, res){
    res.render('home');
});

app.get('/campground', function(req , res){
    res.render('campground',{campgrounds:campgrounds});
});

app.post('/campground', function(req , res){
    var name = req.body.name;
    var image = req.body.image;
    var newCamp = {name:name , image:image};
    campgrounds.push(newCamp);

    res.redirect('/campground');

});

app.get('/campground/new', function(req, res){
    res.render('new');
});



app.listen(port, function(req, res){
    console.log('YELPcamp is started on port ', port);
});
