import React, {useEffect} from 'react'
import iMac from '../../assets/img/macbooks/air-monterey-large_2x.mp4'
import './ChooseMac.scss'
import {NavLink} from 'react-router-dom'
import {useInView} from "react-intersection-observer";
import {useAnimation, motion} from "framer-motion";

function ChooseMac() {
    const {ref, inView} = useInView()
    const animation = useAnimation()
    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 1,
                }
            })
        }
        if (!inView) {
            animation.start({x: '-300vw'})
        }
    }, [inView])

    return (
        <section ref={ref} className='chooseMac'>
            <motion.div
                className='description'
                animate={animation}
            >
                <h2>Выберите свой Mac.</h2>
                <p>Суперсила. Профессионалов
                </p>
                <NavLink to="/catalog/Mac">Подробнее</NavLink>
            </motion.div>
            <div className="video">
                <video loop muted autoPlay>
                    <source src={iMac} type="video/mp4"/>
                </video>
            </div>
        </section>
    )
}

export default ChooseMac