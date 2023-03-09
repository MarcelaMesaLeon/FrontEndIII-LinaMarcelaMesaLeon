import style from "./style.module.css"



function Form(props) {  

  function handleChangeName(event) {
    props.setNameValue(event.target.value);
  }
  function handleChangeSerie(event) {
    props.setSerieValue(event.target.value);
  }
  
  function handleSubmit(event){
    event.preventDefault();
    props.setShowCard(false);
    props.setErrorValue("");
    const name = props.nameValue.trim();
    const serie = props.serieValue;
    if(name.length<3 || serie.length < 6){
      props.setErrorValue("Revisa que la información enviada sea correcta");
      props.setShowCard(false);
    }else{
      props.setShowCard(true);
    }
  }


  return(
    <>
    <form onSubmit={handleSubmit} className={style.formulario}>
      <input type="text"  placeholder="Ingresa tu nombre" value={props.nameValue} onChange={handleChangeName} className={style.camp}/>
      <input type="text"  placeholder="Ingresa tu serie favorita" value={props.serieValue} onChange={handleChangeSerie} className={style.camp}/>
      <button type="submit" className={style.btn}>Enviar</button>    
    </form>
       
    </>

  )
  
}

export { Form }