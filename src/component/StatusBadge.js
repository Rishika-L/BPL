const StatusBadge = ({ status }) => {
  return (
    <div className="flex items-center gap-2 justify-center">
      <span
        className={`w-2.5 h-2.5 rounded-full ${
          status ? "bg-green-500" : "bg-red-500"
        }`}
      />
      <span className="text-sm">
        {status ? "Active" : "Inactive"}
      </span>
    </div>
  );
};

export default StatusBadge;
