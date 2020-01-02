import React, {Component} from 'react';
import {
    Container
} from 'react-bootstrap';
import Cyberone from '../images/cyberone.jpg';
import mpesa from '../images/mpesa.jpeg';
import camera from '../images/camera3.jpg';
import cafe from '../images/cafe.jpg';
import Cards from './Cards';
import website from '../images/website.jpg';


class Body extends Component{
    render(){
        return(
            <Container>
                <div className="main-body">
                <div className="body-image">
                <img  src={Cyberone}/>
                <h2 className="botom-center">Wendo Technoligies</h2>
                </div>
                <div className="infor">
                    <h3>CONTACTS</h3>
                    <p>Phone no: 0725694010</p>
                    <p>Email: wendotech20@gmail.com</p>
                    <p>Website: www.wendotechnologies.ac.ke</p>
                </div>
                </div>
                <div className="about">
                    <h2>About</h2>
                    <p>
                        Wendo Technoligies is a shop based on supplying tech-related services. It was established with 
                        aim of helping any individual or organisation with any tech-related issues. It mainly deal with designing and developing android, websites, desktop applications. 
                        Also, Wendo Technoligies supply electronics ranging from Phone spare part, phones themselves. Wendo also provides photography.
                    </p>
                </div>
                <div className='camera-body'>
                    <div className="camera-explain">
                        <h1>Camera</h1>
                        <p>At wendo, we have photo studio where one presents himself or herself physically for taking very nice photographs.
                            We are also available for hiring if one has come-together or any events at affordable fee.

                        </p>
                    </div>
                    <div className="camera-image">
                    <img src={camera}/>
                    </div>
                </div>
                <div className='cyber-body'>
                <div className="cyber-image">
                    <img src={cafe}/>
                    </div>
                    <div className="cyber-explain">
                        <h1>Cyber Caffe</h1>
                        <p>Wendo Technoligies have computers with internet for browsing at any time. 
                            We also offer online assistance every time ranging from renewing license, filling KRA returns, applying for KRA pin,
                            Certificate of good conduct, online TSC pay slips etc. All at affondable fee.

                        </p>
                    </div>
                    
                </div>
                <div className='website-body'>
                
                    <div className="website-explain">
                        <h1>Designing and Development</h1>
                        <p>Wendo Technoligies have group of qualified designers and developers who have over four years of exprience. We design and develop android, desktop and website applications.
                            We also design posters, birthday cards, bronchures, fliers and eulogies. We also offer any IT consultation.
                        </p>
                    </div>
                    <div className="website-image">
                    <img src={website}/>
                    </div>
                    
                </div>

                <Cards />
                
            </Container>
        );
    }
}

export default Body;