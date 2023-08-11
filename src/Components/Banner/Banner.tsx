import propic from "/img/propic.jpg";

const Banner = ({refElement}:{refElement: any}) => {
  return (
    <div className="w-5/6 m-auto mt-20">
      <div ref={refElement}>
        <h4 className="font-light text-text-high-green">Hi there! my name is</h4>
        <h1 className="font-extrabold text-[32px] lg:text-[72px]">Alfredo Zarazúa</h1>
      </div>

      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-1/6 lg:p-8 pt-10 flex justify-center">
            <img src={propic} alt="" className="w-[90px] h-[90px] lg:w-[120px] lg:h-[120px] rounded-full"/>
        </div>

        <div className="w-full lg:w-5/6 p-4 lg:p-10 flex justify-center items-center lg:block">          
          <p className="font-light text-text-p-gray">
          I am a computer engineering student with a strong
          focus on developing desktop and mobile applications.<br/>
          I enjoy exploring the intricacies of software development and finding creative solutions 
          to complex problems.<br/><br/>
          I am constantly seeking opportunities to expand my knowledge 
          and apply my skills to create innovative and user-friendly applications. <br/><br/>
          With my dedication, adaptability, and passion for technology, I am excited
          to contribute to the ever-evolving world of software development.
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
