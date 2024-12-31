import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion, stagger } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6 " />,
        title: "State of the Art Facilities",
        description: "Top of the line equipment and facilities to keep you motivated and engaged."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6 " />,
        title: "100's of Diverse Classes",
        description: "Top of the line equipment and facilities to keep you motivated and engaged."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6 " />,
        title: "Expert and Pro Trainers",
        description: "Top of the line equipment and facilities to keep you motivated and engaged."
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    return <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* Header */}
            < motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },

                }}
                className="md:mt-24  md:w-3/5">
                <HText>MORE THAN JUST A GYM.</HText>
                <p className="my-5 text-sm">We provide world class fitness equipment, trainers and classes to get you to utilize fitness goals with ease. we provide true care into each and every member.</p>
            </motion.div>
            {/* benefits */}
            <motion.div
                className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* Graphics and desc */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* graphic */}
                <img className="mx-auto" src= {BenefitPageGraphic} alt="benefits-page-graphic" />
                {/* description */}
                <div>
                    {/* title */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -100 },
                                visible: { opacity: 1, x: 0 },
            
                            }}
                            >
                            <HText>
                                MILLIONS OF HAPPY MEMBERS {""} <span className="text-primary-500">FIT</span>
                            </HText>
                        </motion.div>
                        </div>
                        </div>
                    {/* desc */}
                    < motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{delay:0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 100 },
                        visible: { opacity: 1, x: 0 },
    
                    }}
                    >
                        <p className="my-5 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, explicabo magnam ad architecto vitae eligendi consequatur! Tempora, corporis, praesentium doloremque laborum, perferendis in aliquid eligendi voluptatem alias sint modi deleniti?</p>
                        <p className="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem alias deserunt voluptatibus similique molestiae debitis sapiente ducimus. Quisquam et minima eum ipsum nobis quia dolore ipsa deleniti, expedita molestias ducimus!</p>
                    </motion.div>
                    {/* button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    </section>
}

export default Benefits