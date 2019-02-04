import React, { Component } from 'react';
import { ProjectsContainer, DescriptionImgBlock, Description, ImageApp } from './Projects.style';
import { Container } from 'theme/grid';

class Projects extends Component {
  render() {
  	return (
  	  <Container>
  	    <h1>TECH PROJECTS</h1>

        <ProjectsContainer>

          <a href="https://github.com/omartorresrios/NearbyPlaces/tree/master" target="_blank">NearbyPlaces</a>

          <DescriptionImgBlock>
            <Description>
              NearbyPlaces consumes the "Foursquare API" API to show the places closest to your location so you can enjoy anything. Restaurants, shops, etc. Contains a feed and a map.<br /><br />
        <b>Technical details:</b><br />
        Developed entirely in Swift and Programmatically.<br /><br />
        MapKit, Decodable, Core Location, MVC.<br /><br />
        SwiftyJSON, Alamofire.
            </Description>
            <ImageApp src={require('assets/nearbyplaces.jpg')}/>
          </DescriptionImgBlock>

  	    </ProjectsContainer>

        <ProjectsContainer>

          <a href="https://github.com/omartorresrios/MovieLists" target="_blank">MovieLists</a>

          <DescriptionImgBlock>
            <Description>
              MovieLists consumes the "TheMovieDatabaseAPI" API to show the most popular, best ranked movies and those that are not yet released.
  Works with a search engine to find movies by name.<br /><br />
        <b>Technical details:</b><br />
        Developed entirely in Swift. Programmatically and with Core Data for local storage.<br /><br />
        Supports online and offline search.<br /><br />
        MVC design pattern, KeyChain.
            </Description>
            <ImageApp src={require('assets/movielists.jpg')}/>
          </DescriptionImgBlock>

  	    </ProjectsContainer>

  	    <ProjectsContainer>

          <a href="https://github.com/omartorresrios/Dots" target="_blank">Dots</a>

          <DescriptionImgBlock>
            <Description>
              Dots was an experiment based on the interest of starting to imagine and try to create a better way to visualize the professional value that people bring.<br /><br />
        You can leave reviews through audio.
  The keyboard is not used throughout the application. It was a design decision since I believe that the future of communication between people and computers  will be through voice and/or thoughts. The keyboard is already outdated.<br /><br />
        <b>Technical details:</b><br />
        Developed entirely in Swift and Ruby on Rails as backend.<br /><br />
        Use the best speech recognition technology (google speech recognition - machine learning).
            </Description>
            <ImageApp src={require('assets/Dots.png')}/>
          </DescriptionImgBlock>

  	    </ProjectsContainer>

  	    <ProjectsContainer>

  	      <a href="https://github.com/NewdotNerds/Newdot" target="_blank">Newdot</a>

  	      <DescriptionImgBlock>
	  	    <Description>
	          Created to help you share the topics you dominate and increase your professional value.<br /><br />
			  It allows you know the topics your friends talk about and learn from them.<br /><br />
			  <b>Technical details:</b> <br />
			  It was built in Ruby on Rails (Back) and ReactJS (Front). Use PostgreSQL as database.<br /><br />
			  Works with Elasticsearch, a search engine to find users, posts and topics.<br /><br />
			  Sidekiq is used for working queues (elasticsearch indexes, mailer and sidekiq) and Redis to store all of its job and operational data.
	        </Description>
	        <ImageApp src={require('assets/Newdot.PNG')}/>
	      </DescriptionImgBlock>

  	    </ProjectsContainer>

  	    <ProjectsContainer>

  	      <a href="https://github.com/omartorresrios/Gouto" target="_blank">Gouto</a>

  	      <DescriptionImgBlock>
  	        <Description>
              Gouto seeks to make the world fairer.<br /><br />
			  A tool that allows you to leave reviews (anonymous if you wish) to other people based on their actions (positive or negative).<br /><br />
			  You can find someone and know how that person is, based on other people's reviews.<br /><br />
			  There is a section where you can see who are the people with the best reputation.<br /><br />
			  <b>Technical details:</b><br />
			  Developed entirely in Swift and Ruby on Rails/Firebase as backend.<br /><br />
			  There are two versions: the one that is in production (App Store) is with Firebase, the other with own backend (Rails), implementing JWT for a secure authentication.<br /><br />
			  It was built programmatically, without using Storyboard.
            </Description>
            <ImageApp src={require('assets/Humans.png')}/>
          </DescriptionImgBlock>

  	    </ProjectsContainer>

        <ProjectsContainer>

          <a href="https://github.com/omartorresrios/Answr" target="_blank">Answr</a>

  	      <DescriptionImgBlock>
  	      	<Description>
  	          With Answr you can ask and answer anonymously.<br /><br />
			  You can follow people, have a custom feed, answer questions from all over the world, even from those you don't know.<br /><br />
			  <b>Technical details:</b><br />
			  It was built with Swift and Firebase as backend.<br /><br />
			  Use Storyboard.
  	        </Description>
  	        <ImageApp src={require('assets/Answr.png')}/>
  	      </DescriptionImgBlock>

        </ProjectsContainer>

  	  </Container>
  	);
  }
}

export default Projects;
