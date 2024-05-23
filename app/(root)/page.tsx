import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn={firstName:"Oluwafemi", lastName:"Araoye", email:"femzyaraoye77@gmail.com"}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type='greeting'
          title='Welcome'
          user={loggedIn?.firstName||"Guest"}
          subtext='Access and manage your account and transactions eficiently.'
          />

          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1200.56}
          />
        </header>
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 12521.46},{currentBalance: 10500.22}]}/>
    </section>
  )
}

export default Home