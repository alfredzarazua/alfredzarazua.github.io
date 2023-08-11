const ToolsBar = ({ title, skills }: { title: string; skills: string[]; }) => {
  return (
    <div className="w-5/6 m-auto mt-32 mb-20 flex flex-col flex-nowrap">
      <div className="flex justify-center p-6 lg:p-10 text-center">
        <h3 className="font-mono text-text-high-green text-[18px]">{title}</h3>
      </div>
      <div className="w-full mt-6">
        <ul className="flex items-center lg:justify-center w-full flex-row no-scrollbar overflow-x-scroll">
          {skills.map((string, index) => (
            <li key={index}>
              <div className="mr-4 border border-solid border-text-bold-gray rounded-full text-[12px] px-4 font-light text-green-gray whitespace-nowrap">
                {string}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToolsBar;
