import { HeaderContainer, HeaderWrapper, UserInfo } from "./styles"

import logoInter from '../../assets/images/inter-orange.png'
import { useNavigate } from "react-router-dom"
import Circle from "../UserCircle"



const Header = ()=>{

    const navigate = useNavigate()

    const handleLogoff = ()=>{
        navigate('/')
    }
    return(
        <HeaderContainer>
            <HeaderWrapper>
                <img src={logoInter} width={172} height={61} alt="logo inter" />
                <UserInfo>
                    <Circle initials="JC"></Circle>
                    <div>
                        <p>Olá. <span className="primary-color font-bold">Janaina</span> </p>
                        <strong>123456-0</strong><br />
                        <a href="#" onClick={handleLogoff} >Sair</a>
                    </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header