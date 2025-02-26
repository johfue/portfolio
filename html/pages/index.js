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
    <main class="grid">
        <header class="header--home">
            <img src="/images/logo.svg" class="logo" alt="Logo"/>
            <section class="header_items--home">
                <h1>Johnathon Fuerte</h1>
                <h2>Art Director</h2>
                <br/>
                <nav>
                    <ul>
                        <li><Boop><a href="/about" class="nav__a">About Me</a></Boop></li>
                        <li><Boop><a href="/work/personal" class="nav__a">Fun</a></Boop></li>
                    </ul>
                </nav>
            </section>
        </header>

      <Thumb name="Terminix" page="terminix" image="terminix"></Thumb>
      <Thumb name="Cox Mobile" page="cox-mobile" image="coxMobile"></Thumb>
      <Thumb name="Play Lotería Online" page="loteria" image="loteria"></Thumb>
      <Thumb name="Jiffy Lube" page="jiffy" image="jiffy"></Thumb>
      <Thumb name="Choose Chicago" page="choose-chicago" image="choose"></Thumb>
      <Thumb name="Cox" page="cox" image="cox"></Thumb>

        <footer>

        </footer>
        <b id="top"></b>
        <b id="bottom"></b>
    </main>
    <b class="overflow">
        <b class="spacer spacer-home"></b>
        <b class="spacer spacer-home"></b>
    </b>
    </>
  )
}
