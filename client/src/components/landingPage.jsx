import React from "react";
import "./LandingPage.css";
import logoImage from "./WhatsApp Image 2025-04-13 at 21.53.31_d44fcd1e.jpg";
import { Link } from "react-router-dom";
import img from "../logo.png";
const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="landing-header">
        <img src={img} />
      </header>

      {/* Image Section */}
      <div className="image-container">
        <img src="/assets/image.png" alt="IET Lucknow" className="college-image" />
      </div>

      <section className="description">
        <p>
          The Institute of Engineering and Technology (IET) in Lucknow is a
          prestigious government-funded engineering college in Uttar Pradesh,
          India. Established in 1984, it is affiliated with Dr. A.P.J. Abdul
          Kalam Technical University (AKTU). The campus spans 100 acres,
          providing a focused and vibrant academic environment.
        </p>

        <ul className="college-insights">
          <li>
            If you want to prepare for government exams, this college is a good
            choice. Attendance is only strict till the first class test.
          </li>
          <li>
            After the first test, you can focus more on your own preparation,
            and skipping classes won’t be an issue.
          </li>
          <li>
            Electrical faculty is strict — avoid trouble there. Other faculties
            are lenient. Still, always stay respectful and friendly with all.
          </li>
          <li>
            Since IET is an autonomous college, exams are made by the teachers
            themselves — papers are usually simple.
          </li>
          <li>
            Small events keep happening, but most students don’t attend. They
            either rest or study in their rooms.
          </li>
          <li>
            One senior, Abhishek Shrivastava sir, is very well-known in our
            college. Check his{" "}
            <i>
              <a href="https://www.linkedin.com/in/-abhishek-srivastava/">
                LinkedIn
              </a>{" "}
            </i>
            to know more.
          </li>
          <li>
            Don’t rely too much on seniors — it's better to do everything by
            yourself.
          </li>
          <li>
            Don’t worry about the syllabus. It’s easy. With 1-2 months of study,
            you can easily get 8+ GPA.
          </li>
          <li>
            If you still have doubts, click on the question option and ask. I’ll
            try to help. Just ask relevant things.
          </li>
          <li>
            Since you're coming here, you’ll experience the real college life
            yourself.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default LandingPage;
