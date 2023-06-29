const Card = ({title, description, image}:{title: string, description: string, image: string}) => {
    return(
        <div className="w-[400px] rounded-lg border border-text-high-green ">
            <h3>{title}</h3>
        </div>
    );


}

export default Card;