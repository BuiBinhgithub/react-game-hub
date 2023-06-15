import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons'


function ColorModeSwitch() {
    const { toggleColorMode, colorMode } = useColorMode()
    return (
        <HStack>
            <Switch colorScheme='green' isChecked={colorMode === "dark"} onChange={toggleColorMode} />
            <Text style={{ marginTop: '-5px' }} whiteSpace={'nowrap'}>{colorMode === "light" ? <SunIcon /> : <MoonIcon />}</Text>
        </HStack>
    );
}

export default ColorModeSwitch;