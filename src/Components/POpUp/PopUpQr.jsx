import { useEffect, useState } from "react";
import { getCurrentDateTime, getDefaultDate } from "../../utils/Date";
import Toast from "../Toast/Toast";
import { set } from "react-hook-form";
export default function PopUpQr({
  isOpen,
  onClose,
  onSubmit,
  typeModel,
  isConsumable = false,
  date = false,
  batchNumber = false,
}) {
  const [serialNo, setSerialNo] = useState("");
  const [batch_no, setBatch_no] = useState("");
  const [expiry_date, setExpiry_date] = useState("");
  const [com_part_no, setCom_part_no] = useState("");
  const [toastData, setToastData] = useState({ show: false });

  if (!isOpen) return null;

  const handleSubmit = () => {

    if (typeModel === "Consumable" && expiry_date) {
      const today = new Date(getDefaultDate());
      const selected = new Date(expiry_date);

      if (selected < today) {
        setToastData({
          show: true,
          message: "Expiry date cannot be in the past.",
          type: "error",
        });
        return; 
      }
    }
    if (typeModel==="Tool") {
      onSubmit(serialNo);
    }

    if(typeModel==="Consumable")  {
      onSubmit(JSON.stringify({ batch_no, expiry_date }));
    } 
    
    if(typeModel=== "components") {
      onSubmit(com_part_no);
    }

    setSerialNo(""); 
    setExpiry_date("");
    setBatch_no("");
    setCom_part_no("");
  };
  const isExpiryValid = () => {
    if (!expiry_date) return false;
    return new Date(expiry_date) >= new Date(getDefaultDate());
  };
  const toastOnclose = () => {
    setToastData({ show: false });
  };

  return (
    <>
      {toastData?.show && (
        <Toast
          show={toastData?.show}
          message={toastData?.message}
          type={toastData?.type}
          onClose={toastOnclose}
        />
      )}
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="w-[40%] bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Enter Manually Qr Code
          </h2>

          {typeModel==="Tool" && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Enter Serial Number
              </label>
              <input
                type="text"
                value={serialNo}
                onChange={(e) => {
                  const value = e.target.value
                    .toUpperCase()         
                    .replace(/[^A-Z0-9- ]/g, ""); 

                  setSerialNo(value);
                }}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your Serial No"
              />
            </div>
          )}
          {typeModel==="Consumable"  && (
            <>
              {batchNumber && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Enter Batch Number
                  </label>
                  <input
                    type="text"
                    value={batch_no}
                    onChange={(e) => setBatch_no(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your Serial No"
                  />
                </div>
              )}
              {date && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Select Expire Date
                  </label>
                  <input
                    type="date"
                    value={expiry_date}
                    min={getDefaultDate()}
                    onChange={(e) => setExpiry_date(e.target.value)}
                    className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2
                                ${expiry_date && !isExpiryValid() ? "border-red-500 focus:ring-red-100" : "focus:ring-blue-400"}
                              `}
                    placeholder="Enter your Serial No"
                  />
                </div>
              )}
            </>
          )}

          {(typeModel=== "components") && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Enter Part Number
              </label>
              <input
                type="text"
                value={com_part_no}
                onChange={(e) => setCom_part_no(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your Part No"
              />
            </div>
          )}

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 btn primary__btn text-white rounded-md hover:bg-blue-600 transition"
              disabled={!batch_no && !expiry_date && !serialNo && !com_part_no}
            >
              Submit
            </button>
            <button
              onClick={() => {
                setSerialNo(""); // Reset the input field after submission
                setExpiry_date("");
                setBatch_no("");
                setCom_part_no("");
                onClose();
              }}
              className="px-4 py-2 secondary__btn text-white rounded-md hover:bg-gray-500 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
