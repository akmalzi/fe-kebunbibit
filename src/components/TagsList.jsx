import { Link } from "react-router-dom";
import Tags from "../data/dummy/tags.json";

function TagsList() {
    return (
        <div className="flex flex-wrap gap-2">
            {Tags.map((value, index) => (
                <Link 
                    to={{
                        pathname: "/forum",
                        search: `?tag=${encodeURIComponent(value.name.toLowerCase().replace(" ", "+"))}`
                    }}
                    key={index} 
                    className="text-sm border-[1px] border-gray-300 rounded-md p-2 transition-colors hover:bg-primaryColor hover:text-white"
                >
                    {value.name}
                </Link>
            ))}
        </div>
    )
};

export default TagsList;