import React from "react";

export default function IndicatorBadge({ status, label }) {
  return (
    <>
      <div className="flex items-center gap-2 text-md">
        {status == 1 && (
          <span className="w-2 h-2 text-transparent rounded-full bg-green-200"></span>
        )}
        {status == 0 && (
          <span className="w-2 h-2 text-transparent rounded-full bg-error"></span>
        )}
        {status == 2 && (
          <span className="w-2 h-2 text-transparent rounded-full bg-progress"></span>
        )}
        {status == 3 && (
          <span className="w-2 h-2 text-transparent rounded-full bg-pending"></span>
        )}
        {status == 7 && (
          <span className="w-2 h-2 text-transparent rounded-full bg-green-950"></span>
        )}
        <span className="capitalize text-primary-800">{label}</span>
      </div>
    </>
  );
}
