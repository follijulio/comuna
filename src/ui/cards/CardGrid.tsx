import { jetbrains_mono } from "@/lib/fonts/fonts";
import { Card } from ".";
import { Event } from "@/lib/db/models/Event";
import { Thinker } from "@/lib/db/models/Thinker";

interface GridComuneProps {
  events: Event[];
  thinkers: Thinker[];
  communism: string
}


export const CardGrid: React.FC<GridComuneProps> = ({ events, thinkers, communism }) => {
  return (
    <div className={`flex flex-col gap-8 ${jetbrains_mono.className}`}>
      <div className="flex gap-8">
        <Card.HoverImage
          id={events[0]?.id ?? ""}
          imageLink={events[0]?.image ?? ""}
          textHover={events[0]?.title ?? ""}
          className="h-[32rem] w-[32rem]"
        />
        <div className="flex flex-col gap-8">
          <div className="flex gap-8">
            <Card.HoverImage
              id={thinkers[0]?.id ?? ""}
              imageLink={thinkers[0]?.image ?? ""}
              textHover={thinkers[0]?.name ?? ""}
              className="h-[15rem] w-[15rem]"
            />
            <Card.HoverImage
              id={thinkers[1]?.id ?? ""}
              imageLink={thinkers[1]?.image ?? ""}
              textHover={thinkers[1]?.name ?? ""}
              className="h-[15rem] w-[15rem]"
            />
          </div>

          <Card.HoverImage
            id={events[1]?.id ?? ""}
            imageLink={events[1]?.image ?? ""}
            textHover={events[1]?.title ?? ""}
            className="h-[15rem] w-[32rem]"
          />
        </div>
      </div>
      <div>
        <div
          className={`flex flex-col justify-center items-center bg-linear-[40deg] from-[#070707] via-[#010021] to-[#000100] h-[16rem] w-[66rem] text-white rounded-lg text-xl p-8 text-justify  ${jetbrains_mono.className}`}
        >
          <p className="h-[10rem]  overflow-y-auto no-scrollbar">{communism}</p>
        </div>
      </div>
    </div>
  );
};
