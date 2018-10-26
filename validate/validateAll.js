const validateFarbenKomplementaer = require('./Farben/komplementaer');
const validateFarbenRotGruen = require('./Farben/rotgruen');
const validateFarbenSemantisch = require('./Farben/semantisch');
const validateFarbenSparsam = require('./Farben/sparsam');
const validateFarbenUnterscheidung = require('./Farben/unterscheidung');

const validateKontrasteBild = require('./Kontraste/bild');
const validateKontrasteBildHintergrund = require('./Kontraste/bildHintergrund');
const validateKontrasteEbenen = require('./Kontraste/ebenen');
const validateKontrasteHintergrund = require('./Kontraste/hintergrund');

const validateSchriftTextRaenderAbstaendeBilder = require('./Schrift/Text/RaenderUndAbstaende/AbstaendeBilder');
const validateSchriftTextRaenderAbstaendeFlattersatz = require('./Schrift/Text/RaenderUndAbstaende/AbstaendeFlattersatz');
const validateSchriftTextRaenderAbstaendeRand = require('./Schrift/Text/RaenderUndAbstaende/AbstaendeRand');
const validateSchriftTextRaenderAbstaendeLinienstaerke = require('./Schrift/Text/RaenderUndAbstaende/Linienstaerke');
const validateSchriftTextTextanordnungLinks = require('./Schrift/Text/Textanordnung/TextanordnungLinks');
const validateSchriftTextTextanordnungWaagrecht = require('./Schrift/Text/Textanordnung/TextanordnungWaagrecht');
const validateSchriftTextZeilenabstandLaengeZeile = require('./Schrift/Text/Zeilenabstand/ZeilenabstandLangeZeilen');
const validateSchriftTextZeilenabstandOberUnterlaenge = require('./Schrift/Text/Zeilenabstand/ZeilenabstandOberUnterlaenge');
const validateSchriftTextZeilenlaengeMaximal = require('./Schrift/Text/Zeilenlaenge/ZeilenlaengeMaximal');

const validateSchriftZeichenHervorhebungenSparsam = require('./Schrift/Zeichen/Hervorhebungen/HervorhebungenSparsam');
const validateSchriftZeichenHervorhebungenZwischenueberschriften = require('./Schrift/Zeichen/Hervorhebungen/HervorhebungenZwischenueberschriften');
const validateSchriftZeichenHervorhebungenUnterstreichungLinks = require('./Schrift/Zeichen/Hervorhebungen/HervorhebungUnterstreichungLinks');
const validateSchriftZeichenHervorhebungenZusaetzlicheUnterscheidung = require('./Schrift/Zeichen/Hervorhebungen/HervorhebungZusaetzlicheUnterscheidung');
const validateSchriftZeichenSchreibweiseVersalien = require('./Schrift/Zeichen/Schreibweise/SchreibweiseVersalien');
const validateSchriftZeichenSchriftartGrotesk = require('./Schrift/Zeichen/Schriftart/humanistischeGroteskschriften');
const validateSchriftZeichenSchriftartKlassAntiqua = require('./Schrift/Zeichen/Schriftart/KlassizistischeAntiquaschriften');
const validateSchriftZeichenSchriftartKlassGrotesk = require('./Schrift/Zeichen/Schriftart/KlassizistischeGroteskschriften');
const validateSchriftZeichenSchriftartLigaturen = require('./Schrift/Zeichen/Schriftart/Ligaturen');
const validateSchriftZeichenSchriftartSerifen = require('./Schrift/Zeichen/Schriftart/Serifenschriften');
const validateSchriftZeichenSchriftgroesseEmpfehlung = require('./Schrift/Zeichen/Schriftgroesse/schriftgroessenEmpfehlung');
const validateSchriftZeichenSchriftgroesseEmpfehlungEndgeraete = require('./Schrift/Zeichen/Schriftgroesse/SchriftgroessenEmpfehlungEndgeraete');
const validateSchriftZeichenSchriftgroesseEmpfehlungHintergrund = require('./Schrift/Zeichen/Schriftgroesse/SchriftgroessenEmpfehlungHintergrund');
const validateSchriftZeichenSchriftgroesseEmpfehlungSehbehinderung = require('./Schrift/Zeichen/Schriftgroesse/SchriftgroessenEmpfehlungSehbehinderung');
const validateSchriftZeichenSchriftweite= require('./Schrift/Zeichen/Schriftweite/NormaleSchriftweite');
const validateSchriftZeichenStrichstaerkeKontrast= require('./Schrift/Zeichen/Strichstaerke/Strichstaerkenkontrast');
const validateSchriftZeichenStrichstaerkeRegular= require('./Schrift/Zeichen/Strichstaerke/StrichstaerkeRegular');
const validateSchriftZeichenZeichenbezogenSerifen= require('./Schrift/Zeichen/ZeichenbezogeneEmpfehlung/SerifenBeruehrung');
const validateSchriftZeichenZeichenbezogenAbstandVoreingestellt= require('./Schrift/Zeichen/ZeichenbezogeneEmpfehlung/VoreingestellterZeichenabstand');
const validateSchriftZeichenZeichenbezogenAbstand= require('./Schrift/Zeichen/ZeichenbezogeneEmpfehlung/Zeichenabstand');
const validateSchriftZeichenZeichenbezogenAbstandHintergrund= require('./Schrift/Zeichen/ZeichenbezogeneEmpfehlung/ZeichenabstandHintergrund');


exports.validateAll = function(dom, jsonDataStructure){

    jsonDataStructure['Schrift']['inhalt']['HumanistischeGroteskschriften']['ergebnis']=validateSchriftZeichenSchriftartGrotesk.validate(dom);

    return jsonDataStructure;
}