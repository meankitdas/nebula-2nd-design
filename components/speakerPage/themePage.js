import ThemeBox from "./themeBox";


export default function ThemePage() {
  const theme1 = [
    { name: "Theme 1" },
    { name: "Theme 2" },
    { name: "Theme 3" },
    
  ];
  const theme2 = [
    { name: "Theme 1" },
    { name: "Theme 2" },
    { name: "Theme 3" },
    
  ];

  return (
    <div className="w-full h-full md:flex  justify-center items-center ">
    
      <div className="md:w-1/3 md:mb-6  flex  text-xs md:text-sm justify-center items-center m-2  md:ml-20">
        <div className="md:ml-10 w-full h-full md:mb-5 mb-0  ">
          <div className="flex  w-full h-1/2 justify-center items-center">
            {theme1.map((item) => (
              <ThemeBox list={item.name} />
            ))}
          </div>
          <div className="flex w-full h-1/2 justify-center items-center">
            {theme2.map((item) => (
              <ThemeBox list={item.name} />
            ))}
          </div>

         
        </div>
      </div>
      <div className="md:w-2/3 w-full hidden   xs:flex  md:text-8xl mt-10 md:mt-0 text-2xl items-center justify-center ">
        <div className="text-secondary  ">
          <h1>Themes</h1>
        </div>
      </div>
      
    </div>
  );
}
