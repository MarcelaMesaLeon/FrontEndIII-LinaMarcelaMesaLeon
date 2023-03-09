import style from "./style.module.css"

function Error (props){
  return(
    <div className={style.error}>
    <h4>{props.msj}</h4>
    </div>
  )
}

export { Error }