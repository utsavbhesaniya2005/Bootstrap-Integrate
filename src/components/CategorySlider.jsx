import './CategorySlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const categories = [
    { name: "Graphic Design", count: 22, icon: "../src/assets/images/category/graphic-icon.svg" },
    { name: "Finance", count: 41, icon: "../src/assets/images/category/finance-icon.svg" },
    { name: "Development", count: 29, icon: "../src/assets/images/category/development-icon.svg" },
    { name: "Marketing", count: 31, icon: "../src/assets/images/category/marketing-icon.svg" },
    { name: "Life Style", count: 23, icon: "../src/assets/images/category/life-style-icon.svg" },
    { name: "Management", count: 19, icon: "../src/assets/images/category/management-icon.svg" }
];

const CategorySlider = () => {
    return (
        <section className="category-slider">
            <div className="container mt-2 rounded-pill p-5 position-relative" style={{ backgroundColor: '#F7F7F9' }}>
                <div className="row">
                    <div className="col-12">
                        <Swiper
                            navigation={{
                                prevEl: '.swiper-button-prev',
                                nextEl: '.swiper-button-next',
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {categories.map((category, index) => (
                                <SwiperSlide key={index}>
                                    <div className="item-category">
                                        <div className="item-img mb-3 d-flex align-items-center justify-content-center">
                                            <a href="#">
                                                <img src={category.icon} className="img-fluid" alt={`${category.name} Icon`} />
                                            </a>
                                        </div>
                                        <div className="item-desc">
                                            <h4 className="text-center">{category.name}</h4>
                                            <p className="text-center">({category.count})</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="angle-left swiper-button-prev">
                            <a href="#">
                                <i className="fa-solid fa-arrow-left"></i>
                            </a>
                        </div>
                        <div className="angle-right swiper-button-next">
                            <a href="#">
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategorySlider;