import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text, Icon, Image, Link, Spinner, useToast,Table,Thead,Tr,Th,Tbody } from '@chakra-ui/react';
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai';

const Layout = ({
  children,
  title = 'XGen Bot',
  description = 'XGen Tech Bot',
  favicon = 'https://xgentechnologies.com/wp-content/uploads/2023/06/Xgen-14.png',
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const toast = useToast();
  return (
    <Box className="font-sans leading-relaxed tracking-wide text-gray-800 antialiased">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href={favicon} />
      </Head>
      <Flex
        direction="column"
        minH="100vh"
        bg="gray.100"
        overflow="hidden"
      >
        <Flex
          as="header"
          align="center"
          justify="space-between"
          py="4"
          px="8"
          bg="white"
          shadow="md"
        >
          <Flex align="center">
            <Image
              src="https://xgentechnologies.com/wp-content/uploads/2023/06/Xgen-14.png"
              alt="XGen Logo"
              h="10"
              mr="4"
            />
            <Heading as="h1" size="lg" color="blue.600">
              {title}
            </Heading>
          </Flex>
          <Flex as="nav">
            <Link
              href="https://xgentechnologies.com/"
              display="flex"
              align="center"
              color="gray.600"
              _hover={{ color: 'blue.600' }}
              mr="4"
            >
              <Icon as={AiOutlineHome} w="6" h="6" mr="2" />
              <Text>Dashboard</Text>
            </Link>
            <Link
              href="https://xgentechnologies.com/about-us/"
              display="flex"
              align="center"
              color="gray.600"
              _hover={{ color: 'blue.600' }}
              mr="4"
            >
              <Icon as={AiOutlineInfoCircle} w="6" h="6" mr="2" />
              <Text>About Us</Text>
            </Link>
            <Link
              href="https://xgentechnologies.com/contact-us/"
              display="flex"
              align="center"
              color="gray.600"
              _hover={{ color: 'blue.600' }}
            >
              <Icon as={AiOutlineMail} w="6" h="6" mr="2" />
              <Text>Contact Us</Text>
            </Link>
          </Flex>
        </Flex>
        <Flex as="main" flex="1" px="8" py="12">
        {children}
        </Flex>
        <Flex
          as="footer"
          align="center"
          justify="center"
          py="4"
          bg="white"
          shadow="md"
        >
          <Text color="gray.600">© {new Date().getFullYear()} XGen Technologies</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Layout;
