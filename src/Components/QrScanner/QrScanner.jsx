import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function QrScanner({ onScan }) {  // Receive callback prop
    const [data, setData] = React.useState("Not Found");
  
    const handleScan = (err, result) => {
    
      if (err) {
        setData("Scanning...");
      } else if (result) {
        setData(result.text);
        onScan(result.text); 
      } else {
        setData("Not Found");
      }
    };

  return (
    <div className="flex flex-col items-center justify-center m-4 p-4 pb-0 mt-0">
      <div className="flex items-center justify-center p-4 bb-0 relative   rounded-lg  w-full max-w-[500px] ">
        <BarcodeScannerComponent
          width={500}
          height={250}
          onUpdate={handleScan}
          className="w-full max-w-[500px] " 
        />
      </div>
      <p className="text-lg font-semibold text-gray-700 mt-1 text-center">{data}</p>
    </div>
  );
}

export default QrScanner;
