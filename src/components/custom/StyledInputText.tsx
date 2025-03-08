import { TextInput,TextInputProps } from "@mantine/core";

const StyledTextInput=({className,...props}:TextInputProps)=>{
    return <TextInput className={className} {...props}/>
    
  
}

export default StyledTextInput