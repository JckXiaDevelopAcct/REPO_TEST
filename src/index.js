import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import './index.css';
import {DragDropContext }from 'react-beautiful-dnd';
import * as serviceWorker from './serviceWorker';
import initalData from './inital-data.js';
import Column from './column';

class App extends React.Component{

onDragEnd=result=>{
  const {destination,source,draggableId} =result;

  if(!destination){
    return;
  }
  if(destination.droppableId === source.droppableId
     && destination.index === source.index){
       return;
     }
  const column=this.state.columns[source.droppableId];
  const newTaskIds = Array.from(column.taskIds);
  newTaskIds.splice(source.index,1);
  newTaskIds.splice(destination.index,0,draggableId);
  const newColumn={
    ...column,
    taskIds:newTaskIds
  };
   const newState={
     ...this.state,
     columns:{
       ...this.state.columns,
       [newColumn.id]:newColumn,
     }
   };
   this.setState(newState);
};

 state=initalData;
  render(){
    return (
        <DragDropContext
          onDragEnd={this.onDragEnd}
          >
          {
      this.state.columnOrder.map((columnId)=>{
      const column = this.state.columns[columnId];
      const tasks=column.taskIds.map(taskId=>this.state.tasks[taskId]);
 
    //   const tasks=column.taskIds.map(taskId=>this.state.tasks[taskId]);
       return <Column key={column.id} column={column} tasks={tasks} />;
    })}
  </DragDropContext>
  )
  }
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
