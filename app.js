
let bodyParser = require('body-parser')
let mysql = require('mysql')
let express = require("express");
let app = express();
var path = require('path')
let urlencodedParser = bodyParser.urlencoded({ extended: true });
let daddyA = require('./data')
const PORT = process.env.PORT || 3000;

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Passwordsucks!1',
  database: 'test_db'
});





// app.use(Express.static(path.join(__dirname, './index')));
connection.connect()


app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,"./html/index.html"))
})

app.listen(PORT,()=>{
  console.log('listening in on port' + PORT)
})

app.post('/',urlencodedParser,(req,res)=>{
  getData(req.body)
  res.redirect('/landing')
})


app.get('/landing',(req,res)=>{
  res.send(daddyA)
})


let getData = x =>{
  let keysA = Object.keys(x);
  let empty = [];
  let sum = 0;
  for(var i = 0; i < keysA.length; i++){
    if(keysA[i].charAt(0)==="b"){
      empty.push(x[keysA[i]])
    }
  }
  for(var i = 0; i < empty.length; i ++){
    sum+= Number(empty[i]);
  }
  let friendSum=compareSum(sum);
  console.log(friendSum)
  let matchedIndex=getUserInfo(friendSum)

  let user = new Person(x.Fname,x.Lname,x.email,empty,sum);
  daddyA.push(user);

  app.get('/results',(req,res)=>{
    let fname = daddyA[matchedIndex].firstname;
    let lname = daddyA[matchedIndex].lastname;
    let email = daddyA[matchedIndex].email;

    res.sendFile(path.join(__dirname,'./html/result.html'))

    
    
  })
}


function Person(fname,lname,email,scores,sum){
  this.firstname = fname;
  this.lastname = lname;
  this.email = email;
  this.scores = scores;
  this.sum = sum;
}

let compareSum = x =>{
  let emp = []
  for(var i = 0; i <daddyA.length;i++){
    emp.push(daddyA[i].sum)
  }
  emp.push(x)

 emp.sort((a,b)=>{return a-b})

 let indexStart = emp.indexOf(x);
 let lower = indexStart-1;
 let upper = indexStart+1;
 if(upper===emp.length){
   let matchedVal = emp[lower];
   return matchedVal
 }
 else if(lower === -1){
   let matchedVal = emp[upper];
   return matchedVal;
 }
 else{
   let lowerV = emp[lower];
   let upperV = emp[upper];
   let lowerA = x-lowerV;
   let upperA = Math.abs(x-upperV)

   if(upperA >= lowerA){
    let matchedVal = lowerV
    return matchedVal;
   }
   else{
     let matchedVal = upperV
     return matchedVal;
   }
   
 }


}

let getUserInfo = (x)=>{
  for(var i = 0; i< daddyA.length; i++){
    if(daddyA[i].sum === x){
      let t = i;
      return t;
    }
  }
}

