const features = [
  {
    title: "Tracked Reason Logging",
    desc: "Don't rely on Discord's 90 day audit logs or scroll through an entire log channel- have a persistent record of timeouts enacted on a user, keeping track of who timed them out, when, and why all from one command!",
  },
  {
    title: "Web Dashboard",
    desc: "Manage TimeoutTrack from a website. This dashboard will allow better control over settings TimeoutTrack uses in your server.",
  },
];

function UpcomingFeatures() {
  return (
    <div className="text-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {features.map((feat, i) => {
              return (
                <div className="p-4 md:w-1/3 mx-auto drop-shadow-2xl" key={i}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
                    {feat.img && (
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={feat.img}
                        alt={feat.img_alt}
                      />
                    )}
                    <div className="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        UPCOMING FEATURE
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {feat.title}
                      </h1>
                      <p className="leading-relaxed mb-3">{feat.desc}</p>
                    </div>
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
