import { Parallax, Background } from "react-parallax";

const HeaderBanner = ({ image, title, description }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={image}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[700px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="bg-[#151515] py-24 px-32 bg-opacity-50 rounded-lg">
            <h1 className="mb-5 text-5xl md:text-[88px] font-bold uppercase">
              {title}
            </h1>
            <p className="mb-5 text-[24px]">{description}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default HeaderBanner;
