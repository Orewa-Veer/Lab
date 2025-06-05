import clsx from "clsx";
const CardsGlass = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "rounded-md shadow-xl backdrop-blur-lg bg-white/10 border border-white/20 hover:size-[1.01] p-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardsGlass;
