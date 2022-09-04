import React, {useEffect, useRef} from 'react'
import { gsap } from "gsap";

function Float (){
    return (
        <>
        <main className='noise'>
            <Circle1/>
            <Circle2/>
            <Circle3/>
            <Letters/>
        </main>
        </>
    )
};

const Circle1 = () => {
    let circle1 = useRef();

    useEffect(() => {
        var circle1Tl = gsap.timeline({repeat: -1, yoyo: true});
        circle1Tl
        .to(circle1, {
            y: -50,
            duration: 2,
            ease: 'linear'
        })
    }, []);

    return (
        <div ref={el => {circle1 = el}} className='circle1'></div>
    )
};

const Circle2 = () => {
    return (
        <div className='circle2'></div>
    )
};

const Circle3 = () => {
    let circle3 = useRef();

    useEffect(() => {
        var circle3Tl = gsap.timeline({repeat: -1, yoyo: true});
        circle3Tl
        .to(circle3, {
            y: 50,
            duration: 2,
            ease: 'linear'
        })
    }, []);

    return (
        <div ref={el => {circle3 = el}} className='circle3'></div>
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
                duration: 1.4,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut"
            })
        };
        const topTl = () => {
            var topTl = gsap.timeline();
            topTl.add(letterTimeline(top))
        }
        const ly1Tl = () => {
            var ly1Tl = gsap.timeline();
            ly1Tl.add(letterTimeline(ly1))
        }
        const ly2Tl = () => {
            var ly2Tl = gsap.timeline();
            ly2Tl.add(letterTimeline(ly2))
        }
        const ly3Tl = () => {
            var ly3Tl = gsap.timeline();
            ly3Tl.add(letterTimeline(ly3))
        }
        const ly4Tl = () => {
            var ly4Tl = gsap.timeline();
            ly4Tl.add(letterTimeline(ly4))
        }
        const bottomTl = () => {
            var bottomTl = gsap.timeline();
            bottomTl.add(letterTimeline(bottom))
        }
        
        var lettersTl = gsap.timeline();
        lettersTl.add(topTl)
                    .add(ly1Tl, '<0.2')
                    .add(ly2Tl, '<0.2')
                    .add(ly3Tl, '<0.2')
                    .add(ly4Tl, '<0.2')
                    .add(bottomTl, '<0.2')
    }, []);
    return (
        <section className="letter letterCol" >
            <h1 ref={el => {top = el}} className='letterRow top'>{props.letter}</h1>
            <h1 ref={el => {ly1 = el}} className='letterRow ly1'>{props.letter}</h1>
            <h1 ref={el => {ly2 = el}} className='letterRow ly2'>{props.letter}</h1>
            <h1 ref={el => {ly3 = el}} className='letterRow ly3'>{props.letter}</h1>
            <h1 ref={el => {ly4 = el}} className='letterRow ly4'>{props.letter}</h1>
            <h1 ref={el => {bottom = el}} className='letterRow bottom'>{props.letter}</h1>
        </section>
    )
};

const Letters = (prop) => {
    return (
        <>
            <article className='letters'>
                <Letter letter='f'/>
                <Letter letter='l'/>
                <Letter letter='o'/>
                <Letter letter='a'/>
                <Letter letter='t'/>
            </article>
        </>
    )
}

export default Float