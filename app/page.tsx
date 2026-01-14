import Link from "next/link";

export default function Home() {
  return <><nav>
      <ul>
        <li>
          <Link href="/services">Services</Link>
          <ul>
            <li>
              <Link href="/services/web">Web</Link>
            </li>
            <li>
              <Link href="/services/mobile">Mobile</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav><h1>theOpenn</h1></>
    
  
}
