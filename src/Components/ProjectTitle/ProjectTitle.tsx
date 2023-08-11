const ProjectTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div>
      <div className="w-5/6 m-auto mt-20 font-bold text-green-gray text-[40px] lg:text-[60px]">
        <h1>{title}</h1>
      </div>
      <div className="w-5/6 m-auto mt-20 lg:mb-52 font-mono text-text-p-gray text-[20px]">
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
};

export default ProjectTitle;
