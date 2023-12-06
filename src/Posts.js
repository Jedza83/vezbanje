import useFetch from "./hooks/useFetch";

function Posts() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data &&
          data.map((post) => {
            return (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Posts;
