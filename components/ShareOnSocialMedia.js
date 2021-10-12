import { Box, Heading, Link } from '@chakra-ui/react';
const ShareOnSocialMedia = ({ path }) => {
  return (
    <Box mt="2">
      <Heading color="h22.grey.text" fontSize="xs" textTransform="uppercase">
        Share on social media
      </Heading>
      <Box margin={8}>
        <Link
          padding={2}
          bg="blue.400"
          color="white"
          isExternal
          href={`https://www.linkedin.com/sharing/share-offsite/?url=https://testing-seo.vercel.app/${path}`}
          marginRight={2}
          aria-label="linkedin link"
        >
          Linkedin
        </Link>
        <Link
          padding={2}
          bg="blue.400"
          color="white"
          isExternal
          href={`https://www.facebook.com/sharer.php?u=https://testing-seo.vercel.app/${path}`}
          aria-label="facebook link"
        >
          Facebook
        </Link>
      </Box>
    </Box>
  );
};
export default ShareOnSocialMedia;
