import { Card, Container, Row, Col } from 'react-bootstrap';

export default function BootstrapUserList({ users }) {
  return (
    <Container className="mb-5">
      <h2 className="mb-4">React Bootstrap</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {users.map(user => (
          <Col key={user.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
                <Card.Text>
                  <strong>Email:</strong> {user.email}<br />
                  <strong>Phone:</strong> {user.phone}<br />
                  <strong>Company:</strong> {user.company.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
