import clsx from "clsx";
const CardsonCards = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={clsx(" p-3", className)}>{children}</div>;
};

export default CardsonCards;
