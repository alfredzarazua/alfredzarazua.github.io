const LeftBanner = ({
    description,
    image,    
  }: {    
    description: string;
    image: string;    
  }) => {
    return (
      <div className="w-full h-fit py-6 lg:mt-40 relative">
        <div className="w-full h-fit lg:h-[380px] relative rounded z-20">
          
          <div className="lg:w-5/12 flex flex-nowrap flex-col justify-center items-center">
            
            <div className="w-full mt-6 rounded-md px-4 py-6 bg-transparent shadow-slate-950 shadow-2xl mb-10 lg:mb-0 lg:z-10">
              <span className="font-light text-[20px] text-text-p-gray">
                {description}
              </span>
            </div>
  
            <div className="w-fit h-fit lg:absolute lg:right-0 lg:z-0">
              <img src={image} className="w-full lg:w-[650px] rounded" alt="" />
              <span className="lg:absolute lg:top-0 lg:right-0 w-[650px] h-full bg-semi-dark-bg bg-opacity-25"></span>
            </div>
  
            
          </div>
          
        </div>
      </div>
    );
  };
  export default LeftBanner;
  {
    /**             
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(8.7px);
          -webkit-backdrop-filter: blur(8.7px);
          border: 1px solid rgba(164, 176, 224, 0.36);
       */
  }
  