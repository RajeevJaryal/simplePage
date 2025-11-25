import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const FormSection = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
      <Form className="p-4 bg-white shadow rounded w-100" style={{ maxWidth: "400px" }}>
        
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Button type="submit" variant="success" className="w-100">
          Submit
        </Button>

      </Form>
    </Container>
  );
};

export default FormSection;
