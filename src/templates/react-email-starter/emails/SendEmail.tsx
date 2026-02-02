import { Body, Button, Container, Heading,  Html, Tailwind, Text } from "@react-email/components";


interface SendEmailUiProps {
  heading: string;
  message: string;
  link?: {
    url: string;
    text: string;
  };
  footer?: string;
}



const SendEmailUi = ({heading, message, link, footer}: SendEmailUiProps)=> {
    return (
       <Html>
           <Tailwind>
        <Body className="bg-gray-100 py-10">
          <Container className="bg-white p-6 rounded-md text-center">
            <Heading as="h2">{heading}</Heading>

            <Text className="mt-4">{message}</Text>

            <Button
              href={link?.url}
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
            >
              {link?.text}
            </Button>

            <Text className="mt-6 text-sm text-gray-500">
              {footer}
            </Text>
          </Container>
        </Body>
      </Tailwind>
       </Html>
    )
}

export default SendEmailUi;