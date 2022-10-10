import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

function Home() {
  return (
    <div className="home">
      <h1 className="title">ToDoS</h1>
      <ToDoInput />
      <ToDoList />
    </div>
  );
}

export default Home;
