import Link from 'next/link';
import { useState, useEffect } from 'react';


function Header({ title = 'Default Title.' }) {
  return <h1>{title}</h1>;
}

function calculateHeart(likes) {
  if (likes < 1) return "💙";
  if (likes < 5) return "💚";
  if (likes < 10) return "💛";
  if (likes < 20) return "💖";
  if (likes < 50) return "💜";
  return "💘";
}

function calculateLink(hearts) {
  if (hearts == "💘") return "next love";
  return "";
}

export default function HomePage() {
  const values = ['💙', '💚', '💛', '💖', '💜', '💘'];

  const [likes, setLikes] = useState(0);
  const [hearts, setHearts] = useState("♡");
  const [links, setLinks] = useState("");

  useEffect(() => {
    setHearts(calculateHeart(likes));
  }, [likes]);

  useEffect(() => {
    setLinks(calculateLink(hearts));
  }, [hearts]);   //[likes]にすると1回ずれる

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title={`I love React ${hearts}`} />
      <ul>
        {values.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like Parameter : {likes} {hearts}</button>
      <div></div>
      <Link href="/love-react01">{links}</Link>
    </div>
  );
}
