const Skills = ({imagem}) => {
    return (
        <div className="h-[90px] w-[90px] sm:w-[150px] sm:h-[150px] p-4 sm:p-2 bg-cinzaClaro border-borda border flex items-center justify-center rounded-md">
            <img src={imagem} />
        </div>    
    )
}

export default Skills;