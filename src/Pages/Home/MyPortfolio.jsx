import data from "../../data/index.json";


export default function MyPortfolio() {
  const openGithubProfile = () => {
    // Replace 'githubprofile' with the actual URL of your github profile
    const githubProfileUrl = 'https://github.com/MafsPires';

    // Open the LinkedIn profile URL in a new tab or window
    window.open(githubProfileUrl, '_blank');
  };
  return(
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <button className="btn btn-github" onClick={openGithubProfile}>
            Visit my Github
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" width={300} />
            </div>
            <div className="portfolio--section--card--contact">
              <div>
                <h3 className="portfolio--section--title">
                  {item.title}
                  <p className="text-md">{item.description}</p>
                </h3>
              </div>
              <p className="text-sm portfolio--link">
                    <a href={item.githubLink} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        {item.linkText}
                    </a>
                </p>
            </div>
          </div>
        )
        )}
      </div>
    </section>
  )
}
