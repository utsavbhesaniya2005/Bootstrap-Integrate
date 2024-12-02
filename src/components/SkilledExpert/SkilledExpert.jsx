// import './SkilledExpert.css'

// const instructors = [
//     {
//         name: 'Mark Jukarberg',
//         designation: 'UX Design Head',
//         image: '../src/assets/images/instructor/instructor-ux-design.png',
//         rating: 4.8,
//         socialLinks: {
//             facebook: '#',
//             twitter: '#',
//             whatsapp: '#',
//             instagram: '#',
//         },
//     },
//     {
//         name: 'William Hope',
//         designation: 'Digital Marketing',
//         image: '../src/assets/images/instructor/instructor-digital-marketing.png',
//         rating: 4.8,
//         socialLinks: {
//             facebook: '#',
//             twitter: '#',
//             whatsapp: '#',
//             instagram: '#',
//         },
//     },
//     {
//         name: 'Sophia Ava',
//         designation: 'Web Development',
//         image: '../src/assets/images/instructor/instructor-web-development.png',
//         rating: 4.8,
//         socialLinks: {
//             facebook: '#',
//             twitter: '#',
//             whatsapp: '#',
//             instagram: '#',
//         },
//     },
//     {
//         name: 'Web Design',
//         designation: 'UX Design Head',
//         image: '../src/assets/images/instructor/instructor-web-design.png',
//         rating: 4.8,
//         socialLinks: {
//             facebook: '#',
//             twitter: '#',
//             whatsapp: '#',
//             instagram: '#',
//         },
//     },
// ];

// const SkilledExpert = () => {
//     return(
//         <>
//             <section className="expert">
//                 <div className="container">
//                     <div className="row row-gap-5 justify-content-center justify-content-md-around">
//                         <div className="col-xxl-4 col-xl-4 col-lg-9 col-md-10 col-9">
//                             <div className="about-desc s-instructor">
//                                 <h4 className="btn-1">Skilled Introduce</h4>
//                                 <h2>Our Top className & Expert Instructors in One Place</h2>
//                                 <p>when an unknown printer took a galley of type and
//                                     scrambled makespecimen book has survived not
//                                     only five centuries</p>
//                                 <a className="btn-1 text-white mt-4" href="#">
//                                     <span>See All Instructors</span>
//                                     <i className="fa-solid fa-arrow-right"></i>
//                                 </a>
//                             </div>
//                         </div>
//                         {instructors.map((instructor, id) => (
//                             <div key={id} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
//                                 <div className="instructor d-flex flex-column row-gap-5 justify-content-md-between">
//                                     <div className="instructor-desc d-flex align-items-center justify-content-center column-gap-4 column-gap-md-1">
//                                         <div className="instructor-img">
//                                             <img src={instructor.img} className="img-fluid h-100" alt={instructor.name} />
//                                         </div>
//                                         <div className="instructor-text">
//                                             <h6 style="font-size: 20px;" className="mb-1">{instructor.name}</h6>
//                                             <p>UX Design Head</p>
//                                             <div className="reviews d-flex align-items-center column-gap-1 my-3">
//                                                 <i className="fa-solid fa-star"></i>
//                                                 <span>({instructor.rating} Reviews)</span>
//                                             </div>
//                                             <ul className="d-flex align-items-center column-gap-2 mt-3">
//                                                 <li>
//                                                     <a href={instructor.socialLinks.facebook}>
//                                                         <i className="fa-brands fa-facebook-f"></i>
//                                                     </a>
//                                                 </li>
//                                                 <li>
//                                                     <a href={instructor.socialLinks.twitter}>
//                                                         <i className="fa-brands fa-twitter"></i>
//                                                     </a>
//                                                 </li>
//                                                 <li>
//                                                     <a href={instructor.socialLinks.whatsapp}>
//                                                         <i className="fa-brands fa-whatsapp"></i>
//                                                     </a>
//                                                 </li>
//                                                 <li>
//                                                     <a href={instructor.socialLinks.instagram}>
//                                                         <i className="fa-brands fa-instagram"></i>
//                                                     </a>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }
// export default SkilledExpert;
import './SkilledExpert.css';

const instructors = [
  {
    name: 'Mark Jukarberg',
    designation: 'UX Design Head',
    image: '../src/assets/images/instructor/instructor-ux-design.png',
    rating: 4.8,
    socialLinks: {
      facebook: '#',
      twitter: '#',
      whatsapp: '#',
      instagram: '#',
    },
  },
  {
    name: 'William Hope',
    designation: 'Digital Marketing',
    image: '../src/assets/images/instructor/instructor-digital-marketing.png',
    rating: 4.8,
    socialLinks: {
      facebook: '#',
      twitter: '#',
      whatsapp: '#',
      instagram: '#',
    },
  },
  {
    name: 'Sophia Ava',
    designation: 'Web Development',
    image: '../src/assets/images/instructor/instructor-web-development.png',
    rating: 4.8,
    socialLinks: {
      facebook: '#',
      twitter: '#',
      whatsapp: '#',
      instagram: '#',
    },
  },
  {
    name: 'Web Design',
    designation: 'UX Design Head',
    image: '../src/assets/images/instructor/instructor-web-design.png',
    rating: 4.8,
    socialLinks: {
      facebook: '#',
      twitter: '#',
      whatsapp: '#',
      instagram: '#',
    },
  },
];

const SkilledExpert = () => {
  return (
    <>
        <section className="expert">
            <div className="container">
                <div className="row row-gap-5 justify-content-center justify-content-md-around">
                    <div className="col-xxl-4 col-xl-4 col-lg-9 col-md-10 col-9">
                        <div className="about-desc s-instructor">
                            <h4 className="btn-1">Skilled Introduce</h4>
                            <h2>Our Top class & Expert Instructors in One Place</h2>
                            <p>
                                when an unknown printer took a galley of type and scrambled makespecimen book has survived not
                                only five centuries
                            </p>
                            <a className="btn-1 text-white mt-4" href="#">
                                <span>See All Instructors</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-12">
                        <div className="row row-gap-5">
                            {
                                instructors.map((instructor, id) => (
                                    <div key={id} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="instructor d-flex flex-column row-gap-5 justify-content-md-between">
                                            <div className="instructor-desc d-flex align-items-center justify-content-center column-gap-4 column-gap-md-1">
                                                <div className="instructor-img">
                                                    <img src={instructor.image} className="img-fluid h-100" alt={instructor.name} />
                                                </div>
                                                <div className="instructor-text">
                                                    <h6 style={{ fontSize: '20px' }} className="mb-1">{instructor.name}</h6>
                                                    <p>{instructor.designation}</p>
                                                    <div className="reviews d-flex align-items-center column-gap-1 my-3">
                                                        <i className="fa-solid fa-star"></i>
                                                        <span>({instructor.rating} Reviews)</span>
                                                    </div>
                                                    <ul className="d-flex align-items-center column-gap-2 mt-3">
                                                        <li>
                                                            <a href={instructor.socialLinks.facebook}>
                                                                <i className="fa-brands fa-facebook-f"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href={instructor.socialLinks.twitter}>
                                                                <i className="fa-brands fa-twitter"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href={instructor.socialLinks.whatsapp}>
                                                                <i className="fa-brands fa-whatsapp"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href={instructor.socialLinks.instagram}>
                                                                <i className="fa-brands fa-instagram"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default SkilledExpert;