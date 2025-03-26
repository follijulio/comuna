"use client";

import { useState, useEffect } from "react";

import { MainLayout } from "@/ui/layout/MainLayout";
import { Card } from "@/ui/cards";

import { Thinker } from "@/lib/db/models/Thinker";
import { QuoteWithThinker } from "@/lib/db/models/Quote";
import { Event } from "@/lib/db/models/Event";

import { ApiService } from "@/hooks/useFetching";

import { communism, mainContent } from "@/lib/mock/mock";

export default function Home() {
  const [dataThinkers, setDataThinkers] = useState<Thinker[]>([]);
  const [dataQuotes, setDataQuotes] = useState<QuoteWithThinker[]>([]);
  const [dataEvents, setdataEvents] = useState<Event[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        const { thinkers } = await ApiService.fetchThinkers();
        const { quotes } = await ApiService.fetchQuotes();
        const { events } = await ApiService.fetchEvents();

        if (isMounted) {
          setdataEvents(events);
          setDataQuotes(quotes);
          setDataThinkers(thinkers);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        if (isMounted) {
          setError("Erro ao carregar os dados.");
          setLoading(false);
        }
      }
    };

    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  //render
  return (
    <MainLayout>
      <div className="h-full w-full flex flex-col items-center gap-32">
        <Card.Presentation
          title={mainContent.title}
          description={mainContent.description}
        />

        {error && <p className="error">{error}</p>}

        {isLoading && (
          <>
            <div className="text-white font-bold text-2xl">Carregando...</div>
          </>
        )}

        {!isLoading && !error && (
          <>
            <Card.Grid
              events={dataEvents}
              thinkers={dataThinkers}
              communism={communism}
            />
            <Card.Quote quotes={dataQuotes} />
            <Card.Thinkers data={dataThinkers} loading={isLoading} />
          </>
        )}
      </div>
    </MainLayout>
  );
}
