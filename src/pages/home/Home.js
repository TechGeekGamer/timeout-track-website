import {
  ClockIcon,
  EmojiHappyIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  SwitchHorizontalIcon,
} from "@heroicons/react/solid";
import {
  DiscordActionRow,
  DiscordAttachments,
  DiscordBold,
  DiscordButton,
  DiscordCommand,
  DiscordEmbed,
  DiscordEmbedDescription,
  DiscordInlineCode,
  DiscordMention,
  DiscordMessage,
  DiscordMessages,
} from "@skyra/discord-components-react";
import FeatureCard from "../../components/FeatureCard";
import UpcomingFeatures from "../../components/UpcomingFeatures";

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
            <button className="btn-primary w-48" onClick={openAddBot}>
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
        <div className="px-5 lg:px-10">
          <h1 className="text-center text-4xl py-1 mb-10 font-bold">
            Features
          </h1>

          <FeatureCard
            title={"Send Reason to DM"}
            content={
              <>
                TimeoutTrack offers the ability to send the timeout reason to
                the timed out user, something Discord doesn't already do. This
                helps with users not being confused on <i>why</i> they were
                timed out.
              </>
            }
            exampleDiscordMessages={
              <DiscordMessages class="rounded-lg">
                <DiscordMessage
                  timestamp={"03/28/2022"}
                  author="TimeoutTrack"
                  avatar="/images/logo.png"
                  bot
                  verified
                >
                  <DiscordEmbed slot="embeds" color="#ED4245">
                    <DiscordEmbedDescription slot="description">
                      <DiscordMention>Daniel💻</DiscordMention> timed out{" "}
                      <DiscordMention>MegaGlitch</DiscordMention> until{" "}
                      <DiscordInlineCode>
                        March 28, 2022 1:34 AM
                      </DiscordInlineCode>
                      . (Expires:{" "}
                      <DiscordInlineCode>in 10 minutes</DiscordInlineCode>)
                      <br />
                      <DiscordBold>Reason:</DiscordBold> This is for a demo of a
                      new TimeoutTrack feature.
                    </DiscordEmbedDescription>
                  </DiscordEmbed>
                  <DiscordEmbed slot="embeds" color="#5865F2">
                    <DiscordEmbedDescription slot="description">
                      Hey there, I noticed you timed someone out using the
                      built-in Discord button. This does not send the timeout
                      reason to the user. Would you like to send the timeout
                      reason to <DiscordMention>MegaGlitch</DiscordMention> (the
                      timed out user) using{" "}
                      <DiscordMention>TimeoutTrack</DiscordMention>? <br />
                      <DiscordBold>Reason:</DiscordBold> This is for a demo of a
                      new TimeoutTrack feature.
                    </DiscordEmbedDescription>
                  </DiscordEmbed>
                  <DiscordAttachments slot="components">
                    <DiscordActionRow>
                      <DiscordButton type="success">Yes</DiscordButton>
                      <DiscordButton type="destructive">No</DiscordButton>
                      <DiscordButton type="secondary">Always Yes</DiscordButton>
                      <DiscordButton type="secondary">Always No</DiscordButton>
                      <DiscordButton url={"https://discord.gg/zaK2YAMH4u"}>
                        Support Server
                      </DiscordButton>
                    </DiscordActionRow>
                  </DiscordAttachments>
                </DiscordMessage>
              </DiscordMessages>
            }
            imageURL="images/builtin_discord_timeout_tracked_end_dm_prompt.png"
            imageAlt="Prompt to send a DM to a user the reason they've been timed out"
          />

          <FeatureCard
            title={"Logging Feature"}
            content={
              <>
                Whenever a timeout is enacted/ended early, your set log channel
                will have a message sent to it informing of <i>who</i> ran the
                command and the reason they did so.
              </>
            }
            exampleDiscordMessages={
              <DiscordMessages class="rounded-lg">
                <DiscordMessage
                  timestamp={"03/28/2022"}
                  author="TimeoutTrack"
                  avatar="/images/logo.png"
                  bot
                  verified
                >
                  <DiscordEmbed slot="embeds" color="#ED4245">
                    <DiscordEmbedDescription slot="description">
                      <DiscordMention>Daniel💻</DiscordMention> timed out{" "}
                      <DiscordMention>MegaGlitch</DiscordMention> until{" "}
                      <DiscordInlineCode>
                        March 28, 2022 1:34 AM
                      </DiscordInlineCode>
                      . (Expires:{" "}
                      <DiscordInlineCode>in 10 minutes</DiscordInlineCode>)
                      <br />
                      <DiscordBold>Reason:</DiscordBold> This is for a demo of a
                      new TimeoutTrack feature.
                    </DiscordEmbedDescription>
                  </DiscordEmbed>
                </DiscordMessage>
              </DiscordMessages>
            }
            imageURL="images/builtin_discord_timeout_tracked_start.png"
          />

          <FeatureCard
            title={"Discord AutoMod Support"}
            content={
              <>
                If someone breaks a{" "}
                <a
                  className="text-blue-400 hover:text-blue-500"
                  href="https://support.discord.com/hc/en-us/articles/4421269296535"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Discord AutoMod
                </a>{" "}
                rule, and one of the actions are to timeout, they'll be sent a
                DM explaining why they got timed out.
                <br />
                <button
                  className="italic inline-flex text-sm items-center space-x-1 underline"
                  onClick={openSupportServerInvite}
                >
                  <ExclamationCircleIcon className="w-4 text-yellow-500" />
                  Bot must have the Manage Server permission to detect this
                </button>
              </>
            }
            exampleDiscordMessages={
              <DiscordMessages class="rounded-lg">
                <DiscordMessage
                  timestamp={"03/28/2022"}
                  author="TimeoutTrack"
                  avatar="/images/logo.png"
                  bot
                  verified
                >
                  <DiscordEmbed slot="embeds" color="#ED4245">
                    <DiscordEmbedDescription slot="description">
                      You have been timed out in{" "}
                      <DiscordBold>Team Neptune 🌊</DiscordBold> until{" "}
                      <DiscordInlineCode>
                        March 28, 2022 1:34 AM
                      </DiscordInlineCode>
                      . (Expires:{" "}
                      <DiscordInlineCode>in 10 minutes</DiscordInlineCode>)
                      <br />
                      <DiscordBold>Reason:</DiscordBold> Discord's AutoMod
                      detected message content not allowed by{" "}
                      <DiscordBold>Team Neptune 🌊</DiscordBold>,{" "}
                      <DiscordInlineCode>cusswordtest</DiscordInlineCode>, in
                      your recent message.
                    </DiscordEmbedDescription>
                  </DiscordEmbed>
                </DiscordMessage>
              </DiscordMessages>
            }
            imageURL="images/builtin_discord_automod_detected_word_DM.png"
          />

          <FeatureCard
            title={"Persistent Logging"}
            content={
              <>
                Don't rely on Discord's 90 day audit logs or scroll through an
                entire log channel- have a persistent record of timeouts enacted
                on a user, keeping track of who timed them out, when, and why
                all from one command!
                <br />
                <button
                  className="italic inline-flex text-sm items-center space-x-1 underline"
                  onClick={openSupportServerInvite}
                >
                  <InformationCircleIcon className="w-4 text-blue-500" />
                  You can request access by joining the support server
                </button>
              </>
            }
            exampleDiscordMessages={
              <DiscordMessages className="rounded-lg">
                <DiscordMessage
                  timestamp={"03/28/2022"}
                  author="TimeoutTrack"
                  avatar="/images/logo.png"
                  bot
                  verified
                  ephemeral
                >
                  <DiscordCommand command="/log"></DiscordCommand>
                  <DiscordBold>
                    March 28, 2022 1:34 AM - Ran by Discord AutoMod:
                  </DiscordBold>
                  <br />
                  Discord's AutoMod detected message content not allowed by{" "}
                  <DiscordBold>Team Neptune 🌊</DiscordBold>,{" "}
                  <DiscordInlineCode>cheese</DiscordInlineCode>, in your recent
                  message.
                </DiscordMessage>
              </DiscordMessages>
            }
            imageURL="images/log_command.png"
            isBeta
            // flipImgAndText
          />
        </div>
      </div>

      {/* Upcoming Features */}
      <div className="mx-auto grid bg-red-400 px-5 py-10">
        <div className="px-5 md:px-10">
          <h1 className="text-center text-4xl py-2 font-bold text-white">
            Planned Features
          </h1>
          <UpcomingFeatures />
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto grid bg-gradient-to-br from-secondary-600 to-secondary-700 px-5 py-10">
        <div className="px-5 md:px-10">
          <h1 className="text-center text-4xl py-2 font-bold text-white">
            Statistics
          </h1>
        </div>
        <div className="my-auto">
          <div className="text-center">
            <div className="container py-10 mx-auto">
              <div className="mx-auto text-center border-4 border-opacity-50 w-4/5 shadow-xl rounded-lg bg-white">
                <div className="flex flex-col md:flex-row flex-wrap">
                  <div className="border-b-2 md:border-b-0 md:border-r-4 p-5 grow">
                    <EmojiHappyIcon className="mx-auto w-20 text-primary-600" />
                    <h3 className="text-3xl font-bold text-primary-600">
                      100+
                    </h3>
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
        <div className="my-auto container mx-auto">
          <div className="text-center">
            <div className="inline-flex gap-2">
              <h1 className="text-center text-5xl md:text-7xl py-2 font-bold text-white">
                So, what are you waiting for?
              </h1>
            </div>
          </div>
          <div className="text-center py-10">
            <button className="btn-primary w-80" onClick={openAddBot}>
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
