import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col';

function TaskCompletedAlert (props) {
	return (
	<Col lg={12}> <Alert variant='success' transition='true'>Task {props.completedTask} Completed</Alert></Col>
	)
}

export default TaskCompletedAlert;