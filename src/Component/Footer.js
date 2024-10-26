import React from "react";

function Footer() {
  return (
    <footer
      className="flex flex-col items-center"
      style={{overflow:'hidden'}}
    >
      <section
        className="flex items-start w-[80%] flex-col sm:flex-row sm:justify-between sm:flex-wrap m-[4rem] gap-[1rem]"
      >
        <div className="w-[150px] flex flex-col gap-[0.5rem]">
          <div className="flex items-center">
            <img src="assets/santa-mobile.png" alt="logo" />
            <h3 className="font-semibold text-sm font-normal">Christmas</h3>
          </div>

          <div>
            <p className="text-[15px] font-normal text-left w-[380px] leading-[22.5px] break-wraps">
              This Christmas gives <br /> a lot of love
            </p>
          </div>
        </div>

        <div className="w-[128px] flex flex-col gap-[0.5rem]">
          <div>
            <h3 className="font-semibold text-lg font-normal">Our Services</h3>
          </div>

          <div>
            <p className="text-[15px] font-normal text-left w-[380px] leading-[22.5px]">
              Pricing
            </p>
            <p className="text-[15px] font-normal text-left w-[380px] leading-[22.5px]">
              Discount
            </p>
            <p className="text-[15px] font-normal text-left w-[380px] leading-[22.5px]">
              Shipping mode
            </p>
          </div>
        </div>

        <div className="w-[128px] flex flex-col gap-[0.5rem]">
          <div>
            <h3 className="font-semibold text-lg font-normal">Support</h3>
          </div>

          <div>
            <p className="text-[15px] font-normal text-left w-[380px] leading-[22.5px]">
              FAQS
            </p>
            <p className="text-[15px] font-normal text-left w-[380px] leading-[22.5px]">
              Support Center
            </p>
            <p className="text-[15px] font-normal text-left w-[380px] leading-[22.5px]">
              Contact Us
            </p>
          </div>
        </div>

        <div className="w-[128px] flex flex-col gap-[0.5rem]">
          <div>
            <h3 className="font-semibold text-lg font-normal">Available</h3>
          </div>

          <div>
            <picture>
              <source
                srcSet="assets/playstore-mobile.png"
                media="(max-width: 425px)"
              />
              <img src="assets/playstore-desktop.png" alt="play store" />
            </picture>

            <picture>
              <source
                srcSet="assets/appstore-mobile.png"
                media="(max-width: 425px)"
              />
              <img src="assets/appstore-desktop.png" alt="play store" />
            </picture>
          </div>
        </div>
      </section>

      <p
        className="text-[12px] font-normal leading-[18px] m-[1rem]"
      >
        &copy; &lt;chidexworld/&gt;. All right reserved
      </p>
    </footer>
  );
}

export default Footer;
