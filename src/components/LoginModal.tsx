/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Spinner,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";

interface LoginValues {
  username: string;
  password: string;
}

export default function LoginModal(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const { setUser } = useContext(AuthContext);

  const loginSchema = yup.object({
    username: yup.string().required("Please enter your username"),
    password: yup.string().required("Please enter your password"),
  });

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<LoginValues>({ resolver: yupResolver(loginSchema) });

  const onSubmit = async (values: LoginValues): Promise<void> => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        username: values.username,
        password: values.password,
      });

      toast({
        title: "Success",
        description: "You have successfully logged in.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (response?.data) {
        setUser(response.data);
      }

      onClose();
    } catch (e: any) {
      toast({
        title: "Error",
        description: e.response.data.error,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Login</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mt={2} isInvalid={Boolean(errors.username)}>
              <FormLabel>Username</FormLabel>
              <Input type="text" id="username" {...register("username")} />
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>
            <FormControl mt={2} isInvalid={Boolean(errors.password)}>
              <FormLabel>Password</FormLabel>
              <Input type="password" id="password" {...register("password")} />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <Button
              mt={4}
              background="purple.500"
              color="white"
              px={6}
              mx="auto"
              type="submit"
            >
              {isSubmitting ? <Spinner size="sm" /> : "Login"}
            </Button>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
