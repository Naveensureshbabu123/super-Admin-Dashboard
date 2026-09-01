import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/userApi";

function QueryState() {
  const {
    data: users,isPending,isError,} = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isPending) {
    return <h2>Loading users...!</h2>;
  }

  if (isError) {
    return <h2>Failed to load users</h2>;
  }

  if (users.length === 0) {
    return <h2>No users found</h2>;
  }

  return (
    <div>
      <h1>User List</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default QueryState;