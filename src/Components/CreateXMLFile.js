var firebase = require("firebase/app");
var firestore = require('firebase/firestore');
const fs = require('fs');
const { exit } = require("process");
var XMLWriter = require('xml-writer');

const firebaseConfig = {
    apiKey: "AIzaSyCHL6DVgKl-5kKEHIrHAFNTXMnPUewkxfw",
    authDomain: "edith-india.firebaseapp.com",
    projectId: "edith-india",
    storageBucket: "edith-india.appspot.com",
    messagingSenderId: "1004777730101",
    appId: "1:1004777730101:web:866902d2795222bb36c17c",
    measurementId: "G-CBSGEDPF10"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

xw = new XMLWriter;
xw.startDocument();
xw.startElement('urlset');
xw.writeAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

// fs.writeFile('test.xml', xw.toString(), err => {
//     if (err) {
//         console.error(err)
//         return
//     }
// })
var docRef = db.collection("post");
docRef.get().then(snapshot => {
    xw.startElement('url');
    xw.startElement('loc');
    xw.text("https://edithindia.com/");
    xw.endElement()
    xw.startElement('lastmod')
    xw.text("2022-10-16");
    xw.endElement();
    xw.endElement();
    snapshot.docs.map((doc) => {
        let values = doc.data();
        // console.log(values);
        xw.startElement('url');
        xw.startElement('loc');
        xw.text("https://edithindia.com/post/" + values.url_key);
        xw.endElement()
        xw.startElement('lastmod')
        xw.text(values.created_time.slice(0, 10));
        xw.endElement();
        xw.endElement();
    });
    xw.endElement();
    xw.endDocument();
    fs.writeFile('test.xml', xw.toString(), err => {
        if (err) {
            console.error(err)
            return
        }
    });
    fs.appendFile('test.xml', '</urlset>', err => {
        if (err) {
            console.error(err)
            return
        }
    });
}).catch(function (error) {
    console.log("Error getting document:", error);
});

console.log(xw.toString());
// exit();