const express = require('express')

const app = express()

app.use('/',(req,res)=>{
   res.send('Namaste Souvik')
})

app.use('/test',(req,res)=>{
   res.send('Test server is running')
})

app.use('/dashboard',(req,res)=>{
   res.send('Dasboard server is running')
})

app.use((req,res)=>{
  res.send('Hello from server')
})

app.listen(3000,()=>{
    console.log('Server is succesfully lisetning on port 3000');
    
})