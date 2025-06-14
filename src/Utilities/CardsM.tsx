import clsx from "clsx";
interface Prop {
  children: React.ReactNode;
  className?: string;
}
const CardsM = ({ children, className = "" }: Prop) => {
  return (
    <div
      className={clsx(
        "group/hoverRoot bg-white/10 shadow-lg p-6 rounded-2xl backdrop-blur-md  hover:shadow-xl transition-all duration-300 border border-white/20   ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardsM;
