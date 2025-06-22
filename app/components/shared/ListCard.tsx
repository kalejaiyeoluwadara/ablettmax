import React from "react";

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[#757575] text-base font-medium">{title}</p>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li className="text-white text-lg font-medium" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListCard;
