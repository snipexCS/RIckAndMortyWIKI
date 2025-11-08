import "./About.css"

function About() {
    return (
        <div className="about_container">
            
            <div className="text">
                <p>
                    Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan 
                    Harmon for Cartoon Network's nighttime programming block Adult Swim. The series follows the misadventures 
                    of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson Morty Smith, who split 
                    their time between domestic life and interdimensional adventures that take place across an infinite number of realities,
                     often traveling to other planets and dimensions through portals and on Rick's flying saucer. 
                </p>
            </div>
            <div className="gif">
                <iframe
                    src="https://giphy.com/embed/1m6EoEAw2bicxeqeDi/video"
                    width="480"
                    height="269"
                    style={{ border: "none" }}
                    className="giphy-embed"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}

export default About;
