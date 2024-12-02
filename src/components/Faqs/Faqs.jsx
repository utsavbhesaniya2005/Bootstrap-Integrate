import { Accordion } from 'react-bootstrap';
import './Faqs.css';

const Faqs = () => {
    return (
        <>
            <section className="faqs">
                <div className="container">
                    <div className="row justify-content-center row-gap-4">
                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-12">
                            <div className="faqs-img">
                                <img src="../src/assets/images/faqs/faq's-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-11 col-12">
                            <div className="faqs-desc">
                                <div className="title">
                                    <h4 className="btn-1" href="#">Faq's</h4>
                                    <h2>Start Learning From World's Pro Instructors</h2>
                                    <p>Groove’s intuitive shared inbox makes it easy for team members to organize, prioritize and.In this episode.</p>
                                </div>
                                <Accordion defaultActiveKey='0'>
                                    <Accordion.Item eventKey='0' className="accordion-item">
                                        <Accordion.Header className='accordian-button'>What’s Skillgrow Want to give you?</Accordion.Header>
                                        <Accordion.Body className="accordion-collapse show">
                                            <div className="accordion-body">Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl</div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey='1' className="accordion-item">
                                        <Accordion.Header className='accordian-button'>Why choose us for your education?</Accordion.Header>
                                        <Accordion.Body className="accordion-collapse">
                                            <div className="accordion-body">Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl</div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey='2' className="accordion-item">
                                        <Accordion.Header className='accordian-button'>How We Provide Service For you?</Accordion.Header>
                                        <Accordion.Body className="accordion-collapse">
                                            <div className="accordion-body">Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl</div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey='3' className="accordion-item">
                                        <Accordion.Header className='accordian-button'>Are you Affordable For Your Course?</Accordion.Header>
                                        <Accordion.Body className="accordion-collapse">
                                            <div className="accordion-body">Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl</div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Faqs;