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
