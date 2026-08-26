import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaArrowLeft,
  FaAward,
  FaCalendarDays,
  FaSchool,
  FaMaximize,
  FaXmark,
  FaFolderOpen,
} from "react-icons/fa6";
import "./styles/ClassRoadmap.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  date: string;
  image: string;
  description: string;
}

export interface ClassData {
  title: string;
  subtitle: string;
  session: string;
  certificates: CertificateItem[];
}

export const certificatesByClass: Record<string, ClassData> = {
  nursery: {
    title: "NURSERY / PRE-PRIMARY",
    subtitle: "Sunbeam School, Lahartara",
    session: "2015–2016",
    certificates: [
      {
        id: "nur-1",
        title: "Golden Rules Appreciation",
        issuer: "Sunbeam Group of Educational Institutions",
        category: "Leadership & Personality",
        date: "01 Dec 2015",
        image: "/images/certificates/nursery_cert_1.jpg",
        description:
          "Awarded for exemplary conduct, kindness, honesty, and diligence following school Golden Rules.",
      },
      {
        id: "nur-2",
        title: "3rd Prize — Doha / Shlok Recitation",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Music & Arts",
        date: "Oct 2015",
        image: "/images/certificates/nursery_cert_2.jpg",
        description:
          "Secured 3rd prize in the inter-class Doha and Shlok recitation competition at Sunbeam Lahartara.",
      },
      {
        id: "nur-3",
        title: "Best in Conversation Award",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Leadership & Personality",
        date: "Jan 2016",
        image: "/images/certificates/nursery_cert_3.jpg",
        description:
          "Recognized as the Best in Conversation for exceptional communication and speaking confidence.",
      },
    ],
  },
  kg1: {
    title: "KINDERGARTEN 1 (KG-1)",
    subtitle: "Sunbeam School, Lahartara",
    session: "2016–2017",
    certificates: [
      {
        id: "kg1-1",
        title: "Ramayan Celebrations — Chaupai Presentation",
        issuer: "Sunbeam School, Lahartara",
        category: "Music & Arts",
        date: "07 Oct 2016",
        image: "/images/certificates/kg1_cert_1.jpg",
        description:
          "Actively participated and delivered a highly appreciated Chaupai recital in school celebrations.",
      },
      {
        id: "kg1-2",
        title: "CBSE National Badminton Championships — Cultural Event",
        issuer: "CBSE & Sunbeam School Lahartara",
        category: "Music & Arts",
        date: "25–30 Dec 2016",
        image: "/images/certificates/kg1_cert_2.jpg",
        description:
          "Selected and performed in the opening cultural program during the CBSE National Badminton Championships.",
      },
    ],
  },
  kg2: {
    title: "KINDERGARTEN 2 (KG-2)",
    subtitle: "Sunbeam School, Lahartara",
    session: "2017–2018",
    certificates: [
      {
        id: "kg2-1",
        title: "English Speech & Drama Programme",
        issuer: "Helen O'Grady International Speech & Drama Academy",
        category: "Leadership & Personality",
        date: "Session 2017–18",
        image: "/images/certificates/kg2_cert_1.jpg",
        description:
          "Successfully completed a one-year international curriculum in English speech, drama, and public expression.",
      },
      {
        id: "kg2-2",
        title: "Best in Conversation Award",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Leadership & Personality",
        date: "17 Feb 2018",
        image: "/images/certificates/kg2_cert_2.jpg",
        description:
          "Awarded Best in Conversation in KG-II for outstanding language fluency and articulate expression.",
      },
      {
        id: "kg2-3",
        title: "Etiquette Club — Smartest Kid in Town",
        issuer: "The Etiquette Club, Sunbeam Lahartara",
        category: "Leadership & Personality",
        date: "01 Sept 2017",
        image: "/images/certificates/kg2_cert_3.jpg",
        description:
          "Awarded for exceptional social manners, active participation, and positive classroom leadership.",
      },
      {
        id: "kg2-4",
        title: "Certificate of Merit in Academics — Promising Student",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Academic",
        date: "04 April 2018",
        image: "/images/certificates/kg2_cert_4.jpg",
        description:
          "Conferred for outstanding academic performance and intellectual curiosity throughout the year.",
      },
      {
        id: "kg2-5",
        title: "Academic Appreciation & Excellence",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Academic",
        date: "Session 2017–18",
        image: "/images/certificates/kg2_cert_5.jpg",
        description:
          "Recognized as a promising young scholar with high conceptual understanding and learning aptitude.",
      },
      {
        id: "kg2-6",
        title: "Full Swing Summer Camp Participation",
        issuer: "Sunbeam School, Lahartara",
        category: "Sports",
        date: "08–13 May 2017",
        image: "/images/certificates/kg2_cert_6.jpg",
        description:
          "Recognized for vigor, vitality, diligence, team spirit, and creative problem solving in annual camp.",
      },
    ],
  },
  class1: {
    title: "CLASS 1 (GRADE 1)",
    subtitle: "Sunbeam School, Lahartara",
    session: "2018–2019",
    certificates: [
      {
        id: "c1-1",
        title: "Best in L.T.A — Spanish Guitar (Annual Prize)",
        issuer: "Sunbeam Group of Educational Institutions",
        category: "Music & Arts",
        date: "Annual Prize Distribution",
        image: "/images/certificates/class1_cert_2.jpg",
        description:
          "Secured Best Performer award in Spanish Guitar during the prestigious Annual Prize Distribution ceremony.",
      },
      {
        id: "c1-2",
        title: "NSTSE 2019 — National Science Talent Search",
        issuer: "Unified Council (India's 1st ISO 9001:2015 Org)",
        category: "Science & Tech",
        date: "07 Dec 2018",
        image: "/images/certificates/class1_cert_3.jpg",
        description:
          "Nationwide competitive examination testing analytical thinking, science fundamentals, and mathematics.",
      },
      {
        id: "c1-3",
        title: "SOF IMO — International Mathematics Olympiad",
        issuer: "Science Olympiad Foundation (SOF)",
        category: "Academic",
        date: "Dec 2018",
        image: "/images/certificates/class1_cert_5.jpg",
        description:
          "Participated in the international mathematics competition evaluating logical reasoning and problem solving.",
      },
      {
        id: "c1-4",
        title: "SOF NCO — National Cyber Olympiad",
        issuer: "Science Olympiad Foundation & TCS iON",
        category: "Science & Tech",
        date: "Dec 2018 / Jan 2019",
        image: "/images/certificates/class1_cert_6.jpg",
        description:
          "Evaluated in computer logic, algorithms, digital literacy, and information technology fundamentals.",
      },
      {
        id: "c1-5",
        title: "Gold Medal — Relay Race (Annual Sports Meet)",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Sports",
        date: "Jan 2019",
        image: "/images/certificates/class1_cert_7.jpg",
        description:
          "Won 1st Place Gold Medal in the Relay Race event during the Sunbeam Lahartara Annual Sports Meet.",
      },
      {
        id: "c1-6",
        title: "Best Performer in Spanish Guitar (Cultural Merit)",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Music & Arts",
        date: "Session 2018–19",
        image: "/images/certificates/class1_cert_8.jpg",
        description:
          "Awarded Certificate of Merit in Cultural Activities for exceptional acoustic guitar technique.",
      },
      {
        id: "c1-7",
        title: "Ardent Reader Award",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Academic",
        date: "Sept 2018",
        image: "/images/certificates/class1_cert_4.jpg",
        description:
          "Special recognition for exemplary reading habits, comprehensive literature exploration, and curiosity.",
      },
      {
        id: "c1-8",
        title: "Best in Art & Craft Award",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Music & Arts",
        date: "Dec 2019",
        image: "/images/certificates/class1_cert_9.jpg",
        description:
          "Conferred for creative excellence, fine motor design, and outstanding visual craft projects.",
      },
      {
        id: "c1-9",
        title: "Best Global Assignment Presentation",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Academic",
        date: "April 2018",
        image: "/images/certificates/class1_cert_10.jpg",
        description:
          "Recognized for research, creativity, and public presentation on the Global Assignment project.",
      },
      {
        id: "c1-10",
        title: "Citation of Excellence — Full Swing Summer Camp",
        issuer: "Sunbeam Lahartara (Save Water Initiative)",
        category: "Leadership & Personality",
        date: "09–15 May 2019",
        image: "/images/certificates/class1_cert_1.jpg",
        description:
          "Citation of excellence for environmental awareness, leadership, and team collaboration in summer camp.",
      },
    ],
  },
  class2: {
    title: "CLASS 2 (GRADE 2)",
    subtitle: "Sunbeam School, Lahartara",
    session: "2019–2020",
    certificates: [
      {
        id: "c2-1",
        title: "WIZ National Spell Bee — Inter-School Level",
        issuer: "English Wizard Foundation",
        category: "Academic",
        date: "27 Aug 2020",
        image: "/images/certificates/class2_cert_1.jpg",
        description:
          "Awarded Certificate of Appreciation for effort and dedication in the Inter-School Level WIZ National Spell Bee.",
      },
      {
        id: "c2-2",
        title: "Party Etiquette Club — Smartest Kid in Town",
        issuer: "Sunbeam School, Lahartara",
        category: "Leadership & Personality",
        date: "03 Aug 2019",
        image: "/images/certificates/class2_cert_2.jpg",
        description:
          "Awarded for exceptional social manners and active leadership in the Party Etiquette Club.",
      },
      {
        id: "c2-3",
        title: "WIZ National Spell Bee — School Level Accomplishment",
        issuer: "English Wizard Foundation",
        category: "Academic",
        date: "13 Dec 2019",
        image: "/images/certificates/class2_cert_3.jpg",
        description:
          "Selected for the Inter-School Competition following outstanding performance in the School Level Spell Bee.",
      },
      {
        id: "c2-4",
        title: "LogIQids & Techfest IIT Bombay — Rank 26 (India & UAE)",
        issuer: "Techfest IIT Bombay & LogIQids",
        category: "Science & Tech",
        date: "June 2020",
        image: "/images/certificates/class2_cert_4.jpg",
        description:
          "Secured 26th Rank Across India and UAE in the Final Stage of the LogIQids Logical Reasoning Olympiad.",
      },
      {
        id: "c2-5",
        title: "LogIQids Olympiad — 8th Rank Across Varanasi",
        issuer: "LogIQids (IIT-IIM Alumni Venture)",
        category: "Academic",
        date: "Nov–Dec 2019",
        image: "/images/certificates/class2_cert_5.jpg",
        description:
          "Secured 8th Rank across Varanasi in the First Stage of the Logical Reasoning Olympiad.",
      },
      {
        id: "c2-6",
        title: "Best in L.T.A — Spanish Guitar (Citation of Excellence)",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Music & Arts",
        date: "March 2020",
        image: "/images/certificates/class2_cert_6.jpg",
        description:
          "Conferred Citation of Excellence in Academics & Cultural Activities for being Best in Spanish Guitar.",
      },
      {
        id: "c2-7",
        title: "Khan Academy LearnStorm 2020 Student Champion",
        issuer: "Khan Academy",
        category: "Academic",
        date: "2020",
        image: "/images/certificates/class2_cert_7.jpg",
        description:
          "Honored as LearnStorm Student Champion for mastery in mathematics and independent digital learning.",
      },
      {
        id: "c2-8",
        title: "SOF NCO — National Cyber Olympiad",
        issuer: "Science Olympiad Foundation",
        category: "Science & Tech",
        date: "Nov 2019 / Feb 2020",
        image: "/images/certificates/class2_cert_8.jpg",
        description:
          "Participated in the National Cyber Olympiad evaluating algorithmic reasoning and IT fundamentals.",
      },
    ],
  },
  class3: {
    title: "CLASS 3 (GRADE 3)",
    subtitle: "Sunbeam School, Lahartara",
    session: "2020–2021",
    certificates: [
      {
        id: "c3-1",
        title: "Most Tech Independent Child in Class",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Science & Tech",
        date: "06 March 2021",
        image: "/images/certificates/class3_cert_1.jpg",
        description:
          "Citation of Appreciation awarded for exceptional digital self-reliance, technical troubleshooting, and online agility.",
      },
      {
        id: "c3-2",
        title: "Highest Marks in Hindi & Mathematics",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Academic",
        date: "March 2021",
        image: "/images/certificates/class3_cert_2.jpg",
        description:
          "Citation of Excellence for securing highest academic marks in both Hindi and Mathematics.",
      },
      {
        id: "c3-3",
        title: "Academic & Cultural Citation of Excellence",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Academic",
        date: "Session 2020–21",
        image: "/images/certificates/class3_cert_3.jpg",
        description:
          "Recognized for top-tier academic scores and comprehensive excellence in school activities.",
      },
    ],
  },
  class4: {
    title: "CLASS 4 (GRADE 4)",
    subtitle: "Sunbeam School, Lahartara",
    session: "2021–2022",
    certificates: [
      {
        id: "c4-1",
        title: "Consolation Prize — 'Voice Your Book' (Impetus 2021)",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Leadership & Personality",
        date: "27 Oct 2021",
        image: "/images/certificates/class4_cert_1.jpg",
        description:
          "Awarded in the Impetus 2021 literature and public speaking event for dynamic book review and oratory.",
      },
      {
        id: "c4-2",
        title: "Highest Marks in General Knowledge (Session 2021–22)",
        issuer: "Sunbeam Group of Educational Institutions",
        category: "Academic",
        date: "April 2022",
        image: "/images/certificates/class4_cert_2.jpg",
        description:
          "Conferred Citation of Excellence for securing the highest marks in General Knowledge across Class IV.",
      },
      {
        id: "c4-3",
        title: "3rd Prize — Inter House General Quiz",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Academic",
        date: "24 Nov 2021",
        image: "/images/certificates/class4_cert_3.jpg",
        description:
          "Won 3rd prize in the competitive Inter House General Quiz testing science, history, and current affairs.",
      },
      {
        id: "c4-4",
        title: "Most Tech Independent Child (Class IV)",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Science & Tech",
        date: "March 2022",
        image: "/images/certificates/class4_cert_4.jpg",
        description:
          "Awarded Citation of Appreciation for pioneering technology usage, computer skills, and digital initiative.",
      },
    ],
  },
  class5: {
    title: "CLASS 5 (GRADE 5)",
    subtitle: "Sunbeam School, Lahartara",
    session: "2022–2023",
    certificates: [
      {
        id: "c5-1",
        title: "Sunbeam Golden Jubilee — Golden Rules Certificate",
        issuer: "Sunbeam Group (50 Years of Excellence)",
        category: "Leadership & Personality",
        date: "24 July 2022",
        image: "/images/certificates/class5_cert_1.jpg",
        description:
          "Honored during Sunbeam's 50th year celebrations for upholding school values, kindness, and discipline.",
      },
      {
        id: "c5-2",
        title: "3rd Position — 'Pass the Hoop' (Annual Sports Day)",
        issuer: "Sunbeam Lahartara (The Sporting Brain)",
        category: "Sports",
        date: "04 Feb 2023",
        image: "/images/certificates/class5_cert_2.jpg",
        description:
          "Won 3rd position in the agility and team coordination Hoop race during Annual Sports Meet 2022-23.",
      },
      {
        id: "c5-3",
        title: "Best in Class Discussions Award",
        issuer: "Sunbeam Group of Educational Institutions",
        category: "Leadership & Personality",
        date: "March 2023",
        image: "/images/certificates/class5_cert_3.jpg",
        description:
          "Recognized for critical inquiry, active engagement, and persuasive debate in academic classroom forums.",
      },
      {
        id: "c5-4",
        title: "SOF NSO — National Science Olympiad",
        issuer: "Science Olympiad Foundation",
        category: "Science & Tech",
        date: "Oct–Dec 2022",
        image: "/images/certificates/class5_cert_4.jpg",
        description:
          "Secured School Rank 8, Zonal Rank 428, and Regional Rank 562 in the National Science Olympiad.",
      },
    ],
  },
  class6: {
    title: "CLASS 6 (GRADE 6)",
    subtitle: "Sunbeam School, Lahartara",
    session: "2023–2024",
    certificates: [
      {
        id: "c6-1",
        title: "Living Newspaper Competition — Citation of Excellence",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Leadership & Personality",
        date: "26 April 2023",
        image: "/images/certificates/class6_cert_1.jpg",
        description:
          "Remarkable performance in journalism, current affairs presentation, and dynamic role play.",
      },
      {
        id: "c6-2",
        title: "LogIQids Mental Aptitude Olympiad — Zonal Rank 67",
        issuer: "LogIQids (IIT-IIM Alumni Venture)",
        category: "Science & Tech",
        date: "Session 2023–24",
        image: "/images/certificates/class6_cert_2.jpg",
        description:
          "Secured Zonal Rank 67 in the First Stage of the Mental Aptitude Olympiad assessing logic and analytical IQ.",
      },
      {
        id: "c6-3",
        title: "LogIQids & TRYST IIT Delhi — International Rank 71",
        issuer: "TRYST IIT Delhi & LogIQids",
        category: "Science & Tech",
        date: "Session 2023–24",
        image: "/images/certificates/class6_cert_3.jpg",
        description:
          "Achieved International Rank 71 in the Final Stage of the Mental Aptitude Olympiad in collaboration with IIT Delhi.",
      },
      {
        id: "c6-4",
        title: "Most Promising Artist (Music) Award",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Music & Arts",
        date: "Feb 2024",
        image: "/images/certificates/class6_cert_4.jpg",
        description:
          "Citation of Appreciation awarded for exceptional musical talent, performance dedication, and guitar mastery.",
      },
      {
        id: "c6-5",
        title: "SOF NSO & Techfest IIT Bombay — School Rank 11",
        issuer: "Techfest IIT Bombay & Science Olympiad Foundation",
        category: "Science & Tech",
        date: "Oct–Dec 2023",
        image: "/images/certificates/class6_cert_5.jpg",
        description:
          "Secured School Rank 11, Zonal Rank 560, and Regional Rank 770 in the National Science Olympiad.",
      },
      {
        id: "c6-6",
        title: "Certificate of Honour in Sports — Basketball",
        issuer: "Sunbeam School, Lahartara",
        category: "Sports",
        date: "23 March 2024",
        image: "/images/certificates/class6_cert_6.jpg",
        description:
          "Recognized for active participation, teamwork, and athletic performance in the specialized Basketball camp.",
      },
    ],
  },
  class7: {
    title: "CLASS 7 (GRADE 7)",
    subtitle: "Sunbeam School, Lahartara",
    session: "2024–2025",
    certificates: [
      {
        id: "c7-1",
        title: "Prodigy Hunt 2024–25 — Junior IIT Examination",
        issuer: "Prodigy Brains (BKC Mumbai)",
        category: "Science & Tech",
        date: "March 2025",
        image: "/images/certificates/class7_cert_1.jpg",
        description:
          "Recognized for active participation and high-caliber problem-solving performance at the National Level.",
      },
      {
        id: "c7-2",
        title: "Open Door Re-Learning Math — Badge Winner",
        issuer: "Open Door Education & Sunbeam Lahartara",
        category: "Academic",
        date: "Session 2024–25",
        image: "/images/certificates/class7_cert_2.jpg",
        description:
          "Awarded Badge Winner for outstanding mastery, curiosity, and conceptual clarity in mathematical thinking.",
      },
      {
        id: "c7-3",
        title: "Open Door Achiever Award",
        issuer: "Open Door Education & Sunbeam Lahartara",
        category: "Academic",
        date: "05 March 2024",
        image: "/images/certificates/class7_cert_3.jpg",
        description:
          "Honored for unleashing curiosity, scientific inquiry, and relentless pursuit of excellence in science and math.",
      },
      {
        id: "c7-4",
        title: "Most Tech Independent Child (Online) — Class VII",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Science & Tech",
        date: "Feb 2025",
        image: "/images/certificates/class7_cert_4.jpg",
        description:
          "Citation of Appreciation awarded for advanced digital systems troubleshooting, AI tooling, and technical agility.",
      },
    ],
  },
  class8: {
    title: "CLASS 8 (GRADE 8)",
    subtitle: "Sunbeam School, Lahartara",
    session: "2025–2026",
    certificates: [
      {
        id: "c8-1",
        title: "Round Square Postcard Zoom Call",
        issuer: "St. George's Grammar School, SA & Round Square",
        category: "Leadership & Personality",
        date: "12 March 2025",
        image: "/images/certificates/class8_cert_1.jpg",
        description:
          "Citation of Participation in international dialogue and global citizenship exchange with South Africa.",
      },
      {
        id: "c8-2",
        title: "Most Promising Artist — Music (Class VIII)",
        issuer: "Sunbeam Schools, Varanasi",
        category: "Music & Arts",
        date: "18 Feb 2026",
        image: "/images/certificates/class8_cert_2.jpg",
        description:
          "Citation of Appreciation in Academics & Cultural Activities for distinguished performance in acoustic music.",
      },
      {
        id: "c8-3",
        title: "LogIQids & Techfest IIT Bombay — Zonal Rank 94",
        issuer: "Techfest IIT Bombay & LogIQids",
        category: "Science & Tech",
        date: "Session 2025–26",
        image: "/images/certificates/class8_cert_3.jpg",
        description:
          "Secured Zonal Rank 94 in Class 8 during the First Stage of the Mental Aptitude Olympiad.",
      },
      {
        id: "c8-4",
        title: "Rainbow 2025 — Indian Knowledge Systems (IKS)",
        issuer: "Sunbeam School Lahartara",
        category: "Leadership & Personality",
        date: "Session 2025–26",
        image: "/images/certificates/class8_cert_4.jpg",
        description:
          "Citation of Participation for presenting and celebrating the timeless wisdom and innovation of Indian Knowledge Systems.",
      },
    ],
  },
};

interface ClassRoadmapProps {
  classKey: string;
  onBack: () => void;
}

const ClassRoadmap = ({ classKey, onBack }: ClassRoadmapProps) => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  const data = certificatesByClass[classKey] || {
    title: classKey.toUpperCase(),
    subtitle: "Sunbeam School, Lahartara",
    session: "Academic Journey",
    certificates: [],
  };

  useGSAP(() => {
    gsap.fromTo(
      ".roadmap-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    if (data.certificates.length > 0) {
      const lineTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".roadmap-timeline-wrapper",
          start: "top 70%",
          end: "100% center",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      lineTl
        .fromTo(
          ".roadmap-timeline-line",
          { maxHeight: "0%" },
          { maxHeight: "100%", duration: 0.5 },
          0
        )
        .fromTo(
          ".roadmap-node",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
          0
        );
    }

    ScrollTrigger.refresh();
  }, [classKey]);

  return (
    <div className="roadmap-container section-container">
      {/* Top Breadcrumb Back Button */}
      <div className="roadmap-breadcrumb">
        <button
          className="roadmap-back-btn"
          onClick={onBack}
          data-cursor="disable"
        >
          <FaArrowLeft /> Back to All Classes
        </button>
        <span className="roadmap-badge">
          <FaSchool /> Sunbeam School, Lahartara
        </span>
      </div>

      {/* Header */}
      <div className="roadmap-header">
        <span className="roadmap-badge">Class Roadmap & Achievements</span>
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
        <div className="roadmap-meta-bar">
          <span className="roadmap-meta-pill">
            <FaCalendarDays /> Session: {data.session}
          </span>
          <span className="roadmap-meta-pill">
            <FaAward /> {data.certificates.length} Documented Certificates
          </span>
        </div>
      </div>

      {/* Roadmap Alternating Nodes */}
      {data.certificates.length > 0 ? (
        <div className="roadmap-timeline-wrapper">
          <div className="roadmap-timeline-line">
            <div className="roadmap-timeline-dot"></div>
          </div>

          {data.certificates.map((cert) => (
            <div key={cert.id} className="roadmap-node">
              <div className="roadmap-node-marker"></div>
              <div className="cert-card">
                <div
                  className="cert-image-container"
                  onClick={() =>
                    setSelectedImage({
                      src: cert.image,
                      caption: `${cert.title} • ${cert.issuer}`,
                    })
                  }
                  data-cursor="disable"
                >
                  <img src={cert.image} alt={cert.title} loading="lazy" />
                  <div className="cert-zoom-overlay">
                    <FaMaximize /> Click to Expand
                  </div>
                </div>

                <div className="cert-info">
                  <div className="cert-meta-row">
                    <span className="cert-category-tag">{cert.category}</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                  <h3>{cert.title}</h3>
                  <div className="cert-issuer">{cert.issuer}</div>
                  <p>{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="roadmap-empty-state">
          <FaFolderOpen />
          <h3>Certificates in Archive</h3>
          <p>
            Certificates and awards for this class are currently being archived
            and will be updated soon. You can explore Nursery through Class 8
            roadmaps!
          </p>
        </div>
      )}

      {/* Bottom Back Button */}
      <div className="roadmap-bottom-nav">
        <button
          className="roadmap-back-btn"
          onClick={onBack}
          data-cursor="disable"
        >
          <FaArrowLeft /> Back to All Classes
        </button>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cert-modal-close"
              onClick={() => setSelectedImage(null)}
              data-cursor="disable"
            >
              <FaXmark />
            </button>
            <img src={selectedImage.src} alt={selectedImage.caption} />
            <div className="cert-modal-caption">{selectedImage.caption}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassRoadmap;
