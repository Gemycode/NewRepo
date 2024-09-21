import React from 'react';

const Main = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
  return (
    <div
      id="aboutUs"
      className="flex flex-col gap-6 bg-white ml-[55px] mr-[55px] rounded-lg p-8"
    >
      <div className="mt-[45px] text-3xl font-semibold text-green-800">
        Welcome to Our Agency
      </div>
      <div className="text-2xl text-indigo-900">
        Smart Ideas for your
        <div className="italic font-bold mt-2">Website are Here!</div>
      </div>
      <div className="flex gap-28">
        <div className="text-[18px]">
          Welcome to{" "}
          <a href="#header">
            <span className="text-cyan-800 text-[20px] cursor-pointer font-bold underline">
              Let's Code It
            </span>
          </a>
          , a place where innovation and creativity collide! Our creative team
          specialises in creating eye-catching visual experiences that are
          customised for your business. We bring your ideas to life with
          anything from gorgeous logos and modern websites to captivating
          packaging and persuasive marketing materials. Allow our creative team
          to take your brand to new heights. Come discover the power of
          outstanding design with us now!
        </div>
        <img src={require("../assets/images/wallpaperflare.com_wallpaper (4).jpg")} alt="" className="w-[430px] h-[300px] mr-[80px] rounded-3xl mt-[-75px]"/>
      </div>
      <div className="flex">
        <button className=" border-green-800 text text-xl text-green-800 border-2 p-[8px] pl-[25px] pr-[25px] rounded-md hover:bg-green-800 hover:text-white hover:transition-all delay-75">
          Discover More
        </button>
      </div>
      {/* <div
        className="fixed top-0 left-0 w-full h-screen bg-white opacity-50 z-10 "
      >
        ${
          scrollPosition > 200 ? 'block' : 'hidden'
        }
        <div className="flex justify-center items-center h-full">
          <div className="text-3xl font-bold text-green-800">
            Scroll down to learn more!
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Main;
