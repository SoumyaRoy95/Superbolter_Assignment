import React, { Component } from 'react';
import '../styles/main.scss';
import imagesPlane from '../images/plane.jpg';
import baby from "../images/baby.jpg";
import business from "../images/business.jpg";
import cake from "../images/cake.jpg";
import cat from "../images/cat.jpg";
import cocunut from "../images/cocunut.jpg";
import couple from "../images/couple.jpg";
import dog from "../images/dog.jpg";
import focus from "../images/focus.jpg";
import fresh from "../images/fresh.jpg";
import car from "../images/car.jpg";
import smile from "../images/smile.jpg";
import burningAustrailia from "../images/burningAustrailia.jpg";
import CCSabathia from "../images/CCSabathia.jpg";
import coffee from "../images/coffee.jpg";
import foodPlatters from "../images/foodPlatters.jpg";
import smileHoli2 from "../images/smileHoli2.jpeg";
import SouthIndiaMaduraGopura from "../images/SouthIndiaMaduraGopura.jpg";
import steakNight from "../images/steakNight.jpg";
import tabletennis from "../images/tabletennis.jpg";
import vr from "../images/vr.jpg";
import whiteTiger from "../images/whiteTiger.jpg";
import photography from "../images/photography.jpg";
import rockBalance from "../images/rockBalance.jpg";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, TextareaAutosize } from '@material-ui/core';

import { saveImageDetails } from '../actions/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

var columnFirst = [
    { name: 'Baby Care', style: '400px', image: baby, description: 'Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time. Child care is the action or skill of looking after children by a day-care center, nannies, babysitter, teachers or other providers.' },
    { name: '', style: '', image: foodPlatters, description: "" },
    { name: 'The Festival of Colors', style: '', image: smileHoli2, description: 'Holi is popularly known as the Indian "festival of spring", the "festival of colours", or the "festival of love". The festival signifies the arrival of spring, the end of winter, the blossoming of love, and for many a festive day to meet others, play and laugh, forget and forgive, and repair broken relationships.' },
    { name: 'South India Madura Gopura', style: '400px', image: SouthIndiaMaduraGopura, description: 'The pyramidal structures give optimistic energy and vibration to the devotees. The gopuram was constructed to great heights, this is for the reason that the old populace who cannot come to temple can also pray their deity by sitting at their place just bearing in mind the gopuram.' },
    { name: 'Car', style: '', image: car, description: 'Cars came into global use during the 20th century, and developed economies depend on them. The year 1886 is regarded as the birth year of the modern car when German inventor Karl Benz patented his Benz Patent-Motorwagen. Cars became widely available in the early 20th century.' },
    { name: '', style: '400px', image: smile, description: "" },
    { name: '', style: '400px', image: focus, description: '' },
]

var columnSecond = [
    { name: 'White Tiger', style: '', image: whiteTiger, description: 'The white tiger or bleached tiger is a pigmentation variant of the Bengal tiger, which is reported in the wild from time to time in the Indian states of Madhya Pradesh, Assam, West Bengal and Bihar in the Sunderbans region and especially in the former State of Rewa. There are only around 200 white tigers left in the world, according to the Indian Tiger Welfare Society.' },
    { name: '', style: '400px', image: photography, description: '' },
    { name: 'Balancing Rock', style: '', image: rockBalance, description: 'A balancing rock, also called balanced rock or precarious boulder, is a naturally occurring geological formation featuring a large rock or boulder, sometimes of substantial size, resting on other rocks, bedrock, or on glacial till. Some formations known by this name only appear to be balancing, but are in fact firmly connected to a base rock by a pedestal or stem.' },
    { name: 'Dog', style: '400px', image: dog, description: "One unspayed female dog, her mate and their puppies can produce 67,000 puppies in six years. Puppies are blind, deaf and toothless when born. Dogs curl up to keep themselves warm and protect vital organs. A dog's sense of smell is 10,000 times stronger than a human's." },
    { name: '', style: '400px', image: business, description: '' },
    { name: '', style: '400px', image: couple, description: '' },
    { name: 'CC Sabathia', style: '', image: CCSabathia, description: 'Carsten Charles Sabathia Jr. (born July 21, 1980) is an American former professional baseball pitcher who played 19 seasons in Major League Baseball (MLB) for the Cleveland Indians, Milwaukee Brewers, and the New York Yankees. Sabathia batted and threw left-handed.' },
]

var columnThird = [
    { name: '', style: '400px', image: steakNight, description: '' },
    { name: 'Burning Australia', style: '', image: burningAustrailia, description: 'Bushfires in Australia are a widespread and regular occurrence that have contributed significantly to moulding the nature of the continent over millions of years. Eastern Australia is one of the most fire-prone regions of the world, and its predominant eucalypt forests have evolved to thrive on the phenomenon of bushfire. However the blazes can cause significant property damage and loss of both human and animal life. Bushfires have killed approximately 800 people in Australia since 1851 and millions of animals.' },
    { name: 'Table Tennis', style: '400px', image: tabletennis, description: "Table tennis, also known as ping-pong, is a sport in which two or four players hit a lightweight ball back and forth across a table using small rackets. The game takes place on a hard table divided by a net. Except for the initial serve, the rules are generally as follows: players must allow a ball played toward them to bounce one time on their side of the table, and must return it so that it bounces on the opposite side at least once. A point is scored when a player fails to return the ball within the rules. Play is fast and demands quick reactions. Spinning the ball alters its trajectory and limits an opponent's options, giving the hitter a great advantage." },
    { name: 'Coffee', style: '', image: coffee, description: 'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. The genus Coffea is native to tropical Africa (specifically having its origin in Ethiopia and Sudan) and Madagascar, the Comoros, Mauritius, and Réunion in the Indian Ocean. Coffee plants are now cultivated in over 70 countries, primarily in the equatorial regions of the Americas, Southeast Asia, Indian subcontinent, and Africa. The two most commonly grown are C. arabica and C. robusta. Once ripe, coffee berries are picked, processed, and dried. Dried coffee seeds (referred to as "beans") are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and then brewed with near-boiling water to produce the beverage known as coffee.' },
    { name: '', style: '', image: vr, description: '' },
    { name: 'Cat', style: '400px', image: cat, description: 'The cat (Felis catus) is a small carnivorous mammal. It is the only domesticated species in the family Felidae and often referred to as the domestic cat to distinguish it from wild members of the family. The cat is either a house cat, a farm cat or a feral cat; latter ranges freely and avoids human contact. Domestic cats are valued by humans for companionship and for their ability to hunt rodents. About 60 cat breeds are recognized by various cat registries.' },
    { name: '', style: '400px', image: cocunut, description: "" },
]

class Main extends Component {
    state = {
        open: false,
        image: '',
        imageName: '',
        imageDescription: '',
        style: '',
        imgName: '',
        imgDescription: ''
    }
    handleChange = (data) => {
        this.setState({ open: true, image: data.image, imageName: data.name, imageDescription: data.description, style: data.style })
    }

    // handleTextField = (event) => {
    //     this.setState({ imageName: event.target.value })
    // }

    // handleTextArea = (event) => {
    //     this.setState({ imageDescription: event.target.value })
    // }

    handleClose = () => {
        this.setState({ open: false })
    }
    handleCustomSubmit = () => {
        if (this.state.image && this.state.imageName && this.state.imageDescription) {
            this.props.saveImageDetails(this.state.image, this.state.imageName, this.state.imageDescription)
            this.setState({ open: false })
        }
        else if (this.state.image && this.state.imgName && this.state.imgDescription) {
            this.props.saveImageDetails(this.state.image, this.state.imgName, this.state.imgDescription)
            this.setState({ open: false })
        }
        else {
            alert('Please Enter all fields!')
        }
        // setTimeout(function(){ 
        //     this.setState({ image: '', imageName: '', image})
        //  }, 3000);
    }
    render() {
        return (
            <div>
                <div className=''>
                    <div className='one-div'>
                        <div id="carouselCaptions" className="carousel slide carousel-main" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselCaptions" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselCaptions" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className='container carousel-text'>
                                    <span className='carousel-title'>Welcome to </span>
                                    <span className='carousel-tag'>Hippy Trippy Site</span>
                                </div>
                                <div className="carousel-item active">
                                    <img src={fresh} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Yoga</h5>
                                        <p>72% of yoga practitioners are women.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={cake} className="d-block w-100 car-img" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Cake</h5>
                                        <p>The word ‘cake’ comes from Middle English kake, and is probably a borrowing from Old Norse.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={imagesPlane} className="d-block w-100 car-img" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Air Plane</h5>
                                        <p>Some planes can fly for more than five hours after one of their engines goes out.</p>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselCaptions" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselCaptions" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    {/* <div className='third-div'></div> */}
                    <div className='second-div'>
                        <div className='row single-row'>
                            <div className='col-lg-4 col-md-6 col-sm-12 column-css'>

                                {columnFirst && columnFirst.map((data, index) => (
                                    <div key={index} onClick={(e) => this.handleChange(data)}>
                                        <img src={data.image} alt={data.name} className='images' />

                                    </div>
                                ))}


                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12 column-css'>
                                {columnSecond && columnSecond.map((data, index) => (
                                    <div key={index} onClick={(e) => this.handleChange(data)}>
                                        <img src={data.image} alt={data.name} className='images' />

                                    </div>
                                ))}


                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12 column-css'>
                                {columnThird && columnThird.map((data, index) => (
                                    <div key={index} onClick={(e) => this.handleChange(data)}>
                                        <img src={data.image} alt={data.name} className='images' />

                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        className='dialog-part'
                    >
                        {this.state.imageName ? <DialogTitle className='dialog-title'>{this.state.imageName}</DialogTitle> :
                            <DialogTitle className='dialog-title'>
                                <TextField
                                    type='text'
                                    InputProps={{ disableUnderline: true }}
                                    onChange={(e) => this.setState({ imgName: e.target.value })}
                                    label="Enter Image Name" />
                            </DialogTitle>
                        }
                        <DialogContent style={{ width: this.state.style }} className='dialog-content'>
                            <div>
                                <img src={this.state.image} alt={this.state.imageName} />
                                {this.state.imageDescription ? <span>{this.state.imageDescription}</span> :
                                    <TextareaAutosize className='textarea-part' rows={20} onChange={(e) => this.setState({ imgDescription: e.target.value })} placeholder='Enter Image Description'></TextareaAutosize>}
                            </div>

                        </DialogContent>
                        <DialogActions className='dialog-actions'>
                            <Button onClick={this.handleClose} className='discard-button'>
                                Discard
                            </Button>
                            <Button onClick={this.handleCustomSubmit} disabled={this.state.submit} className='send-button'>
                                Save
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({ saveImageDetails }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
