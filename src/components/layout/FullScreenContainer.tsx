export const FullScreenContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="max-w-screen-xl mx-auto">{children}</div>;
};
