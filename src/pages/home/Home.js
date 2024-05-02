import {
  ClockIcon,
  EmojiHappyIcon,
  ExclamationCircleIcon,
  QuestionMarkCircleIcon,
  StarIcon,
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

const ADD_BOT_URL = `https://discord.com/api/oauth2/authorize?client_id=925577249586032641&permissions=1099511627904&scope=bot%20applications.commands`;
const TOP_GG_URL = `https://top.gg/bot/925577249586032641/vote`;
const DEL_URL = `https://discordextremelist.xyz/en-US/bots/925577249586032641`;
const SUPPORT_SERVER_INVITE_URL = `https://discord.gg/zaK2YAMH4u`;
const PRIVACY_POLICY_URL = `docs/TimeoutTrackPrivacyPolicy.pdf`;
const TERMS_OF_SERVICE_URL = `docs/TimeoutTrackTermsofService.pdf`;

function scrollToFeatures() {
  document
    .getElementById("featuresSection")
    .scrollIntoView({ behavior: "smooth" });
}

function StatCardSection({ icon, mainText, subText, extraClasses = "" }) {
  return (
    <div
      className={`border-b-2 md:border-b-0 md:border-r-4 p-2 grow ${extraClasses}`}
    >
      {icon}
      <h3 className="text-3xl font-bold text-primary-600">{mainText}</h3>
      <h3 className="text-xl text-secondary-500">{subText}</h3>
    </div>
  );
}

function StatsCard() {
  return (
    <div className="my-auto text-center container py-10 mx-auto">
      <div className="mx-auto border-4 border-opacity-50 w-4/5 shadow-xl rounded-lg bg-white">
        <div className="grid md:grid-cols-3">
          <StatCardSection
            icon={<EmojiHappyIcon className="mx-auto w-20 text-primary-600" />}
            mainText="600+"
            subText="Servers"
          />
          <StatCardSection
            icon={<ClockIcon className="mx-auto w-20 text-primary-600" />}
            mainText="24 / 7"
            subText="Uptime"
          />
          <StatCardSection
            icon={<StarIcon className="mx-auto w-20 text-primary-600" />}
            mainText="5 Stars"
            subText="on Top.GG (out of 2 reviews)"
            extraClasses="last:border-r-0 last:border-b-0"
          />
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      {/* Main */}
      <div className="mx-auto min-h-screen grid p-2 bg-gradient-to-br from-rose-400 to-rose-500 px-5">
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
              <span className="text-3xl text-center font-bold my-auto text-gray-100">
                TimeoutTrack
              </span>
            </div>
          </div>
          <p className="text-center text-lg font-bold italic pt-2 text-gray-100">
            Improved Discord Timeout logging
          </p>
          <StatsCard />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-sm mx-auto text-center">
            <a
              className="btn-primary max-w-screen-md w-full"
              href={ADD_BOT_URL}
              target="_blank"
              rel="noreferrer"
            >
              Invite Bot
            </a>

            <button onClick={scrollToFeatures} className="btn-secondary">
              Learn More
            </button>
            <a
              className="btn-info max-w-screen-md w-full col-span-2"
              href={SUPPORT_SERVER_INVITE_URL}
              target="_blank"
              rel="noreferrer"
            >
              Join Support Server
            </a>
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
                <span className="italic inline-flex text-sm items-center space-x-1 underline">
                  <ExclamationCircleIcon className="w-4 text-yellow-500" />
                  Bot must have the Manage Server permission to detect this
                </span>
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
        <StatsCard />
      </div>

      {/* CTA */}
      <div className="mx-auto min-h-screen grid bg-gradient-to-br from-rose-400 to-rose-500 px-5">
        <div className="my-auto container mx-auto">
          <div className="text-center">
            <div className="inline-flex gap-2">
              <h1 className="text-center text-5xl md:text-7xl py-2 font-bold text-white">
                So, what are you waiting for?
              </h1>
            </div>
          </div>
          <div className="flex text-center place-content-center py-10">
            <a
              className="btn-primary max-w-screen-md w-full"
              href={ADD_BOT_URL}
              target="_blank"
              rel="noreferrer"
            >
              Invite Bot
            </a>
          </div>
          <div className="text-center py-2">
            <div className="inline-flex gap-2 flex-col md:flex-row content-center">
              <a
                className="btn-info hover:scale-105 transition-all w-48"
                href={TOP_GG_URL}
                target="_blank"
                rel="noreferrer"
              >
                Upvote on Top.GG
              </a>

              <a
                className="btn-info hover:scale-105 transition-all w-48"
                href={SUPPORT_SERVER_INVITE_URL}
                target="_blank"
                rel="noreferrer"
              >
                Join Support Server
              </a>

              <a
                className="btn-info hover:scale-105 transition-all w-48"
                href={DEL_URL}
                target="_blank"
                rel="noreferrer"
              >
                Upvote on DEL
              </a>
            </div>
          </div>
          <div className="text-center py-2">
            <div className="inline-flex gap-2 flex-col md:flex-row">
              <a
                className="btn-secondary hover:scale-105 transition-all w-48"
                href={PRIVACY_POLICY_URL}
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
              <a
                className="btn-secondary hover:scale-105 transition-all w-48"
                href={TERMS_OF_SERVICE_URL}
                target="_blank"
                rel="noreferrer"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
