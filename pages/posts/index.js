import { Container, Heading, List, ListItem, Link } from '@chakra-ui/layout';
import NextLink from 'next/link';

export default function Posts({ data }) {
  return (
    <>
      <Container maxWidth="5xl" marginX="40" marginTop={4}>
        <Heading>Items Page</Heading>
        <Link href="/">&#8592; Home</Link>
        <List>
          {data.map(i => (
            <ListItem key={i.id}>
              <NextLink href={`posts/${i.id}`}>
                <a>Go to {i.title}</a>
              </NextLink>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { props: { data: data } };
}
