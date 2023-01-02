export default function PrizePage() {
  return (
    <section className=" min-h-screen p-0 bg-white  md:block" id="speaker">
      <div className=" h-screen ">
        <div className="h-1/4 w-full ">
          <div className="flex justify-center items-center  h-full ">
            <h1 className="lg:text-8xl md:text-4xl text-2xl text-secondary">
              Prizes!
            </h1>
          </div>
        </div>
        <div className="h-3/4 w-full flex justify-center items-center">
          <div className="md:w-3/4 flex p-5 md:h-2/3 h-full  w-full md:flex-row flex-col ">
            <div className="md:w-1/3 rounded-xl bg-primary md:mr-5 "></div>
            <div className="md:w-1/3 rounded-xl bg-primary md:mr-5"></div>
            <div className="md:w-1/3 rounded-xl bg-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
