import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignOut = () => {
  return (
    <Container style={{minHeight: "85vh"}} className="d-flex align-items-center justify-content-center w-50">
      <Card className="text-center p-5">
        <Card.Body >
          <h5>You are now signed out</h5>
        </Card.Body>
        <div className="mt-5">
          <small>Didn't mean to sign out? <Link to="/signin">Sign In</Link></small>
        </div>
      </Card>
    </Container>

  )
}

export default SignOut