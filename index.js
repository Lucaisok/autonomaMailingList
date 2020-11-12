const express = require("express");
const app = express();
const compression = require("compression");
const cookieSession = require("cookie-session");
const csurf = require("csurf");
const db = require("./db");

let secret;

if (process.env.DATABASE_URL) {
    secret = process.env;
} else {
    secret = require("./secrets.json");
}

app.use(
    cookieSession({
        secret: secret.secret,
        maxAge: 1000 * 60 * 60 * 24 * 14,
    })
);

app.use(express.json());

app.use(csurf());

app.use(function (req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

app.use(compression());

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/",
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.use(express.static("public"));

app.get("*", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/subscribe", async function (req, res) {
    console.log(req.body);
    try {
        const data = await db.subscription(req.body.email);
        console.log(data);
        res.json({ success: true });
    } catch (err) {
        console.log(err);
        res.json({ success: false });
    }
});

app.post("/unsubscribe", async function (req, res) {
    try {
        const data = await db.checkUser(req.body.mail);
        console.log(data);
        if (data.rows.length > 0) {
            console.log("still here? ", req.body);
            try {
                const data = await db.unsubscribe(req.body.mail);
                console.log("unsubscribe data ", data);
                res.json({ success: true });
                console.log("deleted");
            } catch (err) {
                console.log("error deleting", err);
                res.json({ success: false });
            }
        } else {
            res.json({ success: false });
            console.log("no check");
        }
    } catch (err) {
        console.log("error checking", err);
        res.json({ success: false });
    }
    // try {
    //     const data = await db.unsubscribe(req.body.mail);
    //     console.log(data);
    //     res.json({ success: true });
    // } catch (err) {
    //     console.log(err);
    //     res.json({ success: false });
    // }
});

app.post("/verify", function (req, res) {
    console.log(req.body);
    if (req.body.password === secret.adm) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.post("/results", async function (req, res) {
    try {
        const data = await db.getList();
        console.log(data);
        res.json(data.rows);
    } catch (err) {
        console.log(err);
        res.json({ success: false });
    }
});

app.listen(process.env.PORT || 8080, function () {
    console.log("Autonoma listening.");
});
