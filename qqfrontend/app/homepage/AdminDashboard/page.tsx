import Link from "next/link";

export default function AdminDashboard() {
  return (
    <>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! Manage your system from here.</p>
      <img src="/shezan.jpg" alt="Admin Dashboard" width="100" />

      <table>
        <tbody>
          <tr>
            <td>
              <Link href="/homepage/AdminDashboard/admin">
                <button>View Admin</button>
              </Link>
            </td>
            <td>
              <Link href="/teacher/view">
                <button>View Teacher</button>
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link href="/student/view">
                <button>View Students</button>
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link href="/teacher/add">
                <button>Add Teacher</button>
              </Link>
            </td>
            <td>
              <Link href="/teacher/update">
                <button>Update Teacher</button>
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link href="/teacher/edit">
                <button>Edit Profile</button>
              </Link>
            </td>
            <td>
              <Link href="/homepage">
                <button>Back to Home</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
