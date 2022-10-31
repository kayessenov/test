const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");
require("dotenv").config();
require("express-async-errors");
const { booking } = require("./prisma");
const prisma = require("./prisma");
const dateHelp = require("./utils/date")
const date = require("./utils/date");
const sms = require("./utils/sms");
const {Worker} = require("worker_threads");

const app = express();

app.set('view engine', 'ejs')

app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(express.static("public"));

app.use(cors());

app.use('/', routes);


app.get("/", (req, res) => {
    res.send('ok')
});

app.use((err, req, res, next) => {
  
    console.error(req, err);
  
    if (err instanceof Error) {
        return res.status(500).send({success: false, data: err.message});
    } else {
        return res.status(500).send({success: false, data: err});
    }
   })

(async () => {
    const worker = new Worker("./worker.js", {workerData: 200});

    worker.on("message", (msg) => {
        console.log("message from worker", msg)
    })

    // sms(`Верните книгу ${Abay}`, findByExp.User.phoneNumber)
    console.log("test");

})()




app.listen(process.env.PORT, () => {
	console.log(`[Express] Started on ${process.env.PORT}`);
});
