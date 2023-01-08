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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface RegisterValues {
  username: string;
  password: string;
  passwordConfirm: string;
}

export default function RegisterModal(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<RegisterValues>();

  async function onSubmit(values: RegisterValues): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(values);
        resolve();
      }, 3000);
    });
  }

  return (
    <>
      <Button onClick={onOpen}>Register</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input type="text" id="username" {...register("username")} />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register("password")} />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" {...register("passwordConfirm")} />
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
