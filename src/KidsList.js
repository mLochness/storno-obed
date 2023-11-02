import { Link } from "react-router-dom";

const KidsList = ({ kids, title }) => {

    return (
        <div className="kids-list">
            <h4>{title}</h4>
            {kids.map((kid) => (
                <div className="item-preview" key={kid.id}>
                    <Link to={`/kids/${kid.id}`}>
                        <h3>{kid.name}</h3>
                        {<p> Posledné odhlásenie: {kid.offdates.at(-1)} </p>}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default KidsList;