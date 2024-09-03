import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const loggedIn = {
    firstName: 'Andrew'
  }

const Home = () => {
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        subtext="Access and manage your account and transaction efficiently."
                        title="Welcome"
                        type="greeting"
                        user={loggedIn?.firstName || 'Guest'}
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
            </div>
        </section>
    )
}

export default Home;
