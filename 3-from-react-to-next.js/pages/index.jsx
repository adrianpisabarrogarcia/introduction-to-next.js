import { useState } from "react";

 function Title({ content }) {
  return <h1>{content ? content : "Hello world! 👋"}</h1>;
}

function LikesButtom() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    console.log(`likes: ${likes}`);
    setLikes(likes + 1);
  }

  return <button onClick={handleClick}>Likes({likes})</button>;
}

export default function List() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <div>
      <Title content="List of women programmers" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikesButtom />
    </div>
  );
}
