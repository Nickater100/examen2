import Card from "./Cards";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState} from "react";
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
    const [modal, setModal] = useState(false)

    useEffect(()=>{
        dispatch(allProduct())
        dispatch(getMongo())
     }, [dispatch])

  return(
    <>
     {
            modal ? <div className="modal"><Form/></div> : null
          } 
    <div className="fondo-buscar">
        <div className="fondo">
          <button className="agregar" onClick={()=>setModal(!modal)} >+</button>  
        <p className="titulo">Lista de productos</p>
              <div className="Cards">
             <div className="grid"> {productos.length === 0 ? "loading" : productos?.map(el =>{
            return (
                <Card key={el.id} name={el.producto} id={el.id}/>)
              })}
              </div>
          </div>
          <p className="titulo">Historial de acciones</p>
              <div className="CardsM">
             <div className="grid"> {mongo2.length === 0 ? "loading" : mongo2?.map(el =>{
            return (
                <CardM  action={el.action} producto={el.producto} Query={el.Query}/>)
              })}
              </div>
          </div>
      </div>
   </div>
    </>
)
}

export default Home;