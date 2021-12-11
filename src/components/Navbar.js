import React from "react";
import { Link } from "gatsby";
import { Flex, Center, Heading, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { authData, setAuthData } = useAuthContext();

  const handleLogout = () => {
    setAuthData({ isLoggedIn: false, info: null });
    document.cookie = `auth-token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  };

  return (
    <Flex justifyContent="space-between" bg="primary" height="70px" p="4">
      <Center cursor="pointer" color="white">
        <Link to="/">
          <Heading fontSize="22px">Job Board</Heading>
        </Link>
      </Center>
      {authData.isLoggedIn ? (
        <>
          <Flex justifyContent="end" cursor="pointer" fontSize="1rem">
            <Center marginRight="5" color="white">
              <Link to="/app/post-job">Post Job</Link>
            </Center>
            <Center marginRight="5" color="white">
              <Link to="/app/my-jobs">My Jobs</Link>
            </Center>
            <Center marginRight="5" color="white">
              <Link to="/app/job-listing">All Jobs</Link>
            </Center>
            <Center color="white" cursor="pointer" onClick={handleLogout}>
              <Button leftIcon={<ArrowBackIcon />} bg="white" color="gray.800">
                Logout
              </Button>
            </Center>
          </Flex>
        </>
      ) : (
        <Center color="white" cursor="pointer" onClick={handleLogout}>
          <Link to="/app/sign-in">
            <Button bg="white" color="gray.800">
              Sign In
            </Button>
          </Link>
        </Center>
      )}
    </Flex>
  );
};

export default Navbar;
