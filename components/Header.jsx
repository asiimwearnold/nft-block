import React from 'react'
import Image from 'next/image'
import logo from '../assets/img/logo.png'
import Search from '../assets/svg/search'
import { ConnectButton } from 'web3uikit'

const styles = {
    Header: `bg-[#17171a] text-white h-20 flex gap-[100px] w-full p-[30px]`,
    headWrapper:`flex justify-center h-full, max-w-screen-xl mz-auto px-4`,
    nav:`flex justify-center item-center gap-[20px]`,
    navItem:`relative mr-1 cursor-pointer hover:opacity-60`,
    badge:`rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
    inputContainer:`flex items-center justify-center p-2 rounded bg-[#171924]`,
    input:`bg-transparent outline-none text-white w-70 mL-3`,
    naveLink:`text-white flex mx-[10px]`
}   

const Header = () => {
  return (
    <div className={styles.Header}>
        <image src={logo} alt='logo' width={220} height={220}/>
        NFT-block
        <div className={styles.headWrapper}>
            <nav className={styles.nav}>
                <div className={styles.navItem}>
                    <div className={styles.naveLink}>
                        Cryptocurrencies
                    </div>
                    <div className={styles.badge}/>
                </div>
                <div className={styles.navItem}>
                    <div className={styles.naveLink}>
                        Exchanges
                    </div>
                  
                </div>
                <div className={styles.navItem}>
                    <div className={styles.naveLink}>
                        NFT
                    </div>
                  <div className={styles.badge}/>
                </div>
                <div className={styles.navItem}>
                    <div className={styles.naveLink}>
                        Crytoverse
                    </div>
                  <div className={styles.badge}/>
                </div>
                <div className={styles.navItem}>
                    <div className={styles.naveLink}>
                        Potifolio
                    </div>
                  
                </div>
                <div className={styles.navItem}>
                    <div className={styles.naveLink}>
                        Watchlist
                    </div>
                  
                </div>
                <div className={styles.navItem}>
                    <div className={styles.naveLink}>
                        Products
                    </div>
                  
                </div>
                <div className={styles.navItem}>
                    <div className={styles.naveLink}>
                        Learn
                    </div>
                  
                </div>
                
            </nav>
            <div className='flex items-center'>
                <ConnectButton/>
                <div className={styles.inputContainer}>
                    <Search/>
                    <input className={styles.input} placeholder='Search'/>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Header