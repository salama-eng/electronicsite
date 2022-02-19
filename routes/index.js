const express = require('express');
const router = express.Router();
const axios = require('axios').default;

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'without title' });
  try {
    let response = await axios.get('https://dummyjson.com/products');

    res.render('index', {
      products: response.data.products,
    });
  } catch (err) {
    console.log(err);
  }
});


router.get('/products', async (req, res, next) => {
  try {
    let response = await axios.get('https://dummyjson.com/products');

    res.render('products', {
      products: response.data.products,
    });
  } catch (err) {
    console.log(err);
  }
});



router.get('/categories', async (req, res, next) => {
  try {
    let response = await axios.get('https://dummyjson.com/products/categories');

    res.render('categories', {
      categories : response.data
    });
  } catch (err) {
    console.log(err);
  }
});


router.get('/products/search', async (req, res, next) => {
  try {
    const query = req.query.q;
    let response = await axios.get(
      `https://dummyjson.com/products/search?q=${query}`
    );

    res.render('search', {
      products: response.data.products,
    });
  } catch (err) {
    console.log(err);
    res.send('your search item ot found')
  }
});

router.get('/products/:id', async (req, res, next) => {
  try {
    const productId = req.params.id;
    let response = await axios.get(
      `https://dummyjson.com/products/${productId}`
    );

    res.render('single', {
      product: response.data,
    });

  } catch (err) {
    console.log(err);
    res.send('not fount (:')
  }
});


router.get("/about",(req,res)=>{
  res.render("about");
  res.end();
  });

  
  router.get("/contact",(req,res)=>{
      res.render("contact");
      res.end();
   });


   router.get("/product2",(req,res)=>{
    res.render("product2");
    res.end();
    });

   
    
    router.get("/single",(req,res)=>{
        res.render("single");
        res.end();
     });

     router.get("/single2",(req,res)=>{
      res.render("single2");
      res.end();
   });


module.exports = router;
