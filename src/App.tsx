import useUsers from "./hooks/useUsers";
import userService, { User } from "./services/user-service";

function App() {
  const { users, error, isLoading, setUsers, setError, setLoading } =
    useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    setLoading(true);
    userService
      .delete(user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Dion" };
    setUsers([newUser, ...users]);

    setLoading(true);
    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    setLoading(true);
    userService
      .update(user)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
