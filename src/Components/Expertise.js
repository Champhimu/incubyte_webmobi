import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

const Expertise = () => {
  return (
    <>
    <div className='mt-3 mb-5'>

    <h1 className='text-center p-3' style={{color: '#2849b9'}}>Our Expertise</h1>
    <Row className="justify-content-md-center">
    
    <Col sm={12} md={3}>
    <Card className='multiplecard' style={{ backgroundColor: '#a2d8f2', height: '100%', border: '2px solid #ecf7fc', margin: '8px'}}>
      <Card.Body>
        <Card.Title className='text-center m-2'>Hiring</Card.Title>
        <Card.Text>Leveraging our deep understanding of the talent landscape, we
                devise effective hiring strategies to attract the best tech
                professionals.</Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col sm={12} md={3}>
    <Card className='multiplecard' style={{ backgroundColor: '#a2d8f2', height: '100%', border: '2px solid #ecf7fc', margin: '8px'}}>
      <Card.Body>
        <Card.Title className='text-center m-2'>Human Resources Management</Card.Title>
        <Card.Text>We ensure a healthy and productive work environment by
                implementing efficient HR practices tailored to the unique needs
                of your startup.</Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col sm={12} md={3}>
    <Card className='multiplecard' style={{ backgroundColor: '#a2d8f2', height: '100%', border: '2px solid #ecf7fc', margin: '8px'}}>
      <Card.Body>
        <Card.Title className='text-center m-2'>Taxation</Card.Title>
        <Card.Text>Our team navigates through the complexities of the tax system,
                ensuring compliance while optimizing financial efficiency.</Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col sm={12} md={3}>
    <Card className='multiplecard' style={{ backgroundColor: '#a2d8f2', height: '100%', border: '2px solid #ecf7fc', margin: '8px'}}>
      <Card.Body>
        <Card.Title className='text-center m-2'>Regulatory Guidance</Card.Title>
        <Card.Text>We stay abreast of the ever-changing regulatory landscape,
                providing timely advice to ensure your startup's operations stay
                within boundaries.</Card.Text>
      </Card.Body>
    </Card>
    </Col>

    </Row>

    </div>

    </>
  )
}

export default Expertise