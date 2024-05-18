import Banner from "./Home/Banner";
import Category from "./Home/Category/Category";
import PopularMenu from "./Home/PopularMenu/PopularMenu";
import Testimonials from "./Home/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;