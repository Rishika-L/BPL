import React from "react";

const LeftSideTable = ({
  title,
  data = [],
  selectedItem,
  onSelect,
}) => {
  return (
    <div>
      {/* Title */}
      {title && (
        <div className="px-4 py-3 mr-15 text-[18px] font-medium text-[#272757] bg-[#F5F6FA]">
          {title}
        </div>
      )}

      <div className="w-[260px] h-[230px] bg-white rounded-lg border mt-5 border-[#D5D5EC] overflow-hidden">
        <table className="w-full text-[13px] text-[#272757]">
          <thead className="bg-[#F5F6FA] border-b border-[#D5D5EC]">
            <tr>
              <th className="w-10 text-center py-3"></th>
              <th className="text-left px-3 py-3 text-[15px] text-[#000000] font-bold">
                FG Code
              </th>
              <th className="text-left px-3 py-3 text-[15px] text-[#000000] font-bold">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  className="text-center py-6 text-gray-400"
                >
                  No Data Available
                </td>
              </tr>
            ) : (
              data.map((item, index) => {
                const isActive = selectedItem === item;

                return (
                  <tr
                    key={index}
                    onClick={() => onSelect(item)}
                    className={`cursor-pointer border-b border-[#E6E6F0] ${
                      isActive ? "bg-[#F9F9FC]" : ""
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="text-center">
                      <input
                        type="checkbox"
                        checked={isActive}
                        onChange={() => onSelect(item)}
                        onClick={(e) => e.stopPropagation()}
                        className="accent-[#3F3D8F]"
                      />
                    </td>

                    {/* FG Code */}
                    <td className="px-3 py-3 text-[14px] text-[#000000]">
                      {item.fgCode}
                    </td>

                    {/* Status */}
                    <td className="px-3 py-3 text-[14px] text-[#000000]">
                      {item.isActive}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeftSideTable;