"use client";

import { useState, useEffect } from "react";
import { MainLayout } from "@/ui/layout/MainLayout";

import { ApiService } from "@/hooks/useFetching";
import { Thinker } from "@/lib/db/models/Thinker";
import { QuoteWithThinker } from "@/lib/db/models/Quote";
import { Event } from "@/lib/db/models/Event";

import { Card } from "@/ui/cards";

const mainContent = {
  title: "Manifesto",
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas aliquam felis vel dapibus. Ut accumsan, urna a porttitor eleifend, turpis nibh accumsan ipsum, ac vehicula augue magna at turpis. Nullam at porttitor nisi. Donec velit odio, posuere non tellus et, rhoncus commodo felis. In rutrum semper facilisis. In elementum urna id sapien consectetur, ut egestas lorem pharetra. In semper suscipit ligula ut pellentesque. Duis libero quam, convallis et facilisis vel, feugiat ac mauris. Aliquam dictum erat eu vestibulum dictum.

Mauris nibh massa, eleifend id accumsan vitae, cursus ac nunc. Pellentesque suscipit ligula dapibus, finibus mi sit amet, maximus tellus. Nam convallis justo turpis, eu ultrices leo maximus sed. Suspendisse in pretium velit. Donec at consectetur lectus, non sollicitudin neque. Sed odio nibh, aliquet et rutrum eget, vehicula in lorem. Morbi sagittis est et auctor malesuada. Etiam dignissim eu libero sed varius. Proin tincidunt facilisis risus nec pellentesque. Nam libero enim, faucibus vitae sodales vitae, fermentum nec leo. Suspendisse at magna vel risus dignissim interdum in nec ex. Proin vitae efficitur orci.

Curabitur volutpat, nunc quis bibendum tempor, diam massa sodales ante, a feugiat nulla nulla quis ante. Duis mollis, nunc ac tincidunt pellentesque, dolor leo fermentum nisi, ut congue ligula urna sit amet quam. Duis consectetur nisi ac ex imperdiet consequat. Proin scelerisque ex eu nunc fringilla, id molestie erat volutpat. Praesent quis laoreet diam. Integer mi velit, congue et bibendum eu, dignissim sed justo. Cras lacus turpis, finibus et ornare venenatis, auctor interdum purus. Donec dictum mauris vitae ante iaculis consectetur.

Praesent eros purus, iaculis quis malesuada a, imperdiet at nunc. Aliquam elit erat, dictum sed orci quis, tempor dignissim tortor. Donec eu velit dolor. Donec a finibus quam. Donec faucibus posuere mi. Nunc euismod lacus vel mauris luctus vulputate. Nunc pellentesque urna quam, in facilisis ligula lacinia ac. Nullam elementum faucibus elit. Nulla luctus volutpat risus, at sollicitudin ligula vulputate sed. Nullam fringilla placerat lectus. Vestibulum tincidunt ac ligula sit amet venenatis.

Praesent neque magna, porttitor at sem sollicitudin, auctor lacinia mauris. Fusce enim felis, rhoncus et efficitur vel, laoreet quis ex. In mollis mi eget augue dictum, in fringilla dolor efficitur. Aenean vel venenatis ante, in finibus nisl. Sed dapibus gravida euismod. Vestibulum tincidunt blandit facilisis. Sed sodales metus dui. Vivamus cursus a erat eget auctor. Nam condimentum risus sit amet risus porttitor ultrices. Duis nec ipsum blandit, ullamcorper mauris ut, vestibulum arcu. In maximus diam in purus sollicitudin tincidunt. Aenean accumsan aliquet diam vehicula facilisis. In viverra aliquet sem, ut egestas mauris ultrices ac. Mauris sit amet dolor ultricies, tristique ex vitae, pretium nisl. Cras tempor venenatis tellus vitae bibendum.
  `,
};

export default function Home() {
  const [dataThinkers, setDataThinkers] = useState<Thinker[]>([]);
  const [dataQuotes, setDataQuotes] = useState<QuoteWithThinker[]>([]);
  const [eventsArray, setEventsArray] = useState<Event[]>([]);
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
          const selectedEvents = (events || []).slice(0, 2);
          setEventsArray(selectedEvents);

        

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
            <div>a</div>
          </>
        )}

        {!isLoading && !error && (
          <>
            <Card.Grid events={eventsArray} />
            <Card.Quote quotes={dataQuotes} />
            <Card.Thinkers data={dataThinkers} loading={isLoading} />
          </>
        )}
      </div>
    </MainLayout>
  );
}
