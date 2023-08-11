import { useRef } from "react";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import ProjectsSection from "../Components/ProjectsSection/ProjectsSection";
import SkillsSection from "../Components/SkillsSection/SkillsSection";
import ToolsBar from "../Components/ToolsBar/ToolsBar";



const HomePage = () => {
  const bannerRef = useRef(null);  
  const projectsRef = useRef(null);  
  
  return (
    <div className="w-screen overflow-hidden">
      <div className="max-w-[1366px] min-w[1365px] m-auto">
        <Navbar projectsRef={projectsRef} aboutRef={bannerRef}/>
        <Banner refElement={bannerRef}/>
        <SkillsSection />
        <ProjectsSection refElement={projectsRef}/>
        <ToolsBar title="This website was build with" skills={['React', 'Typescript', 'Vite Framework', 'Tailwind CSS']} />
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;


{
  /**
   * const [loading, setLoading] = useState(true);
  
  useEffect(() => {    
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
  if (loading) {
    return <Loader />;
  }
   */
}