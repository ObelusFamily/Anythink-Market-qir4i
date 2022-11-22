import React from "react"
import { connect } from "react-redux";
import agent from "../agent";
import { APPLY_TITLE_FILTER } from "../constants/actionTypes";

const mapStateToProps = (state) => ({
  ...state.itemList,
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: (title, pager, payload) =>
    dispatch({ type: APPLY_TITLE_FILTER, title, pager, payload }),
});

const SearchBox = (props) => {
  const handleSearch = (ev) => { 
    const query = ev.target.value;
    if(query.length > 3) {
      props.onSearch(query,
        (page) => agent.Items.byTitle(query, page),
        agent.Items.byTitle(query),
      );
    }
  }

  return (
    <div className="input-group col">
      <input 
      id="search-box"
      type="text"
      className="form-control form-control-lg p-4"
      placeholder="What is it that you truly desire?"
      onChange={handleSearch}
      />
      <div className="input-group-append">
        <button 
        className="btn btn-outline-light bg-white border-0"
        onClick={handleSearch}
        >
          <i className="ion-search h3"></i>
        </button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);