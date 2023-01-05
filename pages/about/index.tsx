import React from 'react';
import { useRouter } from 'next/router';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

const about = () => {
  const route = useRouter();
  const animatedAbout = useScrollFadeIn(1, 0);
  const animatedServices = useScrollFadeIn(1, 0);
  const animatedContact = useScrollFadeIn(1, 0);

  const about = {
    title:
      'I combine purposeful strategy with powerful design to help clients define their identities.',
    aboutMe: 'About Me',
    aboutMeContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat sapien sit amet magna fermentum, ut auctor mi tempus. Pellentesque id massa lacus. Vestibulum pellentesque malesuada enim, eget gravida elit finibus sit amet. In ipsum elit, vulputate eu arcu quis, dictum lobortis ex.',
    services: 'Services',
    servicesContent:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat sapien sit amet magna fermentum, ut auctor mi tempus. Pellentesque id massa lacus. Vestibulum pellentesque malesuada enim, eget gravida elit finibus sit amet. In ipsum elit, vulputate eu arcu quis, dictum lobortis ex.',
  };

  const contactHandler = () => {
    route.push('/contact');
  };

  return (
    <div className='animate-fade-in-up'>
      <h1 className='my-32 text-5xl'>{about.title}</h1>
      <div className='overflow-hidden'>
        <img
          src='https://images.unsplash.com/photo-1669967284114-fe0419656123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MjM3NjE2Ng&ixlib=rb-4.0.3&q=80&w=1080'
          alt='myProfile'
          className='w-full max-h-[640px] object-cover object-center'
        />
      </div>
      <div className='flex flex-col Abouts-center'>
        <div {...animatedAbout} className='flex flex-row flex-1 my-52'>
          <h3 className='text-4xl w-[800px]'>About me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat
            sapien sit amet magna fermentum, ut auctor mi tempus. Pellentesque
            id massa lacus. Vestibulum pellentesque malesuada enim, eget gravida
            elit finibus sit amet. In ipsum elit, vulputate eu arcu quis, dictum
            lobortis ex.
          </p>
        </div>
        <div {...animatedServices} className='flex flex-row flex-1 my-40'>
          <h3 className='text-4xl w-[800px]'>Services</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat
            sapien sit amet magna fermentum, ut auctor mi tempus. Pellentesque
            id massa lacus. Vestibulum pellentesque malesuada enim, eget gravida
            elit finibus sit amet. In ipsum elit, vulputate eu arcu quis, dictum
            lobortis ex.
          </p>
        </div>
        <div {...animatedContact} className='my-32 text-center'>
          <p className='text-5xl'>Let's talk about the next big thinkg</p>
          <button
            className='px-[25px] py-[20px] my-12 text-xl text-black bg-white  hover:bg-zinc-400 hover:hover:duration-500'
            onClick={contactHandler}
          >
            Reach Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default about;
