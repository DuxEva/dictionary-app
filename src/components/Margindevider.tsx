interface MargindeviderProps {
  value: string;
}

const Margindevider = ({ value }: MargindeviderProps) => {
  return (
    <div className="flex items-center gap-5 mt-10">
      <p className="text-2xl italic font-semibold">{value}</p>
      <div className="h-[2px] w-[98%] bg-light-3 mt-1" />
    </div>
  );
};

export default Margindevider;
