"use client";

import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

interface MiniCardThinkersProps {
  thinker: string;
  sumary: string;
  birth: string;
  death: string | null | undefined;
  image: string;
  id?: string;
}

export const CardMiniThinkers: React.FC<MiniCardThinkersProps> = ({
  thinker,
  sumary,
  birth,
  death,
  image,
  id
}) => {
  const redirect = useRouter();

  const redirection = () => {
    redirect.push(`/thinkers/${id}`);
  };

  return (
    <div className="h-80 w-[83rem] bg-gradient-to-r from-[#06052C] to-[#531035] rounded-lg p-4 flex flex-col gap-4">
      <div className="flex flex-col justify-around w-full h-full">
        <header className="w-full flex justify-end">
          <button
            onClick={redirection}
            className="flex items-center gap-2 group transition-all duration-300 cursor-pointer"
          >
            <p>ver obras</p>
            <FaArrowRightLong
              size={24}
              className="transform transition-transform duration-300 group-hover:translate-x-2"
            />
          </button>
        </header>
        <div className="flex gap-4 items-center">
          <div>
            <img
              src={image}
              className="h-56 w-56  object-cover rounded-2xl"
              alt={thinker}
            />
          </div>
          <div className="flex flex-col h-44 w-[65rem] gap-2">
            <h2 className="text-5xl font-bold">
              {thinker}
            </h2>
            <p>
              {new Date(birth).getFullYear()} -{" "}
              {death ? new Date(death).getFullYear() : "hoje"}
            </p>

            <p className="text-base text-justify">
              {sumary}
            </p>
          </div>
        </div>
        <div className="w-full h-3" id="ÚNICO JEITO DE ALINHAR..." />
      </div>
    </div>
  );
};
