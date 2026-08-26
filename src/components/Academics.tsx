import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaGraduationCap,
  FaAward,
  FaGuitar,
  FaMicrochip,
  FaCalculator,
  FaTrophy,
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaClock,
} from "react-icons/fa6";
import { MdOutlineScience, MdLightbulb } from "react-icons/md";
import ClassRoadmap from "./ClassRoadmap";
import "./styles/Academics.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const classList = [
  {
    id: "nursery",
    name: "NURSERY",
    stage: "Early Foundation",
    desc: "Foundational learning, creative play & early motor skills",
    status: "passed",
    certCount: 3,
  },
  {
    id: "kg1",
    name: "KG-1",
    stage: "Kindergarten 1",
    desc: "Language development, numbers & social interactions",
    status: "passed",
    certCount: 2,
  },
  {
    id: "kg2",
    name: "KG-2",
    stage: "Kindergarten 2",
    desc: "Early reading, writing & basic arithmetic concepts",
    status: "passed",
    certCount: 6,
  },
  {
    id: "class1",
    name: "CLASS 1",
    stage: "Primary School",
    desc: "Elementary mathematics & environmental science introduction",
    status: "passed",
    certCount: 10,
  },
  {
    id: "class2",
    name: "CLASS 2",
    stage: "Primary School",
    desc: "Basic calculation, reading comprehension & natural exploration",
    status: "passed",
    certCount: 8,
  },
  {
    id: "class3",
    name: "CLASS 3",
    stage: "Primary School",
    desc: "Analytical reasoning, arithmetic operations & general science",
    status: "passed",
    certCount: 3,
  },
  {
    id: "class4",
    name: "CLASS 4",
    stage: "Primary School",
    desc: "Intermediate arithmetic, social studies & scientific curiosity",
    status: "passed",
    certCount: 4,
  },
  {
    id: "class5",
    name: "CLASS 5",
    stage: "Primary Milestone",
    desc: "Primary stage completion & hands-on STEM exploration",
    status: "passed",
    certCount: 4,
  },
  {
    id: "class6",
    name: "CLASS 6",
    stage: "Middle School",
    desc: "Introduction to specialized physics, algebra & geometry",
    status: "passed",
    certCount: 6,
  },
  {
    id: "class7",
    name: "CLASS 7",
    stage: "Middle School",
    desc: "Scientific methodology, computing fundamentals & logic",
    status: "passed",
    certCount: 4,
  },
  {
    id: "class8",
    name: "CLASS 8",
    stage: "Middle School",
    desc: "Electronics experimentation, coding & problem solving",
    status: "passed",
    certCount: 4,
  },
  {
    id: "class9",
    name: "CLASS 9",
    stage: "Sunbeam School, Lahartara",
    desc: "CBSE Curriculum (2026–27) • Science & AI Innovation Prototyping",
    status: "current",
    certCount: 0,
  },
  {
    id: "class10",
    name: "CLASS 10",
    stage: "CBSE Board Examination",
    desc: "Secondary School Certificate board examination milestone",
    status: "upcoming",
    certCount: 0,
  },
  {
    id: "class11",
    name: "CLASS 11",
    stage: "Senior Secondary (Science)",
    desc: "Specialized higher secondary stream in Science & Technology",
    status: "upcoming",
    certCount: 0,
  },
  {
    id: "class12",
    name: "CLASS 12",
    stage: "CBSE Board Examination",
    desc: "Higher secondary completion & advanced engineering pathway",
    status: "upcoming",
    certCount: 0,
  },
];

interface AcademicsProps {
  onBack?: () => void;
}

const Academics = ({ onBack }: AcademicsProps) => {
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);

  useGSAP(() => {
    if (selectedGrade === null) {
      // Fade in hero elements
      gsap.fromTo(
        ".academics-hero",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      gsap.fromTo(
        ".academic-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        ".class-box",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".classes-grid",
            start: "top 80%",
          },
        }
      );

      // Timeline line animation (matching Career timeline scrub)
      const academicTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".academic-timeline-section",
          start: "top 70%",
          end: "100% center",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      academicTimeline
        .fromTo(
          ".academic-timeline",
          { maxHeight: "0%" },
          { maxHeight: "100%", duration: 0.5 },
          0
        )
        .fromTo(
          ".academic-timeline",
          { opacity: 0 },
          { opacity: 1, duration: 0.1 },
          0
        )
        .fromTo(
          ".academic-info-box",
          { opacity: 0 },
          { opacity: 1, stagger: 0.1, duration: 0.5 },
          0
        )
        .fromTo(
          ".academic-dot",
          { animationIterationCount: "infinite" },
          { animationIterationCount: "1", delay: 0.3, duration: 0.1 },
          0
        );
    }

    ScrollTrigger.refresh();
  }, [selectedGrade]);

  const handleBackToMain = () => {
    if (selectedGrade !== null) {
      setSelectedGrade(null);
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (onBack) {
      onBack();
    } else {
      window.location.hash = "";
    }
  };

  const handleSelectGrade = (id: string) => {
    setSelectedGrade(id);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  if (selectedGrade !== null) {
    return (
      <ClassRoadmap
        classKey={selectedGrade}
        onBack={() => {
          setSelectedGrade(null);
          window.scrollTo({ top: 0, behavior: "instant" });
        }}
      />
    );
  }

  return (
    <div className="academics-page section-container">
      {/* Navigation Top */}
      <div className="academics-nav-back">
        <button
          className="back-button"
          onClick={handleBackToMain}
          data-cursor="disable"
        >
          <FaArrowLeft /> Back to Portfolio
        </button>
        <span className="academics-badge">
          <FaGraduationCap /> Sunbeam School, Lahartara
        </span>
      </div>

      {/* Hero Section */}
      <div className="academics-hero">
        <h1>
          Academic <span>&</span>
          <br /> Learning Journey
        </h1>
        <p>
          Curious and motivated Class 9 student interested in science,
          mathematics, AI, robotics, and technology innovation. Committed to
          academic rigor and learning by experimenting and building practical
          solutions.
        </p>
      </div>

      {/* Academic Strengths Grid */}
      <div className="academic-section-title">
        <p>Key Pillars</p>
        <h2>Academic Strengths & Focus</h2>
      </div>

      <div className="academic-cards-grid">
        <div className="academic-card">
          <div className="academic-card-icon">
            <FaCalculator />
          </div>
          <h3>Mathematics & Logic</h3>
          <p>
            Strong foundation in algebra, analytical geometry, problem-solving,
            and computational mathematics with a focus on logical reasoning.
          </p>
          <div className="academic-tags">
            <span className="academic-tag">Algebra</span>
            <span className="academic-tag">Geometry</span>
            <span className="academic-tag">Mental Math</span>
            <span className="academic-tag">Logical Analysis</span>
          </div>
        </div>

        <div className="academic-card">
          <div className="academic-card-icon">
            <MdOutlineScience />
          </div>
          <h3>Science & Physics</h3>
          <p>
            Keen interest in experimental physics, mechanics, electronics, and
            environmental engineering applied to real-world prototypes.
          </p>
          <div className="academic-tags">
            <span className="academic-tag">Applied Physics</span>
            <span className="academic-tag">Environmental Science</span>
            <span className="academic-tag">Circuit Design</span>
            <span className="academic-tag">Experiments</span>
          </div>
        </div>

        <div className="academic-card">
          <div className="academic-card-icon">
            <FaMicrochip />
          </div>
          <h3>Computer Science & AI</h3>
          <p>
            Practical programming across Python, computer vision, algorithms,
            microcontrollers (Arduino, ESP32, Raspberry Pi), and modern web
            technologies.
          </p>
          <div className="academic-tags">
            <span className="academic-tag">Python</span>
            <span className="academic-tag">OpenCV & AI</span>
            <span className="academic-tag">Raspberry Pi</span>
            <span className="academic-tag">Embedded Systems</span>
          </div>
        </div>

        <div className="academic-card">
          <div className="academic-card-icon">
            <FaGuitar />
          </div>
          <h3>Creative Arts & Music</h3>
          <p>
            Skilled in playing guitar, music theory, graphic design, and video
            production, combining creative aesthetics with technical execution.
          </p>
          <div className="academic-tags">
            <span className="academic-tag">Guitar & Music</span>
            <span className="academic-tag">Motion Design</span>
            <span className="academic-tag">Video Production</span>
            <span className="academic-tag">School Presentations</span>
          </div>
        </div>
      </div>

      {/* Academic & Science Events Timeline (The Line of Career Pattern) */}
      <div className="academic-section-title">
        <p>Milestones & Exhibitions</p>
        <h2>Education & Event Timeline</h2>
      </div>

      <div className="academic-timeline-section">
        <div className="academic-timeline-container">
          <div className="academic-timeline">
            <div className="academic-dot"></div>
          </div>

          <div className="academic-info-box">
            <div className="academic-info-in">
              <div className="academic-role">
                <h4>Class 9 — CBSE Curriculum</h4>
                <h5>Sunbeam School, Lahartara</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing the core CBSE curriculum (2026–27) with top academic
              focus in Mathematics, Science, and Information Technology while
              actively engineering advanced technical projects.
            </p>
          </div>

          <div className="academic-info-box">
            <div className="academic-info-in">
              <div className="academic-role">
                <h4>Jigyasa 2.0 & Sunfest</h4>
                <h5>School Science & Tech Events</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Participated and presented interactive science and technology
              projects. Winner of two school events for innovative prototypes
              and presentations.
            </p>
          </div>

          <div className="academic-info-box">
            <div className="academic-info-in">
              <div className="academic-role">
                <h4>CBSE Science Exhibition</h4>
                <h5>Regional Technology Showcase</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed and demonstrated a working technology-based innovation
              project integrating sensors, microcontrollers, and real-time
              telemetry.
            </p>
          </div>

          <div className="academic-info-box">
            <div className="academic-info-in">
              <div className="academic-role">
                <h4>Independent STEM Prototyping</h4>
                <h5>Self-Driven Technical Exploration</h5>
              </div>
              <h3>FOUNDATION</h3>
            </div>
            <p>
              Explored embedded electronics, Python programming, IoT sensors,
              and creative software tools to build hands-on hardware and
              software projects.
            </p>
          </div>
        </div>
      </div>

      {/* Class Progression Grid (Nursery to Class 12) */}
      <div className="classes-section-title">
        <p>Academic Progression</p>
        <h2>Class-by-Class Journey</h2>
      </div>

      <div className="classes-grid">
        {classList.map((item) => (
          <div
            key={item.id}
            className={`class-box ${item.status}`}
            onClick={() => handleSelectGrade(item.id)}
            data-cursor="disable"
          >
            <div className="class-header">
              <span className="class-number">{item.name}</span>
              {item.status === "passed" && (
                <span className="class-status-badge status-passed">
                  <FaCheck /> Passed
                </span>
              )}
              {item.status === "current" && (
                <span className="class-status-badge status-current">
                  <FaStar /> Current (2026–27)
                </span>
              )}
              {item.status === "upcoming" && (
                <span className="class-status-badge status-upcoming">
                  <FaClock /> Upcoming
                </span>
              )}
            </div>
            <div className="class-details">
              <h5>{item.stage}</h5>
              <p>{item.desc}</p>
            </div>
            <div className="class-action-link">
              <span>
                {item.certCount > 0
                  ? `${item.certCount} Certificates`
                  : "Class Roadmap"}
              </span>
              <FaArrowRight />
            </div>
          </div>
        ))}
      </div>

      {/* Achievements Banner */}
      <div className="academic-achievements-banner">
        <h3>Achievements & Core Highlights</h3>
        <div className="academic-achievements-grid">
          <div className="achievement-item">
            <FaTrophy />
            <h4>Winner of Two School Events</h4>
            <p>Recognized for outstanding innovation and presentation</p>
          </div>
          <div className="achievement-item">
            <MdLightbulb />
            <h4>CBSE Exhibition Presenter</h4>
            <p>Developed and presented practical technology prototypes</p>
          </div>
          <div className="achievement-item">
            <FaAward />
            <h4>Academic & Musical Excellence</h4>
            <p>Strong standing in Mathematics, Science & Guitar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
