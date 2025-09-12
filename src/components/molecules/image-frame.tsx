import clsx from "clsx";

interface ImageFrameProps {
  imageUrl: string;
  borderRadius: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  className?: string;
  imageClassName?: string;
}

const ImageFrame = ({
  imageUrl,
  borderRadius,
  backgroundPosition = "-0.292px -42px",
  backgroundSize = "100.103% 105.198%",
  className,
  imageClassName,
}: ImageFrameProps) => {
  return (
    <div
      className={clsx(
        "flex-shrink-0 bg-[rgba(255,255,255,0.04)] overflow-hidden",
        className
      )}
      style={{ borderRadius }}
    >
      <div
        className={clsx(
          "w-full h-full bg-no-repeat bg-luminosity",
          imageClassName
        )}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition,
          backgroundSize,
        }}
      />
    </div>
  );
};

export default ImageFrame;
