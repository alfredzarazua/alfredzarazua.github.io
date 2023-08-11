const RightBanner = ({    
    description,
    image,    
  }: {
    description: string;
    image: string;    
  }) => {
    return (
      <div className="w-full h-fit py-6 mt-10 lg:mt-40 lg:relative">
        <div className="w-full h-fit lg:h-[380px] relative flex flex-col lg:items-end">
          
  
          <div className="lg:w-5/12 lg:z-20 flex flex-nowrap flex-col justify-center items-center">
            <div className="w-full mt-6 rounded-md px-4 py-6 bg-transparent shadow-slate-950 shadow-2xl mb-10 lg:z-10">
              <span className="font-light text-[20px] text-text-p-gray">
                {description}
              </span>
            </div>
            <div className="w-fit h-fit lg:absolute lg:left-0 lg:z-0">
              <img src={image} className="w-full lg:w-[650px] rounded" alt="" />
              <span className="lg:absolute lg:top-0 lg:right-0 w-[650px] h-full bg-semi-dark-bg bg-opacity-25"></span>
            </div>
            
          </div>          
        </div>
      </div>
    );
  };
  export default RightBanner;
  