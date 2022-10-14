import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import db from '../Components/Firebase'
import CategoryElement from '../Components/CategoryElement'
import { useParams } from 'react-router-dom'

export default function Category() {
  const [cardData,setCardData] = useState([]);
  const [catType,setCatType] = useState("");
  let {type}=useParams();

  useEffect(() => {
    // const queryParams = new URLSearchParams(window.location.search);
    // const type = queryParams.get('type');
    // console.log(type);
    if (type) {
    setCatType(type);
      getPostdata(type);
    }else{
    setCatType("business");
      getPostdata("business");
    }
    document.title = type;
  }, ['']);
  const getPostdata = (type) => {
    console.log("IDs " + type);
    var docRef = db.collection("post").where("category", "==", type.toLowerCase());
    docRef.get().then(snapshot => {
      if (!snapshot.empty) {
        let snapshotData=[];
        snapshot.forEach((doc) => {
        console.log(doc.data());
          snapshotData.push(doc.data());
        });
        setCardData(snapshotData.reverse());
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
        <section>
          <div class="container">
            <div class="row">

              <div class="col-md-9" data-aos="fade-up">
                <h3 class="category-title">Category: {catType.toUpperCase()}</h3>

                {/* <div class="d-md-flex post-entry-2 half">
                  <a href="/post" class="me-4 thumbnail">
                    <img src="assets/img/post-landscape-6.jpg" alt="" class="img-fluid" />
                  </a>
                  <div>
                    <div class="post-meta"><span class="date">Culture</span> <span class="mx-1"></span> <span>Jul 5th '22</span></div>
                    <h3><a href="/post">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</a></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas, nobis error deserunt aliquam temporibus sapiente, laudantium dolorum itaque libero eos deleniti?</p>
                    <div class="d-flex align-items-center author">
                      <div class="photo"><img src="assets/img/person-2.jpg" alt="" class="img-fluid" /></div>
                      <div class="name">
                        <h3 class="m-0 p-0">Wade Warren</h3>
                      </div>
                    </div>
                  </div>
                </div> */}
                {
                  cardData.map((item)=>(
                    <CategoryElement cardData={item}/>
                  ))
                }

                {/* <div class="d-md-flex post-entry-2 half">
                  <a href="/post" class="me-4 thumbnail">
                    <img src="assets/img/post-landscape-1.jpg" alt="" class="img-fluid" />
                  </a>
                  <div>
                    <div class="post-meta"><span class="date">Culture</span> <span class="mx-1"></span> <span>Jul 5th '22</span></div>
                    <h3><a href="/post">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</a></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas, nobis error deserunt aliquam temporibus sapiente, laudantium dolorum itaque libero eos deleniti?</p>
                    <div class="d-flex align-items-center author">
                      <div class="photo"><img src="assets/img/person-2.jpg" alt="" class="img-fluid" /></div>
                      <div class="name">
                        <h3 class="m-0 p-0">Wade Warren</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="d-md-flex post-entry-2 half">
                  <a href="/post" class="me-4 thumbnail">
                    <img src="assets/img/post-landscape-2.jpg" alt="" class="img-fluid" />
                  </a>
                  <div>
                    <div class="post-meta"><span class="date">Culture</span> <span class="mx-1"></span> <span>Jul 5th '22</span></div>
                    <h3><a href="/post">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</a></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas, nobis error deserunt aliquam temporibus sapiente, laudantium dolorum itaque libero eos deleniti?</p>
                    <div class="d-flex align-items-center author">
                      <div class="photo"><img src="assets/img/person-2.jpg" alt="" class="img-fluid" /></div>
                      <div class="name">
                        <h3 class="m-0 p-0">Wade Warren</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="d-md-flex post-entry-2 half">
                  <a href="/post" class="me-4 thumbnail">
                    <img src="assets/img/post-landscape-3.jpg" alt="" class="img-fluid" />
                  </a>
                  <div>
                    <div class="post-meta"><span class="date">Culture</span> <span class="mx-1"></span> <span>Jul 5th '22</span></div>
                    <h3><a href="/post">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</a></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas, nobis error deserunt aliquam temporibus sapiente, laudantium dolorum itaque libero eos deleniti?</p>
                    <div class="d-flex align-items-center author">
                      <div class="photo"><img src="assets/img/person-2.jpg" alt="" class="img-fluid" /></div>
                      <div class="name">
                        <h3 class="m-0 p-0">Wade Warren</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="d-md-flex post-entry-2 half">
                  <a href="/post" class="me-4 thumbnail">
                    <img src="assets/img/post-landscape-4.jpg" alt="" class="img-fluid" />
                  </a>
                  <div>
                    <div class="post-meta"><span class="date">Culture</span> <span class="mx-1"></span> <span>Jul 5th '22</span></div>
                    <h3><a href="/post">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</a></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas, nobis error deserunt aliquam temporibus sapiente, laudantium dolorum itaque libero eos deleniti?</p>
                    <div class="d-flex align-items-center author">
                      <div class="photo"><img src="assets/img/person-2.jpg" alt="" class="img-fluid" /></div>
                      <div class="name">
                        <h3 class="m-0 p-0">Wade Warren</h3>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <div class="text-start py-4">
                  <div class="custom-pagination">
                    <a href="#" class="prev">Prevous</a>
                    <a href="#" class="active">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#" class="next">Next</a>
                  </div>
                </div> */}
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
