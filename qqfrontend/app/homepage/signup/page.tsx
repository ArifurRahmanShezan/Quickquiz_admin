import Link from "next/link";

export default function Signup() {
  return (
    <>
      <table>
        <tbody>
        <tr>
          <td>First Name:</td>
          <td><input type="text" name="fname" /></td>
        </tr>

        <tr>
          <td>Last Name:</td>
          <td><input type="text" name="lname" /></td>
        </tr>

     <tr>
          <td>Username:</td>
          <td><input type="text" name="uname" /></td>
        </tr>

        <tr>
          <td>Email Address:</td>
          <td><input type="email" name="email" /></td>
        </tr>

     <tr>
          <td>Password:</td>
          <td><input type="password" name="password" /></td>
        </tr>

        <tr>
          <td>Confirm Password:</td>
          <td><input type="password" name="confirmPassword" /></td>
        </tr>

        <tr>
          <td></td>
          <td>
            <Link href="/homepage/login">
            <button type="submit">Signup</button>
            </Link>
          </td>
        </tr>
        </tbody>
      </table>

      <br />
      <Link href="/homepage/login">
        <button>Already have an account? Login</button>
      </Link>
    </>
  );
}