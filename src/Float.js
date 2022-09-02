import React, {useEffect, useRef} from 'react'
import { gsap } from "gsap";

function Float (){
    return (
        <>
        <main className='noise'>
            <article className='letters'>
                <Letter letter='f'/>
                <Letter letter='l'/>
                <Letter letter='o'/>
                <Letter letter='a'/>
                <Letter letter='t'/>
            </article>
        </main>
        </>
    )
};

const Letter = (props) => {
    let top = useRef();
    let ly1 = useRef();
    let ly2 = useRef();
    let ly3 = useRef();
    let ly4 = useRef();
    let bottom = useRef();

    useEffect(() => {
        const letterTimeline = (el) => {
            var tl = gsap.timeline();
            tl.to(el, {
                y: 100,
                x: -21,
                duration: 1.6,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut"
            })
        };
        var topTl = gsap.timeline();
        topTl.add(letterTimeline(top))

        var ly1Tl = gsap.timeline();
        ly1Tl.add(letterTimeline(ly1))

        var ly2Tl = gsap.timeline();
        ly2Tl.add(letterTimeline(ly2))

        var ly3Tl = gsap.timeline();
        ly3Tl.add(letterTimeline(ly3))

        var ly4Tl = gsap.timeline();
        ly4Tl.add(letterTimeline(ly4))

        var bottomTl = gsap.timeline();
        bottomTl.add(letterTimeline(bottom))
        
        var masterTl = gsap.timeline();
        masterTl.add(topTl)
                .add(ly1Tl, '<1')


        // var tl = gsap.timeline();
        // tl.to(top, {
        //     y: 100,
        //     x: -21,
        //     duration: 1.6,
        //     repeat: -1,
        //     yoyo: true,
        //     ease: "power2.inOut"
        // })
    //     tl.to(ly1, {
    //         y: 69,
    //         x: -6,
    //         duration: 1.6,
    //         repeat: -1,
    //         yoyo: true,
    //         ease: "power2.inOut"
    //     }, '<0.15')
    //     tl.to(ly2, {
    //         y: 38,
    //         x: 12,
    //         duration: 1.6,
    //         repeat: -1,
    //         yoyo: true,
    //         ease: "power2.inOut"
    //     }, '<0.15')
    //     tl.to(ly3, {
    //         y: 7,
    //         x: 28,
    //         duration: 1.6,
    //         repeat: -1,
    //         yoyo: true,
    //         ease: "power2.inOut"
    //     }, '<0.15')
    //     tl.to(ly4, {
    //         y: -24,
    //         x: 43,
    //         duration: 1.6,
    //         repeat: -1,
    //         yoyo: true,
    //         ease: "power2.inOut"
    //     }, '<0.15')
    //     tl.to(bottom, {
    //         y: -55,
    //         x: 58,
    //         duration: 1.6,
    //         repeat: -1,
    //         yoyo: true,
    //         ease: "power2.inOut"
    //     }, '<0.15')
    }, []);

    return (
    <section className="letter">
        <h1 ref={el => {top = el}} className='top'>{props.letter}</h1>
        <h1 ref={el => {ly1 = el}} className='ly1'>{props.letter}</h1>
        <h1 ref={el => {ly2 = el}} className='ly2'>{props.letter}</h1>
        <h1 ref={el => {ly3 = el}} className='ly3'>{props.letter}</h1>
        <h1 ref={el => {ly4 = el}} className='ly4'>{props.letter}</h1>
        <h1 ref={el => {bottom = el}} className='bottom'>{props.letter}</h1>
    </section>
    )
};


export default Float