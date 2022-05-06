import ItemListContainer from "../components/ItemListContainer";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <ItemListContainer greeting="La Casa del Deporte!!!" />
        </div>
    );
}

export default Home;
