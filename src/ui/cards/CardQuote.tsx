import { useState } from "react";
import { QuoteWithThinker } from "@/lib/db/models/Quote";
import { jetbrains_mono } from "@/lib/fonts/fonts";
import { Card } from ".";
import { Pagination } from "../Pagination";


interface CardQuoteProps {
  quotes: QuoteWithThinker[];
}

export const CardQuote: React.FC<CardQuoteProps> = ({ quotes }) => {
  // 3 linhas x 2 colunas = 6 itens por página
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(quotes.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentQuotes = quotes.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col gap-16 text-white min-w-[83rem] items-center">
      <h2 className={`text-6xl ${jetbrains_mono.className}`}>CITAÇÕES</h2>
      <div className="grid grid-cols-2 gap-8 px-4 py-10 w-full min-h-64 bg-linear-[40deg] from-[#070707] via-[#010021] to-[#000100] rounded-2xl">
        {currentQuotes.map((quote, i) => (
          <Card.MiniQuote
            key={i}
            author={quote.thinker.name}
            id={quote.thinker.id}
            image={quote.thinker.image}
            quote={quote.content}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </div>
  );
};
