import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components /Card'; 
// images for cards  
import travelmag from'../Assets/images/travelmag.jpg';
import weatherapp from '../Assets/images/weatherapp.png'; 
import project1 from '../Assets/images/project1.png'; 
import note from'../Assets/images/note.png'; 
import burger from '../Assets/images/burger.png'; 
import dayplanner from '../Assets/images/dayplanner.png';
import directory from '../Assets/images/directory.png';
import passwordgen from '../Assets/images/passwordgen.png'; 






class Carousel extends React.Component { 
    // 1000 600 pixal 

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'TravMag',
                    subTitle: 'Project 2',
                    imgSrc: travelmag,  
                    link: 'https://github.com/sadia110/Travel-Mag' ,
                    selected: false
                },
                {
                    id: 1,
                    title: 'Food Mood & Chill',
                    subTitle: 'Project 2',
                    imgSrc: project1,
                    link: 'https://github.com/EddiEsteban/Mood-Food-and-Chill',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Weather App',
                    subTitle: 'Assignment ', 
                    imgSrc: weatherapp, 
                    link:'https://github.com/sadia110/Weather',
                    selected: false
                }, 
                {
                    id: 3,
                    title: 'Note Taker',
                    subTitle: 'Assignment ', 
                    imgSrc: note,  
                    link:'https://github.com/sadia110/Note',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Burger App',
                    subTitle: 'Assignment ', 
                    imgSrc: burger, 
                    link:'https://github.com/sadia110/HandleBars-',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Day Planner',
                    subTitle: 'Assignment ',  
                    imgSrc: dayplanner,  
                    link:'https://github.com/sadia110/Day-Planner',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Password Generator',
                    subTitle: 'Assignment ', 
                    imgSrc: passwordgen,  
                    link: 'https://github.com/sadia110/Password-Gen.', 

                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;