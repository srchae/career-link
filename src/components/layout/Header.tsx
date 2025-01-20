import Link from "next/link";

import { FullScreenContainer } from "./FullScreenContainer";

export default function Header() {
  return (
    <header className="w-full z-10 p-4 sticky top-0  bg-white">
      <FullScreenContainer>
        <nav className="flex w-full justify-between items-center">
          <Link href="/">
            <p className="text-xl font-semibold">
              Career<span className="text-lime-500">-</span>Link
            </p>
          </Link>
          <section className="flex items-center gap-5">
            <button className="flex gap-4 items-center bg-[#334155] text-white p-3 px-6 rounded-3xl">
              로그인
            </button>
          </section>
        </nav>
      </FullScreenContainer>
    </header>
  );
}
