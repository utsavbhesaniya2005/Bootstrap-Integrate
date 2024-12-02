import AboutUs from "../components/AboutUs/AboutUs";
import AnimateLogo from "../components/AnimateLogo/AnimateLogo";
import Banner from "../components/Banner/Banner";
import Category from "../components/Category/Category";
import CategorySlider from "../components/CategorySlider/CategorySlider";
import Counter from "../components/Counter/Counter";
import Faqs from "../components/Faqs/Faqs";
import Journey from "../components/Journey/Journey";
import NewsBlog from "../components/NewsBlog/NewsBlog";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import SkilledExpert from "../components/SkilledExpert/SkilledExpert";
import TopCourse from "../components/TopCourse/TopCourse";

const Home = () => {
    return(
        <>
            <Banner />
            <Category />
            <CategorySlider />
            <AnimateLogo />
            <AboutUs />
            <TopCourse />
            <NewsLetter />
            <SkilledExpert />
            <Counter />
            <Faqs />
            <Journey />
            <NewsBlog />
        </>
    )
}
export default Home;