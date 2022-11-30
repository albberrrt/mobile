import { HStack, VStack, Text, Flex, Pressable } from "native-base";
import Button from "../components/Button";
import { useState } from "react";

export default function DefaultCalc() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState<Number | null >(null);

  const buttons = [
    "AC",
    "+/-",
    "%",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    3,
    2,
    1,
    "+",
    0,
    ".",
    "DEL",
    "=",
  ];

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
        return <Text margin={10}
        fontSize={40}
        color="#282F38">{result?.toString()}</Text>; 
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text margin={10}
      fontSize={40}
      color="#282F38">{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text margin={10}
      fontSize={40}
      color="#282F38">{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text margin={10}
        fontSize={40}
        color="#282F38">
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text margin={10}
        fontSize={40}
        color="#282F38">
          {firstNumber}
        </Text>
      );
    }
  };

  const changeNumberSign = () => {
    const num = parseFloat(firstNumber) * -1;
    setFirstNumber("" + num)
  }

  const getResult = () => {
    switch (operation) {
      case "+":
          clear();
          setResult(parseFloat(secondNumber) + parseFloat(firstNumber));
          break;
      case "-":
          clear();
          setResult(parseFloat(secondNumber) - parseFloat(firstNumber));
          break;
      case "*":
          clear();
          setResult(parseFloat(secondNumber) * parseFloat(firstNumber));
          break;
      case "/":
          clear();
          setResult(parseFloat(secondNumber) / parseFloat(firstNumber));
          break;
      case "％":
          clear();
          setResult((parseFloat(secondNumber) / 100) * parseFloat(firstNumber));
          break;
      default:
          clear();
          setResult(0);
          break;
      }
  };

  return (
    <VStack>
      <VStack
        width="full"
        minHeight={210}
        alignItems="flex-end"
        justifyContent="flex-end"
        backgroundColor="#f5f5f5"
      >
        <HStack>
          <Text
              marginRight={2}
              alignSelf="flex-end"
              fontSize={20}
              color="#7c7c7c"
            >
              {secondNumber}
          </Text>
          <Text
              marginRight={10}
              alignSelf="flex-end"
              fontSize={20}
              color="#7c7c7c"
            >
              {operation}
          </Text>
        </HStack>
        {firstNumberDisplay()}
      </VStack>
      <Flex flexDirection="row" flexWrap="wrap">

        <Button title="C" isGray onPress={clear} />
        <Button title="+/-" isGray onPress={() => changeNumberSign()} />
        <Button title="％" isGray onPress={() => handleOperationPress("％")} />
        <Button title="÷" isOrange onPress={() => handleOperationPress("/")} />

        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        <Button title="×" isOrange onPress={() => handleOperationPress("*")} />

        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button title="-" isOrange onPress={() => handleOperationPress("-")} />

        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        <Button title="+" isOrange onPress={() => handleOperationPress("+")} />

        <Button title="." onPress={() => handleNumberPress(".")} />
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
        <Button title="=" isOrange onPress={() => getResult()} />

      </Flex>
    </VStack>
  );
}
