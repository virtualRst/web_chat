import { useState } from "react";
import db from "./Firebase";

// const [main, setMain] = useState([]);

const getCategoryMainData = (id) => {
    // let mainData={};
    // console.log("IDs "+id)
    // var docRef = db.collection("post").doc(id);
    // docRef.get().then(doc => {
    //     if (doc.exists) {
    //         let data = doc.data();
    //         console.log(data);
    //         mainData=data;
    //         // return data;
    //         // db.collection("post").doc("2002").set(data);
    //     } else {
    //         console.log("No such document!");
    //     }
    // }).catch(function (error) {
    //     console.log("Error getting document:", error);
    // });
    // return mainData;

    // var docRef = db.collection("post").doc("2002");
    // docRef.get().then(doc => {
    //     if (doc.exists) {
    //         let data = doc.data();
    //         for(let i=1999;i<=2020;i++){
    //             db.collection("post").doc(i.toString()).update({"title":"Test title for post id "+i.toString()});
    //         }
    //     } else {
    //         console.log("No such document!");
    //     }
    // }).catch(function (error) {
    //     console.log("Error getting document:", error);
    // });
}

export {getCategoryMainData};
