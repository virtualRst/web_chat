import { useState } from "react";
import db from "./Firebase";

// const [main, setMain] = useState([]);

const getCategoryMainData = (id) => {
    let mainData={};
    console.log("IDs "+id)
    var docRef = db.collection("post").doc(id);
    docRef.get().then(doc => {
        if (doc.exists) {
            let data = doc.data();
            console.log(data);
            mainData=data;
            // return data;
            // db.collection("post").doc("2002").set(data);
        } else {
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
    return mainData;
}

export {getCategoryMainData};
