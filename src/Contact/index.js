import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
`;
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    width: 100%;
    display: flex;

`;
const Contact = () =>
<Container>
  <Form>
      <Input type="name" placeholder="Ime"/>
      <Input type="email" placeholder="Elektronska posta"/>
      <Input type="phone" placeholder="Telefon"/>
      <Input type="textarea" placeholder="Vase sporocilo"/>
  </Form>
</Container>;

export default Contact;

