import Link from 'next/link';
import { useState, useEffect } from 'react';


const HEARTS = ['💙', '💚', '💛', '💖', '💜', '💘'];


function Header({ title = 'Default Title.' }) {
  return <h1>{title}</h1>;
}

function calculateHeart(likes) {
  if (likes < 1) return HEARTS[0];
  if (likes < 5) return HEARTS[1];
  if (likes < 10) return HEARTS[2];
  if (likes < 20) return HEARTS[3];
  if (likes < 50) return HEARTS[4];
  return HEARTS[5];
}

function calculateLink(hearts) {
  if (hearts === HEARTS[5]) return "next love";
  return "";
}

export default function HomePage() {
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
        {HEARTS.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like Parameter : {likes} {hearts}</button>
      <div></div>
      <Link href="/love-react01">{links}</Link>
    </div>
  );
}
