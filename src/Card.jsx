import style from "./style.module.css"

function Card (props){
  return(
    <div className={style.card}>
    <h1>¡Hola {props.nameValue}!</h1>
    <p>Tu serie favorita es:</p>
    <p>{props.serieValue}</p>
    </div>
  )
}

export { Card }