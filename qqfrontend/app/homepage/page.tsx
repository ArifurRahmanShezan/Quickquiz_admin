'use client';
import Link from "next/link";

export default function Home(){
    return (
        <>
        <Link href="/homepage/login">
        <button >
          Get Started
        </button>
<br></br>

      </Link>
        <Link href="/homepage/signup">
        <button >
          SignUp
        </button>
        

      </Link>
      <br></br>
      
        <Link href="/about">
        <button >
          About
        </button>    

      </Link>
       
        </>
    );
}