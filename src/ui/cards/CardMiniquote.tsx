"use client";

import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

interface miniCardQuoteProps {
  quote: string;
  author: string;
  image: string;
  id?: string;
}

export const CardMiniQuote: React.FC<miniCardQuoteProps> = ({
  author,
  id,
  image,
  quote
}) => {
  const redirect = useRouter();
  const redirection = () => {
    redirect.push(`/quotes/${id}`);
  };

  return (
    <div className="h-44 w-[39.5rem] bg-gradient-to-r from-[#06052C] to-[#531035] rounded-lg p-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <img
          src={image}
          className="h-32 w-32 object-cover rounded-2xl"
          alt=""
        />
        <div className="w-[28.5rem] flex flex-col justify-between">
          <p className="text-base text-justify">
            {quote}
          </p>
          <div className="w-full flex justify-between">
            <p>
              {author}
            </p>
            <button
              onClick={redirection}
              className="flex items-center gap-2 group transition-all duration-300 cursor-pointer"
            >
              <p>Ver obras</p>
              <FaArrowRightLong
                size={24}
                className="transform transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
