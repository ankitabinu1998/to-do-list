import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Task (props) {
	return(
		<Row>
		  <Col lg={6}><p key={props.task.id} className={props.task.complete ? 'completed-text' : 'incomplete-text'}>{props.task.taskName}</p></Col>
		  {!props.task.complete ? <Col lg={3}><button onClick={() => props.completeTask(props.task)} style={{backgroundColor:props.task.complete ? '#2bff00' : '#ff2323'}}>{props.task.complete ? 'Completed' :'Mark as Completed'}</button></Col> : <Col lg={3}></Col>}
		   
		  <Col lg={3}><button className="delete-btn float-right" onClick={() => props.deleteTask(props.task)}>Delete</button></Col>
		</Row>
	)
}

export default Task;