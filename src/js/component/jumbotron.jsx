import React from "react";

export const Jumbotron = () => {
    return(
        <div className="mt-5 mx-5 p-5 custom-light-gray-bg rounded jumbotron">
            <h1>A Warm Welcome!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci arcu, ornare sed ipsum in, interdum ultrices lacus. Ut orci sem, volutpat vel risus non, eleifend faucibus justo.</p>
            <button type="button" className="btn btn-primary"> Call to Action!</button>
         </div>
    )
}

export default Jumbotron;