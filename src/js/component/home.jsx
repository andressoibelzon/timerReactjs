import React from "react";

//create your first component
const Home = (props) => {
	return (
		<div className="container py-3 my-5 d-flex justify-content-center bg-dark text-white display-5 font-weight-bold">
			<div className="px-3">{props.hora} </div>
			<div className="px-3">{props.minuto}</div> 
			<div className="px-3">{props.desena}</div>
			<div className="px-3">{props.segundo}</div>
		</div>
	);
};

export default Home;
