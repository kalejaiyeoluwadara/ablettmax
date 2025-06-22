import { Icons } from "./icons";

interface CountCardProps {
  count: number;
  title: string;
  icon: React.ReactNode;
}

function CountCard({ count, title, icon }: CountCardProps) {
  return (
    <div className="flex items-end flex-col gap-3 ">
      <p className="text-6xl text-white font-semibold">{count}+ </p>
      <p className="text-xl flex gap-[24px] items-center text-white">
        {title} {icon}
      </p>
    </div>
  );
}

export default CountCard;
