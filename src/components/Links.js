import React from "react";

function Links(props){
    return(
        <React.Fragment>
            <h3>Links</h3>
            <a href={props.linkedin}>{props.linkedin}</a>
            <a href={props.github}>{props.github}</a>
            {/* <a href={props.links.linkedin}>{props.links.linkedin}</a>
            <a href={props.links.github}>{props.links.github}</a> */}
        </React.Fragment>
    );
}

export default Links;