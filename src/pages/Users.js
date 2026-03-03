import { useNavigate } from "react-router-dom";

const Users = ({ users }) => {
  const navigate = useNavigate();

  return (
    <table>
      <tbody>
        {users.map((user) => (
          <tr key={user.user_id}>
            <td>
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => navigate(`/users/${user.user_id}`)}
              >
                {user.user_id}
              </span>
            </td>

            <td>{user.user_name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Users;