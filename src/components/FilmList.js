import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component {


  render() {

    let filmPosition = this.props.data.map(film => {
      return <Film
              key={film.id}>
              {film.title}
              url={film.url}
              </Film>
    })

    return(
      <div className="film-list">
        <ul>
          {filmPosition}
        </ul>
      </div>
    )
  }
}
export default FilmList;
