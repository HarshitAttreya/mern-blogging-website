const InputBox = ({ name,type,id,value,placeholder,icon})=>{
    return(
        <div>
            <input
                name = {name}
                type= {type}
                placeholder = {placeholder}
                defaulutValue = {value}
                id ={id}
                className = "input-box"/>

            <i className = {"fi "+ icon + "input-icon"}></i>
        </div>
    )
}
export default InputBox;