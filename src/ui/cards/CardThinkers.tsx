"use client";

import { jetbrains_mono } from "@/lib/fonts/fonts";
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

import { ApiService } from "@/hooks/useFetching";

import { useState, useEffect } from "react";
import { Thinker } from "@/lib/db/models/Thinker";

const CardThinkers: React.FC = () => {
  const [data, setData] = useState<Thinker[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const thinkers = await ApiService.fetchThinkers();
      setData(thinkers);
      setLoading(false);
      console.log(thinkers);
    };

    loadData();
  }, []);

  return (
    <div
      className={`flex flex-col text-white gap-8 ${jetbrains_mono.className}`}
    >
      <h2 className="text-6xl">PENSADORES COMUNISTAS</h2>
      <div className="flex flex-col gap-8">
        {loading
          ? <p>Carregando...</p>
          : data.map(thinker =>
              <MiniCardThinkers
                key={thinker.id}
                thinker={thinker.name}
                sumary={thinker.summary}
                image={thinker.image}
                id={thinker.id}
                birth={thinker.birth}
                death={thinker.death}
              />
            )}
      </div>
    </div>
  );
};
export default CardThinkers;

interface MiniCardThinkersProps {
  thinker: string;
  sumary: string;
  birth: string;
  death: string | null | undefined;
  image: string;
  id?: string;
}

const MiniCardThinkers: React.FC<MiniCardThinkersProps> = ({
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
              alt=""
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
