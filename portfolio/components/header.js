import Link from 'next/link'

export default function Header() {
  return (
    <nav class="nav--small">
        <a href="/" title="Home" class="nav__logo--small"></a>
        <ul class="nav__ul--small">
            <li class="nav__li--small"><a href="/about" class="nav__a">About Me</a></li>
            <li class="nav__li--small"><a href="/work/personal" class="nav__a">Fun</a></li>
        </ul>
    </nav>
  )
}
