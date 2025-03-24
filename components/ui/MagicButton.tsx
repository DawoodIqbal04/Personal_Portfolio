import React from "react";

export const MagicButton = ({
  title,
  icon,
  onClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  onClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="magic relative inline-flex h-12 overflow-hidden rounded-lg p-[1.5px] focus:outline-none md:w-56 mt-8"
      onClick={onClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 hover:bg-slate-900 transition-all px-2 py-2 text-base font-medium text-white backdrop-blur-3xl gap-4 ${otherClasses} `}
      >
        <div>{title}</div>
        <div className="icon transition duration-500">{icon}</div>
      </span>
    </button>
  );
};
