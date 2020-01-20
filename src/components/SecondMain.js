import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import '../styles/secondMain.scss'

var columnFirst = [
    { name: 'Baby Care', image: baby, description: 'Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time. Child care is the action or skill of looking after children by a day-care center, nannies, babysitter, teachers or other providers.' },
    { name: 'Food', image: foodPlatters, description: "Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth." },
    { name: 'The Festival of Colors', image: smileHoli2, description: 'Holi is popularly known as the Indian "festival of spring", the "festival of colours", or the "festival of love". The festival signifies the arrival of spring, the end of winter, the blossoming of love, and for many a festive day to meet others, play and laugh, forget and forgive, and repair broken relationships.' },
    { name: 'South India Madura Gopura', image: SouthIndiaMaduraGopura, description: 'The pyramidal structures give optimistic energy and vibration to the devotees. The gopuram was constructed to great heights, this is for the reason that the old populace who cannot come to temple can also pray their deity by sitting at their place just bearing in mind the gopuram.' },
    { name: 'Car', image: car, description: 'Cars came into global use during the 20th century, and developed economies depend on them. The year 1886 is regarded as the birth year of the modern car when German inventor Karl Benz patented his Benz Patent-Motorwagen. Cars became widely available in the early 20th century.' },
    { name: 'Astract', image: smile, description: "An abstract is a brief summary of a research article, thesis, review, conference proceeding, or any in-depth analysis of a particular subject and is often used to help the reader quickly ascertain the paper's purpose." },
    { name: 'Photo1', image: focus, description: 'The world’s first auto-focus SLR camera was produced by “Polaroid” in 1979, and in 1985 “Minolta” produced a camera that eventually become the standard for SLR cameras. The story of a digital photo begins with camera Mavica, produced by the company Sony in 1981. Mavica is almost a full SLR with interchangeable lenses and resolution of 570h490 pixels. But then it was considered a “static camera,” the result of which was not the video but static images – shots.' },
]

var columnSecond = [
    { name: 'White Tiger', image: whiteTiger, description: 'The white tiger or bleached tiger is a pigmentation variant of the Bengal tiger, which is reported in the wild from time to time in the Indian states of Madhya Pradesh, Assam, West Bengal and Bihar in the Sunderbans region and especially in the former State of Rewa. \n There are only around 200 white tigers left in the world, according to the Indian Tiger Welfare Society.' },
    { name: 'Photography', image: photography, description: '' },
    { name: 'Balancing Rock', image: rockBalance, description: '' },
    { name: 'Dog', image: dog, description: '' },
    { name: 'Business', image: business, description: '' },
    { name: 'Couple', image: couple, description: '' },
    { name: 'CC Sabathia', image: CCSabathia, description: '' },
]

var columnThird = [
    { name: 'Steak Night', image: steakNight },
    { name: 'Burning Australia', image: burningAustrailia },
    { name: 'Table Tennis', image: tabletennis },
    { name: 'Coffee', image: coffee },
    { name: 'VR', image: vr },
    { name: 'Cat', image: cat },
    { name: 'Coconut', image: cocunut },
]
class SecondMain extends Component {
    render() {
        return (
            <div>
                {this.props.image ? <div className='second-main'>
                    <img src={this.props.image} alt={this.props.imageName} />
                    <hr className='hr'/>
                    <div className='image-desc'>
                        <span><h3>{this.props.imageName}</h3></span>
                        <span>{this.props.imageDesc}</span>
                    </div>
                </div>
                    : <span style={{ position: 'relative', top: 7 }}>You have not saved any Image</span>}
                <hr className='hr'/>

                <div className='second-div'>
                    <div className='row single-row'>
                        <div className='col-lg-4 col-md-6 col-sm-12 column-css'>

                            {columnFirst && columnFirst.map((data, index) => (
                                <div key={index}>
                                    <img src={data.image} alt={data.name} className='images' />

                                </div>
                            ))}


                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 column-css'>
                            {columnSecond && columnSecond.map((data, index) => (
                                <div key={index}>
                                    <img src={data.image} alt={data.name} className='images' />

                                </div>
                            ))}


                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 column-css'>
                            {columnThird && columnThird.map((data, index) => (
                                <div key={index}>
                                    <img src={data.image} alt={data.name} className='images' />

                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(SecondMain);
