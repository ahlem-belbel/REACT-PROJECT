function employee(props){
    
    return(
    <>
     <h3>Employee {props.name}</h3>
     <p>{props.role ?( props.role ) :"no role\n"}
        {props.country ? props.country : 'no country'}
     </p>

    </>
    );
    }

 export default employee;