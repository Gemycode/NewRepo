import React from "react";

const Services = () => {
  return (
    <div id="services" className="bg-white ml-[55px] mr-[55px] rounded-lg">
      <div className="flex mt-[80px] items-center gap-56">
        <img
          src={require("../assets/images/wallpaperflare.com_wallpaper (4).jpg")}
          alt=""
          className="rounded-2xl w-[480px] h-[352px] ml-[80px]"
        />

        <div className="ml-[-55px]">
          <div className="text-3xl text-orange-950 drop-shadow mt-6">
            We create some things for you!
          </div>
          <div className="mt-2 mb-6 text-[20px]">
            <span className="text-3xl text-orange-600 italic">Designs</span>
            for your success future!
          </div>
          <div>
            <ul className="mt-8 text-[18px] mb-6">
              <li className="list-disc ml-4">
                <span className="drop-shadow text-[20px] font-semibold text-green-950">
                  Web Development:
                </span><br/>
                Custom website development <br/> e-commerce solutions <br/>
                progressive web apps.
              </li>
              <li className="list-disc ml-4">
                <span className="drop-shadow text-[20px] font-semibold text-green-950">
                  Mobile App Development:
                </span>
                Hybrid and native mobile app development for iOS and Android.
              </li>
              <li className="list-disc ml-4">
                <span className="drop-shadow text-[20px] font-semibold text-green-950">
                  Backend Development:
                </span>
                API development, serverless architecture, and backend
                integration.
              </li>
              <li className="list-disc ml-4">
                <span className="drop-shadow text-[20px] font-semibold text-green-950">
                  Data Science and Analytics:
                </span>
                Data visualization, machine learning, and data analytics.
              </li>
              <li className="list-disc ml-4">
                <span className="drop-shadow text-[20px] font-semibold text-green-950">
                  Other Services:
                </span>
                Code review and optimization, technical consulting, and more.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
