import StyledUserTable from "../components/StyledUserTable";

type User = {
  id: number;
  name: string;
  email: string;
};

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  return res.json();
}

export default async function ServerFetch() {
  const users = await getUsers();
  return (
    <div>
      <h1>Server component fetching</h1>
      <StyledUserTable users={users} />
    </div>
  );
}
