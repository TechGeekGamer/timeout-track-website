import { NavLink } from "react-router-dom";

const features = [
  {
    img: "images/builtin_discord_automod_detected_word_DM.png",
    img_alt: "",
  },
  {
    img: "images/builtin_discord_automod_detected_word_LOGCHANNEL.png",
    img_alt: "",
  },
  {
    img: "images/builtin_discord_timeout_tracked_end_dm_prompt.png",
    img_alt: "",
  },
  {
    img: "images/builtin_discord_timeout_tracked_ended.png",
    img_alt: "",
  },
  {
    img: "images/builtin_discord_timeout_tracked_start.png",
    img_alt: "",
  },
  {
    img: "images/builtin_discord_timeout.png",
    img_alt: "",
  },
  {
    img: "images/slash_command_options_remove_timeout.png",
    img_alt: "",
  },
  {
    img: "images/slash_command_options_timeout.png",
    img_alt: "",
  },
  {
    img: "images/timeout_ended_log.png",
    img_alt: "",
  },
  {
    img: "images/timeout_started_log.png",
    img_alt: "",
  },
];

function Images() {
  return (
    <div className="flex flex-col py-2 md:px-10">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Images
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {features.map((feat, i) => {
              return (
                // https://tailblocks.cc/
                <div className="p-4 mx-auto" key={i}>
                  <a href={feat.img} target="_blank" rel="noreferrer">
                    <div className="flex relative">
                      <img
                        alt={feat.img_alt}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src={feat.img}
                      />
                      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h1 className="title-font text-lg font-medium text-gray-900">
                          Open in New Tab
                        </h1>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="text-center px-2 py-2">
        <div className="inline-flex gap-2">
          <NavLink to={"/"}>
            <button className="btn-primary hover:scale-105 transition-all grow w-48">
              Go back
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Images;
