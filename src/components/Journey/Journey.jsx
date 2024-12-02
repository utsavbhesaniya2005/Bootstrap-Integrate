import './Journey.css'

const Journey = () => {
    return(
        <>
            <section className="journey my-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title text-center">
                                <h4 className="btn-1 text-white" href="#">Trending Categories</h4>
                                <h2 className="text-white">Start your Learning Journey Today!</h2>
                                <p>Groove’s intuitive shared inbox makesteam members together <br />
                                organize, prioritize and.In this episode.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-between pt-4">
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="journey-desc text-center">
                                <img src="../src/assets/images/journey/experts.svg" alt="Experts" />
                                <h4 className="text-white mb-1">Learn With Experts</h4>
                                <p>Curate anding area share Pluralsight content to reach your</p>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="journey-desc text-center">
                                <img src="../src/assets/images/journey/learn-anything.svg" alt="Learn Anything" />
                                <h4 className="text-white mb-1">Learn Anything</h4>
                                <p>Curate anding area share Pluralsight content to reach your</p>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="journey-desc text-center">
                                <img src="../src/assets/images/journey/online-certificate.svg" alt="Online Certificate" />
                                <h4 className="text-white mb-1">Get Online Certificate</h4>
                                <p>Curate anding area share Pluralsight content to reach your</p>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="journey-desc text-center">
                                <img src="../src/assets/images/journey/email-marketing.svg" alt="Email Marketing" />
                                <h4 className="text-white mb-1">E-mail Marketing</h4>
                                <p>Curate anding area share Pluralsight content to reach your</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center pt-5 row-gap-5">
                        <div className="col-xxl-6 col-xl-6 col-lg-12 .col-md-12 col-12">
                            <div className="instructor-card rounded-4 d-flex align-items-start">
                                <div className="instructor-img-1">
                                    <img src="../src/assets/images/journey/instructor-image.png" alt="Instructor Image" />
                                </div>
                                <div className="instructor-text-1 p-4 d-flex flex-column">
                                    <h2 className="pb-1">Become a Instructor</h2>
                                    <p>To take a trivial example, which of us undertakes
                                    physical exercise yes is this happen here.</p>
                                    <a className="btn-1 text-white" href="#">
                                        <span>Apply Now</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-12 .col-md-12 col-12">
                            <div className="students-card rounded-4 d-flex align-items-start">
                                <div className="students-img">
                                    <img src="../src/assets/images/journey/students-image.png" alt="Students Image" />
                                </div>
                                <div className="students-text instructor-text-1 d-flex flex-column p-4">
                                    <h2 className="pb-1">Become a Student</h2>
                                    <p>Join millions of people from around the world
                                        learning together. Online learning.</p>
                                    <a className="btn-1 text-white" href="#">
                                        <span>Apply Now</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Journey;