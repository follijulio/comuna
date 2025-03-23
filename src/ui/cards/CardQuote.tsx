"use client";

import { jetbrains_mono } from "@/lib/fonts/fonts";
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

import { quotes } from "@/lib/mock/mock";

const CardQuote: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 text-white min-w-[83rem] items-center">
      <h2 className={`text-6xl ${jetbrains_mono.className}`}>CITAÇÕES</h2>
      <div className="grid grid-cols-2 gap-8 px-4 py-10 w-full min-h-64 bg-linear-[40deg] from-[#070707] via-[#010021] to-[#000100] rounded-2xl">
        {quotes.map(quote =>
          <MiniCardQuote
            key={quote.id}
            author={quote.author}
            id={quote.id}
            image={quote.image}
            quote={quote.quote}
          />
        )}
      </div>
    </div>
  );
};

export default CardQuote;

interface miniCardQuoteProps {
  quote: string;
  author: string;
  image: string;
  id: string;
}

const MiniCardQuote: React.FC<miniCardQuoteProps> = ({
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
