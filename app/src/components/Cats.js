import React from "react"
import { connect } from "react-redux"

import { getCats } from "../actions"

const Cats = ({ getCats, cat, isFetching, error }) => {
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
        <img src={cat} width='500px' />
        <br />
        <button onClick={getCats}>Load New Cat</button>
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