import { HStack, VStack, Text, Flex, Pressable, HamburgerIcon, Input, Heading } from "native-base";
import { useState } from "react";

export default function SquareCalc() {
    const [calcWidth, setCalcWidth] = useState(0);
    const [calcHeight, setCalcHeight] = useState(0);

    return(
        <VStack
            flex={1}
            alignItems="center"
            justifyContent="center"
        >
            <VStack height="90%" width="100%" alignItems="center">
                <Flex marginTop="10%">
                    <VStack w="70%">
                        <Text>Digite a largura do quadrilátero</Text>
                        <Input w="100%" marginTop={2}></Input>
                    </VStack>
                    <VStack w="70%" marginTop={7}>
                        <Text>Digite a altura do quadrilátero</Text>
                        <Input w="100%" marginTop={2}></Input>
                    </VStack>
                </Flex>
            </VStack>
        </VStack>
    )
}