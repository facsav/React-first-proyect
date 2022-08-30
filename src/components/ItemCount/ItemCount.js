import { useState } from "react"

export function ItemCount (props){
    const {stock} = props
    const [contador, setContador] = useState(0)

    function sumaNum (){
        if ( contador < stock){
            setContador (contador + 1)
        }
        else{
            alert(" No hay mas stock")
        }


    }

    function restaNum(){
        if ( contador > 0){
            setContador (contador - 1 )
        }
    }

    function agregarProd(){
        if (contador  === 0)
        {

        }

        else if (contador === 1) {
            alert(`Se agregó ${contador} producto al carrito`)
        }
        else{
            alert(`Se agregaron ${contador} productos al carrito`)
        }

    }



    return(
    <div>
        <p> Productos seleccionados {contador} </p>
        <button className="btn btn-primary" onClick={sumaNum}>+</button>
        <button className="btn btn-primary" onClick={restaNum}>-</button>
        <hr></hr>
        <button className="btn btn-primary" onClick={agregarProd}  > Agragar al carrito </button>
    </div>
    )
}