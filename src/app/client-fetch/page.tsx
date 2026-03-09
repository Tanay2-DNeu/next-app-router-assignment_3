"use client";

import { useEffect, useState } from "react";
import StyledUserTable from "@/app/components/StyledUserTable";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function ClientFetch() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Client Side Fetching (App Router)</h1>

      <StyledUserTable users={users} />
    </div>
  );
}
