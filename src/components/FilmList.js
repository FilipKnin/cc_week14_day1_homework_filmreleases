import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component {


  render() {

    return(
      <div className="film-list">
        <ul>
          <Film />
        </ul>
      </div>
    )
  }
}
export default FilmList;
