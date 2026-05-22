import BoutonRecette from "./BoutonRecette";

function SingleProject({ title, description, image, index, className }) {

    const isEven = index % 2 === 0;


    return (
        <div className={`flex items-center bg-white rounded-2xl shadow-md overflow-hidden w-full ${isEven ? 'flex-row' : 'flex-row-reverse'} ${className || ''}`}>
            <div className="p-8 w-1/2 flex flex-col gap-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
                <BoutonRecette className="w-[50%]"/>
            </div>

            <div className="w-1/2">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
            </div>

        </div>
    );
}

export default SingleProject;