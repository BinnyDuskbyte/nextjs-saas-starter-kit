"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const { data: session } = useSession();
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      if (session?.user?.email) {
        const response = await axios.get("/api/admin/users");
        setUsers(response.data.users);
      }
    };
    fetchUsers();
  }, [session]);

  if (!session) {
    return <div>Loading...</div>;
  }

  if (session.user.email !== "admin@example.com") { // Replace with actual admin check
    return <div>Access Denied</div>;
  }

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Admin Dashboard</h1>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Subscription</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">
                {user.subscriptions.length > 0 ? user.subscriptions[0].status : "No Subscription"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;