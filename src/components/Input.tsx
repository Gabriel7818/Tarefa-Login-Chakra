
import { FormControl, FormLabel, Input as ChakraInput, InputProps } from "@chakra-ui/react";

interface IInputProps extends InputProps {
  label?: string;
  name: string;
}

export function Input({ label, name, ...rest }: IInputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        {...rest}
      />
    </FormControl>
  );
};