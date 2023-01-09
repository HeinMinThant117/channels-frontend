/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
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
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";

interface LoginValues {
  username: string;
  password: string;
}

export default function LoginModal(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    await axios.post("http://localhost:3000/", {
      username: values.username,
      password: values.password,
    });
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
