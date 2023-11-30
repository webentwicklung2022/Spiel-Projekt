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

router.get('/Setwaehlen', (req, res) => {
    res.render("Setwaehlen");
});

router.get('/Setbearbeiten', (req, res) => {
    res.render("SetBearbeiten");
});

router.get('/QuizSeterstellen', (req, res) => {
    res.render("Seterstellen");
});


router.post('/setausgewaehlt', (req, res) => {
   
    set = req.body.id;
   return res.render('Memory', { Set: set });
 
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



router.get('/abfrage/:befehl', (req, res) => {
    try {
        // Achtung vor SQL-Injection! Verwende Parameterisierte Abfragen.
        const befehl = req.params.befehl;
        console.log('Ausgeführter Befehl:', befehl);

        // Hier sollte db.query sicher implementiert sein (abhängig von deinem Datenbankmodul).
        db.query(befehl, (error, results) => {
            if (error) {
                console.error('Fehler beim Abfragen der Daten:', error);
                res.status(500).json({ error: 'Interner Serverfehler' });
                return;
            }

            console.log('Daten erfolgreich abgefragt:', results);
            // Sende die Ergebnisse als JSON.
            res.json(results);
        });
    } catch (error) {
        console.error('Unbehandelter Fehler:', error);
        res.status(500).json({ error: 'Interner Serverfehler' });
    }
});



router.post('/MemorySetErstellen', (req, res) => {
    const { setID, NameSet, ThemaSet, 
            Frage, Antwort,
            Frage1, Antwort1,
            Frage2, Antwort2,
            Frage3, Antwort3,
            Frage4, Antwort4,
            Frage5, Antwort5,
            Frage6, Antwort6,
            Frage7, Antwort7,
            Frage8, Antwort8,
            Frage9, Antwort9,} = req.body;
     const werte1 = [setID,NameSet,ThemaSet]; 
     const werte2 = [Frage, Antwort, setID,
        Frage1, Antwort1, setID,
        Frage2, Antwort2, setID,
        Frage3, Antwort3, setID,
        Frage4, Antwort4, setID,
        Frage5, Antwort5, setID,
        Frage6, Antwort6, setID,
        Frage7, Antwort7, setID,
        Frage8, Antwort8, setID, 
        Frage9, Antwort9, setID];   
        
    const werte3 = [setID,"1","0","0"];

    const sql1 = `INSERT INTO sets (ID, Name_Set, LernThema ) VALUES (?, ?, ?)`;
    const sql2 =  `INSERT INTO karten (Frage, Antwort, Set_ID) VALUES 
    (?, ?, ?),
    (?, ?, ?),
    (?, ?, ?),
    (?, ?, ?),
    (?, ?, ?),
    (?, ?, ?),
    (?, ?, ?),
    (?, ?, ?),
    (?, ?, ?),
    (?, ?, ?)`;
    const sql3 = `INSERT INTO spiele (SetID, Memory, Karteikarten, Quiz) VALUES (?, ?, ?, ?)`;
  
    
   
    
    

    db.query(sql1,werte1, (error, results) => {
        if (error) {
            console.error('Fehler beim Einfügen der Daten:', error);
            res.status(500).send('Interner Serverfehler');
            return;
        }

        console.log('Daten erfolgreich eingefügt:', results);
        
        
    });

    setTimeout(function () {
        db.query(sql2,werte2, (error, results) => {
            if (error) {
                console.error('Fehler beim Einfügen der Daten:', error);
                res.status(500).send('Interner Serverfehler');
                return;
            }
    
            console.log('Daten erfolgreich eingefügt:', results);
            
            
        });

    }, 500);
    setTimeout(function () {
        db.query(sql3,werte3, (error, results) => {
            if (error) {
                console.error('Fehler beim Einfügen der Daten:', error);
                res.status(500).send('Interner Serverfehler');
                return;
            }
    
            console.log('Daten erfolgreich eingefügt:', results);
            res.render('Setwaehlen');
            
        });

    }, 600);


   
   
    
});








module.exports = router;




