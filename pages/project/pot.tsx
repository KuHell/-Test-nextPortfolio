import React from 'react';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

const pot = () => {
  const animatedAbout = useScrollFadeIn(1, 0);
  const animatedServices = useScrollFadeIn(1, 0);
  const animatedContact = useScrollFadeIn(1, 0);

  return (
    <div className='animate-fade-in-up'>
      <div className='flex flex-col Abouts-center'>
        <div {...animatedAbout} className='flex flex-row my-40'>
          <h3 className='text-4xl w-[800px]'>About me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat
            sapien sit amet magna fermentum, ut auctor mi tempus. Pellentesque
            id massa lacus. Vestibulum pellentesque malesuada enim, eget gravida
            elit finibus sit amet. In ipsum elit, vulputate eu arcu quis, dictum
            lobortis ex.
          </p>
        </div>
        <div {...animatedServices} className='flex flex-row my-40'>
          <h3 className='text-4xl w-[800px]'>Services</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat
            sapien sit amet magna fermentum, ut auctor mi tempus. Pellentesque
            id massa lacus. Vestibulum pellentesque malesuada enim, eget gravida
            elit finibus sit amet. In ipsum elit, vulputate eu arcu quis, dictum
            lobortis ex.
          </p>
        </div>
      </div>
    </div>
  );
};

export default pot;
