import Link from "next/link";
import { Communism } from "../icons/svgs/communism";
import { expletus_sans } from "@/lib/fonts/fonts";


interface mainLayoutProps {
  children: React.ReactNode;
}

const navItens = [
  {
    name: "textos",
    route: "/textos"
  },
  {
    name: "vídeos",
    route: "/textos"
  },
  {
    name: "podcasts",
    route: "/textos"
  },
  {
    name: "sobre",
    route: "/textos"
  }
];

export const MainLayout: React.FC<mainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col p-8 h-screen w-screen bg-linear-[40deg] from-[#070707] via-[#010021] to-[#000100] gap-8">
      <header className="flex w-full justify-center">
        <nav
          className={`w-[82.2%] h-16 rounded-lg bg-[#010220]/35 text-white ${expletus_sans.className} text-2xl`}
        >
          <ul className="w-full flex justify-between">
            <Link href={"/"}>
              <Communism />
            </Link>
            {navItens.map(item => {
              return (
                <li key={item.name}>
                  <Link
                    href={item.route}
                    className="w-40 h-16 flex justify-center items-center rounded-xl"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <main className="w-full h-full">
        {children}
      </main>
    </div>
  );
};
