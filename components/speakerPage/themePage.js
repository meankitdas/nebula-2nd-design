import ThemeBox from "./themeBox";

export default function ThemePage() {
  const theme1 = [
    {
      name: "The World level mountain",
      describtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      name: "Theme 2",
      describtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      name: "Theme 3",
      describtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ];
  const theme2 = [
    {
      name: "Theme 4",
      describtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      name: "Theme 5",
      describtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      name: "Theme 6",
      describtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ];

  return (
    <div className="w-full h-full flex md:flex-row-reverse justify-center items-center ">
      <div className="lg:w-2/3 md:mb-6 w-full flex   text-xs md:text-sm justify-center items-center m-2  md:ml-20">
        <div className="lg:ml-10 md:w-full h-full lg:mb-5 mb-0  ">
          <div className="flex-col flex md:flex-row w-full h-1/2  justify-center items-center">
            {theme1.map((item) => (
              <ThemeBox list={item.name} describtion={item.describtion} />
            ))}
          </div>
          <div className="flex flex-col md:flex-row w-full h-1/2 justify-center items-center">
            {theme2.map((item) => (
              <ThemeBox list={item.name} describtion={item.describtion} />
            ))}
          </div>
        </div>
      </div>
      <div className="md:w-1/3  w-full hidden  xs:flex  lg:text-8xl md:text-4xl  text-2xl items-center justify-center ">
        <div className="text-secondary  ">
          <h1>Themes</h1>
        </div>
      </div>
    </div>
  );
}
