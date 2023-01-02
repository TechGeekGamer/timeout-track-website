export default function FeatureCard({
  title,
  content,
  imageURL,
  imageAlt,
  exampleDiscordMessages,
  isBeta = false,
  flipImgAndText = false,
}) {
  return (
    <div className={`flex flex-col gap-10 py-5`}>
      <div className="mx-auto">
        <h1
          className={`title-font text-2xl font-bold text-gray-900 mb-3 text-left`}
        >
          {title}
          {isBeta && (
            <span className="beta-badge ml-1 p-1 text-sm cursor-default select-none">
              Beta
            </span>
          )}
        </h1>
        <p className={`leading-relaxed text-lg text-left`}>{content}</p>
      </div>
      {exampleDiscordMessages && (
        <div className="hidden lg:block w-full">{exampleDiscordMessages}</div>
      )}
      <div className="mx-auto lg:w-1/2 discord-bg shadow-xl rounded-md overflow-hidden h-full my-auto border-4 discord-border-color block lg:hidden">
        {<img src={imageURL} alt={imageAlt} />}
      </div>
    </div>
  );
}
