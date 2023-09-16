import Info from "../Info/Info";

const InfoList = () => {
    return <div className="flex items-center flex-wrap justify-around gap-10 mt-6 mb-10 sm:mt-10 sm:gap-x-20 sm:justify-center">
        <Info titulo={"Endereço"} info={"Fortaleza-CE"} icone={"/imagens/endereco.svg"}/>
        <Info titulo={"Email"} info={"rudson.a.s.silva@gmail.com"} icone={"/imagens/email.svg"} url={'mailto:rudson.a.s.silva@gmail.com'}/>
        <Info titulo={"Linkedin"} info={"Rudson Abraão"} icone={"/imagens/linkedin.svg"} url={'https://www.linkedin.com/in/rudson-abra%C3%A3o-2aa374215/'}/>
        <Info titulo={"Telefone"} info={"(85) 9 9134-6556"} icone={"/imagens/fone.svg"}/>
    </div>
}

export default InfoList;