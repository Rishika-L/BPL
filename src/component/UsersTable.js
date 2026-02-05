import { MoreVertical } from "lucide-react";

const UsersTable = ({ users }) => {
  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="w-full min-w-[900px] text-sm text-center">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="p-3"><input type="checkbox" /></th>
            <th>User Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Type</th>
            <th>Created</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u, i) => (
            <tr key={i} className="border-t hover:bg-gray-50">
              <td className="p-3"><input type="checkbox" /></td>
              <td>{u.username}</td>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.gender}</td>
              <td>{u.phone}</td>
              <td className="text-gray-600">{u.email}</td>
              <td>{u.type}</td>
              <td>{u.created}</td>
              <td>
                <span className="flex items-center justify-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    u.status === "Active" ? "bg-green-700" : "bg-red-700"
                  }`} />
                  {u.status}
                </span>
              </td>
              <td>
                <MoreVertical className="w-4 h-4 mx-auto cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
