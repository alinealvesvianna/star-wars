import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPeople, fetchStarships } from './actions'
import './App.css';


class App extends Component {

  state = {
    inputValue: '',
    page: 1,
  }

  componentDidMount(){
    const { fetchPeople } = this.props;
    const { page } = this.state;
    fetchPeople(`people/?page=${page}`);
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  handleSeeMore = () => {
    const { page } = this.state;
    if(page <= 8){
      this.setState({
        page: page + 1,
      }, () => {
        this.showMore();
      })
    }
  }

  showMore = () => {
    const { page } = this.state;
    const { fetchPeople } =  this.props;
    fetchPeople(`people/?page=${page}`);
  }

  handleStarships = (starships, name) => {
    const { fetchStarships } = this.props;
    const starshipsQueryString = starships.map(item => {
      const queryString = item.match(/starships.*/);
      fetchStarships(queryString[0], name)
    })
 
  }

  render() {
    const {
      people,
      startships
    } = this.props;

    const { inputValue } = this.state;


    return (
      <div className="App" style={{ paddingTop: '10px' }}>
      <p>{process.env.REACT_APP_BASE_URL}</p>
        <button onClick={this.handleSeeMore}>
          see more
        </button>
        {people.map(item => 
          <div>
            {item.name}
            {item.gender}
            {item.starships && item.starships.length ? (
              <button onClick={() => {this.handleStarships(item.starships, item.name)}}>clique aqui para ver as starships</button>
            ) : null}

            {startships && startships.map(starship => {
              return starship.namePerson === item.name && (
                <div>
                  {starship.namePerson}
                  {starship.manufacturer}
                </div>
              )
            })}
          </div>  
        )}
      </div>
    );
  }
}
const mapStateToProps = store => ({
  people: store.people,
  startships: store.startships,
});


export default connect(mapStateToProps,{
  fetchPeople,
  fetchStarships,
})(App);