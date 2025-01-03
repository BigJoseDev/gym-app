import { ClassType, SelectedPage } from '@/shared/types';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from './Class';


const classes: Array<ClassType>= [
    {
        name: 'Weight training, classes',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: image1,
    },
    {
        name: 'Yoga, classes',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: image2,
    },
    {
        name: ' Ab core, classes',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: image3,
    },
    {
        name: 'adventure, classes',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: image4,
    },
    {
        name: 'fitness, classes',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: image5,
    },
    {
        name: 'training, classes',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: image6,
    },
]


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
        <motion.div
        onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div
             initial= "hidden"
             whileInView="visible"
             viewport={{once:false,amount:0.5}}
             transition={{duration:1}}
             variants={{
                 hidden:{opacity:0, x:-100},
                 visible:{opacity:1, x: 0},

             }}
            className='mx-auto w-5/6'>
                <div className='md:w-3/5'>
                    <HText>OUR CLASSES</HText>
                    <p className='py-5 '>
                        We offer a variety of classes to suit your fitness needs. From yoga to weight lifting, we have it all. Our classes are designed to help you reach your fitness goals in a fun and supportive environment.
                    </p>
                </div>

            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
             <ul className='w-[2800px] whitespace-nowrap'>
                {classes.map((item:ClassType, index)=>(
                    <Class
                    key={`${item.name}-${index}`}
                    name={item.name}
                    description={item.description}
                    image={item.image}

                    />
                ))}
                
             </ul>
            </div>
        </motion.div>

    </section>
  )
}

export default OurClasses;