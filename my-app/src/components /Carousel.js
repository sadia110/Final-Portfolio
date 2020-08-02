import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components /Card'; 
// images for cards  
import travelmag from'../Assets/images/travelmag.jpg';




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
                    selected: false
                },
                {
                    id: 1,
                    title: 'Food Mood & Chill',
                    subTitle: 'Project 2',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Weather App',
                    subTitle: 'Assignment ',
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