import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import db from '../Components/Firebase'

function Post() {
    const [post, setPost] = useState([]);
    const [imageOne, setImageOne] = useState([]);
    const [imageTwo, setImageTwo] = useState([]);
    const [bodyOne,setBodyOne] = useState([]);
    const [bodyTwo,setBodyTwo] = useState([]);
    const [bodyThree,setBodyThree] = useState([]);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get('id');
        console.log(id);
        if(id){
            getPostdata(id);
        }
    }, ['']);

    const getPostdata = (id) => {
        console.log("IDs " + id);
        var docRef = db.collection("post").doc(id);
        docRef.get().then(doc => {
            if (doc.exists) {
                let data = doc.data();
                console.log(data);
                setPost(data);
                setBodyOne(data.body_array[0]);
                setBodyTwo(data.body_array[1]);
                setImageOne(data.image_array[0]);
                setImageTwo(data.image_array[1]);
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }
    return (
        <div>
            <Header />
            <main id="main">

                <section className="single-post-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 post-content" data-aos="fade-up">

                                <div className="single-post">
                                    <div className="post-meta"><span className="date">{post.category}</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                    <h1 className="mb-5">{post.title}</h1>
                                    <p><span className="firstcharacter"></span>{bodyOne}</p>

                                    <figure className="my-4">
                                        <img src="assets/img/post-landscape-1.jpg" alt="" className="img-fluid" />
                                        {/* <figcaption>{bodyOne}</figcaption> */}
                                    </figure>
                                    <p>{bodyTwo}</p>
                                    {/* <p>Explicabo perspiciatis, laborum provident voluptates illum in nulla consectetur atque quaerat excepturi quisquam, veniam velit ex pariatur quos consequuntur? Excepturi reiciendis perferendis, cupiditate dolorem eos illum amet. Beatae voluptates nemo esse ratione voluptate, nesciunt fugit magnam veritatis voluptas dignissimos doloribus maiores? Aliquam, dolores natus exercitationem corrupti blanditiis, consequuntur nihil nobis sed voluptatibus maiores sunt, illo provident aliquid laborum. Vitae, ut.</p> */}
                                    {/* <p>Reprehenderit aut sed doloribus blanditiis, aspernatur magni? In molestias rem, similique ut esse repudiandae quod recusandae dolores neque earum omnis at, suscipit fuga? Minima qui veniam deserunt quisquam error amet at ratione nesciunt porro quis placeat repudiandae voluptatibus officiis fuga necessitatibus, expedita officia adipisci eaque labore accusamus? Nesciunt repellat illo exercitationem facilis similique quaerat, quis sequi? Praesentium nulla ipsam dolor.</p> */}
                                    {/* <p>Dolorum, incidunt! Adipisci harum itaque maxime dolores doloremque porro eligendi quis, doloribus vel sit rerum sunt obcaecati nam suscipit nulla vitae alias blanditiis aliquam debitis atque illo modi et placeat. Ratione iure eveniet provident. Culpa laboriosam sed ad quia. Corrupti, earum, perferendis dolore cupiditate sint nihil maiores iusto tempora nobis porro itaque est. Ut laborum culpa assumenda pariatur et perferendis?</p> */}
                                    {/* <p>Est soluta veritatis laboriosam, consequuntur temporibus asperiores, fugit id a ullam sed, expedita sequi doloribus fugiat. Odio et necessitatibus enim nam, iste reprehenderit cupiditate omnis ut iure aliquid obcaecati, repellendus nemo provident eveniet tempora minus! Voluptates aut laboriosam, maiores nihil accusantium, a dolorum quaerat tenetur illo eum culpa cum laudantium sunt doloremque modi possimus magni? Perferendis cum repudiandae corrupti porro.</p> */}
                                    <figure className="my-4">
                                        <img src="assets/img/post-landscape-5.jpg" alt="" className="img-fluid" />
                                        <figcaption>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odit? </figcaption>
                                    </figure>
                                    <p>Quis molestiae, dolorem consequuntur labore perferendis enim accusantium commodi optio, sequi magnam ad consectetur iste omnis! Voluptatibus, quia officia esse necessitatibus magnam tempore reprehenderit quo aspernatur! Assumenda, minus dolorem repellendus corporis corrupti quia temporibus repudiandae in. Sit rem aut, consectetur repudiandae perferendis nemo alias, iure ipsam omnis quam soluta, nobis animi quis aliquam blanditiis at. Dicta nemo vero sequi exercitationem.</p>
                                    <p>Architecto ex id at illum aperiam corporis, quidem magnam doloribus non eligendi delectus laborum porro molestiae beatae eveniet dolor odit optio soluta dolores! Eaque odit a nihil recusandae, error repellendus debitis ex autem ab commodi, maiores officiis doloribus provident optio, architecto assumenda! Nihil cum laboriosam eos dolore aliquid perferendis amet doloremque quibusdam odio soluta vero odit, ipsa, quisquam quod nulla.</p>
                                    <p>Consequuntur corrupti fugiat quod! Ducimus sequi nemo illo ad necessitatibus amet nobis corporis et quasi. Optio cum neque fuga. Ad excepturi magnam quisquam ex voluptatibus vitae aut nam quidem doloribus, architecto perspiciatis sit consequatur pariatur alias animi expedita quas? Et doloribus voluptatibus perferendis qui fugiat voluptatum autem facere aspernatur quidem quae assumenda iste, sit similique, necessitatibus laborum magni. Ea, dolores!</p>
                                    <p>Possimus temporibus rerum illo quia repudiandae provident sed quas atque. Ipsam adipisci accusamus iste optio illo aliquam molestias? Voluptatibus, veniam recusandae facilis nobis perspiciatis rem similique, nisi ad explicabo ipsa voluptatum, inventore molestiae natus adipisci? Fuga delectus quia assumenda totam aspernatur. Nobis hic ea rem, quaerat voluptate vero illum laboriosam omnis aspernatur labore, natus ex iusto ducimus exercitationem a officia.</p>
                                </div>

                            </div>
                            <div className="col-md-3">
                                <div className="aside-block">

                                    <ul className="nav nav-pills custom-tab-nav mb-4" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-popular-tab" data-bs-toggle="pill" data-bs-target="#pills-popular" type="button" role="tab" aria-controls="pills-popular" aria-selected="true">Popular</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-trending-tab" data-bs-toggle="pill" data-bs-target="#pills-trending" type="button" role="tab" aria-controls="pills-trending" aria-selected="false">Trending</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-latest-tab" data-bs-toggle="pill" data-bs-target="#pills-latest" type="button" role="tab" aria-controls="pills-latest" aria-selected="false">Latest</button>
                                        </li>
                                    </ul>

                                    <div className="tab-content" id="pills-tabContent">

                                        <div className="tab-pane fade show active" id="pills-popular" role="tabpanel" aria-labelledby="pills-popular-tab">
                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Sport</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Business</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="pills-trending" role="tabpanel" aria-labelledby="pills-trending-tab">
                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Sport</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>
                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Business</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="pills-latest" role="tabpanel" aria-labelledby="pills-latest-tab">
                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Business</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Sport</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                            <div className="post-entry-1 border-bottom">
                                                <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                                                <h2 className="mb-2"><a href="#">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
                                                <span className="author mb-3 d-block">Jenny Wilson</span>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="aside-block">
                                    <h3 className="aside-title">Categories</h3>
                                    <ul className="aside-links list-unstyled">
                                        <li><a href="category"><i className="bi bi-chevron-right"></i> Business</a></li>
                                        <li><a href="category"><i className="bi bi-chevron-right"></i> Culture</a></li>
                                        <li><a href="category"><i className="bi bi-chevron-right"></i> Technology</a></li>
                                        <li><a href="category"><i className="bi bi-chevron-right"></i> Lifestyle</a></li>
                                    </ul>
                                </div>
                                {/* <div className="aside-block">
                                    <h3 className="aside-title">Tags</h3>
                                    <ul className="aside-tags list-unstyled">
                                        <li><a href="category">Business</a></li>
                                        <li><a href="category">Culture</a></li>
                                        <li><a href="category">Sport</a></li>
                                        <li><a href="category">Food</a></li>
                                        <li><a href="category">Politics</a></li>
                                        <li><a href="category">Celebrity</a></li>
                                        <li><a href="category">Startups</a></li>
                                        <li><a href="category">Travel</a></li>
                                    </ul>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Post