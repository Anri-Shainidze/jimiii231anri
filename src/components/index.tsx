import logo1 from "../assets/Group 16.png";
import logo from "../assets/Group 10 (1).png";
import logo4 from "../assets/Group 9 (4).png";
import logo2 from "../assets/Group 9 (2).png";
import logo3 from "../assets/Group 9 (3).png";
import logo9 from "../assets/Group 9 (9).png";
import logo7 from "../assets/Group 9 (7).png";
import logo5 from "../assets/Group 9 (5).png";
import logo8 from "../assets/Group 9 (8).png";
import logo6 from "../assets/Group 9 (6).png";
import { useState } from "react";

import "../App.css";
interface JobPosting {
  id?: number;
  company: {
    logo?: string;
    name: string;
  };
  // company: string;

  title: string;
  logo?: string;
  employmentType: string;
  location: string;
  postedTime: string;

  // location: string;
  isNew: boolean;
  isFeatured: boolean;

  skills: string[];
}

// interface JobPosting {

// interface FilteredJobPosting extends JobPosting {
const photoSnapJob: Array<JobPosting> = [
  {
    company: {
      name: "Photosnap",
      logo: logo,
    },
    postedTime: "1d ago",
    title: "Senior Frontend Developer",
    location: "USA only",
    employmentType: "Full Time",
    isNew: true,
    isFeatured: true,
    skills: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
  },
  {
    company: {
      name: "Photosnap",
      logo: logo,
    },
    employmentType: "Part Time",
    title: "Senior Backend Developer",
    location: "Remote",
    postedTime: "2d ago",
    isNew: true,
    isFeatured: true,
    skills: ["Backend", "Senior", "Python", "Django"],
  },
  {
    company: {
      name: "Manage",
      logo: logo1,
    },
    employmentType: "Part Time",
    title: "Fullstack Developer",
    location: "Remote",
    postedTime: "1d ago",
    isNew: true,
    isFeatured: true,
    skills: ["Fullstack", "Midweight", "Python", "React"],
  },
  {
    company: {
      name: "Account",
      logo: logo2,
    },
    postedTime: "2d ago",
    location: "USA only",
    title: "Junior Frontend Developer",
    employmentType: "Part Time",
    isNew: true,
    isFeatured: true,
    skills: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
  },
  {
    company: {
      name: "MyHome",
      logo: logo3,
    },
    title: "Junior Frontend Developer",
    postedTime: "5d ago",
    employmentType: "Contract",
    location: "USA only",
    isNew: true,
    isFeatured: true,
    skills: ["Frontend", "Junior", "CSS", "JavaScript"],
  },
  {
    company: {
      name: "Loop Studios",
      logo: logo4,
    },
    postedTime: "1w ago",
    location: "Worldwide",
    title: "Software Engineer",
    employmentType: "Full Time",
    isNew: true,
    isFeatured: true,
    skills: ["Fullstack", "Midweight", "Javascript", "Sass", "Ruby"],
  },
  {
    company: {
      name: "Faceit",
      logo: logo5,
    },
    postedTime: "2w ago",
    location: "UK only",
    title: "Junior Backend Developer",
    employmentType: "Full Time",
    isNew: true,
    isFeatured: true,
    skills: ["Backend", "Junior", "Ruby", "Ror"],
  },
  {
    company: {
      name: "Shortly",
      logo: logo6,
    },
    postedTime: "1d ago",
    location: "USA only",
    title: "Junior Developer",
    employmentType: "Full Time",
    isNew: true,
    isFeatured: true,
    skills: ["Frontend", "Senior", "HTML", "Sass", "JavaScript"],
  },
  {
    company: {
      name: "Insure",
      logo:logo7,
    },
    postedTime: "2w ago",
    location: "USA only",
    title: "Junior Frontend Developer",
    employmentType: "Full Time",
    isNew: true,
    isFeatured: true,
    skills: ["Frontend", "Junior", "Vue", "JavaScript", "Sass"],
  },
  {
    company: {
      name: "Eyecam Co.",
      logo: logo8,
    },
    postedTime: "3w ago",
    location: "Worldwide",
    title: "Full Stack Engineer",
    employmentType: "Full Time",
    isNew: true,
    isFeatured: true,
    skills: ["Fullstack", "Midweight", "Javascript", "Django", "Phyton"],
  },
  {
    company: {
      name: "Photosnap",
      logo: logo9,
    },
    postedTime: "1mo ago",
    location: "Worldwide",
    title: "Front-end Dev",
    employmentType: "Part Time",
    isNew: true,
    isFeatured: true,
    skills: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
  },
];

// interface JobPosting {
//   company: {
//     logo: string;
//     name: string;
//   };

// interface FilteredJobPosting extends JobPosting {
const ListedItems = () => {
  const [saved] = useState<Array<JobPosting>>(photoSnapJob);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const filteredJobs =
    selectedSkills.length > 1
      ? saved.filter((job) =>
          selectedSkills.every((skill) => job.skills.includes(skill))
        )
      : saved;
      // const filteredJobs = saved.filter((

  const handleSkillClick = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };
  const clearFilters = () => {
    setSelectedSkills([]);
  };
  // const clearFilters = () => {

  //   setSelectedSkills([]);
  return (
    <>
      {selectedSkills.length > 1 && (
        <div className="for-bar">
          <div className="second-skill">
            {selectedSkills.map((skill, index) => (
              <div key={index} className="second-skill">
                <button style={{width:"110px",display:"flex",alignItems:"center",justifyContent:"center"}} onClick={() => handleSkillClick(skill)}>{skill}✕</button>
              </div>

            ))}

          </div>
          <button className="clear-btn" onClick={clearFilters}>
            Clear
          </button>
        </div>
      )}
      

      
      <div className="foreveryone">
        {filteredJobs.map((item, index) => (
          <div className="firstcontainer" key={index}>
            <img id="log1" src={item.company.logo} alt="" />
            <div className="same">
              <span>{item.company.name}</span>
              <div className="one-same">
                <h3>{item.title}</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "11px",
                    marginTop: "11px",
                  }}
                >
                  <p>{item.postedTime}</p>
                  <p>{item.employmentType}</p>
                  <p>{item.location}</p>
                </div>
              </div>
              <hr />
              <div className="one">
                {item.skills.map((skill, skillIndex) => (
                  <button
                    key={skillIndex}
                    className={`skill-tag ${
                      selectedSkills.includes(skill) ? "selected" : ""
                    }`}
                    onClick={() => handleSkillClick(skill)}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// const ListedItems = () => {
export default ListedItems;
