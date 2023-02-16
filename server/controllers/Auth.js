const { Router } = require("express");
const router = Router();
const {sql} = require("../config/database");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

router.get('/init', async (req, res) => {
    const {userId} = jwt.verify(req.body.token, 'app');
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

        const token = await jwt.sign({ userId: rows.ID }, 'app');

        res.send({
            token,
            rows
        });

    }

    await query();
});

module.exports = router;