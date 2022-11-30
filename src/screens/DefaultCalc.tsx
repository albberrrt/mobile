import { HStack, VStack, Text, Flex, Pressable } from "native-base";
import { useState } from "react";

export default function DefaultCalc() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentNumber, setCurrentNumber] = useState("5");
  const [lastNumber, setLastNumber] = useState("2 + 2");

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

  function calculator() {
    const splitNumbers = currentNumber.split(" ");
    const fistNumber = parseFloat(splitNumbers[0]);
    const lastNumber = parseFloat(splitNumbers[2]);
    const operator = splitNumbers[1];
    console.log("FN: " + fistNumber);

    switch (operator) {
      case "+":
        setCurrentNumber((fistNumber + lastNumber).toString());
        return;
      case "-":
        setCurrentNumber((fistNumber - lastNumber).toString());
        return;
      case "*":
        setCurrentNumber((fistNumber * lastNumber).toString());
        return;
      case "/":
        setCurrentNumber((fistNumber / lastNumber).toString());
        return;
    }
  }

  function handleInput(btnPressed) {
    console.log(btnPressed);

    if (
      btnPressed === "+" ||
      btnPressed === "-" ||
      btnPressed === "*" ||
      btnPressed === "/"
    ) {
      setCurrentNumber(currentNumber + " " + btnPressed + " ");
      return;
    }
    switch (btnPressed) {
      case "DEL":
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case "AC":
        setLastNumber("");
        setCurrentNumber("");
        return;
      case "=":
        setLastNumber(currentNumber + " = ");
        calculator();
        return;
      case "+/-":
        return;
    }

    setCurrentNumber(currentNumber + btnPressed);
  }

  return (
    <VStack>
      <VStack
        width="full"
        minHeight={370}
        alignItems="flex-end"
        justifyContent="flex-end"
        backgroundColor={darkMode ? "#282f3b" : "#f5f5f5"}
      >
        <Pressable></Pressable>
        <Text
          marginRight={10}
          alignSelf="flex-end"
          fontSize={20}
          color={darkMode ? "#B5B7BB" : "#7c7c7c"}
        >
          {lastNumber}
        </Text>
        <Text
          margin={10}
          fontSize={40}
          color={darkMode ? "#f5f5f5" : "#282F38"}
        >
          {currentNumber}
        </Text>
      </VStack>
      <Flex flexDirection="row" flexWrap="wrap">
        {buttons.map((button, index) =>
          button === "=" ? (
            <Pressable
              key={index}
              onPress={() => handleInput(button)}
              alignItems="center"
              justifyContent="center"
              minWidth={90}
              minHeight={100}
              flex={2}
              backgroundColor="amber.400"
            >
              <Text fontSize={30}>{button}</Text>
            </Pressable>
          ) : (
            <Pressable
              key={index}
              onPress={() => handleInput(button)}
              alignItems="center"
              justifyContent="center"
              minWidth={90}
              minHeight={100}
              flex={2}
              backgroundColor={
                typeof button === "number" || button === "." || button === "DEL"
                  ? darkMode === true
                    ? "#303946"
                    : "#fff"
                  : darkMode === true
                  ? "#414853"
                  : "#ededed"
              }
            >
              <Text fontSize={typeof button === "number" ? 30 : 20}>
                {button}
              </Text>
            </Pressable>
          )
        )}
      </Flex>
    </VStack>
  );
}
