import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import { User } from "phosphor-react"
import './style.css'

export default function Login() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxW={460}
        bg="white"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <div className="aling--user">
          <User className="user" size={45} />
        </div>
        <h2>Login com Chakra</h2>
        <Stack spacing="2">
          <label htmlFor="">Nome de usuário:</label>
          <Input name="E-mail" type="email" placeholder="Digite seu usuário" />
          <label htmlFor="">Senha:</label>
          <Input name="Senha" type="password" placeholder="Digite sua senha" />
        </Stack>
        <div className="register-pass">
          <p>
            Não tem registro? <span className="span">Cadastre-se</span>
          </p>
          <p>
            Esqueci minha senha
          </p>
        </div>
        <Button type="submit" mt="6" colorScheme="blue">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}