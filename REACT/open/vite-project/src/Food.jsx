
function Food() {

    const food1 = 'Orange'
    const food2 = 'Banana'
    
    return(
        <>
            <ul>
                <li><a href="#">Apple</a></li>
                <li><a href="#">{food1}</a></li>
                <li><a href="#">{food2.toUpperCase()}</a></li>
            </ul>
            <hr></hr>
        </>
    );
}

export default Food