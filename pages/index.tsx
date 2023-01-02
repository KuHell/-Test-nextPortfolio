import React, { useRef } from 'react';
import Card from '../components/Card';
import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import { useState, useEffect } from 'react';
import { ProjectInfoProps } from '../types';
import useScrollMove from '../hooks/useScrollMove';

const Home = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const element = useRef<HTMLElement>(null);
  useScrollMove(element);

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
        <div
          ref={element}
          className='grid grid-cols-2 gap-16 place-items-center'
        >
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
      projectInfo: [
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/b/ba/Seoul_Tower_%284394893276%29.jpg',
          title: 'Test Project Title1',
          date: 'Dec 28, 2022',
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/b/ba/Seoul_Tower_%284394893276%29.jpg',
          title: 'Test Project Title2',
          date: 'Dec 29, 2022',
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/b/ba/Seoul_Tower_%284394893276%29.jpg',
          title: 'Test Project Title3',
          date: 'Dec 30, 2022',
        },
        {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/b/ba/Seoul_Tower_%284394893276%29.jpg',
          title: 'Test Project Title4',
          date: 'Dec 31, 2022',
        },
      ],
    },
  };
};

export default Home;
