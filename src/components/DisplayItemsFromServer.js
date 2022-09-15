function DisplayItemsFromServer(props){

    return(
    <div className = "listServerRow">
        <p>{props.date} - {props.shop} - {props.sale} - {props.gst} - {props.discount} - {props.cred} - {props.dig} - {props.pPending} - {props.cash}</p>
    </div>);
}

export default DisplayItemsFromServer;