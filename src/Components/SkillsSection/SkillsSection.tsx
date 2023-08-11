import image2 from "/img/code_2.jpg";
const SkillsSection = () => {
  return (
    <div className="w-5/6 m-auto lg:mt-32 relative py-10">
      <div className="flex flex-row items-center justify-start mb-10 lg:mb-32">
        <div className="flex flex-row w-auto">
          <div className="text-[30px] whitespace-nowrap mr-2 text-green-gray">
            Skills
          </div>
        </div>
        <div className="border-t border-solid w-full border-text-p-gray border-opacity-40"></div>
      </div>

      <div className="lg:absolute lg:top-32 lg:left-6 lg:w-[300px] lg:mt-6 rounded-md px-4 py-6 bg-semi-dark-bg shadow-slate-950 shadow-2xl">
        <span className="font-light text-[16px] text-text-p-gray">
          My journey as a computer engineering student has equipped me with a
          diverse skill set and practical experience in developing desktop and
          mobile applications.
        </span>
      </div>

      <div className="lg:absolute lg:top-32 lg:right-6 lg:w-[300px] mt-6 rounded-md px-4 py-6 bg-semi-dark-bg shadow-slate-950 shadow-2xl">
        <span className="font-light text-[16px] text-text-p-gray">
        I worked on various projects that have honed my
          programming skills and expanded my knowledge.
        </span>
      </div>
      
      
      
      <div className="mx-auto mt-10 w-[300px] h-[300px] lg:h-[400px] lg:w-[400px] rounded-full m-auto relative">
        <img
          src={image2}
          alt=""
          className="w-[300px] h-[300px] lg:h-[400px] lg:w-[400px] rounded-full shadow-2xl shadow-black"
        />

        <span className="w-[300px] h-[300px] lg:h-[400px] lg:w-[400px] rounded-full bg-black bg-opacity-20 shadow-inner shadow-black absolute top-0"></span>

        <div className="cursor-default absolute left-6 top-7 hover:scale-150 duration-700 bg-text-high-green rounded-full text-[12px] lg:text-[14px] px-5 font-light text-gray-950">
          Java
        </div>

        <div className="cursor-default absolute right-0 top-36 hover:scale-150 duration-700 bg-text-high-green rounded-full text-[12px] lg:text-[14px] px-5 font-light text-gray-950">
          C#
        </div>

        <div className="cursor-default absolute left-10 top-44 lg:top-40 hover:scale-150 duration-700 bg-text-high-green rounded-full text-[12px] lg:text-[14px] px-5 font-light text-gray-950">
          Python
        </div>
        <div className="cursor-default absolute right-0 top-56 hover:scale-150 duration-700 bg-dark-bg bg-opacity-60 border border-text-p-gray text-text-hd-gray rounded-full text-[12px] lg:text-[14px] px-5 font-light">
          Kotlin
        </div>
        <div className="cursor-default absolute left-40 top-14 hover:scale-150 duration-700 bg-text-high-green rounded-full text-[12px] lg:text-[14px] px-5 font-light text-gray-950">
          .NET Framework
        </div>
        <div className="cursor-default absolute right-28 top-0 hover:scale-150 duration-700 bg-text-high-green rounded-full text-[12px] lg:text-[14px] px-5 font-light text-gray-950">
          SQL
        </div>
        <div className="cursor-default absolute right-24 top-28 lg:top-40 hover:scale-150 duration-700 bg-text-high-green rounded-full text-[12px] lg:text-[14px] px-5 font-light text-gray-950">
          Android
        </div>
        <div className="cursor-default absolute left-2 top-20 hover:scale-150 duration-700 bg-crystal-lake rounded-full text-[12px] lg:text-[14px] px-5 font-light text-gray-950">
          React JS
        </div>
        <div className="cursor-default absolute right-24 bottom-2 hover:scale-150 duration-700 bg-dark-bg bg-opacity-60 border border-text-p-gray text-text-hd-gray rounded-full text-[12px] lg:text-[14px] px-5 font-light">
          Typescript
        </div>
        <div className="cursor-default absolute left-10 bottom-8 hover:scale-150 duration-700 bg-crystal-lake rounded-full text-[12px] lg:text-[14px] px-5 font-light text-gray-950">
          JavaFX
        </div>
        <div className="cursor-default absolute left-0 bottom-20 hover:scale-150 duration-700 bg-dark-bg bg-opacity-60 border border-text-p-gray text-text-hd-gray rounded-full text-[12px] lg:text-[14px] px-5 font-light">
          XML
        </div>
        <div className="cursor-default absolute right-2 bottom-8 lg:bottom-16 hover:scale-150 duration-700 bg-crystal-lake rounded-full text-[12px] lg:text-[14px] px-5 font-light text-gray-950">
          Bash Scripting
        </div>
        <div className="cursor-default absolute left-32 bottom-16 hover:scale-150 duration-700 bg-text-high-green rounded-full text-[12px] lg:text-[14px] px-5 font-light text-gray-950">
          MVC
        </div>
        <div className="cursor-default absolute left-0 bottom-36 lg:bottom-40 hover:scale-150 duration-700 bg-text-high-green rounded-full text-[12px] lg:text-[14px] px-5 font-light text-gray-950">
          PostgreSQL
        </div>
        <div className="cursor-default absolute left-36 bottom-24 lg:bottom-32 hover:scale-150 duration-700 bg-text-high-green rounded-full text-[12px] lg:text-[14px] px-5 font-light text-gray-950">
          Multi-threading
        </div>
      </div>

      <div className="lg:absolute lg:bottom-3 lg:left-6 lg:w-[300px] mt-12 lg:mt-6 rounded-md px-4 py-6 bg-semi-dark-bg shadow-slate-950 shadow-2xl">
        <span className="font-light text-[16px] text-text-p-gray">
          I have worked at UASLP, on Computer Science Laboratories
          where I had the chance to apply my linux knowledge 
          to efficiently automate tasks using my Linux Bash scripting skills allowed me to
          optimize workflows.
        </span>
      </div>

      

      
    </div>
  );
};

export default SkillsSection;
