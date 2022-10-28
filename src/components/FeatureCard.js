export default function FeatureCard({
  title,
  content,
  imageURL,
  imageAlt,
  isBeta = false,
  flipImgAndText = false,
}) {
  return (
    <div
      className={`flex flex-col ${
        flipImgAndText ? "md:flex-row-reverse" : "md:flex-row"
      } gap-10 py-5`}
    >
      <div
        /**
       * ${
          flipImgAndText ? "md:skew-y-6" : "md:-skew-y-6"
        } 
       */
        className={`mx-auto md:w-1/2 border-4 border-opacity-10 border-black p-2 rounded-md shadow-lg`}
      >
        <h1
          className={`title-font text-2xl font-bold text-gray-900 mb-3 text-center`}
        >
          {title}
          {isBeta && (
            <span className="beta-badge ml-1 p-1 text-sm cursor-default select-none">
              Beta
            </span>
          )}
        </h1>
        <p className={`leading-relaxed text-lg text-center`}>{content}</p>
      </div>
      <div
        className={`md:w-1/2 discord-bg shadow-xl rounded-md overflow-hidden h-full my-auto border-4 discord-border-color`}
      >
        <img src={imageURL} alt={imageAlt} />
      </div>
    </div>
  );
}
