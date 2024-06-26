import React from 'react';
import { Todo } from '../model';
import './styles.css';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    todos:Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    completedTodos: Array<Todo>;
    setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<Props> = ({ todos,setTodos, completedTodos, setCompletedTodos, }:Props) => {
  return (
    <div className="container">
        <Droppable droppableId='TodosList'>
            {
                (provided, snapshot) => (
                    <div className={`todos ${snapshot.isDraggingOver? "dragactive" : ""}`} 
                    ref={provided.innerRef} 
                    {...provided.droppableProps}
                >
            <span className="todos_heading">
                Active Tasks
            </span>

            {
                todos?.map((todo, index) => (
                    <SingleTodo 
                    index={index}
                    todo={todo} 
                    todos={todos} 
                    key={todo.id} 
                    setTodos={setTodos}/>
                ))
            }
            {provided.placeholder}
        </div>
                )
            }

        
        </Droppable>

        <Droppable droppableId='TodosRemove'>

            {
                (provided, snapshot) => (

        <div className={`todos remove ${snapshot.isDraggingOver? "dragcomplete" : ""}`} 
        ref={provided.innerRef} 
        {...provided.droppableProps}>
        <span className="todos_heading">
                Completed Tasks
            </span>

            {
                completedTodos.map((todo, index) => (
                    <SingleTodo 
                    index={index}
                    todo={todo} 
                    todos={completedTodos} 
                    key={todo.id} 
                    setTodos={setCompletedTodos}/>
                ))
            }
            {provided.placeholder}
        </div>
                )
            }

        </Droppable>

    </div>
   
  );
  
};

export default TodoList;