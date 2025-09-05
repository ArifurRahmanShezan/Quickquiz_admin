import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <h1><b>About Us</b></h1>
      <p>
        Welcome to <b>QuickQuiz</b>, your interactive platform for practicing quizzes, 
        testing knowledge, and learning in a fun and engaging way. QuickQuiz provides 
        a variety of quizzes across multiple subjects to help students and learners improve 
        their skills efficiently.
      </p>

      <h2>Our Mission</h2>
      <p>
        We aim to make learning enjoyable and accessible for everyone by providing a 
        platform that is simple, interactive, and full of challenging quizzes.
      </p>

      <h2>Our Features</h2>
      <ol>
        <li>Wide range of quizzes across subjects and topics</li>
        <li>Timed quizzes to track your speed and knowledge</li>
        <li>Score tracking to monitor progress</li>
        <li>User-friendly interface for a smooth experience</li>
      </ol>

      <h2>Contact Us</h2>
      <p>
        Email: support@quickquiz.com <br />
        Phone: +880 1234 567 890
      </p>

      <Link href="/homepage">
        <button>Back to Home</button>
      </Link>
    </>
  );
}
