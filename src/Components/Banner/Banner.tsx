const Banner = () => {
  return (
    <div className="w-4/6 m-auto mt-20">
      <div>
        <h4 className="font-light text-text-high-green">Hi there my name is</h4>
        <h1 className="font-extrabold text-[72px]">Alfredo Zarazúa</h1>
      </div>

      <div className="flex flex-row w-full">
        <div className="w-1/6 p-8 pt-10">
            <img src="./public/img/propic.jpg" alt="" className="rounded-full"/>
        </div>

        <div className="w-5/6 p-10">
          {" "}
          <p className="font-light">
            I am a Computing Engineering student <br />
            based in San Luis Potosí, México
            <br />
            Through my carreer I have worked with different technologies
            <br />
            <br />
            My main focus is working in desktop and mobile apps Currently I am
            colaborating in a project for the university where I'm enrrolled in.
            <br />
            The project is a system to help the teachers to evaluate PhD
            students
            <br />
            <br />
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
