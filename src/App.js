const express = require('express')

const app = express()

// app.use('/user',(req,res)=>{
//    res.send('HAHAHAH')
// })

app.get('/user',(req,res)=>{
    console.log(req.query);
   res.send({firstName: 'Souvik',lastName: 'Roy'})
})

// here after slash it must end with man
app.get(/.*man$/,(req,res)=>{
   res.send("Hi your regex is here")
})

// + means we can write as many we can
app.get('/hel+o',(req,res)=>{
   res.send("Hey it is hello")
})

//  '*' means we write anything in between
app.get('/nam*e',(req,res)=>{
   res.send('Hey this is name')
})

// '?' here means that /kih , /kish both will work
// /k(is)?h means that /kh , /kish both will work
app.get('/k(is)?h',(req,res)=>{
   res.send('Hey this is Kishaya')
})

// app.get('/user/:userId/:password',(req,res)=>{
    // console.log(req.query);
//     console.log(req.params);
    
//    res.send({first_name:'Souvik',last_name:'Roy'})
// })

// app.get(/.*fly/,(req,res)=>{
//     res.send({firstName: 'Souvik',lastName: 'Roy'})
//   })

// app.post('/user',(req,res)=>{
//    res.send('Data posted succesfully')
// })

// app.delete('/user',(req,res)=>{
//     res.send('Data deleted succesfully')
// })

app.use('/test',(req,res)=>{
    res.send('Test 2 server is running')
})

app.listen(3000,()=>{
    console.log('Server is succesfully lisetning on port 3000');
    
})