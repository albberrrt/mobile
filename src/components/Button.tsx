import { useContext } from 'react';
import { Pressable, Text } from 'native-base';
import { ThemeContext } from "../context/ThemeContext";

interface IButtonProps{
    onPress: () => void;
    title: string;
    isOrange?: boolean;
    isGray?: boolean;
}

export default function Button({ title, onPress, isOrange, isGray }: IButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <Pressable
            flex={2}
            alignItems="center"
            justifyContent="center"
            minWidth={90}
            minHeight={90}
            backgroundColor={isOrange ? "amber.400" : isGray ? "#ededed" : "white"}
            onPress={onPress}>
            <Text 
               fontSize={32}
               color="gray.900"
            >
                {title}
            </Text>
        </Pressable>
    );
}