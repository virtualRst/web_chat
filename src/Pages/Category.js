import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

export default function Category() {
  return (
    <div>
    <Header />
    <main id="main">
    <section>
      <div class="container">
        <div class="row">

          <div class="col-md-9" data-aos="fade-up">
            <h3 class="category-title">Category: Business</h3>

            <div class="d-md-flex post-entry-2 half">
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
            </div>

            <div class="d-md-flex post-entry-2 half">
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
            </div>

            <div class="text-start py-4">
              <div class="custom-pagination">
                <a href="#" class="prev">Prevous</a>
                <a href="#" class="active">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#" class="next">Next</a>
              </div>
            </div>
          </div>
          <Sidebar />

        </div>
      </div>
    </section>
  </main>
    <Footer />
</div>
  )
}
