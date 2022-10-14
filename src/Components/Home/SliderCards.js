import React, { useEffect, useState } from 'react'
import db from '../Firebase';

function SliderCards({id}) {
    const [cards,setCards]=useState({});
    const [imageOne,setImageOne]=useState("");
    const [short,setShort]=useState("");
    useEffect(() => {
        var docRef = db.collection("post").doc(id);
        docRef.get().then(doc => {
            if (doc.exists) {
                let data = doc.data();
                console.log(data);
                setCards(data);
                setImageOne(data.image_array[0]);
                let shortString=data.body_array[0].slice(0,200)+"...";
                console.log(shortString);
                setShort(shortString);
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }, ['']);
    return (
        <div class="swiper-slide" aria-label="1 / 4">
            <a href={"/post/"+cards.post_id} class="img-bg d-flex align-items-end" style={{ backgroundImage: `url(${imageOne})` }}>
                <div class="img-bg-inner">
                    <h2>{cards.title}</h2>
                    <p>{short}</p>
                </div>
            </a>
        </div>
    )
}

export default SliderCards