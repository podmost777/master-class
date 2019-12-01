import React from "react";
import ReactDOM from "react-dom";


const movie={
  title:" Avengers : Infinity War",
  vote_average: 8.5,
  image :"https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-99.jpg",
  overview: "As the",
};

function Image(props){
  console.log("Imagerops", props);
  return <img src={props.src} alt={props.alt}/>;
  
}

// function MovieItem(props){

//     console.log(" MovieItemprops=",  props)
//     const { data: {title, vote_average, image} } = props;
//     return (
//       <div>
//         <img src={image} alt={title}/>
//       <h1>{title}</h1>
//       <p>{vote_average}</p>
        
//       </div>
//     );
//   }

  class MovieItem extends React.Component{
    render(){
      const { data: {title, vote_average, image} } = this.props;
      console.log(this);
     return (
      <div>
         <img src={image} alt={title}/>
         <h1>{title}</h1>
         <p>{vote_average}</p> 
      </div>

      );
    }
  }
  
  function App() {
    return (
      
       <div>
         <MovieItem data={movie}/>
       </div>

    );
  }

ReactDOM.render(<App />, document.getElementById("root"));
