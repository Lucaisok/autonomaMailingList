const spicedPg = require("spiced-pg");
var db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/autonoma"
);

module.exports.subscription = (email) => {
    return db.query(
        `
    INSERT INTO subscribers (email)
    VALUES ($1)
    `,
        [email]
    );
};

module.exports.getList = () => {
    return db.query(`
    SELECT * FROM subscribers
    `);
};

module.exports.checkUser = (email) => {
    return db.query(
        `
    SELECT id, email FROM subscribers
    WHERE email = $1
    `,
        [email]
    );
};

module.exports.unsubscribe = (email) => {
    return db.query(
        `
    DELETE FROM subscribers
    WHERE email = $1`,
        [email]
    );
};
