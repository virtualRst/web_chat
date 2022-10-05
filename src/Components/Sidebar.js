import React from 'react'

function Sidebar() {
    return (
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
                            <div className="post-meta"><span className="date">Sport</span> <span className="mx-1"></span> <span>Jul 5th '22</span></div>
                            <h2 className="mb-2"><a href="#">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>

                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1"></span> <span>Jul 5th '22</span></div>
                            <h2 className="mb-2"><a href="#">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>

                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date">Culture</span> <span className="mx-1"></span> <span>Jul 5th '22</span></div>
                            <h2 className="mb-2"><a href="#">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>

                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1"></span> <span>Jul 5th '22</span></div>
                            <h2 className="mb-2"><a href="#">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>

                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date">Business</span> <span className="mx-1"></span> <span>Jul 5th '22</span></div>
                            <h2 className="mb-2"><a href="#">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>

                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1"></span> <span>Jul 5th '22</span></div>
                            <h2 className="mb-2"><a href="#">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="pills-trending" role="tabpanel" aria-labelledby="pills-trending-tab">
                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1"></span> <span>Jul 5th '22</span></div>
                            <h2 className="mb-2"><a href="#">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>

                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date">Culture</span> <span className="mx-1"></span> <span>Jul 5th '22</span></div>
                            <h2 className="mb-2"><a href="#">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>

                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1"></span> <span>Jul 5th '22</span></div>
                            <h2 className="mb-2"><a href="#">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>

                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date">Sport</span> <span className="mx-1"></span> <span>Jul 5th '22</span></div>
                            <h2 className="mb-2"><a href="#">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>
                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date">Business</span> <span className="mx-1"></span> <span>Jul 5th '22</span></div>
                            <h2 className="mb-2"><a href="#">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>

                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1"></span> <span>Jul 5th '22</span></div>
                            <h2 className="mb-2"><a href="#">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="pills-latest" role="tabpanel" aria-labelledby="pills-latest-tab">
                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1"></span> <span>Jul 5th '22</span></div>
                            <h2 className="mb-2"><a href="#">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>

                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date">Business</span> <span className="mx-1"></span> <span>Jul 5th '22</span></div>
                            <h2 className="mb-2"><a href="#">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>

                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1"></span> <span>Jul 5th '22</span></div>
                            <h2 className="mb-2"><a href="#">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>

                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date">Sport</span> <span className="mx-1"></span> <span>Jul 5th '22</span></div>
                            <h2 className="mb-2"><a href="#">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>

                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1"></span> <span>Jul 5th '22</span></div>
                            <h2 className="mb-2"><a href="#">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>

                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta"><span className="date">Culture</span> <span className="mx-1"></span> <span>Jul 5th '22</span></div>
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
    )
}

export default Sidebar