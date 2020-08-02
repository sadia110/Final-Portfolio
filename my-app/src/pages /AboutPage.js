import React from 'react';
import Hero from '../components /Hero';
import Content from '../components /Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>  
            <p class = "indent"> Hello World!  </p> 

            <p2>I am a recent graduate of Unviersity of Toronto SCS Bootcamp. I used what I learned in my bootcamp to build complex projects and applications, that are show cased in my portfolio page. Aside from  coding, I am a business student at York University studying Accounting. If im not coding or making buget statments, you will probably find me exploring the great outdoors...</p2> 

            <p class = "indent"> Cheers!  </p>   

            <p2> Sadia</p2>


            </Content>
        </div>
    );

}

export default AboutPage;