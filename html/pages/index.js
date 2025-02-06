import React from 'react';
import Image from 'next/image'
import Script from 'next/script'
import { Inter } from '@next/font/google'
import Styles from '../styles/Home.module.css'
import Link from 'next/link'
import Thumb from '/components/thumb'

export default function Home() {

  return (
    <>
    <main class="grid">
        <header class="header--home">
            <img src="/images/logo.svg" class="logo" alt="Logo"/>
            <section class="header_items--home">
                <h1>Johnathon Fuerte</h1>
                <h2>Art Director</h2>
                <br/>
                <nav>
                    <ul>
                        <li><a href="/about" class="nav__a">About Me</a></li>
                        <li><a href="/work/personal" class="nav__a">Fun</a></li>
                    </ul>
                </nav>
            </section>
        </header>

      <Thumb name="Terminix" page="terminix" image="terminix"></Thumb>
      <Thumb name="Jiffy Lube" page="jiffy" image="jiffy"></Thumb>
      <Thumb name="Play Lotería Online" page="loteria" image="loteria"></Thumb>
      <Thumb name="Neosporin" page="neosporin" image="neosporin"></Thumb>
      <Thumb name="Choose Chicago" page="choose-chicago" image="choose"></Thumb>
      <Thumb name="Cox" page="cox" image="cox"></Thumb>

        {/* <a href="work/terminix" class="thumbnail__wrap">
            <figure class="thumbnail">
                <h3 class="zigzag">Terminix</h3>
                <img src="/images/terminixThumb.png" alt="" class="thumbnail__image"/>
            </figure>
        </a> */
        /* <a href="work/jiffy" class="thumbnail__wrap">
            <figure class="thumbnail">
                <h3 class="zigzag">Jiffy Lube</h3>
                <img src="/images/jiffyThumb.png" alt="" class="thumbnail__image"/>
            </figure>
        </a>
        <a href="work/loteria" class="thumbnail__wrap">
            <figure class="thumbnail">
                <h3 class="zigzag">Play Lotería Online</h3>
                <img src="/images/loteriaThumb.png" alt="" class="thumbnail__image"/>
            </figure>
        </a>
        <a href="/work/neosporin" class="thumbnail__wrap">
            <figure class="thumbnail">
                <h3 class="zigzag">Neosporin</h3>
                <img src="/images/neosporinThumb.png" alt="" class="thumbnail__image"/>
            </figure>
        </a>        
        <a href="work/choose-chicago" class="thumbnail__wrap">
            <figure class="thumbnail">
                <h3 class="zigzag">Choose Chicago</h3>
                <img src="/images/chooseThumb.png" alt="" class="thumbnail__image"/>
            </figure>
        </a>
        <a href="work/cox" class="thumbnail__wrap">
            <figure class="thumbnail">
                <h3 class="zigzag">Cox</h3>
                <img src="/images/coxThumb.png" alt="" class="thumbnail__image"/>
            </figure>
        </a> */}
        <footer>

        </footer>
        <b id="top"></b>
        <b id="bottom"></b>
    </main>
    <b class="overflow">
        <b class="spacer spacer-home"></b>
        <b class="spacer spacer-home"></b>
    </b>
boop();
    </>
  )
}
