
const express=require("express");
const router=express.Router();
const axios=require('axios');
const { response } = require("express");
const url ='https://dummyjson.com/products';


router.get('/n',function(req,res,next){
axios.get('http://jsonplaceholder.typicode.com/post')
.then((response)=>{
   // let postArray=[];
    //response.data.map((posts)=>{
      //  postArray.push(posts)
    //});
    res.render('index',{title:'Express',posts:postArray});
}).catch((err)=>{
    console.log("ERROR");
})


});

    


    const app=express();
    app.set('view engine','ejs');
    app.set('views','views');
    app.listen("3000");
    app.use('/css',express.static('views/css'));
    app.use('/images',express.static('views/images'));
    app.use('/js',express.static('views/js'));
    app.use('/fontawesome',express.static('views/fontawesome'));
    app.get("/",(req,res)=>{
    res.render("index");
    res.end();
    });
    
    

app.get("/about",(req,res)=>{
    res.render("about");
    res.end();
    });
    app.get("/contact",(req,res)=>{
        res.render("contact");
        res.end();
     });
        app.get("/product",(req,res)=>{
            res.render("product");
            res.end();
   });
            app.get("/product2",(req,res)=>{
                res.render("product2");
                res.end();
     });
     
     app.get("/single",(req,res)=>{
        res.render("single");
        res.end();
});
app.get("/single2",(req,res)=>{
    res.render("single2");
    res.end();
});
