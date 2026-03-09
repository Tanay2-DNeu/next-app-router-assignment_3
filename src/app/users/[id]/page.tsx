type User = {
  id: number;
  name: string;
  email: string;
};

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const users: User[] = await res.json();

  return users.map((user) => ({
    id: user.id.toString(),
  }));
}

async function getUser(id: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: { revalidate: 60 }, // ISR
  });

  return res.json();
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const user = await getUser(id);

  return (
    <div>
      <h2>User Details</h2>

      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}
