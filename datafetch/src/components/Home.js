import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

function Home() {
  return (
    <div className="home">
      <h1 className="title">todos</h1>
      <ToDoInput />
      <ToDoList />
    </div>
  );
}

export default Home;
