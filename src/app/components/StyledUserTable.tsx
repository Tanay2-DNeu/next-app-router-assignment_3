"use client";

import styled from "styled-components";

type User = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  users: User[];
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #2563eb;
  color: white;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

const Tr = styled.tr`
  &:hover {
    background-color: #f3f4f6;
  }
`;

export default function StyledUserTable({ users }: Props) {
  if (users.length === 0) {
    return <p>No users found...</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Email</Th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <Tr key={user.id}>
            <Td>{user.id}</Td>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
}
