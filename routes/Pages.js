const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'memory'

})

router.post('/eintragen', (req, res) => {
    const { Frage, Antwort, Set_ID } = req.body;
    			
    // Beispiel für eine SQL-Abfrage zum Einfügen von Daten
    const sql = 'INSERT INTO karten (Frage, Antwort, Set_ID) VALUES (?, ?, ?)';
    
    // Führe die SQL-Abfrage aus und übergib die Werte als Parameter
    db.query(sql, [Frage, Antwort, Set_ID], (error, results) => {
        if (error) {
            console.error('Fehler beim Einfügen der Daten:', error);
            res.status(500).send('Interner Serverfehler');
            return;
        }

        console.log('Daten erfolgreich eingefügt:', results);

        // Hier könntest du optional eine Weiterleitung oder eine andere Antwort senden
        res.render('index');
    });
});

router.get('/', (req, res) => {
    res.render("Start");
});
router.get('/Memory', (req, res) => {
    res.render("Memory");
});
router.get('/test', (req, res) => {
    res.render("test");
});

router.get('/eintraegeAnzeigen', (req, res) =>{
    let ergebnis = ''; 
    db.query('Select * from karten', (error, results) => {

        if (error) {
            console.error('Fehler beim abfragen der Daten:', error);
            res.status(500).send('Interner Serverfehler');
            return;
        }

        console.log('Daten erfolgreich abgefragt:', results);
        
        

        res.render('test', { karten: results });


    });

   
});

router.post('/sqlbefehl', (req, res) => {
    const sqlbefehl = req.body.sqlbefehl;
    			
    // Beispiel für eine SQL-Abfrage zum Einfügen von Daten
    const sql = 'INSERT INTO karten (Frage, Antwort, Set_ID) VALUES (?, ?, ?)';
    
    // Führe die SQL-Abfrage aus und übergib die Werte als Parameter
    db.query(sqlbefehl, (error, results) => {
        if (error) {
            console.error('Fehler beim Einfügen der Daten:', error);
            res.status(500).send('Interner Serverfehler');
            return;
        }

        console.log('Daten erfolgreich eingefügt:', results);

        // Hier könntest du optional eine Weiterleitung oder eine andere Antwort senden
        res.render('test', { karten: results });
    });
});




module.exports = router;



