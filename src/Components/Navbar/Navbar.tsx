const Navbar = () => {
  return (
    <div className="navbar w-11/12 m-auto">
      <div className="w-2/6 ">
        <a>   
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm243.7 589.2L512 794 268.3 653.2V371.8l110-63.6-.4-.2h.2L512 231l134 77h-.2l-.3.2 110.1 63.6v281.4zM307.9 536.7l87.6 49.9V681l96.7 55.9V524.8L307.9 418.4zm203.9-151.8L418 331l-91.1 52.6 185.2 107 185.2-106.9-91.4-52.8zm20 352l97.3-56.2v-94.1l87-49.5V418.5L531.8 525z"></path></svg>                 
        </a>
      </div>
      <div className="w-4/6">
        <ul className="navbar justify-end text-xs font-normal">
          <li className="mr-12">About</li>
          <li className="mr-12">Projects</li>
          <li className="mr-12">Contact</li>
          <li className="mr-12">Resumé</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
