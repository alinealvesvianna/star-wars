import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchPeople, fetchStarships } from './actions';
import { ContainerFlex } from './components/ContainerFlex'; 
import { Card, CardStarship } from './components/Card';
import { Title, List, ItemList, MainTitle } from './components/Text';
import { Button, ButtonSeemore  } from './components/Button';
import { Logo } from './components/Logo';
import { func, array } from 'prop-types';
import logo from './Star_Wars_Logo.png';
import './App.css';

class App extends Component {

  state = {
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

    const { page } = this.state;

    return (
      <Fragment>
        <Logo src={logo} />
        <MainTitle>Characters</MainTitle>
        <ContainerFlex flexWrap main row justifyContent="space-between">
          {people.map(item => 
            <Card key={item.name}>
              <Title>
                {item.name}
              </Title>
              <List>
                <ItemList>
                  <strong>height: </strong>{item.height}
                </ItemList>
                <ItemList>
                  <strong>mass:</strong> {item.mass}
                </ItemList>
                <ItemList>
                  <strong>hair color:</strong> {item.hair_color}
                </ItemList>
                <ItemList>
                  <strong>skin color:</strong> {item.skin_color}
                </ItemList>
                <ItemList>
                  <strong>eye color:</strong> {item.eye_color}
                </ItemList>
                <ItemList>
                  <strong>birth year:</strong> {item.birth_year}
                </ItemList>
                <ItemList>
                  <strong>gender:</strong> {item.gender}
                </ItemList>
              </List>
              {
                item.starships && item.starships.length ? (
                  <Button 
                    onClick={() => {this.handleStarships(item.starships, item.name)}}
                  >
                    See Starships
                  </Button>
                ) : 
                null
              }

              {
                startships && startships.map(starship => {
                  return starship.namePerson === item.name && (
                    <CardStarship>
                      <Title>
                        {starship.name}
                      </Title>
                      <List>
                        <ItemList> 
                          <strong>model:</strong> {starship.model}
                        </ItemList>
                        <ItemList>  
                          <strong>manufacturer:</strong> {starship.manufacturer}
                        </ItemList>
                        <ItemList>  
                          <strong>crew:</strong> {starship.crew}
                        </ItemList>
                        <ItemList>  
                        <strong>passengers:</strong> {starship.passengers}
                        </ItemList>
                      </List>
                    </CardStarship>
                  )
                })
              }
            </Card>  
          )}
        </ContainerFlex>
        {
          page < 8 && (
          <ContainerFlex main row>
            <ButtonSeemore onClick={this.handleSeeMore}>
              See More Characters
            </ButtonSeemore>
          </ContainerFlex>
          )
        }
      </Fragment>
    );
  }
}
const mapStateToProps = store => ({
  people: store.people,
  startships: store.startships,
});

App.defaultProps = {
  people: [],
  startships: [],
  fetchPeople: null,
  fetchStarships: null,
};

App.propTypes = {
  people: array,
  startships: array,
  fetchPeople: func,
  fetchStarships: func,
};


export default connect(mapStateToProps,{
  fetchPeople,
  fetchStarships,
})(App);