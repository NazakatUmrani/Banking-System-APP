import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedin = { firstName: 'Nazakat', lastName: 'Umrani', email: 'nazakatumraniofficial@gmail.com' };

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
        <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.46}
          />

        </header>

        RECENT TRANSACTION
      </div>

      <RightSidebar 
        user={loggedin}
        transactions={[]}
        banks={[ { currentBalance: 123.50 }, { currentBalance: 500.50 }]}
      />
    </section>
  )
}

export default Home