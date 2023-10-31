import Image from 'next/image'
import Header from '@/components/header/Header'
import Banner from '@/components/banner/Banner'
import Universe from '@/components/universe/Universe'
import Inside from '@/components/inside/Inside'
import Washes from '@/components/washes/Washes'
import Contact from '@/components/contact/Contact'
import Cta from '@/components/cta/Cta'
import Team from '@/components/team/Team'
import Reviews from '@/components/reviews/Reviews'
import Partners from '@/components/partners/Partners'
import Footer from '@/components/footer/Footer'
import SocialLinks from '@/components/stickybar/SocialLinks'

export default function Home() {
  return (
    <main className="">
      < Header />
      < Banner/>
      < Universe />
      < Inside />
      < Washes />
      < Contact />
      < Cta />
      < Team />
      < Reviews />
      < Partners />
      < Footer />
      <SocialLinks />
    </main>
  )
}
