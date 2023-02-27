import Col from 'react-bootstrap/Col';

function DateComp() {
	let currentDate = new Date();
	const dayMap = new Map();
	dayMap.set(0,'Sunday');
	dayMap.set(1,'Monday');
	dayMap.set(2,'Tuesday');
	dayMap.set(3,'Wednesday');
	dayMap.set(4,'Thurday');
	dayMap.set(5,'Friday');
	dayMap.set(6,'Saturday');

	let monthMap = new Map();
	monthMap.set(0,'January');
	monthMap.set(1,'February');
	monthMap.set(2,'March');
	monthMap.set(3,'April');
	monthMap.set(4,'May');
	monthMap.set(5,'June');
	monthMap.set(6,'July');
	monthMap.set(7,'August');
	monthMap.set(8,'September');
	monthMap.set(9,'October');
	monthMap.set(10,'November');
	monthMap.set(11,'December');

	let date = `${dayMap.get(currentDate.getDay())} ${currentDate.getDate()} ${monthMap.get(currentDate.getMonth())} ${currentDate.getFullYear()}`;
	return (
		<Col lg={12} className='d-flex justify-content-center'><h2>{date}</h2></Col>
	)
}

export default DateComp;