import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import ProjectsSection from "../Components/ProjectsSection/ProjectsSection";
import SkillsSection from "../Components/SkillsSection/SkillsSection";

const HomePage = () => {
    return(
        <div className="w-screen overflow-hidden">
            <Navbar />
            <Banner />
            <SkillsSection />
            <ProjectsSection />
            <Footer />            
        </div>
    );
}
export default HomePage;