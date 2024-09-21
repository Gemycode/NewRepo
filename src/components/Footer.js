import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="bg-white  ml-[55px] mr-[55px] rounded-lg">
      <div className="flex mt-[80px] items-center gap-56">
        <img src={require("../assets/images/wallpaperflare.com_wallpaper (4).jpg")} alt="" className="rounded-2xl w-[480px] h-[352px] ml-[80px]" />        {/* <img
          src="../Images/work4.avif"
          className="rounded-full w-[380px] h-[252px] ml-[80px]"
        /> */}
        <div className="ml-[-55px]">
          <div className="text-3xl text-orange-950 drop-shadow mt-6">
            Let's Code It
          </div>
          <div className="mt-2 mb-6 text-[20px]">
            <span className="text-3xl text-orange-600 italic">Follow</span>
            us on social media!
          </div>
          <div>
            <ul className="mt-8 text-[18px] mb-6">
              <li className="list-disc ml-4">
                <span className="drop-shadow text-[20px] font-semibold text-green-950">
                  Facebook:
                </span>
                <a href="https://www.facebook.com/">@letsCodeIt</a>
              </li>
              <li className="list-disc ml-4">
                <span className="drop-shadow text-[20px] font-semibold text-green-950">
                  Twitter:
                </span>
                <a href="https://twitter.com/">@letsCodeIt</a>
              </li>
              <li className="list-disc ml-4">
                <span className="drop-shadow text-[20px] font-semibold text-green-950">
                  Instagram:
                </span>
                <a href="https://www.instagram.com/">@letsCodeIt</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
