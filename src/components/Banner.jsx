import './Banner.css';

const Banner = () => {
    return(
        <>
            <section className="banner position-relative bg-fit">
                <div className="container position-relative">
                    <div className="row row-gap-4 justify-content-center banner-area">
                        <div className="col-lg-6 col-md-10 col-sm-11 col-12">
                            <div className="banner-text p-5">
                                <h2>Never Stop <span className="learning bg-fit">Learning</span><br /> Life <b>Never Stop</b> Teaching</h2>
                                <p>Every teaching and learning journey is unique Following We&apos;ll help guide your way.</p>
                                <a className="btn-1 text-white" href="#">
                                    <span>Start Free Trial</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-11 col-sm-11 col-12">
                            <div className="banner-img d-flex justify-content-center align-items-end">
                                <img src="../src/assets/images/banner/banner-img.png" className="img-fluid" alt="Banner Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner;