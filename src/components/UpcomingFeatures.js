const features = [
  // {
  //   title: "Tracked Reason Logging",
  //   desc: "Don't rely on Discord's 90 day audit logs or scroll through an entire log channel- have a persistent record of timeouts enacted on a user, keeping track of who timed them out, when, and why all from one command!",
  //   beta: true,
  // },
  {
    title: "Web Dashboard",
    desc: "Manage TimeoutTrack from a website. This dashboard will allow better control over settings TimeoutTrack uses in your server.",
  },
  {
    title: "Timeout on Join",
    desc: "Someone leave your server before you could time them out? Have TimeoutTrack put a timeout on them once they join back in the server.",
  },
];

function UpcomingFeatures() {
  return (
    <div className="text-center">
      <section className="text-gray-600 body-font">
        <div className="container md:px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {features.map((feat, i) => {
              return (
                <div className="p-4 md:w-1/3 mx-auto drop-shadow-2xl" key={i}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
                    <div className="container">
                      {feat.img && (
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src={feat.img}
                          alt={feat.img_alt}
                        />
                      )}
                      <div className="p-6">
                        <h2
                          hidden={feat.beta}
                          className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                        >
                          UPCOMING FEATURE
                        </h2>
                        <h2
                          hidden={!feat.beta}
                          className="tracking-widest text-xs title-font font-bold text-blue-400 mb-1"
                        >
                          BETA
                          <br />
                          AVAILABLE TO LIMITED AMOUNT OF SERVERS
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {feat.title}
                        </h1>
                        <p className="leading-relaxed mb-3">{feat.desc}</p>
                      </div>
                    </div>
                    {/* 
                                          <a
                        className="btn-secondary"
                        href="https://discord.gg/zaK2YAMH4u"
                      >
                        Request on Support Server
                      </a> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default UpcomingFeatures;
