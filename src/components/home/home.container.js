import React from "react"
import { connect } from "react-redux"
//import store from "store"

//import { movieProps, movieDefaultProps } from "utils/reused-proptypes"
import { WAITING, LOADING } from "utils/network-states"

import Loading from "../loading/loading"

class HomeContainer extends React.Component {

  componentWillMount(){
    //store.dispatch(getMovie(this.props.match.params.movieId));
  }

  render() {
    return(
        <div>
          { this.props.networkState === WAITING || this.props.networkState === LOADING ?
            <Loading />
            : <Home />
          }
        </div>
    )
  }
}

HomeContainer.propTypes = {
  //movie: movieProps
}

HomeContainer.defaultProps = {
  //movie: movieDefaultProps
}

const mapStateToProps = function(_store) {
  return {
    //movie: _store.moviesState.currentMovie,
    networkState: _store.userState.networkState
  }
}
export default connect(mapStateToProps)(HomeContainer)
