import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); 

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to the database");
});

app.get("/", (req, res) => {
    const sql = "SELECT * FROM student"; 
    db.query(sql, (err, result) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ Message: "Error inside server" });
        }
        return res.json(result);
    });
});


app.post("/student", (req, res) => {
    const sql = "INSERT INTO student (`Name` , `Email`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email
    ]

    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})




app.listen(4000, () => {
    console.log("Listening at the port {4000}");
});
