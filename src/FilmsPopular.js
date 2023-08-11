import React from "react";
import Pagination from "./Pagination";
import PopUp from "./PopUp";

class FilmsPopulars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      isToggleOn: true,
      totalPages: 1,
      page: 2,
      onRelise: true,

    };
    this.handleClick = this.handleClick.bind(this);
    this.reliseFilm = this.reliseFilm.bind(this);
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=5be5ccee10320c70ef1f2aeeb98d3a41&language=en-US&page=1')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  reliseFilm() {
    this.setState( prevState => ({
      onRelise: !prevState.onRelise
    }) )
  }

  render() {
    const { error, isLoaded, items, } = this.state;
    if (error) {
      return <div>Помилка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Завантаження...</div>;
    } else {


      const imagePath = "https://image.tmdb.org/t/p/w300"
      console.log(items)
      const fetchPopularFilms = (props) => {
        return props;
      }
      const Ranking = (props) => {
       return <h2 onClick={this.handleClick}>
       {this.state.isToggleOn ? "Rate Switch" : props.rnk + " " + 'Hide Rate'}
     </h2>
      }
      const Relise = (props) => {
        return <div onClick={this.reliseFilm} >
{this.state.onRelise ? "Relise" : props.relise }
        </div>
      }

      return (
        <div>
          <div>
            <h1 className='title' >

              Favourite Movies</h1>
          </div>
          <Pagination
            changePage={this.fetchPopularFilms}
            totalPages={this.state.totalPages}
            page={this.state.page} />

          <ul className='app-wrapper' >

            {items.map(item => (
              <li key={item.id}>
                <div  >{item.title} </div>
                <div >
                
               
               <img src={imagePath + item.poster_path} >
              
                    </img>
                 
                </div>
                <Ranking rnk={item.popularity}/>
               <Relise relise={item.release_date} />
                <div className='overview' >{item.overview}</div>
              </li>
            ))}
          </ul>
        </div>

      );
    }

  }
}

export default FilmsPopulars;