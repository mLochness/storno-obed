import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error} = useFetch('http://localhost:3200/blogs');
// npm install react-router-dom
// npx json-server --watch data/db.json --port 3200
     return (
        <div className="home">
            { error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={ blogs } title="ODHLÁSENÍ:"/>}
        </div>
    );
}
 
export default Home;