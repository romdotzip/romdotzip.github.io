import AboutMeBar from '../components/AboutMeBar';

function Videos() {
    return (
        <div>
            <meta charSet="UTF-8" />
            <meta name="author" content="rm0819" />
            <meta name="description" content="rm0819's Videos" />
            <meta name="keywords" content="rm0819, YouTube, Videos" />
            <title>Videos!</title>
            <div id="navbar" />
            <AboutMeBar />
            <h1>Videos!</h1>
            <p>
                Here are any videos that I think are super funny, or that I made, or both!
            </p>
            <div className="videos">
                <iframe
                    title="Sora Smashdown - Underdogs"
                    width="420"
                    height="315"
                    src="https://www.youtube.com/embed/gB79jwdl0uE?si=ICXulDgts0ZnVBel"
                    allow="fullscreen"
                ></iframe>
                <iframe 
                    title="Making a new friend with @rallyysnipes on #ark #arksurvivalevolved #gaming #dinosaur"
                    width="420" 
                    height="315" 
                    src="https://www.youtube.com/embed/E854LsszPkw"
                    allow="fullscreen"
                ></iframe>
            </div>
        </div>
    );
}

export default Videos;