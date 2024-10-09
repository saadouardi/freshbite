import React from 'react';
import { Header } from '../../../components/Public/common/Header/Header';
import { PageSection } from '../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../components/Public/common/Footer/Footer';
import AboutImage from '../../../assets/images/about/about-bg1.png';
import './About.scss';

const About = () => {
  return (
    <>
        <Header/>
        <PageSection Title='ABOUT US' Description='Now you will get to know us'/>
        <main>
            <div className='About Flex-Center'>
              <div>
                <img src={AboutImage} alt="" />
              </div>
              <div className='Flex-Center Flex-Column Flex-Start'>
                <h4>About us</h4>
                <h1>
                  Why We are the best Since<br/>
                  2010
                </h1>
                <p>
                  At vero eos et accusam et justo duo dolores et ea rebum.<br/>
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor<br/>
                  sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </p>
                <p>
                  At vero eos et accusam et justo duo dolores et ea rebum.<br/>
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor<br/>
                  sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </p>
              </div>
            </div>
        </main>
        <Footer/>
    </>
  )
}
export default About;