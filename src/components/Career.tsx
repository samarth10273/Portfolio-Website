import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Developer</h4>
                <h5>CBSE Science Exhibition</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Participated in the CBSE science exhibition, developing and
              presenting a technology-driven innovation project.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Science & Tech Exhibitor</h4>
                <h5>Jigyasa 2.0 & Sunfest</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Presented science and technology projects at Jigyasa 2.0 and
              contributed to Sunfest school event activities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer & Video Editor</h4>
                <h5>Paid Freelance Work</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Created thumbnails and digital creatives for social creators,
              editing video content using CapCut, After Effects, and Canva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
