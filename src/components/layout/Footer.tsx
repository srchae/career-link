import { FullScreenContainer } from "./FullScreenContainer";

export const Footer = () => {
  return (
    <footer className="p-6 pt-20 border-t border-gray-200 bg-background">
      <FullScreenContainer>
        <nav className="flex w-full justify-between items-center">
          <p>Logo</p>
          <section className="flex items-center gap-5">
            <div className="flex gap-4 items-center">Description</div>
          </section>
        </nav>
      </FullScreenContainer>
    </footer>
  );
};
