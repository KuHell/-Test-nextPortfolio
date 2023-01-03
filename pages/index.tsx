import React, { useContext, useRef } from 'react';
import Card from '../components/Card';
import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import { useState, useEffect } from 'react';
import { ProjectInfoProps } from '../types';
import projects from '../projectInfo.json';

const Home = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const [projectInfo, setProjectInfo] = useState<ProjectInfoProps[]>([]);

  useEffect(() => {
    setProjectInfo(props.projectInfo);
  }, [props]);

  return (
    <>
      <div>
        {/* <div onClick={ref.onMoveToElement}>test</div> */}
        <h1 className='my-32 text-7xl'>
          Freelance product designer, based in Poland
        </h1>
      </div>
      <div>
        <div className='grid grid-cols-2 gap-16 place-items-center'>
          {projectInfo.map((info) => (
            <Card
              key={info.title}
              image={info.image}
              title={info.title}
              date={info.date}
            />
          ))}
        </div>
      </div>
    </>
  );
};

// SSR
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projectInfo: projects,
    },
  };
};

export default Home;
