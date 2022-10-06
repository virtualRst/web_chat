import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import db from '../Components/Firebase'
import Sidebar from '../Components/Sidebar'

function Post() {
    const [post, setPost] = useState([]);
    const [imageOne, setImageOne] = useState([]);
    const [imageTwo, setImageTwo] = useState([]);
    const [bodyOne, setBodyOne] = useState([]);
    const [bodyTwo, setBodyTwo] = useState([]);
    const [bodyThree, setBodyThree] = useState([]);
    const [date, setDate] = useState("");


    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get('id');
        console.log(id);
        if (id) {
            getPostdata(id);
        }
    }, ['']);

    useEffect(() => {
        setTimeout(function () {
            let id=post.post_id;
            var docRef = db.collection("post").doc(id);
            console.log(post);
            let hits = post.hits + 1;
            console.log(hits);
            docRef.update({
                'hits': hits
            });
        }, 8000);
    }, [post]);

    const getPostdata = (id) => {
        console.log("IDs " + id);
        var docRef = db.collection("post").doc(id);
        docRef.get().then(doc => {
            if (doc.exists) {
                let data = doc.data();
                console.log(data);
                document.title = data.title;
                setPost(data);
                setBodyOne(data.body_array[0]);
                setBodyTwo(data.body_array[1]);
                setImageOne(data.image_array[0]);
                setImageTwo(data.image_array[1]);
                let normalDate = new Date(data.created_time.seconds * 1000).toLocaleString('en-GB', { timeZone: 'IST' });
                setDate(normalDate);
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
                                    <div className="post-meta"><span className="date">{post.category}</span> <span className="mx-1"></span> <span>{date}</span></div>
                                    <h1 className="mb-5">{post.title}</h1>
                                    <p><span className="firstcharacter"></span>{bodyOne}</p>

                                    <figure className="my-4">
                                        <img src={imageOne} alt="" className="img-fluid" />
                                        {/* <figcaption>{bodyOne}</figcaption> */}
                                    </figure>
                                    <p>{bodyTwo}</p>
                                    {/* <p>Explicabo perspiciatis, laborum provident voluptates illum in nulla consectetur atque quaerat excepturi quisquam, veniam velit ex pariatur quos consequuntur? Excepturi reiciendis perferendis, cupiditate dolorem eos illum amet. Beatae voluptates nemo esse ratione voluptate, nesciunt fugit magnam veritatis voluptas dignissimos doloribus maiores? Aliquam, dolores natus exercitationem corrupti blanditiis, consequuntur nihil nobis sed voluptatibus maiores sunt, illo provident aliquid laborum. Vitae, ut.</p> */}
                                    {/* <p>Reprehenderit aut sed doloribus blanditiis, aspernatur magni? In molestias rem, similique ut esse repudiandae quod recusandae dolores neque earum omnis at, suscipit fuga? Minima qui veniam deserunt quisquam error amet at ratione nesciunt porro quis placeat repudiandae voluptatibus officiis fuga necessitatibus, expedita officia adipisci eaque labore accusamus? Nesciunt repellat illo exercitationem facilis similique quaerat, quis sequi? Praesentium nulla ipsam dolor.</p> */}
                                    {/* <p>Dolorum, incidunt! Adipisci harum itaque maxime dolores doloremque porro eligendi quis, doloribus vel sit rerum sunt obcaecati nam suscipit nulla vitae alias blanditiis aliquam debitis atque illo modi et placeat. Ratione iure eveniet provident. Culpa laboriosam sed ad quia. Corrupti, earum, perferendis dolore cupiditate sint nihil maiores iusto tempora nobis porro itaque est. Ut laborum culpa assumenda pariatur et perferendis?</p> */}
                                    {/* <p>Est soluta veritatis laboriosam, consequuntur temporibus asperiores, fugit id a ullam sed, expedita sequi doloribus fugiat. Odio et necessitatibus enim nam, iste reprehenderit cupiditate omnis ut iure aliquid obcaecati, repellendus nemo provident eveniet tempora minus! Voluptates aut laboriosam, maiores nihil accusantium, a dolorum quaerat tenetur illo eum culpa cum laudantium sunt doloremque modi possimus magni? Perferendis cum repudiandae corrupti porro.</p> */}
                                    <figure className="my-4">
                                        <img src={imageTwo} alt="" className="img-fluid" />
                                        {/* <figcaption>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odit? </figcaption> */}
                                    </figure>
                                    <p>{bodyThree}</p>
                                    {/* <p>Architecto ex id at illum aperiam corporis, quidem magnam doloribus non eligendi delectus laborum porro molestiae beatae eveniet dolor odit optio soluta dolores! Eaque odit a nihil recusandae, error repellendus debitis ex autem ab commodi, maiores officiis doloribus provident optio, architecto assumenda! Nihil cum laboriosam eos dolore aliquid perferendis amet doloremque quibusdam odio soluta vero odit, ipsa, quisquam quod nulla.</p> */}
                                    {/* <p>Consequuntur corrupti fugiat quod! Ducimus sequi nemo illo ad necessitatibus amet nobis corporis et quasi. Optio cum neque fuga. Ad excepturi magnam quisquam ex voluptatibus vitae aut nam quidem doloribus, architecto perspiciatis sit consequatur pariatur alias animi expedita quas? Et doloribus voluptatibus perferendis qui fugiat voluptatum autem facere aspernatur quidem quae assumenda iste, sit similique, necessitatibus laborum magni. Ea, dolores!</p> */}
                                    {/* <p>Possimus temporibus rerum illo quia repudiandae provident sed quas atque. Ipsam adipisci accusamus iste optio illo aliquam molestias? Voluptatibus, veniam recusandae facilis nobis perspiciatis rem similique, nisi ad explicabo ipsa voluptatum, inventore molestiae natus adipisci? Fuga delectus quia assumenda totam aspernatur. Nobis hic ea rem, quaerat voluptate vero illum laboriosam omnis aspernatur labore, natus ex iusto ducimus exercitationem a officia.</p> */}
                                </div>

                            </div>
                            {/* <Sidebar /> */}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Post