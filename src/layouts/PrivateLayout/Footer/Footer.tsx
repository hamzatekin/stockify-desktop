import { Anchor, Footer as MantineFooter, Text } from '@mantine/core';
import { AiOutlineHeart } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <MantineFooter height={70} p="md">
        <div className="flex justify-end items-center w-full">
          <Text>
            Made by
            <Anchor
              className="mx-2"
              target="_blank"
              href="https://www.linkedin.com/in/hamza-tekin-5a003858/"
            >
              Hamza Tekin
            </Anchor>
            with
          </Text>
          <AiOutlineHeart className="ml-2" />
        </div>
      </MantineFooter>
    </>
  );
};

export default Footer;
