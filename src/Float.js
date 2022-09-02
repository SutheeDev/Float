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
                duration: 1.6,
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
        
        var masterTl = gsap.timeline();
        masterTl.add(topTl)
                .add(ly1Tl, '<0.2')
                .add(ly2Tl, '<0.2')
                .add(ly3Tl, '<0.2')
                .add(ly4Tl, '<0.2')
                .add(bottomTl, '<0.2')
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