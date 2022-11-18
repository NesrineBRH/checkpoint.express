const express=require('express')
const app=express()
//app.use(express.static('views'))
app.use(timer)
app.set('view engine','ejs')
app.get('/contact.ejs',(req,res)=>{res.render('contact')})
app.get('/home.ejs',(req,res)=>{res.render('home')})
app.get('/services.ejs',(req,res)=>{res.render('services')})

//app.use((err, req, res, next) => { res.status(400).send(err.message) }) 

//const userRouter=require('./Routes/routes')
//app.use('/routes',userRouter)
function timer(req,res,next)
{
var d= new Date();var hour = d.getHours(); var day=d.getDay();
if (hour<17 && hour>9 && day>0 && day<6)
{next();console.log('fejfejrf')}

else 
{app.use((err, req, res, next) => { res.status(400).send(err.message) }) }

}

app.listen(3000)
