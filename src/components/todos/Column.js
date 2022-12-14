import classes from "./Column.module.css";
import Todo from "./Todo";
import { useContext } from "react";
import AppContext from "../../context/context-api";
import { colorArray } from "../../context/context-api";

const Column = (props) => {
  const ctx = useContext(AppContext)

  const pickBackgroundColor = ctx.pickBackgroundColor;
  const backgroundColor = pickBackgroundColor(colorArray);

  const columnTitle = props.column.name;
  const tasks = props.column.tasks;
  const numberOfItems = tasks.length;


  const todos = tasks.map(task => <Todo key={task.title.toLowerCase().replace(' ', '-')} column={columnTitle} task={task} />)


  return (
    <div className={classes.container}>
      <div className={classes.column_title}>
        <span style={{ background: backgroundColor }}></span>
        <p>{`${columnTitle.toUpperCase()} (${numberOfItems})`}</p>
      </div>

      {todos}
    </div>
  );
};

export default Column;
