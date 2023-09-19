import Menu from "../Menu/Menu";

const Header = ()=> {
    return(
        <div className=" text-corTexto flex justify-between lg:px-10">
            <h1 className="font-bold md:text-3xl">Portifólio</h1>
            <Menu/>
        </div>
    )
}

export default Header;