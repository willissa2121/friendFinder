
let bodyParser = require('body-parser')
let mysql = require('mysql')
let express = require("express");
let app = express();
var path = require('path')
let urlencodedParser = bodyParser.urlencoded({ extended: true })


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Passwordsucks!1',
  database: 'test_db'
});





// app.use(Express.static(path.join(__dirname, './index')));
connection.connect()


app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3100;
app.get("/", (req, res) => {
  // res.send("is this even working")
  res.sendFile(path.join(__dirname, "./html/login.html"));
});

app.get('/quiz', (req, res) => {
  res.sendFile(path.join(__dirname, './html/index.html'))
})


app.post("/", urlencodedParser, (req, res) => {
  if (!req.body.Fname || !req.body.Lname) {
    res.redirect('/')
  }
  else {

    let fname = req.body.Fname;
    let lname = req.body.Lname;
    let email = req.body.email;

    let query = connection.query(`INSERT INTO users(first_name,last_name,email)VALUES('${fname}','${lname}', '${email}')`, (err, res1) => {
      if (err) throw err;
      res.redirect('/quiz')

    })
  }

})


app.listen(PORT, () => {
  console.log("listening on port" + PORT);
});

app.post('/quiz', urlencodedParser, (req, res) => {

  let keysA = Object.keys(req.body)
  let empty = []
  let num = 0
  for (var i = 0; i < keysA.length; i++) {


    empty.push(Number(req.body[keysA[i]]))
    num += Number(req.body[keysA[i]])

  }
  console.log(empty)


  var query = connection.query(
    `INSERT INTO scores(q1,q2,q3,q4,q5)VALUES(${empty[0]},${empty[1]},${empty[2]},${empty[3]},${empty[4]})`, (err, res1) => {
      if (err) throw err;
      res.redirect('/test')
      createObject()
    })

})


let createObject = () => {

  
  let query = connection.query('SELECT id from users', (err, res) => {
    let empty = []
    let bigO = []
    
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      empty.push(res[i].id)
    }
    for(var k = 0; k < empty.length; k++){
      let query = connection.query(`SELECT * FROM scores INNER JOIN users ON users.id=scores.id WHERE users.id=${empty[k]} `,(err,res1)=>{
        if(err)throw err;
        let user = new Account(res1[0].first_name,res1[0].first_name,res1[0].email,)
        app.get('/test', (req, res) => {
          res.send(res1)
        })
        
      })
    }

  })
}

function Account(first, last, email, scores) {
  this.firstName = first;
  this.lastName = last;
  this.email = email;
  this.scores = scores;
}





