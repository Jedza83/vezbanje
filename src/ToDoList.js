import useFetch from "./hooks/useFetch";

function ToDoList() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        {data &&
          data.map((task) => {
            return <li key={task.id}>{task.title}</li>;
          })}
      </ul>
    </div>
  );
}

export default ToDoList;
