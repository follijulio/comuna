import {
  GridComune,
  Cardpresentation
} from "@/ui/cards/CardComunePresentation";
import CardQuote from "@/ui/cards/CardQuote";
import CardThinkers from "@/ui/cards/CardThinkers";
import { MainLayout } from "@/ui/layout/MainLayout";

const mainContent = {
  title: "Introdução ao comuna",
  description:
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Morbi phasellus rutrum nam praesent aptent pellentesque. Dis feugiat class praesent sit nostra cras. Vivamus litora mus aptent accumsan dolor convallis. Ornare molestie pretium nam turpis quam hendrerit ullamcorper per ridiculus. Justo donec scelerisque nec dolor malesuada curae. Hac nulla convallis euismod, velit phasellus sollicitudin nec sagittis. Consequat ullamcorper urna penatibus elit non per sociosqu himenaeos sociosqu. Sagittis feugiat conubia nam sollicitudin ullamcorper placerat. Lacus viverra ut malesuada sapien ullamcorper pulvinar natoque. Posuere ridiculus senectus augue mus elit habitasse suspendisse et ac. Cubilia massa montes nibh elementum ligula tortor pellentesque hendrerit. Facilisi rhoncus vel ridiculus sed eu. Potenti id suscipit aptent ornare etiam vulputate dictum amet. Egestas primis ante arcu velit lacus ultricies sollicitudin auctor. Tempor sagittis suscipit congue habitasse sodales non porttitor mattis. Orci justo venenatis suscipit sapien metus suspendisse. Suscipit vitae ut nec; urna ultricies natoque. Elit finibus velit mauris venenatis consectetur proin pharetra quis. Platea inceptos sodales quam fames, curae quis. Suspendisse mi lectus nulla id; risus nam himenaeos."
};

export default function Home() {
  return (
    <MainLayout>
      <div className="h-full w-full flex flex-col items-center gap-32">
        <Cardpresentation
          title={mainContent.title}
          description={mainContent.description}
        />
        <GridComune  />

        <CardQuote />
        <CardThinkers />
        </div>
    </MainLayout>
  );
}
