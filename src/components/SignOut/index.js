import React from 'react'

const SignOut = () => {
  return (
    <>
      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Register</h2>
          <Form onSubmit={handleSignIn}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card> */}
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/register">Register</Link>
      </div>
    </>
  )
}

export default SignOut