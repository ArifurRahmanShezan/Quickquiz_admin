import Link from "next/link";
export default function About(){
    return(
        <>
        <h1>All Admin</h1><br />
        <Link href="/homepage/AdminDashboard/admin/arif">Arif</Link><br />
        <Link href="/homepage/AdminDashboard/admin/maruf">Maruf</Link><br />
        <Link href="/homepage/AdminDashboard/admin/akash">Akash</Link><br />
        <Link href="/homepage/AdminDashboard/admin/antor">Antor</Link><br />
        {/* <Link href="user/shu">Shu</Link> */}
        <p>this is the all admin page</p>
        <br />
            <Link href="/homepage">
                <button>Back to Home</button>
            </Link>
        </>
    )
}