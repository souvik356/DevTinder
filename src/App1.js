const express = require('express')
const app = express()


// app.use('/user',(req,res,next)=>{
//     next()
//     console.log('Route handler 1');
//     // res.send('Hi this is Route1')
// },(req,res,next)=>{
//     console.log('Route handler 2');
//     res.send('Hi this is Route2')
// })

// app.get('/',(req,res,next)=>{
//    console.log('Entry Point');
//    next()
// })

// // middleware :- middleware are those which comes in between the method chain
// app.get('/user',(req,res,next)=>{
//     console.log('Route 1');
//     // res.send('Route 1 response')
//     next()
// })

// // middleware
// app.get('/user',(req,res,next)=>{
//     console.log('Route 2');
//     // res.send('Route 2 response')
//     next()
// })
// // middleware
// app.get('/user',(req,res,next)=>{
//    console.log('Route 3');
//    next()
// },(req,res)=>{
//    console.log('Route 4');
//    res.send('Route 4 is responding')
// })

// /*
//   Route 1
//   Route 1 response (Postman)
//   Route 2
//   Error in line 22
// */

// check whether only admin can see the data

const { AdminAuth,userAuth } = require('./middleware/Auth')

app.use('/admin', AdminAuth)

app.get('/admin/getUserData',(req,res)=>{
     res.send("All users data is fetched and given to admin")
})

app.use('/user', userAuth)

app.get('/user/getData',(req,res)=>{
    res.send("All data is sent to user")
})


app.listen(7777,()=>{
    console.log('Server is running on port number 7777');
})

/*
  Route handler 1
  Route handler 2
  Route handler 3
  Route handler 4
*/