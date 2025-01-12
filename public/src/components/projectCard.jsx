const projectCard = ({name, decription, url, imageUrl}) => {
    return (
        <a className="flex border-b py-8 px-rounded-md gap-4 group/item hover:bg-slate-100 mt-1" href={url}>
      <img 
        src={imgUrl} 
        alt={name}
        height="100"
        width="100"
        className="object-contain"
       />
      <div className="flex flex-col flex-grow">
        <p className="group-hover/item:text-primary text-xl font-semibold">{name}</p>
        <p className="text-secondary-foreground">{description}</p>
      </div>
    </a>
    )
}
export default projectCard;