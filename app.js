
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




const PORT = process.env.PORT || 3100;
app.get("/", (req, res) => {
  // res.send("is this even working")
  res.sendFile(path.join(__dirname, "./index.html"));
});





app.listen(PORT, () => {
  console.log("listening on port" + PORT);
});

// app.post('/', urlencodedParser, (req, res)=> {
//   let keysA = Object.keys(req.body)
//   console.log(keysA)
//   let num = 0
//   for (var i = 0; i < keysA.length; i++) {
//     if (keysA[i] !== "test") {
//       num += Number(req.body[keysA[i]])
//     }
//   }
//   console.log(req.body.test)

//   let query = connection.query(`INSERT INTO users(name,scores)VALUES('${req.body.test}',${num})`, (err, res) => {
//     if (err) throw err;

    
//   })
  
//   console.log(req.body)
// })

