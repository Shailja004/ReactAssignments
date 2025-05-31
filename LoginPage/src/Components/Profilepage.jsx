import Image from '../assets/Image.jpg'
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import '../App.css'

const Profilepage = () => {
  return (
    <div className="container">
      <header>
        <div className="flex"><div>
        <h1>Shailja Bhargava</h1>
        <h2><FaEnvelope /> shailjabhargava2004@gmail.com   </h2>
        <h2><FaPhone /> 9179819885</h2>
        <h2>Shivpuri, Madhya Pradesh</h2>
        </div>
        <img src={Image} alt="Your" className="profile-pic" />
        </div>
      </header>
      <section>
        <h2>Summary</h2>
        <p>  " To leverage my knowledge, analytical thinking, and problem-solving skills in a challenging and dynamic environment where I 
    can contribute to organizational success, while continuously learning and growing professionally.”</p>
      </section>
    <section>
  <h2>Education</h2>
  <table className="education-table">
    <thead>
      <tr>
        <th>Examination</th>
        <th>University / School</th>
        <th>Year</th>
        <th>CGPA / %</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>B.Tech</td>
        <td>UIT RGPV Shivpuri</td>
        <td>2021–2025</td>
        <td>8.57</td>
      </tr>
      <tr>
        <td>Higher Secondary</td>
        <td>Govt. Excellence No. 1 School</td>
        <td>2020–2021</td>
        <td>95%</td>
      </tr>
      <tr>
        <td>High School</td>
        <td>Govt. Excellence No. 1 School</td>
        <td>2018–2019</td>
        <td>95.8%</td>
      </tr>
    </tbody>
  </table>
</section>

       <section>
        <h2>Projects</h2>
          <p><strong>• Student Management System :</strong>A console-based application to manage students' academic records and generate performance summaries.</p>
          <p><strong>• Banking Management System :</strong>Developed a command-line banking system with features for balance inquiry, deposit, and withdrawal.</p>
          <p><strong>• HR Management System :</strong>Tech Stack: C#, .NET Core, Angular and SSMS.
Designed and implemented an end-to-end HR application to streamline interview scheduling and data handling.</p>
      </section>
          <section>
        <h2>Internship</h2>
        <h4>Fulminous Software Private Limited(August 2024 – September 2024)</h4>
        <p>•  Developed and maintained responsive web applications using Angular (TypeScript) for the frontend and .NET Core (C#) for backend APIs.</p>
        <p>•  Contributed to the HR Management System, implementing modules for interview scheduling, applicant tracking, and employee data visualization.</p>
      </section>
         <section>
        <h2>Certifications</h2>
        <h4>• Internship Launchpad Training Program ( Coplur Technologies Pvt. Ltd.)(July 2024)</h4>
        <p>Completed 45-hour training covering Angular, REST APIs, OOPs, cloud basics, and SQL with hands-on debugging practice.</p>
        <h4>• Web Development (MSME TECHNOLOGY CENTER, INDORE)(1 – 14 March 2023)</h4>
        <p>Training in HTML, CSS, JavaScript, and responsive design.</p>
        <h4>• Information Technology (IT – ITeS Sector Skills Council NASSCOM)(2018 – 2021)</h4>
        <p>Gained basic IT support skills, including system troubleshooting, hardware/software assistance, and resolving common technical issues in an IT environment.</p>
      </section>
    </div>
  )
}

export default Profilepage