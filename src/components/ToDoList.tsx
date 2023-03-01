import CreateToDo from "./CreateToDo";
import { Categories, categoryState, toDoSelector, toDoState } from "./atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import ToDo from "./ToDo";
import React from "react";
import { useForm } from "react-hook-form";

interface ICateForm {
  categoryA: string;
}

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const [data, setData] = useRecoilState(categoryState);
  const { register, handleSubmit, setValue } = useForm<ICateForm>();
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
      <form>
        <input {...register("categoryA")} placeholder="category"></input>
        <button>add</button>
      </form>
    </div>
  );
}
export default ToDoList;
