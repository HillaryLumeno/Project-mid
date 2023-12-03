const Blog = () => {
  return (
    <div className="blog" id="blog">
                <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>What I Love</p>
                    <h2>Organization</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                    <div className="blog-item wow fadeInUp" data-wow-delay="0.1s">
                        <div className="blog-img">
                        <img src="/public/img/TouMinahasa.png" alt="Blog" />
                        </div>
                        <div className="blog-text">
                        <h2>Tou Minahasa</h2>
                        <div className="blog-meta">
                        </div>
                        <p>
                        My experience with Tou Minahasa organization on campus has been truly inspiring. 
                        Engaging in retreats, worship sessions, and community service activities, 
                        I've felt a strong connection to Minahasa's culture and values. Throughout these events, 
                        I've been part of collective efforts to strengthen the community, participated in meaningful worship sessions, 
                        and contributed to impactful service initiatives benefiting the surrounding environment. This experience not only 
                        enriched my understanding of the culture but also instilled values of solidarity, teamwork, and responsibility towards the community.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="blog-item wow fadeInUp" data-wow-delay="0.3s">
                        <div className="blog-img">
                        <img src="/public/img/Quantum.png" alt="Blog" />
                        </div>
                        <div className="blog-text">
                        <h2>Panitia QUANTUM PARADISE</h2>
                        <p>
                        Being part of the organizing committee for Quantum Paradise event held on November 2, 2023, 
                        at NDC was an invigorating experience. The event was meticulously designed with the aim to refresh and rejuvenate the students 
                        of the computer faculty. My role involved coordinating various aspects, from logistical arrangements to program scheduling. 
                        Witnessing the participants immerse themselves in the activities, workshops, and engaging sessions was incredibly rewarding. 
                        Quantum Paradise not only provided a break from academic routines but also fostered a sense of community and 
                        offered valuable insights, leaving a positive impact on both the attendees and myself.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
  )
}

export default Blog