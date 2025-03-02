'use client';
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Welcome from "@/app/components/Welcome";
import EnhancedTable from "./components/Table";
import { useData } from "./context/DataContext";
import { CircularProgress } from "@mui/material";

export default function Home() {
  const { darkMode, data, loading, currency } = useData();

  return (
    <div className={`grid items-center justify-items-center min-h-screen px-4 pb-20 gap-16 sm:px-4 font-[family-name:var(--font-geist-sans)] border  ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Navbar />
      <Welcome />
      <main className=" md:w-full w-5/6 sm:items-start shadow-lg rounded-lg p-2 overflow-auto max-w-4xl">
        {
          loading ? (<div className="flex items-center gap-20"><CircularProgress /> <p>fetching data ...</p></div>) :
            <EnhancedTable data={data} currency={currency} />
        }
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
