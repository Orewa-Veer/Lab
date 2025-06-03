import clsx from "clsx";
interface Prop {
  children: React.ReactNode;
  className?: string;
}
const CardsM = ({ children, className = "" }: Prop) => {
  return (
    <div
      className={clsx(
        "group/hoverRoot bg-white/80 shadow-lg p-6 rounded-2xl backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-gray-100/50 flex flex-col  items-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardsM;
