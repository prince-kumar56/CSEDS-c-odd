const express=require('express');
const app=express();
const port=8000;


const student =[{
    id: 1,
    name: "prince",
    class:"B tech"
}
]
app.get('/',(req,res)=>{
    res.send('HOME');
})


app.get('/about',(req,res)=>{
    res.send('hi this is my about us page');
})

app.get('/img',(req,res)=>{
    res.send('<img src="https://media.istockphoto.com/id/1681388313/vector/cute-baby-panda-cartoon-on-white-background.jpg?s=612x612&w=0&k=20&c=qFrzn8TqONiSfwevvkYhys1z80NAmDfw3o-HRdwX0d8=" alt="server image"/>');
    
})


app.listen(port,()=>{
    console.log(`Server is run at :https://localhost:${port}`);
})