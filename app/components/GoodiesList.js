import React, { Component } from "react";
import { connect } from "react-redux";
import GoodieDisplay from "./GoodieDisplay";
import { fetchCandiesThunk } from "../reducers/index";

class GoodiesList extends Component {
  componentDidMount() {
    try {
      this.props.getAllCandies();
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const candies = this.props.candies;
    return (
      <div>
        <div id="goodies" className="row">
          {candies.map(candy => {
            return (
              <div id="goodie-container" key={candy.id}>
                <GoodieDisplay candy={candy} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  candies: state.candies
});

const mapDispatch = dispatch => ({
  getAllCandies: () => dispatch(fetchCandiesThunk())
});

export default connect(
  mapState,
  mapDispatch
)(GoodiesList);
