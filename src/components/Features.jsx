import React from 'react'
const

const Features = () => {
  return (
    <section className='bg-black pb-52'>
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            INTO THE METAGAME LAYER
          </p>
        </div>
        <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit omnis, eius commodi impedit magni et pariatur a in voluptatibus nihil!</p>
      </div>

      <div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
        <BentoCard src="videos/feature-1.mp4" title={<>Radiant</>} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, atque." isComingSoon={}/>
      </div>
    </section>
  )
}

export default Features
