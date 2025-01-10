import Link from "next/link";

import { FullScreenContainer } from "./FullScreenContainer";

export default function Header() {
  return (
    <header className="p-6 shadow-sm sticky top-0 z-10 bg-background">
      <FullScreenContainer>
        <nav className="flex w-full justify-between items-center">
          <Link href="/">
            <p>Logo</p>
          </Link>
          <section className="flex items-center gap-5">
            <div className="flex gap-4 items-center">button</div>
          </section>
        </nav>
      </FullScreenContainer>
    </header>
  );
}
