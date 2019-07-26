import Redux from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { connect } from 'react-redux';
//import { twitterData } from '../../dist/tweets';


class RegisterMember extends React.Component {
  constructor(props) {
    super(props);
    this.searchTweets = this.searchTweets.bind(this);
  }

  searchTweets(data) {
    console.log("clicked", data);
    fetch("http://localhost:8030/tweets.js")
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        //console.log(data);

        var searchResults = data.filter(item => item.text.includes("RT"));
        searchResults.length ? console.log("Found: ", searchResults) : console.log("Oops.. no results!!")
        //searchResults[0].user.profile_image_url;
        // < showItems >

        // <showItem props={imageurl, name, etc.ect}
        // this.setState({ data });
      });
  }

  render() {
    //console.log("Twitter Data", twitterData);
    return (
      <div>
        <input type="text" placeholder="enter search keyword" id="search_keyword" />
        <button onClick={e => { this.searchTweets(document.getElementById("search_keyword").value) }}>Search Tweets</button>
        <h1>Register Member</h1>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {

  }

};

function mapDispatchToProps(state) {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterMember) 