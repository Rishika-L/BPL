// src/components/CommonTable.jsx
import StatusBadge from "./StatusBadge";
import ActionMenu from "./ActionMenu";

const CommonTable = ({ data, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3"><input type="checkbox" /></th>
            <th>Profile Image</th>
            <th>User ID</th>
            <th>User Name</th>
            <th>Gender</th>
            <th>Phone No.</th>
            <th>Email</th>
            <th>Group Name</th>
            <th>Role Name</th>
            <th>Created on</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((u) => (
            <tr key={u.id} className="border-t text-center">
              <td><input type="checkbox" /></td>

              <td>
                <img
                  src={u.imagePreview}
                  className="w-8 h-8 rounded-full mx-auto"
                />
              </td>

              <td>{u.userId}</td>
              <td className="text-blue-600 font-medium">{u.firstName}</td>
              <td>{u.gender}</td>
              <td>{u.phone}</td>
              <td>{u.email}</td>
              <td>{u.group}</td>
              <td>{u.role}</td>
              <td>{new Date(u.createdAt).toLocaleDateString("en-GB")}</td>

              <td>
                <StatusBadge status={u.status} />
              </td>

              <td>
                <ActionMenu
                  onEdit={() => onEdit(u)}
                  onDelete={() => onDelete(u.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommonTable;
