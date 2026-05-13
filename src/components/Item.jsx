import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"
function Item({prod}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          ${prod.price}
        </Card.Text>
        {/* <Link className='btn btn-dark' to={'/item/'+prod.id}>Ver Más</Link> */}
          <Link className='btn btn-dark' to={`/item/${prod.id}`}>Ver Más</Link>
      </Card.Body>
    </Card>
  );
}

export default Item;