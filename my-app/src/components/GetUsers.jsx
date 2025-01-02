import { useGetUserQuery } from "../api/lightTrackr";

const GetUsers = () => {
  const { data: users, error, isLoading } = useGetUserQuery();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;
  console.log(users);

  return (
    <>
      <ul>
        {users &&
          users.map((user) => (
            <li
              key={user._id}
              onClick={() => console.log(user._id)}
              style={{ cursor: "crosshair" }}
            >
              <h3>{user.name}</h3>
            </li>
          ))}
      </ul>
    </>
  );
};

export default GetUsers;
