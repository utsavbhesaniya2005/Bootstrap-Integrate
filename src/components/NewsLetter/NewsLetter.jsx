import './NewsLetter.css';

const NewsLetter = () => {
    return(
        <>
            <section className="newsletter mb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-10 col-12">
                            <div className="newsletter-img d-flex justify-content-center">
                                <img src="../src/assets/images/news-letter/newsletter_img.png" alt="News Letter Image" className="img-fluid main-img z-1" />
                                <img src="../src/assets/images/news-letter/newsletter_shape-1.png" alt="News Letter Image Shape-1" className="shape-1 position-absolute z-0 img-fluid" />
                                <img src="../src/assets/images/news-letter/newsletter_shape-2.png" alt="News Letter Image Shape-2" className="img-fluid shape-2 position-absolute z-0" />
                                <img src="../src/assets/images/news-letter/newsletter_shape-3.png" alt="News Letter Image Shape-3" className="img-fluid shape-3 position-absolute z-0" />
                            </div>
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-11 col-sm-10 col-12">
                            <div className="newsletter-desc position-relative z-1">
                                <h1>Want to stay <b>informed</b> about new <b>courses & study?</b></h1>
                                <div className="newsletter-mail d-flex align-items-center column-gap-3 row-gap-4">
                                    <form action="">
                                        <input type="email" placeholder="Type Your E-Mail" className="rounded-pill" />
                                    </form>
                                    <a href="#" className="btn-1">Subscribe Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default NewsLetter;