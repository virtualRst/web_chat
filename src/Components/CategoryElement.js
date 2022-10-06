import React, { useEffect, useState } from 'react'

function CategoryElement({cardData}) {
    const [date,setDate] = useState("");
    const [imageOne, setImageOne] = useState([]);
    const [bodyOne,setBodyOne] = useState([]);

    useEffect(() => {
        setBodyOne(cardData.body_array[0]);
        setImageOne(cardData.image_array[0]);
        let normalDate=new Date(cardData.created_time.seconds*1000).toLocaleString('en-GB',{timeZone:'IST'});
        setDate(normalDate);
    }, ['']);

    return (
        <div class="d-md-flex post-entry-2 half">
            <a href={"/post?id="+cardData.post_id} class="me-4 thumbnail">
                <img src={imageOne} alt="" class="img-fluid" />
            </a>
            <div>
                <div class="post-meta"><span class="date">{cardData.category}</span> <span class="mx-1"></span> <span>{date}</span></div>
                <h3><a href={"/post?id="+cardData.post_id}>{cardData.title}</a></h3>
                <p>{bodyOne}</p>
                <div class="d-flex align-items-center author">
                    <div class="photo"><img src="assets/img/account.jpg" alt="" class="img-fluid" /></div>
                    <div class="name">
                        <h3 class="m-0 p-0">{cardData.author_name}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryElement