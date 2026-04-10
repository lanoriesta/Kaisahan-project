import FeatureStoryImage from "../assets/images/images-two/proud-vasfa-proud-beneficiaries.webp";
import storyData from "../otherStoryData";

const FeatureStory = () => {
  return (
    <div className="w-full flex flex-col gap-5 ">
      <div className="w-full flex  items-center gap-5">
        <h2 className=" text-3xl text-green drop-shadow-sm font-semibold text-nowrap tracking-wider">
          FEATURE STORY
        </h2>
        <div className="w-full h-0.5 bg-green/50"></div>
      </div>
      {/* Proud VASFA! Proud Beneficiaries! section */}
      <div className="flex flex-col lg:flex-row w-full gap-5 bg-white p-5 rounded-lg shadow-md">
        <div className="h-50 lg:h-60 w-full md:w-2/4 drop-shadow-lg">
          <img
            className="h-full w-full rounded-sm object-cover object-center"
            src={FeatureStoryImage}
            alt="VASFA Farmers"
          />
        </div>
        <div className="md:w-3/4 flex flex-col gap-3 justify-center">
          <div>
            <h3 className="text-2xl text-green font-semibold">
              Proud VASFA! Proud Beneficiaries!
            </h3>
            <sub className="text-lg font-semibold opacity-80">
              VASFA Farmers
            </sub>
          </div>
          <p>
            Three years after installation, a lot of things have changed with
            the Valencia Agrarian Farmers Association (VASFA) and our members.
            We now have other income-generating activities aside from rice
            farm...
          </p>
          <a
            href="https://kaisahan.com.ph/posts/proud-vasfa-proud-beneficiaries"
            target="_blank"
            className=" w-fit"
          >
            <button className=" tracking-wide cursor-pointer bg-green w-35 text-white h-11.25 drop-shadow-lg rounded-sm">
              Read More
            </button>
          </a>
        </div>
      </div>
      {/* OTHER STORY SECTION */}
      <div className="w-full">
        <h3 className="font-semibold text-green py-5">Other Story:</h3>
        <div className="w-full flex gap-5">
          {storyData.map((storyItem, i) => (
            <a
              href={storyItem.btnUrl}
              key={i}
              className="w-full shadow-xl delay-100 duration-300 ease-in-out transition-all hover:scale-102 hover:-translate-y-1 hover:shadow-sm"
              target="_blank"
            >
              <div
                className={`${storyItem.imageUrl} w-full h-50 rounded-lg bg-center bg-cover`}
              >
                <div className="bg-green/40 h-full flex flex-col justify-between p-4 transition-all duration-300 ease-in-out hover:bg-transparent">
                  <div className="bg-green w-fit p-1 rounded-sm shadow">
                    <p className="text-white font-semibold text-xs">
                      {storyItem.date}
                    </p>
                  </div>
                  <p className="text-white font-bold drop-shadow-sm">
                    {storyItem.title}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureStory;
