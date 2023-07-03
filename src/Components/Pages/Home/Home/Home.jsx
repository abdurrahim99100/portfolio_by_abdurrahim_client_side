import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import Profile from "../Profile/Profile";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Profile></Profile>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Project></Project>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;