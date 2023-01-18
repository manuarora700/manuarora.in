import React from "react";

export const PreviewContainer = ({ children }) => {
  return (
    <div className="min-h-96 w-full rounded-2xl flex flex-row items-center justify-center bg-grid-slate-100/40 border border-slate-100 dark:bg-grid-slate-800 dark:border-slate-800 py-10 px-4">
      <div className="relative z-10">{children}</div>
    </div>
  );
};
