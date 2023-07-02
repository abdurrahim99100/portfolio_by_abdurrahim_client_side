import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Profile from "../Profile/Profile";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Profile></Profile>
            <AboutMe></AboutMe>
            <Skills></Skills>
        </div>
    );
};

export default Home;