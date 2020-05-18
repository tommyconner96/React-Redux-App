import React, {useEffect} from "react"
import { connect } from "react-redux"

import { getCats } from "../actions"

const Cats = ({ getCats, cat, isFetching, error }) => {
  //useEffect to load a cat when the page first loads
  useEffect(() => {
    console.log('useEffect being called right here')
    getCats()
  }, [getCats])
  if (error !== '')
    return (
      <div>
        <h2>{error}</h2>
        <button onClick={getCats}>Load A Cat Picture!</button>
      </div>
    )

  if (isFetching) {
    return <h2>Fetching a cat</h2>
  } else {
    return (
      <div>
        <button onClick={getCats}>Load New Cat</button>
        <br /><br />
        <img alt='random cat' src={cat} width='500px' />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cat: state.cat,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { getCats }
)(Cats)