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
            <iframe
                title="Sora Smashdown - Underdogs"
                width={800}
                height={315}
                src="https://www.youtube.com/embed/gB79jwdl0uE?si=ICXulDgts0ZnVBel"
            ></iframe>
        </div>
    );
}

export default Videos;