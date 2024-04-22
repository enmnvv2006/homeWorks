import Todo from "../../components/Todo/Todo";

function TodosPage() {

    const arr = ["todo 1", "todo 2", "todo 3"]

      return (
        <div>
          {arr.map((elem,index) => <Todo array={elem} key={index}/>)}
        </div>
      );
    }
    
    export default TodosPage;