import React, {useEffect, useRef} from 'react'
import { gsap } from "gsap";

const Float = () => {
    let top = useRef();
    let ly1 = useRef();
    let ly2 = useRef();
    let ly3 = useRef();
    let ly4 = useRef();
    let bottom = useRef();

    useEffect(() => {
        var tl = gsap.timeline();
        tl.to(top, {
            y: 120,
            x: -21,
            duration: 1.3,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
        })
        tl.to(ly1, {
            y: 89,
            x: -6,
            duration: 1.3,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
        }, '<0.15')
        tl.to(ly2, {
            y: 58,
            x: 12,
            duration: 1.3,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
        }, '<0.15')
        tl.to(ly3, {
            y: 27,
            x: 28,
            duration: 1.3,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
        }, '<0.15')
        tl.to(ly4, {
            y: -4,
            x: 43,
            duration: 1.3,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
        }, '<0.15')
        tl.to(bottom, {
            y: -35,
            x: 58,
            duration: 1.3,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
        }, '<0.15')
    }, []);

    return (
        <>
        <main className='noise'>
            <article className='letters'>
                <section className="letter">
                    <h1 ref={el => {top = el}} className='top'>f</h1>
                    <h1 ref={el => {ly1 = el}} className='ly1'>f</h1>
                    <h1 ref={el => {ly2 = el}} className='ly2'>f</h1>
                    <h1 ref={el => {ly3 = el}} className='ly3'>f</h1>
                    <h1 ref={el => {ly4 = el}} className='ly4'>f</h1>
                    <h1 ref={el => {bottom = el}} className='bottom'>f</h1>
                </section>
                {/* <section className="letter">
                    <h1 className='top'>l</h1>
                    <h1 className='ly1'>l</h1>
                    <h1 className='ly2'>l</h1>
                    <h1 className='ly3'>l</h1>
                    <h1 className='ly4'>l</h1>
                    <h1 className='bottom'>l</h1>
                </section>  */}
            </article>
        </main>
        </>
    )
};

export default Float