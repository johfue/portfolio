import Link from 'next/link'
import Logo from '/public/images/logo.svg'

export default function Header() {
  return (
    <nav class="nav--small">
        <Link href="/" title="Home" class="nav__logo--small"><Logo /></Link>
        <ul class="nav__ul--small">
            <li class="nav__li--small"><Link href="/about" class="nav__a">About Me</Link></li>
            <li class="nav__li--small"><Link href="/work/personal" class="nav__a">Fun</Link></li>
        </ul>
    <div class="spacer spacer-small"></div>
    <div class="spacer spacer-small"></div>

    </nav>
  )
}
