import { CircleContainer } from "./style"

interface UserInfo{
    initials:string
}
const Circle = ({initials}:UserInfo)=>{
    return(
        <CircleContainer>
            {initials}
        </CircleContainer>
    )
}

export default Circle