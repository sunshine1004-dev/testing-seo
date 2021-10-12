import { Container } from '@chakra-ui/layout';
import Link from 'next/link';
import NextHead from '../../components/NextHead';
import ShareOnSocialMedia from '../../components/ShareOnSocialMedia';

export default function List({ data }) {
  console.log(data.userId);
  return (
    <>
      <NextHead title={data.title} description={data.body} />

      <Container maxWidth="5xl" marginX="40" marginTop={4}>
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
        <ShareOnSocialMedia path={data.userId} />
        <Link href="/posts">&#8592; Back</Link>
      </Container>
    </>
  );
}

export async function getServerSideProps({ params, res }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  // so much power!
  if (!response.ok) {
    res.writeHead(302, { Location: '/detail' });
    res.end();
    return { props: {} };
  }

  const data = await response.json();

  if (data) {
    return {
      props: { data: data },
    };
  }
}
