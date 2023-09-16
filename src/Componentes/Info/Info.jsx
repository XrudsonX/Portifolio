const Info = ({icone, titulo, info, url}) => {
    return <div className="flex flex-col justify-center items-center w-28 whitespace-nowrap sm:gap-2" >
        <a href={url} className="bg-cinzaClaro rounded-full w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center">
            <img src={icone} className="w-[24px] h-[24px] sm:w-[34px] sm:h-[34px]"  />
        </a>
        <a href={url} className="text-corTexto text-sm sm:text-lg">{titulo}</a>
        <a href={url} className="text-cinza text-xs sm:text-base">{info}</a>

    </div>
}

export default Info;