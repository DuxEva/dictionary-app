interface MargindeviderProps {
  value: string;
  css?: string;
}

const Margindevider = ({ value, css }: MargindeviderProps) => {
  return (
    <div className="flex items-center gap-5 mt-10">
      <p className={`${css} text-2xl font-semibold`}>{value}</p>
      <div className="h-[2px] w-[98%] bg-light-3 mt-1" />
    </div>
  );
};

export default Margindevider;
