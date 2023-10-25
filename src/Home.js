import KidsList from "./KidsList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: kids, isPending, error} = useFetch('http://localhost:3200/kids');
// npm install react-router-dom
// npx json-server --watch data/db.json --port 3200
     return (
        <div className="home">
            { error && <div>{ error }</div>}
            {isPending && <div>Načítavam...</div>}
            {kids && <KidsList kids={ kids } title="Detičky:"/>}
        </div>
    );
}
 
export default Home;