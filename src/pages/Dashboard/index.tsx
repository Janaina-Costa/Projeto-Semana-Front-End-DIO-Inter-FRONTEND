import Button from "../../components/Button"
import { ButtonContainer } from "../../components/Button/styles"
import Card from "../../components/Card"
import Header from "../../components/Header"
import Input from "../../components/Input"
import Statement from "./Statement"
import { DashboardBackground, BodyContainer, InlineContainer, InLineTitle } from "./styles"
const Dashboard = ()=>{
    const wallet = 5000
    return(
        <DashboardBackground>
            <Header/>
            <BodyContainer>
                <div>
                    <Card noShadow width="90%">
                        <InLineTitle>
                            <h2 className="h2">Saldo Atual</h2>
                        </InLineTitle>
                        <InlineContainer>
                            <h3 className="wallet">
                                {wallet.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}
                            </h3>
                        </InlineContainer>
                    </Card>

                    <Card noShadow width="90%">
                       <InLineTitle>
                        <h2 className="h2">Receber PIX</h2>
                       </InLineTitle>
                        <InlineContainer>
                            <Input placeholder="Valor" />
                            <Button>Gerar código</Button>
                        </InlineContainer>
                        
                            <p className="primary-color">Pix copia e cola:</p>
                            <p className="primary-color">sfgsfbsbsb2j3b44by5b535bg55b</p>
                        
                   </Card>

                   <Card noShadow width="90%">
                       <InLineTitle>
                        <h2 className="h2">Pagar PIX</h2>
                       </InLineTitle>
                        <InlineContainer>
                            <Input placeholder="Chave PIX" />
                            <Button>Pagar PIX</Button>
                        </InlineContainer>                        
                   </Card>
                </div>

                               

                <div>
                    <Card noShadow width="90%">
                        <InLineTitle>
                            <h2 className="h2">Extrato da Conta</h2>
                        </InLineTitle>
                        <Statement></Statement>
                           

                    </Card>
                    
                </div>
            </BodyContainer>

        </DashboardBackground>
    )
}

export default Dashboard