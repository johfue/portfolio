import Link from 'next/link'
import Logo from '/public/images/logo.svg'
import Boop from '/components/boop'

export default function Header() {
  return (
    <nav class="nav--small">
        <Link href="/" title="Home" class="nav__logo--small"><Logo /></Link>
        <ul class="nav__ul--small">
            <li class="nav__li--small"><Boop><Link href="/about" class="nav__a">About Me</Link></Boop></li>
            <li class="nav__li--small"><Boop><Link href="/work/personal" class="nav__a">Fun</Link></Boop></li>
        </ul>
    <b id="blob--top" class="smallblob"></b>
    </nav>

  )
}
