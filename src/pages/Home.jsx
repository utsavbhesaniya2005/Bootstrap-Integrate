import AboutUs from "../components/AboutUs";
import AnimateLogo from "../components/AnimateLogo";
import Banner from "../components/Banner";
import Category from "../components/Category";
import CategorySlider from "../components/CategorySlider";
import TopCourse from "../components/TopCourse";

const Home = () => {
    return(
        <>
            <Banner />
            <Category />
            <CategorySlider />
            <AnimateLogo />
            <AboutUs />
            <TopCourse />
        </>
    )
}
export default Home;