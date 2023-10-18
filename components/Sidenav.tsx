import React from 'react'
import Image from 'next/image'

const SideBar = () => {
  return (
    <div className="sidebar-container">
        <Image 
        src="/WokpaLogo.png"
        width={80}
        height={80}
        alt='Company Logo'
        className='logo'

        />
        <div >
            <div className="first-list">
              <div className="side-one">
                <Image src="/discover-img.svg" alt='list' width={60} height={60} />
                <p>Discover</p>
              </div>
              <div className="side-one">
                <Image src="/top-podcast-img.svg" alt='list' width={60} height={60} />
                <p>Top 50 podcasts</p>
              </div>
              <div className="side-one">
                <Image src="/category-img.svg" alt='list' width={60} height={60} />
                <p>Categories</p>
              </div>
              <div className="side-one">
                <Image src="/mic-img.svg" alt='list' width={60} height={60} />
                <p>Add your podcast</p>
              </div>
              <div className="side-one">
                <Image src="/discover-img.svg" alt='list' width={60} height={60} />
                <p>Discover</p>
              </div>
            </div>

            <div className="interlude">
              <div className="top">
                <p className=''>Your Library</p>
                <Image src="/arrow-down-img.svg" width={18} height={18} alt='aro'/>
              </div>
              <div className="img-container">
                <Image src='/love-img.svg' width={20} height={20} alt='love' />
                <Image src='/list-img.svg' width={20} height={20} alt='love' />
                <Image src='/plus-img.svg' width={24} height={24} alt='love' />
                <Image src='/star-img.svg' width={20} height={20} alt='love' />
              </div>
            </div>

            <div className="side-one">
                <Image src="/playlist-img.svg" alt='list' width={60} height={60} />
                <p>Your playlist</p>
              </div>
              <div className="side-one">
                <Image src="/headset-img.svg" alt='list' width={60} height={60} />
                <p>Recently played</p>
              </div>
              <div className="side-one">
                <Image src="/personicon-img.svg" alt='list' width={60} height={60} />
                <p>Subscription & Hosts</p>
              </div>

              <hr />
             
              <div className="last-list">
              <div className="side-two">
                <Image src="/circle-img.svg" alt='list' width={18} height={18} />
                <p>Wokpa for podcasters</p>
              </div>
              <div className="side-two">
                <Image src="/linelist-img.svg" alt='list' width={18} height={18} />
                <p>Top 50 podcasts</p>
              </div>
              <div className="side-two">
                <Image src="/book-img.svg" alt='list' width={18} height={18} />
                <p>Categories</p>
              </div>
              </div>
             
             
            
        </div>
    </div>
   
  )
}

export default SideBar