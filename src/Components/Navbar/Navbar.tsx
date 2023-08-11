import { Link } from "react-router-dom";
import document from "/pdf/resume.pdf";
const Navbar = ({
  aboutRef,
  projectsRef,
}: {
  aboutRef: any;
  projectsRef: any;
}) => {
  const handleClick = (refElement: any) => {
    refElement.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="fixed top-0 w-full bg-dark-bg z-50 px-2 lg:px-24">
      <div className="flex flex-row justify-between w-full lg:navbar">
        <div className="lg:w-2/6 flex justify-center items-center lg:justify-start">
          <a href="#">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="40px"
              width="40px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm243.7 589.2L512 794 268.3 653.2V371.8l110-63.6-.4-.2h.2L512 231l134 77h-.2l-.3.2 110.1 63.6v281.4zM307.9 536.7l87.6 49.9V681l96.7 55.9V524.8L307.9 418.4zm203.9-151.8L418 331l-91.1 52.6 185.2 107 185.2-106.9-91.4-52.8zm20 352l97.3-56.2v-94.1l87-49.5V418.5L531.8 525z"></path>
            </svg>
          </a>
        </div>
        <div className="lg:hidden dropdown dropdown-left">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="30px"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-semi-dark-bg rounded-box w-52 "
          >
            <li>
              <div
                onClick={() => {
                  handleClick(aboutRef);
                }}
                className="cursor-pointer"
              >
                About
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  handleClick(projectsRef);
                }}
                className="cursor-pointer"
              >
                Projects
              </div>
            </li>
            <li>
              <div className="cursor-pointer ">
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = "mailto:alfredoipina22@gmail.com";
                    e.preventDefault();
                  }}
                >
                  Contact Me
                </Link>
              </div>
            </li>
            <li>
              <div className="cursor-pointer">
                <a
                  href={document}
                  download="Jose-Alfredo-Ipiña-Zarazua"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Resumé</button>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="w-4/6 hidden lg:flex">
          <ul className="navbar justify-end text-xs font-normal">
            <li className="mr-12">
              <div
                onClick={() => {
                  handleClick(aboutRef);
                }}
                className="cursor-pointer duration-500 hover:backdrop-blur-sm hover:bg-white/30 px-4 rounded-full"
              >
                About
              </div>
            </li>
            <li className="mr-12">
              <div
                className="cursor-pointer duration-500 hover:backdrop-blur-sm hover:bg-white/30 px-4 rounded-full"
                onClick={() => {
                  handleClick(projectsRef);
                }}
              >
                Projects
              </div>
            </li>
            <li className="mr-12">
              <div className="cursor-pointer duration-500 hover:backdrop-blur-sm hover:bg-white/30 px-4 rounded-full">
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = "mailto:alfredoipina22@gmail.com";
                    e.preventDefault();
                  }}
                >
                  Contact Me
                </Link>
              </div>
            </li>
            <li className="mr-12">
              <div className="cursor-pointer duration-500 hover:backdrop-blur-sm hover:bg-white/30 px-4 rounded-full">
                <a
                  href={document}
                  download="Jose-Alfredo-Ipiña-Zarazua"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Resumé</button>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
