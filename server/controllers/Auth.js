const { Router } = require("express");
const router = Router();
const {sql} = require("../config/database");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

router.post('/init', async (req, res) => {
    console.log(req.body.token);
    const {userId} = jwt.verify(req.body.token, 'app');
    function query() {
        sql.query("SELECT * FROM cuentas WHERE ID = ?", [userId], (err, rows) => {
            if (err) console.log(err);
            if (rows.lenght < 0) res.status(404).send({
                message: "user_not_found"
            });
            if (!rows[0]) res.status(404).send({
                message: "user_not_found"
            });
            if(rows) finish(rows[0]);
            console.log(rows);
        });
    }
    function finish(rows) {
        console.log(rows);

        res.send({
            rows
        });
    }
    await query();
});

router.get("/tetas", (req, res) => {
    res.send({ ID: "tetas"});
})

router.post('/login', async (req, res) => {
    function query() {
        sql.query("SELECT * FROM cuentas WHERE Email = ?", 
        [req.body.email], 
        async (err, rows) => {
            if (err) res.status(404).send({
                message: "user_not_found"
            });
            if (rows.lenght <= 0) res.status(404).send({
                message: "user_not_found"
            });

            if (!rows) res.status(404).send({
                message: "user_not_found"
            });

            if (rows) await compare(rows[0]);
        });
    }
    async function compare(rows) {
        const hash = crypto.createHash("sha256").update(req.body.password).update(rows.Salt).digest('hex').toUpperCase();

        if (hash !== rows.Clave) res.status(404).send({
            message: "wrong_password"
        });

        console.log(rows);

        const token = await jwt.sign({ userId: rows.ID }, 'app');
        console.log(token);

        req.session.username = rows.Nombre;
        req.session.ID = rows.ID;
        req.session.save();

        res.send({
            token,
            rows
        });
    }

    await query();
});

module.exports = router;