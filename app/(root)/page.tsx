import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedin = { firstName: 'Nazakat' };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedin?.firstName || 'Guest'}
            subtext="Access and manage your account and transaction efficiently."
          />
        </header>
        <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.46}
        />
      </div>
    </section>
  )
}

export default Home