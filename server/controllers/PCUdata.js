const { Router } = require("express");
const router = Router();
const {sql} = require("../config/database");

router.get("/data", async (req, res) => {
    let cuentas = 0;
    let personajes = 0;
    let casas = 0;
    let negocios = 0;
    let vehiculos = 0;
    let facciones = 0;
    function query1() {
        sql.query("SELECT `ID` FROM `cuentas`", [], (rows, err) => {
            if (err) return console.error(err);

            if (!rows[0]) { res.send({ cuentas: 0 }); return; }

            rows.forEach(x => {
                cuentas += 1;
            });

            console.log(`"[SQL] ${cuentas} cuentas cargadas "`);

            query2();
        });
    }
    function query2() {
        sql.query("SELECT `ID` FROM `personajes`", [], (rows, err) => {
            if (err) return console.error(err);

            if (!rows[0]) { res.send({ personajes: 0 }); return; }

            rows.forEach(x => {
                personajes += 1;
            });

            console.log(`"[SQL] ${personajes} personajes cargadas "`);

            query3();
        });
    }
    function query3() {
        sql.query("SELECT `ID` FROM `casas`", [], (rows, err) => {
            if (err) return console.error(err);

            if (!rows[0]) { res.send({ casas: 0 }); return; }

            rows.forEach(x => {
                casas += 1;
            });

            console.log(`"[SQL] ${casas} casas cargadas "`);

            query4();
        })
    }
    function query4() {
        sql.query("SELECT `ID` FROM `negocios`", [], (rows, err) => {
            if (err) return console.error(err);

            if (!rows[0]) { res.send({ negocios: 0 }); return; }

            rows.forEach(x => {
                negocios += 1;
            });

            console.log(`"[SQL] ${negocios} negocios cargadas "`);

            query5();
        })
    }
    function query5() {
        sql.query("SELECT `ID` FROM `vehiculos`", [], (rows, err) => {
            if (err) return console.error(err);

            if (!rows[0]) { res.send({ vehiculos: 0 }); return; }

            rows.forEach(x => {
                vehiculos += 1;
            });

            console.log(`"[SQL] ${vehiculos} vehiculos cargadas "`);

            query6();
        })
    }
    function query6() {
        sql.query("SELECT `ID` FROM `facciones`", [], (rows, err) => {
            if (err) return console.error(err);

            if (!rows[0]) { res.send({ facciones: 0 }); return; }

            rows.forEach(x => {
                facciones += 1;
            });

            console.log(`"[SQL] ${facciones} facciones cargadas "`);

            finish();
        });
    }
    function finish() {
        res.send({
            cuentas,
            personajes,
            casas,
            negocios,
            vehiculos,
            facciones
        });
    };

    await query1();
});

module.exports = router;