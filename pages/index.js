import { Heading, Container } from '@chakra-ui/react';
import Link from 'next/link';
import NextHead from '../components/NextHead';

export default function Home() {
  return (
    <div>
      <NextHead title="My Cool Website" />

      <Container border="2px" marginTop={4}>
        <Heading>Welcome to Next.js!</Heading>
        <Link href="/posts">Go to items page &#8594;</Link>
      </Container>
    </div>
  );
}
