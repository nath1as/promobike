import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 40%;
`;
const Details = styled.div`
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    display: flex;

`;
const Text = styled.div`
    font-weight: bold;
    display: flex;
`;
const TextArea = styled.div`
    display: flex;
`;
const Icon = styled.img`
`;
const Link = styled.div`
`;

const Contact = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [text, setText] = useState('');

return (
  <Container>
    <Details>
      <Icon />
      <Text>
         Spletna posta:
       </Text>
      <Link> promobike@gmail.com </Link>
      <Icon />
      <Text>
         Telefon:
       </Text>
      <Link>041 446 439</Link>
      <Icon />
      <Text>
         Facebook:
       </Text>
       <Link> facebook.com/promobikeslovenija </Link>
      <Icon />
      <Text>
         Instagram:
       </Text>
       <Link> instagram.com/promobikeslovenija </Link>
    </Details>
    <Form>
      <Input
        type="name"
        value={name}
        placeholder="Ime"
        onChange={e => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        value={email}
        placeholder="Elektronska posta"
        onChange={e => setEmail(e.target.value)}
        required
      />
      <Input
        type="phone"
        value={phone}
        placeholder="Telefon"
        onChange={e => setPhone(e.target.value)}
        required
      />
      <TextArea
        type="textarea"
        value={text}
        placeholder="Vase sporocilo"
        onChange={e => setText(e.target.value)}
        rows="4"
        cols="1"
        required
      />
    </Form>
  </Container>
  )
};

export default Contact;

