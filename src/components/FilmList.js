import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component {


  render() {

    let filmPosition = this.props.data.map(film => {
      return <Film
      key={film.id}
      title={film.name}
      url={film.url}/>
    })

    return(
      <div className="film-list">
      <ul>
      {filmPosition}
      </ul>
      <a href="https://www.imdb.com/calendar/?region=gb"><button>View more upcoming releases >> </button></a>
      </div>
    )
  }
}
export default FilmList;
