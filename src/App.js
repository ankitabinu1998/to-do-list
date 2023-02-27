import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Task from './Task'
import DateComp from './DateComp'
import TaskCompletedAlert from './TaskCompletedAlert';

function App() {
  var [currentTask,addCurrentTask] = useState('');
  var [tasks, addTask] = useState([]);
  var [showAlert, setShowAlert] = useState(false);
  var [completedTask, setCompletedTask] = useState('');

  function newTask(event){
    addCurrentTask(event.target.value);
  }
  function addTaskToList () {
    const newTask = {
        id: tasks.length ?  tasks[tasks.length-1].id + 1 : 1,
        taskName:currentTask,
        complete:false
    }
    addTask([...tasks,newTask]);
    addCurrentTask('');
  }
  function deleteTask(taskToDelete) {
    const newTaskList = tasks.filter(task => task.id !== taskToDelete.id);
    addTask(newTaskList);
  }
  function completeTask(taskToComplete) {
    const newTaskList = tasks.map(task => {
      if (task.id === taskToComplete.id) {
        task.complete = !task.complete;
        setCompletedTask(task.taskName);
      }
      return task;
    })
    addTask(newTaskList);
    setShowAlert(true);
    window.setTimeout(() =>
    setShowAlert(false),2000);
  }
  return (
    <div className="App">
      <Container>
        <Row className='add-task'>
        {showAlert && <TaskCompletedAlert completedTask={completedTask}/>}
          <Col lg={12} className='d-flex justify-content-center'><h1>Add Task</h1></Col>
          <DateComp />
          <Col>
            <Row >
              <Col lg={12} className='d-flex justify-content-center'>
                <input type="text" onChange={newTask} value={currentTask}/>
                <Button variant='primary' onClick={addTaskToList} className='submit-btn '>Submit</Button>
                </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={12}><h1>Tasks</h1></Col>
          <Col>
          {tasks.map((task,index) => {
            return <Task task={task} completeTask={completeTask} deleteTask={deleteTask}/>
            } )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App
