import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectList from '../components/ProjectList';
import Footer from '../components/Footer';
import GiphyProject from '../assets/GiphyProject.png';
import WeatherProject from '../assets/WeatherProject.png';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          name: 'Giphy App',
          url: 'https://giphy-project-five.vercel.app/',
          gif: GiphyProject,
          sourcecode: 'https://github.com/CodingWithCDJE/Giphy-Project',
          description:
            'A giphy web application that display trending gifs when you first arrive to the website. Once the user enters the giphy in search of and either hits enter or clicks on the submit button, it will load up with the requested gif on the web page.',
        },
        {
          name: 'Weather App',
          url: 'https://weather-app-beige-alpha.vercel.app/',
          gif: WeatherProject,
          sourcecode: 'https://github.com/CodingWithCDJE/Weather-App',
          description:
            "This is a weather web application, where the user is able to enters the city or zipcode in which they're interested in knowing the weather for. It will then display today's weather, as well as the forecasted weather for the next two days.",
        },
      ],
    };
  }
  render() {
    const { projects } = this.state;
    return (
      <div>
        <Navbar />
        <Hero nickName={`Chris`} position={'Software Engineer'} />
        <About
          firstName={`Christoper`}
          lastName={`Estevez`}
          nickName={`Chris`}
        />
        <ProjectList projects={projects} />
        <Footer />
      </div>
    );
  }
}

export default Home;
