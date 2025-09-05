import Link from "next/link";

export default function AboutCompany(){
    return(
        <>
        <h1>About company</h1>
        <h5>this is about company</h5>
        <br />
        <Link href="/homepage">
        <button>Back to Home</button>
        </Link>
        </>

    );
}