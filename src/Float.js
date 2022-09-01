import React, {useEffect, useRef} from 'react'
import { gsap } from "gsap";

const Float = () => {
    let top = useRef();
    let ly1 = useRef();

    useEffect(() => {
        var tl = gsap.timeline();
        // tl.to(top, {
        //     y: 120,
        //     x: -7,
        //     duration: 2.2,
        //     repeat: -1,
        //     yoyo: true,
        //     ease: "power2.inOut"
        // })
        // tl.to(ly1, {
        //     y: 120,
        //     x: -7,
        //     duration: 2.2,
        //     repeat: -1,
        //     yoyo: true,
        //     ease: "power2.inOut"
        // }, '<0.2')
    }, []);

    return (
        <>
        <main className='noise'>
            <article className='letters'>
                <section className="letter">
                    <h1 ref={el => {top = el}} className='top'>f</h1>
                    <h1 ref={el => {ly1 = el}} className='ly1'>f</h1>
                    <h1 className='ly2'>f</h1>
                    <h1 className='ly3'>f</h1>
                    <h1 className='ly4'>f</h1>
                    <h1 className='bottom'>f</h1>
                </section>
                <section className="letter">
                    <h1 className='top'>l</h1>
                    <h1 className='ly1'>l</h1>
                    <h1 className='ly2'>l</h1>
                    <h1 className='ly3'>l</h1>
                    <h1 className='ly4'>l</h1>
                    <h1 className='bottom'>l</h1>
                </section> 
            </article>
        </main>
        </>
    )
};

export default Float