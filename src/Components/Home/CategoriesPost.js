import React, { useEffect, useState } from 'react'
import db from '../Firebase';
export default function CategoriesPost({ category, title }) {
    const [main, setMain] = useState([]);
    const [middle, setMiddle] = useState([]);
    const [body, setBody] = useState([]);
    const [image, setImage] = useState([]);

    const [one, setOne] = useState([]);
    const [two, setTwo] = useState([]);
    const [three, setThree] = useState([]);
    const [four, setFour] = useState([]);
    const [five, setFive] = useState([]);
    const [six, setSix] = useState([]);

    const [onetrending, setOnetrending] = useState([]);
    const [twotrending, setTwotrending] = useState([]);
    const [threetrending, setThreetrending] = useState([]);
    const [fourtrending, setFourtrending] = useState([]);
    const [fivetrending, setFivetrending] = useState([]);
    const [sixtrending, setSixtrending] = useState([]);


    useEffect(() => {
        if (category.main) {
            getCategoryMainData(category.main);
        }
        if (category.middle) {
            getCategoryMiddleData(category.middle);
        }
        if(category.trending){
            getCategoryTrendingTitle(category.trending);
        }

    }, [category]);

    const getCategoryMainData = (id) => {
        console.log("IDs " + id);
        var docRef = db.collection("post").doc(id);
        docRef.get().then(doc => {
            if (doc.exists) {
                let data = doc.data();
                console.log(data);
                setMain(data);
                setBody(data.body_array[0]);
                setImage(data.image_array[0]);
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }
    const getCategoryMiddleData = (ids) => {
        let ids_arr = ids.split(',');
        for (let i = 0; i < ids_arr.length; i++) {
            var docRef = db.collection("post").doc(ids_arr[i]);
            docRef.get().then(doc => {
                if (doc.exists) {
                    let data = doc.data();
                    let required = {
                        id: ids_arr[i],
                        title: data.title,
                        image: data.image_array[0]
                    }
                    if (i == 0) {
                        setOne(required);
                    } else if (i == 1) {
                        setTwo(required);
                    } else if (i == 2) {
                        setThree(required);
                    } else if (i == 3) {
                        setFour(required);
                    } else if (i == 4) {
                        setFive(required);
                    } else if (i == 5) {
                        setSix(required);
                    }
                } else {
                    console.log("No such document!");
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
        }
    }
    const getCategoryTrendingTitle = (ids) => {
        let ids_arr = ids.split(',');
        for (let i = 0; i < ids_arr.length; i++) {
            var docRef = db.collection("post").doc(ids_arr[i]);
            docRef.get().then(doc => {
                if (doc.exists) {
                    let data = doc.data();
                    let required = {
                        id: ids_arr[i],
                        title: data.title
                    }
                    if (i == 0) {
                        setOnetrending(required);
                    } else if (i == 1) {
                        setTwotrending(required);
                    } else if (i == 2) {
                        setThreetrending(required);
                    } else if (i == 3) {
                        setFourtrending(required);
                    } else if (i == 4) {
                        setFivetrending(required);
                    }
                } else {
                    console.log("No such document!");
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
        }
    }

    return (
        <section id="posts" class="posts">
            <div class="container" data-aos="fade-up">
                <div class="section-header d-flex justify-content-between align-items-center mb-5">
                    <h2>{title}</h2>
                    <div><a href="category" class="more">See All {title}</a></div>
                </div>
                <div class="row g-5">
                    <div class="col-lg-4">
                        <div class="post-entry-1 lg">
                            <a href={"/post/" + category.main}><img src={image} alt="" class="img-fluid" /></a>
                            <div class="post-meta"><span class="date">{title}</span> : <span>Jul 5th '22</span></div>
                            <h2><a href={"/post/" + category.main}>{main.title}</a></h2>
                            <p class="mb-4 d-block">{body}</p>

                            <div class="d-flex align-items-center author">
                                <div class="photo"><img src="assets/img/person-1.jpg" alt="" class="img-fluid" /></div>
                                <div class="name">
                                    <h3 class="m-0 p-0">Rishabh Tiwari</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-8">
                        <div class="row g-5">
                            <div class="col-lg-4 border-start custom-border">
                                <div class="post-entry-1">
                                    <a href={"/post/" + one.id}><img src={one.image} alt={one.title} class="img-fluid" /></a>
                                    <div class="post-meta"><span class="date">{title}</span> <span class="mx-1"></span> <span>Jul 5th '22</span></div>
                                    <h2><a href={"/post/" + one.id}>{one.title}</a></h2>
                                </div>
                                <div class="post-entry-1">
                                    <a href={"/post/+" + two.id}><img src={two.image} alt={two.title} class="img-fluid" /></a>
                                    <div class="post-meta"><span class="date">{title}</span> <span class="mx-1"></span> <span>Jul 17th '22</span></div>
                                    <h2><a href={"/post/+" + two.id}>{two.title}</a></h2>
                                </div>
                                <div class="post-entry-1">
                                    <a href={"/post/+" + three.id}><img src={three.image} alt={three.title} class="img-fluid" /></a>
                                    <div class="post-meta"><span class="date">{title}</span> <span class="mx-1"></span> <span>Mar 15th '22</span></div>
                                    <h2><a href={"/post/+" + three.id}>{three.title}</a></h2>
                                </div>
                            </div>
                            <div class="col-lg-4 border-start custom-border">
                                <div class="post-entry-1">
                                    <a href={"/post/+" + four.id}><img src={four.image} alt={four.title} class="img-fluid" /></a>
                                    <div class="post-meta"><span class="date">{title}</span> <span class="mx-1"></span> <span>Mar 15th '22</span></div>
                                    <h2><a href={"/post/+" + four.id}>{four.title}</a></h2>
                                </div>
                                <div class="post-entry-1">
                                    <a href={"/post/+" + five.id}><img src={five.image} alt={five.title} class="img-fluid" /></a>
                                    <div class="post-meta"><span class="date">{title}</span> <span class="mx-1"></span> <span>Mar 15th '22</span></div>
                                    <h2><a href={"/post/+" + five.id}>{five.title}</a></h2>
                                </div>
                                <div class="post-entry-1">
                                    <a href={"/post/+" + six.id}><img src={six.image} alt={six.title} class="img-fluid" /></a>
                                    <div class="post-meta"><span class="date">{title}</span> <span class="mx-1"></span> <span>Mar 15th '22</span></div>
                                    <h2><a href={"/post/+" + six.id}>{six.title}</a></h2>
                                </div>
                            </div>

                            {/* <!-- Trending Section --> */}
                            <div class="col-lg-4">

                                <div class="trending">
                                    <h3>Trending</h3>
                                    <ul class="trending-post">
                                        <li>
                                            <a href={"/post/"+onetrending.id}>
                                                <span class="number">1</span>
                                                <h3>{onetrending.title}</h3>
                                                <span class="author">Rishabh Tiwari</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={"/post/"+twotrending.id}>
                                                <span class="number">2</span>
                                                <h3>{twotrending.title}</h3>
                                                <span class="author">Rishabh Tiwari</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={"/post/"+threetrending.id}>
                                                <span class="number">3</span>
                                                <h3>{threetrending.title}</h3>
                                                <span class="author">Rishabh Tiwari</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={"/post/"+fourtrending.id}>
                                                <span class="number">4</span>
                                                <h3>{fourtrending.title}</h3>
                                                <span class="author">Rishabh Tiwari</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={"/post/"+fivetrending.id}>
                                                <span class="number">5</span>
                                                <h3>{fivetrending.title}</h3>
                                                <span class="author">Rishabh Tiwari</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            {/* <!-- End Trending Section --> */}
                        </div>
                    </div>

                </div>
                {/* <!-- End .row --> */}
            </div>
        </section>
    )
}
