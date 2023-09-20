import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Srinivas Teja | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Srinivas Teja</h2>
          <h4 className='my-4 mx-auto items-end'>
            srinivasteja.vallampati@gmail.com
          </h4>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/srinivastejav/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href='https://github.com/srinivastheja'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              <span className='px-1'>Web Development </span>
            </p>
          </div>
        </div>
        <p>
          Software Engineer with proven ability to create web applications in
          scale and experienced into multiple domains and aiming to be a
          fullstack developer.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-1'>|</span>Front-End Web Developer
            <span className='px-1'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React JS<br></br>
            <span className='px-2'></span>Next JS
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span> AWS EC2, VPC, S3
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>ValueLabs</span>
            <span className='px-2'>|</span>Hyderabad{" "}
          </p>
          <p className='py-1 italic'>
            Senior Software Engineer (2022 - Current)
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              worked on Creating web components using Functional components for
              Tag N trac for Admin and user Application.
            </li>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Integrated API’s for Devices to Monitor real time data using Maps
              API.
            </li>
            <li>
              Gained Excellent hands-on experience in developing responsive web
              applications while working closely with Architects and Product
              Owners
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>Harman International</span>
            <span className='px-2'>|</span>Bengaluru
          </p>
          <p className='py-1 italic'>
            Senior Engineer Product Development(2021-2022)
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Performed testing Application with Jest and React testing Library
              along with Functional Testing using Cypress(e2e)
            </li>
            <li>
              Migrated old components with newer logic. Integrated sonarqube for
              checking code coverage.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Cognizant</span>
            <span className='px-2'>|</span>Hyderabad
          </p>
          <p className='py-1 italic'>Associate (2018 – 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Created Frontend survey application using ReactJs</li>
            <li>
              Developed Single Page Applications (SPAs) using React-Router and
              to enable navigation from one view to the next{" "}
            </li>
            <li>
              Participating in the team’s agile software development process
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
