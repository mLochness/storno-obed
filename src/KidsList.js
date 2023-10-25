import { Link } from "react-router-dom";

const KidsList = ({ kids, title }) => {
  //  const Offdates = kids.offdates.map(offdate => { offdate.offdates });

    return (
        <div className="blog-list">
            <h4>{title}</h4>
            {kids.map((kid) => (
                <div className="blog-preview" key={kid.id}>
                    <Link to={`/blogs/${kid.id}`}>
                        <h3>{kid.title}</h3>
                        <p> Odhlásenie: {kid.offdates} </p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default KidsList;