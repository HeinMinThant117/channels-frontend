/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalContent,
  ModalOverlay,
  Input,
  useDisclosure,
  Spinner,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface RegisterValues {
  username: string;
  password: string;
  passwordConfirm: string;
}

export default function RegisterModal(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const registerSchema = yup.object({
    username: yup.string().required("Please enter your username"),
    password: yup.string().required("Please enter your password"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<RegisterValues>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (values: RegisterValues): void => {
    console.log(values);
  };

  return (
    <>
      <Button onClick={onOpen}>Register</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={Boolean(errors.username)}>
              <FormLabel>Username</FormLabel>
              <Input type="text" id="username" {...register("username")} />
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>
            <FormControl mt={2} isInvalid={Boolean(errors.password)}>
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register("password")} />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <FormControl mt={2} isInvalid={Boolean(errors.passwordConfirm)}>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" {...register("passwordConfirm")} />
              <FormErrorMessage>
                {errors.passwordConfirm?.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              mt={4}
              background="purple.500"
              color="white"
              px={6}
              mx="auto"
              type="submit"
            >
              {isSubmitting ? <Spinner size="sm" /> : "Register"}
            </Button>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
