import { Input, InputProps } from "@mantine/core";

const StyledInput=({className,...props}:InputProps)=>{
    return <Input className={className} {...props}/>
}

export default StyledInput