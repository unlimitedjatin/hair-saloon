import React from 'react'
import './washes.css'


const data = [
  { title: 'HYDRATE', description: "Hydrate wash replenish hair with much needed moisture. Ideal for hair that’s naturally dry, or exposed to harsh, dry climates, it’s packed with antioxidant goodness to help restore a healthy glow to parched locks.", img: '/images/hydrate.png' },
  { title: 'REPAIR', description: "Prepare to renew and restore frazzled locks with our reconstructing treatment shampoo enriched with powerful proteins and amino acids. It will help to strengthen the hair from root to tip, while gently removing impurities and soothing damage.", img: '/images/repair.png' },
  { title: 'VOLUME', description: "Damage happens easily – from over-processing, environmental stressors and daily heat styling – and sometimes you just need to give your hair a break and nourish it with the essential goodness of our VOLUME WASH. It will restore volume and fullness to the hair in no time.", img: '/images/Hydrate.jpg' },
  { title: 'PLUMPING', description: "Plump up in all the right places, and take your hair to a whole new level of volume and thickness with PLUMPING.WASH. Created to nourish every strand from root to tip, fine and ageing hair will transform into stronger, fuller-looking locks with renewed strength and vitality.", img: '/images/plumping.jpg' },
  { title: 'BLONDE', description: "Make every moment a bombshell moment, and banish brassy tones with BLONDE WASH. Our Lavender-infused, colour-enhancing shampoo takes on all tones - from creamy to platinum, and with the help of added optical brighteners rescues dull colour - taking it from drab back to fab.", img: '/images/blonde.png' },
  { title: 'ANTI- AGING', description: "Give damaged, ageing hair a youthful pick-me-up with our restorative softening shampoo that delivers powerful rejuvenating benefits every time you wash. An Antioxidant-rich blend of Immortelle and Baobab Oils, Lotus Flower, Orchid Extract and a nourishing Amino Acid complex enhance hair strength and deliver moisture for renewed lustre, body and bounce.", img: '/images/young.png' },
];

function Washes() {
  return (
    <div className='section-hair-washes py-8'>

      <div className='hair-style-top text-center mb-5'>
        <h2 className='title-font mb-5' title="Essential Washes">Essential Washes</h2>

      </div>
      <div className="container mx-auto grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-2">
        {data.map((item, index) => (
          <div key={index} className="bg-contain bg-center hair-washes-column" style={{ backgroundImage: `url(${item.img})` }}>
            <h2 className="mb-5">{item.title}</h2>
            <p className="">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Washes