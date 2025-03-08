import { NumberInput,NumberInputProps } from "@mantine/core";

const StyledInputNumber=({className,...props}:NumberInputProps)=>{
    return <NumberInput className={className} {...props}/>
}

export default StyledInputNumber