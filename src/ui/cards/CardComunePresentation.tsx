/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { jetbrains_mono } from "@/lib/fonts/fonts";
import { communism, engels, marx, panter, revolution } from "@/lib/mock/mock";
import React from "react";

const GridComune: React.FC = () => {
  return (
    <div className={`flex flex-col gap-8 ${jetbrains_mono.className}`}>
      <div className="flex gap-8">
        <HoverCardImage
          imageLink={panter.image}
          textHover={panter.hover}
          className="h-[32rem] w-[32rem]"
        />
        <div className="flex flex-col gap-8">
          <div className="flex gap-8">
            <HoverCardImage
              imageLink={marx.image}
              textHover={marx.hover}
              className="h-[15rem] w-[15rem]"
            />
            <HoverCardImage
              imageLink={engels.image}
              textHover={engels.hover}
              className="h-[15rem] w-[15rem]"
            />
          </div>
          <HoverCardImage
            imageLink={revolution.image}
            textHover={revolution.hover}
            className="h-[15rem] w-[32rem]"
          />
        </div>
      </div>
      <div>
        <div
          className={`flex flex-col justify-center items-center  bg-linear-[40deg] from-[#070707] via-[#010021] to-[#000100] h-[16rem] w-[66rem] text-white ${jetbrains_mono.className} rounded-lg text-xl p-8 text-justify`}
        >
          <p>
            {communism}
          </p>
        </div>
      </div>
    </div>
  );
};

interface SquareProps {
  caracter: string;
  className?: string;
}

const Square: React.FC<SquareProps> = ({ caracter, className }) => {
  return (
    <div
      className={`h-28 w-28 bg-red-500 flex justify-center items-center rounded-lg ${className}`}
    >
      {caracter}
    </div>
  );
};

interface hoverCardImageProps {
  imageLink: string;
  textHover: string;
  className?: string;
}

const HoverCardImage: React.FC<hoverCardImageProps> = ({
  imageLink,
  textHover,
  className
}) => {
  return (
    <div
      className={`select-none group relative overflow-hidden bg-black flex justify-center items-center rounded-lg ${className} cursor-pointer`}
    >
      <img
        src={imageLink}
        className="w-full h-full object-cover rounded-lg group-hover:opacity-30 duration-300 ease-in-out"
      />
      <span className="select-text flex w-full m-2 flex-col text-2xl text-white absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 justify-end">
        {textHover}
      </span>
    </div>
  );
};

interface cardPresentationProps {
  title: string;
  description: string;
  className?: string;
}

const Cardpresentation: React.FC<cardPresentationProps> = ({
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

export { GridComune, HoverCardImage, Cardpresentation, Square };
