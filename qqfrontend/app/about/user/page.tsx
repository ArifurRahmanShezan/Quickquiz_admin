import Link from "next/link";
export default function About(){
    return(
        <>
        <h1>About user</h1><br />
        <Link href="user/abc">Abc</Link><br />
        <Link href="user/def">Def</Link><br />
        <Link href="user/geh">Geh</Link><br />
        <Link href="user/alice">Alice</Link><br />
        {/* <Link href="user/shu">Shu</Link> */}
        <a href="user/shu">Shu</a>
        <p>this is the all user page</p>
        </>
    )
}