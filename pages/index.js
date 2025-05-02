import Image from "next/image";
import { Geist, Geist_Mono, Inter } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["Latin"],
});

export default function Home() {
  return (
    <div
      className={`${inter.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start text-center">
        <Image
          src="/obvy2.png"
          alt="Obvy logo"
          width={340}
          height={340}
          priority
        />
        <div>
          <p className="text-4xl font-black mb-2 block">We'll be right back.</p>
          <div className="block mt-8">
            <a
              className="p-4 border-2 hover:bg-teal-100 transition-all ease-in-out"
              href="mailto:Clarisse@obvy.sg"
            >
              Send us an email
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
