"use client";

import { Thinker } from "@/lib/db/models/Thinker";
import { jetbrains_mono } from "@/lib/fonts/fonts";
import { Card } from ".";

interface cardThinkerProps {
  data: Thinker[];
  loading: boolean;
}
export const CardThinkers: React.FC<cardThinkerProps> = ({ data, loading }) => {
  return (
    <div
      className={`flex flex-col items-center text-white gap-8 ${jetbrains_mono.className}`}
    >
      <h2 className="text-6xl">PENSADORES COMUNISTAS</h2>
      <div className="flex flex-col gap-8">
        {loading
          ? <p>Carregando...</p>
          : data.map((thinker: Thinker) =>
              <Card.MiniThinker
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