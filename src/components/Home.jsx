import Card from "./Cards";
import { useSelector, useDispatch } from "react-redux";
import { useEffect} from "react";
import { allProduct,getMongo} from "../actions/index";
import Form from "./Form"
import CardM from "./CardsM";
import "./Home.css"

function Home(){
    const dispatch = useDispatch();
    const productos = useSelector((state) => state.productos);
    const mongo = useSelector((state) => state.mongo)
    const mongo2 = mongo.slice(0,10)
    const producto = useSelector((state) => state.producto)

    useEffect(()=>{
        dispatch(allProduct())
        dispatch(getMongo())
     }, [dispatch])

  return(
    <div className="fondo-buscar">
        <div className="fondo">
              <div className={"Cards"}>
                <p>Lista de productos</p>
             <ul className={"grid"}> {productos.length === 0 ? "loading" : productos?.map(el =>{
            return (
            <div className={"margin"}><Card  name={el.producto} id={el.id}/></div>)
              })}
              </ul>
          </div>
      </div>
   </div>
    
)
}

export default Home;