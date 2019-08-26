const initalData={
  tasks:{
    'task-1':{id:'task-1',content:'Takeout the trash'},
    'task-2':{id:'task-2',content:'Get lunch'},
    'task-3':{id:'task-3',content:'Go workout'},
    'task-4':{id:'task-4',content:'Review for exams'}
  },
  columns:{
    'column-1':{
      id:'column-1',
      title:'To do',
      taskIds:['task-1','task-2','task-3','task-4'],
    }
  },
  //Facilitae rendering of the columns
  columnOrder:['column-1'],
};

export default initalData;
