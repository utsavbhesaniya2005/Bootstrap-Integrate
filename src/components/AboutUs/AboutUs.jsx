import './AboutUs.css'

const AboutUs = () => {
    return(
        <>
            <section className="aboutus">
                <div className="container">
                    <div className="row justify-content-center align-items-center row-gap-4">
                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12">
                            <div className="about-image">
                                <img src="../src/assets/images/aboutus/about.png" className="img-fluid" alt="About Image" />
                                <img className="about-student img-fluid" src="../src/assets/images/aboutus/about-student.png" alt="About-Student Image" />
                                <img className="about-shape img-fluid" src="../src/assets/images/aboutus/about-shape.png" alt="About-Shape Image" />
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                            <div className="about-desc">
                                <h4 className="btn-1">Get More About Us</h4>
                                <h2>Thousand Of Top <span className="learning bg-fit">Courses</span><br /> Now In One Place</h2>
                                <p>Groove’s intuitive shared inbox makes it easy for team members to organize, prioritize and.In this episode of the Smashing Pod we’re talking about Web Platform Baseline.</p>
                                <ul className="d-flex flex-column row-gap-3">
                                    <li>
                                        <a href="#" className="d-flex align-items-center justify-content-start column-gap-4">
                                            <div className="left-icon">
                                                <i className="fa-solid fa-angle-right"></i>
                                            </div>
                                            <span>The Most World className Instructors</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex align-items-center justify-content-start column-gap-4">
                                            <div className="left-icon">
                                                <i className="fa-solid fa-angle-right"></i>
                                            </div>
                                            <span>Access Your className anywhere</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex align-items-center justify-content-start column-gap-4">
                                            <div className="left-icon">
                                                <i className="fa-solid fa-angle-right"></i>
                                            </div>
                                            <span>Flexible Course Plan</span>
                                        </a>
                                    </li>
                                </ul>
                                <a className="btn-1 text-white" href="#">
                                    <span>Start Free Trial</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutUs;