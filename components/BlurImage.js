import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

export const BlurImage = ({ src, className, ...rest }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={clsx(
        "transition duration-500",
        isLoading ? "blur-sm scale-100" : " blur-0 scale-100",
        className
      )}
      onLoadingComplete={() => setLoading(false)}
      src={src}
      loading="lazy"
      decoding="async"
      blurDataURL={src}
      {...rest}
    />
  );
};
