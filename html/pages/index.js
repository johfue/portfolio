import React from 'react';
import Image from 'next/image'
import Script from 'next/script'
import { Inter } from '@next/font/google'
import Styles from '../styles/Home.module.css'
import Link from 'next/link'
import Thumb from '/components/thumb'
import Boop from '/components/boop'

export default function Home() {

  return (
    <>
    <svg class="maskparent" width="0" height="0">
        <clipPath id="thumbMask1" class="thumbmask" clipPathUnits="objectBoundingBox">
        <path d="M0,0 C0.366,0.016,0.592,0.114,0.618,0.188 C0.646,0.263,0.618,0.388,0.618,0.388 C0.619,0.389,0.913,0.432,0.94,0.562 C0.968,0.691,0.933,0.654,0.918,0.824 C0.91,0.913,0.956,0.954,1,1 H0 V0" fill="#D9D9D9"/>
        </clipPath>
    </svg>
    <svg class="maskparent" width="0" height="0">
        <clipPath id="thumbMask2" class="thumbmask" clipPathUnits="objectBoundingBox">
        <path d="M0.334,0.237 C0.508,0.237,0.569,-0.013,0.91,0.001 C0.941,0.002,0.971,0.004,1,0.007 V1 H0 V0.089 C0.131,0.121,0.187,0.237,0.334,0.237" fill="#D9D9D9"/>
        </clipPath>
    </svg>
    <svg class="maskparent" width="0" height="0">
        <clipPath id="thumbMask3" class="thumbmask" clipPathUnits="objectBoundingBox">
        <path d="M1,1 H0.073 C0.053,0.957,0.038,0.914,0.033,0.877 C0.012,0.73,0.1,0.723,0.104,0.589 C0.108,0.456,-0.047,0.399,0.014,0.25 C0.075,0.101,0.737,0.156,0.738,0.156 C0.738,0.156,0.805,0.017,1,0 V1" fill="#D9D9D9"/>
        </clipPath>
    </svg>
    <svg class="maskparent" width="0" height="0">
        <clipPath id="thumbMask4" class="thumbmask" clipPathUnits="objectBoundingBox">
        <path d="M0.941,0 C0.973,0.038,1,0.084,1,0.163 C0.996,0.352,0.737,0.328,0.736,0.328 C0.736,0.328,0.859,0.455,0.805,0.559 C0.751,0.662,0.618,0.599,0.542,0.697 C0.437,0.835,0.389,1,0.181,1 C0.073,1,0.023,0.932,0,0.868 V0 H0.941" fill="#D9D9D9"/>
        </clipPath>
    </svg>
    <svg class="maskparent" width="0" height="0">
        <clipPath id="thumbMask5" class="thumbmask" clipPathUnits="objectBoundingBox">
        <path d="M1,0.867 C0.931,0.905,0.718,1,0.537,0.999 C0.317,0.982,0.342,0.801,0.182,0.818 C0.14,0.822,0.076,0.839,0,0.861 V0 H1 V0.867" fill="#D9D9D9"/>
        </clipPath>
    </svg>
    <svg class="maskparent" width="0" height="0">
        <clipPath id="thumbMask6" class="thumbmask" clipPathUnits="objectBoundingBox">
        <path d="M1,0.871 C0.769,0.934,0.456,1,0.362,0.991 C0.232,0.937,0.293,0.838,0.266,0.747 C0.239,0.656,-0.03,0.599,0.003,0.434 C0.035,0.27,0.265,0.273,0.266,0.273 C0.266,0.273,0.176,0.137,0.117,0 H1 V0.871" fill="#D9D9D9"/>
        </clipPath>
    </svg>

    <main class="grid">
        <b id="blob--top"></b>
        <b id="blob--bottom"></b>
        <header class="header--home">
            <img src="/images/logo.svg" class="logo" alt="Logo"/>
            <section class="header_items--home">
                <h1 class="h1--home">Johnathon Fuerte</h1>
                <h2 class="h2--home">Art Director</h2>
                <br/>
                <nav>
                    <ul>
                        <li class="nav__li--homepage"><Boop><a href="/about" class="nav__a">About Me</a></Boop></li>
                        <li class="nav__li--homepage"><Boop><a href="/work/personal" class="nav__a">Fun</a></Boop></li>
                    </ul>
                </nav>
            </section>
        </header>

        <Thumb name="Terminix" page="terminix" image="terminix" index="1"></Thumb>
        <Thumb name="Cox Mobile" page="cox-mobile" image="coxMobile" index="2"></Thumb>
        <Thumb name="Play Lotería Online" page="loteria" image="loteria" index="3"></Thumb>
        <Thumb name="Fresh Step" page="freshstep" image="freshstep" index="4"></Thumb>
        <Thumb name="Choose Chicago" page="choose-chicago" image="choose" index="5"></Thumb>
        <Thumb name="Motion Graphics" page="mograph" image="mograph" index="6"></Thumb>
        <b id="top"></b>
        <b id="bottom"></b>
    </main>
    </>
  )
}
