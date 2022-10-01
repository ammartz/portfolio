import Link from "next/link"


export default function Social(){

    return(
        <div className='flex flex-row gap-7'>
          
          {/* Replace '/' below with your twitter link */}
          <Link href='/' target='_blank' passHref>
            <a target="_blank">
                <div className='social-btn'>
                    <img className="invert" src="/twitter.png" />
                </div>
            </a>
          </Link>

          {/* Replace '/' below with your instagram link */}
          <Link href='/' target='_blank' passHref>
          <a target="_blank">
          <div className='social-btn'>
              <img className="invert" src="/instagram.png" />
          </div>
          </a>
          </Link>

          {/* Replace '/' below with your linkedin link */}
          <Link href='/' target='_blank' passHref>
          <a target="_blank">
          <div className='social-btn'>
              <img className="invert" src="/linkedin.png" />
          </div>
          </a>
          </Link>
        </div>
    )
}