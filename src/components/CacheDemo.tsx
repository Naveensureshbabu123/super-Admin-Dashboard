import { useQuery } from "@tanstack/react-query";
import { fetchCacheUsers } from "../api/cacheApi";

function CacheDemo() {
  const {
    data: users,isPending,isError,isFetching,refetch,} = useQuery({
    queryKey: ["cache-users"],
    queryFn: fetchCacheUsers,

    staleTime: 10000,
    gcTime: 60000,
  });

  if (isPending) {
    return <h2>Loading users...</h2>;
  }

  if (isError) {
    return <h2>Failed to load users.</h2>;
  }

  return (
    <div>
      <h1>Cache Demo</h1>

      {isFetching && <p>Fetching users...</p>}

      <button onClick={() => refetch()}>
        Refresh Users
      </button>

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default CacheDemo;