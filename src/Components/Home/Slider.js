import React, { useEffect, useState } from 'react'
import db from '../Firebase';

export default function Slider() {
    const [sliders, setSliders] = useState([]);
    useEffect(() => {
        var docRef = db.collection("blog-data").doc("slider");
        docRef.get().then(doc => {
            if (doc.exists) {
                let data = doc.data();
                console.log(data.post_ids);
                setSliders(data.post_ids);
                // console.log("Document data:", );
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
        setTimeout(function(){
            let elements=document.getElementsByClassName('swiper-slide');
            elements[0].ariaLabel="4 / 4";
            elements[1].ariaLabel="3 / 4";
            elements[2].ariaLabel="2 / 4";
            elements[3].ariaLabel="1 / 4";
       }, 4000); 
    }, []);
    return (
        <section id="hero-slider" class="hero-slider">
            <div class="container-md" data-aos="fade-in">
                <div class="row">
                    <div class="col-12">
                        <div class="swiper sliderFeaturedPosts">
                            <div class="swiper-wrapper">
                                {
                                    sliders.map((slider) => (
                                        <div class="swiper-slide" aria-label="1 / 4">
                                            <a href="/post" class="img-bg d-flex align-items-end" style={{ backgroundImage: `url(${slider.image})` }}>
                                                <div class="img-bg-inner">
                                                    <h2>{slider.title}</h2>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                }

                            </div>
                            <div class="custom-swiper-button-next">
                                <span class="bi-chevron-right"></span>
                            </div>
                            <div class="custom-swiper-button-prev">
                                <span class="bi-chevron-left"></span>
                            </div>

                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}