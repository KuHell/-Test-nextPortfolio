import React, { useRef } from 'react';
import Card from '../components/Card';
import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import { useState, useEffect } from 'react';
import { ProjectInfoProps } from '../types';
import projects from '../projectInfo.json';
import { useRouter } from 'next/router';
import useScrollMove from '../hooks/useScrollMove';

const Home = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const [projectInfo, setProjectInfo] = useState<ProjectInfoProps[]>([]);
  const element = useRef<HTMLDivElement | undefined>();
  const route = useRouter();

  const query = route.asPath.substring(2);

  /* project list로 스크롤하는 hook */
  const scrollMotion = useScrollMove(element);

  /* project rendering될 때 실행되는 hook */
  useEffect(() => {
    setProjectInfo(props.projectInfo);
  }, [props]);

  /* query가 project-list로 들어왔을 때 실행되는 hook */
  useEffect(() => {
    if (query === 'project-list') {
      scrollMotion.onMoveToElement();
    }
  }, [query]);

  return (
    <div className='animate-fade-in-up'>
      <div>
        {/* <div onClick={ref.onMoveToElement}>test</div> */}
        <h1 className='my-32 text-7xl'>
          Freelance product designer, based in Poland
        </h1>
      </div>
      <div>
        <div
          ref={element}
          className='grid grid-cols-2 gap-16 place-items-center'
        >
          {projectInfo.map((info) => {
            // console.log("info:", info);
            return (
              <Card
                key={info.id}
                image={info.image}
                title={info.title}
                date={info.date}
                label={info.label}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

// SSG
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projectInfo: projects,
    },
  };
};

export default Home;
