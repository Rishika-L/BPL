import React from "react";
import Icons from "../../Content/Icons";
import { useNavigate } from "react-router";
import Back from "../../assets/icons/back";

export default function Breadcrumbs({ list }) {
  const navtigate = useNavigate();
  return (
    <div>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() =>
            navtigate(list[list?.length - 1]?.link, {
              state: { ...list[list?.length - 1]?.data,
                tab: list[list?.length - 1]?.state },
            })
          }
          className="flex items-end pb-1"
        >
          <img src={Icons?.backWhiteIcon} alt="Back" />
        </button>
        <div>
         {list[0]?.label&& <p className="text-secondary-800 text-md">{list[0]?.label} /</p>}
          <p className="text-primary-800 font-semibold text-xl">
            {list[1]?.label}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
