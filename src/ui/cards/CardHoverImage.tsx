"use client";

import { useRouter } from "next/navigation";

interface HoverCardImageProps {
  imageLink: string;
  textHover: string;
  id: string;
  className?: string;
}

export const CardHoverImage: React.FC<HoverCardImageProps> = ({
  imageLink,
  textHover,
  className,
  id
}) => {
  const router = useRouter();
  const redirection = () => {
    router.push(`/quotes/${id}`);
  };

  return (
    <button
      onClick={redirection}
      className={`select-none group relative overflow-hidden bg-black flex justify-center items-center rounded-lg ${className} cursor-pointer`}
    >
      <img
        src={imageLink}
        className="w-full h-full object-cover rounded-lg group-hover:opacity-30 duration-300 ease-in-out"
      />
      <span className="select-text flex w-full m-2 flex-col text-2xl text-white absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 justify-end">
        {textHover}
      </span>
    </button>
  );
};
