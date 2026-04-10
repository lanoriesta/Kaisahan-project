import resourcesData from "../resourcesData";

const Resources = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full flex items-center gap-5">
        <h2 className="text-3xl drop-shadow-sm text-green font-semibold text-nowrap tracking-wider">
          RESOURCES
        </h2>
        <div className="w-full h-0.5 bg-green/50"></div>
      </div>

      <div className="flex flex-col gap-8 bg-white p-5 rounded-lg shadow-lg">
        {resourcesData.map((item, i) => (
          <div className="flex w-full gap-5 items-center" key={i}>
            <div className="w-2/4 h-50">
              <img
                src={item.imgUrl}
                alt={item.title}
                className="h-full w-full object-cover object-top rounded-md shadow-sm"
                height={200}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <h3 className="text-lg text-green drop-shadow-sm font-semibold text-clip line-clamp-2">
                {item.title}
              </h3>
              <p className=" text-gray-400 text-sm text-clip line-clamp-4">
                {item.desc}
              </p>
              <a className="w-fit" href={item.btnUrl} target="_blank">
                <button className="tracking-wide cursor-pointer bg-green text-white h-11.25 drop-shadow-lg rounded-sm w-fit px-5">
                  View all publication
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
