import { NavLink } from "react-router-dom";
import {
  ClockIcon,
  EmojiHappyIcon,
  SwitchHorizontalIcon,
} from "@heroicons/react/solid";

function openAddBot() {
  window.open(
    "https://discord.com/api/oauth2/authorize?client_id=925577249586032641&permissions=1099511627904&scope=bot%20applications.commands"
  );
}
function openTogGG() {
  window.open("https://top.gg/bot/925577249586032641/vote");
}

function openDEL() {
  window.open("https://discordextremelist.xyz/en-US/bots/925577249586032641");
}

function openSupportServerInvite() {
  window.open("https://discord.gg/zaK2YAMH4u");
}

function openPP() {
  window.open("docs/TimeoutTrackPrivacyPolicy.pdf");
}

function openTOS() {
  window.open("docs/TimeoutTrackTermsofService.pdf");
}

function scrollToFeatures() {
  document
    .getElementById("featuresSection")
    .scrollIntoView({ behavior: "smooth" });
}

function Home() {
  return (
    <div>
      {/* Main */}
      <div className="mx-auto h-screen grid bg-gradient-to-br from-rose-400 to-rose-500 px-5">
        <div className="my-auto">
          <div className="text-center">
            <div className="inline-flex gap-2">
              <div>
                <img
                  className="w-20 rounded-full drop-shadow-2xl"
                  src="images/logo.png"
                  alt="Bot logo"
                />
              </div>
              <span className="text-5xl text-center font-bold my-auto text-gray-100">
                TimeoutTrack
              </span>
            </div>
          </div>
          <p className="text-center text-lg font-bold italic pt-2 text-gray-100">
            Improved Discord Timeout logging
          </p>
          <div className="text-center py-5">
            <button
              className="btn-primary hover:scale-105 transition-all w-48"
              onClick={openAddBot}
            >
              Invite Bot
            </button>
          </div>
          <div className="text-center text-xl font-bold align-bottom">
            <button
              onClick={scrollToFeatures}
              className="btn-secondary inline-flex text-base"
            >
              <span className="px-2">Learn More</span>
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container py-10 mx-auto px-5" id="featuresSection">
        <div className="px-10">
          <h1 className="text-center text-4xl py-2 font-bold">Features</h1>

          <div className="flex flex-col-reverse md:flex-row gap-10 py-5">
            <div className="md:w-1/2">
              <img
                className="storyImage"
                src="images/builtin_discord_timeout_tracked_end_dm_prompt.png"
                alt="Prompt to send a DM to a user the reason they've been timed out"
              />
            </div>

            <div className="mx-auto md:w-1/2">
              <h1 className="title-font text-2xl font-medium text-gray-900 mb-3 text-center">
                Send Reason to DM
              </h1>
              <p className="leading-relaxed text-lg">
                TimeoutTrack offers the ability to send the timeout reason to
                the timed out user, something Discord doesn't already do. This
                helps with users not being confused on <i>why</i> they were
                timed out.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 py-5">
            <div className="mx-auto md:w-1/2">
              <h1 className="title-font text-2xl font-medium text-gray-900 mb-3 text-center">
                Logging Feature
              </h1>
              <p className="leading-relaxed text-lg">
                Whenever a timeout is enacted/ended early, your set log channel
                will have a message sent to it informing of <i>who</i> ran the
                command and the reason they did so.
              </p>
            </div>
            <div className="md:w-3/4">
              <img
                className="storyImage"
                src="images/builtin_discord_timeout_tracked_start.png"
                alt="Bot notification of a user being timed out"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-10 py-5">
            <div className="md:w-1/2">
              <img
                className="storyImage"
                src="images/builtin_discord_automod_detected_word_DM.png"
                alt=""
              />
            </div>
            <div className="mx-auto md:w-1/2">
              <h1 className="title-font text-2xl font-medium text-gray-900 mb-3 text-center">
                <a
                  className="text-blue-400 hover:text-blue-500"
                  href="https://support.discord.com/hc/en-us/articles/4421269296535"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Discord AutoMod
                </a>{" "}
                Support
              </h1>
              <p className="leading-relaxed text-lg">
                If someone breaks a{" "}
                <a
                  className="text-blue-400 hover:text-blue-500"
                  href="https://support.discord.com/hc/en-us/articles/4421269296535"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Discord AutoMod
                </a>{" "}
                rule, and that rule times them out, they'll be sent a DM saying
                what word in their message was against the rules.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center py-10">
          <div className="inline-flex gap-2">
            <NavLink to={"/upcoming"}>
              <button className="btn-primary hover:scale-105 transition-all grow w-48">
                Upcoming Features
              </button>
            </NavLink>
            {/* <NavLink to={"/images"}>
              <button className="btn-primary hover:scale-105 transition-all grow w-48">
                Images
              </button>
            </NavLink> */}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto grid bg-gradient-to-br from-secondary-600 to-secondary-700 px-5 py-10">
        <div className="my-auto">
          <div className="text-center">
            <div className="container py-10">
              <div className="mx-auto text-center border-4 border-opacity-50 w-4/5 shadow-xl rounded-lg bg-white">
                <div className="flex flex-col md:flex-row flex-wrap">
                  <div className="border-b-2 md:border-b-0 md:border-r-4 p-5 grow">
                    <EmojiHappyIcon className="mx-auto w-20 text-primary-600" />
                    <h3 className="text-3xl font-bold text-primary-600">60+</h3>
                    <h3 className="text-xl text-secondary-500">Servers</h3>
                  </div>
                  <div className="border-b-2 md:border-b-0 md:border-r-4 p-5 grow">
                    <ClockIcon className="mx-auto w-20 text-primary-600" />
                    <h3 className="text-3xl font-bold text-primary-600">
                      24 / 7
                    </h3>
                    <h3 className="text-xl text-secondary-500">Uptime</h3>
                  </div>
                  <div className="border-b-2 md:border-b-0 md:border-r-4 last:border-r-0 last:border-b-0 p-5 grow">
                    <SwitchHorizontalIcon className="mx-auto w-20 text-primary-600" />
                    <h3 className="text-3xl font-bold text-primary-600">Low</h3>
                    <h3 className="text-xl text-secondary-500">Latency</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto h-screen grid bg-gradient-to-br from-rose-400 to-rose-500 px-5">
        <div className="my-auto container">
          <div className="text-center">
            <div className="inline-flex gap-2">
              <h1 className="text-center text-5xl md:text-7xl py-2 font-bold text-white">
                So, what are you waiting for?
              </h1>
            </div>
          </div>
          <div className="text-center py-10">
            <button
              className="btn-primary hover:scale-x-105 transition-all w-80"
              onClick={openAddBot}
            >
              Invite Bot
            </button>
          </div>
          <div className="text-center py-2">
            <div className="inline-flex gap-2 flex-col md:flex-row content-center">
              <div>
                <button
                  className="btn-info hover:scale-105 transition-all w-48"
                  onClick={openTogGG}
                >
                  Upvote on Top.GG
                </button>
              </div>
              <div>
                <button
                  className="btn-info hover:scale-105 transition-all w-48"
                  onClick={openSupportServerInvite}
                >
                  Join Support Server
                </button>
              </div>
              <div>
                <button
                  className="btn-info hover:scale-105 transition-all w-48"
                  onClick={openDEL}
                >
                  Upvote on DEL
                </button>
              </div>
            </div>
          </div>
          <div className="text-center py-2">
            <div className="inline-flex gap-2 flex-col md:flex-row">
              <button
                className="btn-secondary hover:scale-105 transition-all w-48"
                onClick={openPP}
              >
                Privacy Policy
              </button>
              <button
                className="btn-secondary hover:scale-105 transition-all w-48"
                onClick={openTOS}
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
