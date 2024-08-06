import linkImage from '../images/link.png';
import AboutMeBar from '../components/AboutMeBar';

function AboutMe() {
    return (
        <div className="aboutPage">
            <meta charSet="UTF-8" />
            <meta name="author" content="rm0819" />
            <meta name="description" content="About rm0819" />
            <meta name="keywords" content="rm0819" />
            <title>About Me</title>
            <div id="navbar" />
            <AboutMeBar />
            <div className="content">
                <h1>It's me time!!! Let's talk about me!!</h1>
                <img src={linkImage} alt="Link from The Legend of Zelda: Wind Waker, making a grumpy face."/>
                <p>
                    My name is Matt. I'm a student studying cyber and network security. I enjoy
                    solving puzzles, fixing problems, and creating new and fun things.
                </p>
                <p>
                    I'm making this website to keep all of my projects that I've worked on in
                    one spot. I also thought it would be good for me to practice keeping my
                    website secure from things like SQL (if I ever add a database) and XSS, and
                    other web vulnerabilties of course.
                </p>
                <p>
                    Go take a look at my <a href="https://github.com/rm0819">github</a> to see
                    some more info about me, and any of my public projects.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;