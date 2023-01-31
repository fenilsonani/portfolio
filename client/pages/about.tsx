import AboutHeroLeft from '@/components/AboutHeroLeft'
import AboutHeroRight from '@/components/AboutHeroRight'
import Head from 'next/head'
import React from 'react'

const About = () => {
  return (
    <div>
      <Head>
        <title>Fenil Sonani-About</title>
        <meta name="description" content="This is a personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <AboutHeroRight title="Career Objective" desc="To leverage my expertise and passion for (specific skills or industry) as a freelance consultant, delivering exceptional results for clients and continuously expanding my portfolio of projects and clientele.  " imgUrl="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/09/23164703/Career-Objective.jpg" />
      <AboutHeroLeft title="Education and Qualification" descTitle="Bachelor's degree in Information
      Technology (BSc IT) at Uka Tarsadia University " desc="Study focuses on the development and management of
      computer systems, including programming, databases,
      networks, and web development.
      Additionally, coursework includes subjects such as
      software engineering, data structures and algorithms,
      and computer organization and architecture.
      Developing a strong foundation in technical skills, as well
      as gaining experience in project management, teamwork,
      and problem-solving" imgUrl="https://images-platform.99static.com//QGgBYXDLRnHSO3PyJ6obeByCTag=/0x0:1000x1000/fit-in/500x500/99designs-contests-attachments/102/102306/attachment_102306474" />
      <AboutHeroRight title="Work Experience" desc="I have worked as a freelancer for 2 years and have worked on 10+ projects. I have worked on projects like E-commerce, Social Media, Blogging, etc. I have also worked as a full-stack developer for 1 year and have worked on 5+ projects. I have worked on projects like E-commerce, Social Media, Blogging, etc. " imgUrl="https://img.freepik.com/free-vector/internship-job-illustration_23-2148722413.jpg?w=2000" />
      <AboutHeroLeft title="Skills" descTitle="Programming Languages" desc="C, C++, Java, Python, JavaScript, HTML, CSS, SQL, PHP, C#, Assembly Language,and lots of framerworks and librareys etc. And More Skills Are Shown In the Skills Section in Detail" imgUrl="https://stories.freepiklabs.com/storage/12275/programming-amico-2182.png" />
      <AboutHeroRight title="Skills" descTitle="Frameworks" desc="React, Next.js, Express.js, Node.js, Django, Flask, Bootstrap, Tailwind CSS, Material UI, Semantic UI, etc. And More Skills Are Shown In the Skills Section in Detail" imgUrl="https://media.istockphoto.com/id/1250276441/vector/%D1%81reative-of-business-graphics-the-company-is-engaged-in-joint-search-for-ideas-abstract.jpg?s=612x612&w=0&k=20&c=Rt6CPaK_ydUf3c5Btri-AkAYkC-bQDABz3l7EpblUXI=" />
      <AboutHeroLeft title="Projects" desc="As a fresher with a strong passion for
          technology, I have actively built and
          developed over 130 projects in various areas
          of web development.
          My projects range from simple static
          websites to dynamic and complex web
          applications, utilizing technologies such as
          From Basic HTML, CSS, and Js To All listed
          above technology.
           My extensive project
          experience has allowed me to develop a
          strong understanding of the software
          development process, including planning,
          coding, testing, and deployment.
          I am confident in my ability to apply my skills
          and knowledge to contribute to the success
          of a company." imgUrl="https://img.freepik.com/free-vector/organizing-projects-concept-illustration_114360-542.jpg?w=826&t=st=1675010654~exp=1675011254~hmac=e21c4e18f41e7a47b3c84274cdd77b9e8fe3c0ea973820417c08c038639df1ce" />
    </div>
  )
}

export default About