import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './Cards.css'


const Cards = () => {
  return (
    <div>
    <Card className='card_1' style={{ width: '150rem',display:'flex',marginTop:'8%',padding:'5%'}}>
    
    <Card.Body>
      <Card.Title style={{fontSize:'20px',color:'gray'}}>Website Development </Card.Title>
      <Card.Text style={{marginLeft:'35%'}}>
         I throw myself down among the tall grass by the stream as I lie close to the earth
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>


    <Card.Body>
      <Card.Title style={{fontSize:'20px',color:'gray'}}>Website Development </Card.Title>
      <Card.Text style={{marginLeft:'35%'}}>
         I throw myself down among the tall grass by the stream as I lie close to the earth
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>

    
    <Card.Body>
      <Card.Title style={{fontSize:'20px',color:'gray'}}>Website Development </Card.Title>
      <Card.Text style={{marginLeft:'35%'}} >
         I throw myself down among the tall grass by the stream as I lie close to the earth
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>

</div>
      
  )
}

export default Cards


