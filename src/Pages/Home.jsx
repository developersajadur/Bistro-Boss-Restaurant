import Banner from "./Home/Banner";
import Category from "./Home/Category/Category";
import PopularMenu from "./Home/PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;