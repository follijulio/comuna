import { jetbrains_mono } from "@/lib/fonts/fonts";

interface CardPresentationProps {
  title: string;
  description: string;
  className?: string;
}

export const CardPresentation: React.FC<CardPresentationProps> = ({
  title,
  description,
  className
}) => {
  return (
    <div
      className={`h-[33.5rem] w-[88.65%] p-8 flex flex-col bg-gradient-to-br from-[#0E0929] to-[#010652] rounded-lg text-white gap-2 ${jetbrains_mono.className} ${className}`}
    >
      <h1 className="text-6xl font-extrabold text-center">
        {title}
      </h1>
      <p className="text-2xl text-justify h-[25.5rem] overflow-y-auto no-scrollbar">
        {description}
      </p>
    </div>
  );
};
