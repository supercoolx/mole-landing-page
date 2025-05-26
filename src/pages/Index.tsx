import { useState, useEffect } from "react";
import GameButton from "@/components/GameButton";
import FeatureCard from "@/components/FeatureCard";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Play,
  Star,
  Trophy,
  Clock,
  Users,
  Smartphone,
  MessageCircle,
  Calendar,
  Handshake,
  Rocket,
  Award,
  Gamepad,
  Coins,
  Wallet,
  TrendingUp,
  ChartPie,
  ChartBar,
  WalletCards,
} from "lucide-react";

// Team member type
interface TeamMember {
  name: string;
  role: string;
  image: string;
  href: string;
}

// Vesting schedule type
interface VestingInfo {
  phase: string;
  percentage: string;
  timeline: string;
  description: string;
  color: string;
}

// Partner type
interface Partner {
  name: string;
  logo: string;
  type: "VC" | "Partner";
}

const Index = () => {
  const [showHammer, setShowHammer] = useState(false);
  const [hammerPosition, setHammerPosition] = useState({ x: 0, y: 0 });

  // Random mole pop-ups
  const [activeMoles, setActiveMoles] = useState<number[]>([]);

  // Team members data
  const teamMembers: TeamMember[] = [
    {
      name: "John Garner",
      role: "CTO - SoftSix | Cake",
      image: "/imgs/John_Garner.jpg",
      href: "https://www.cake.me/me/john-garner",
    },
    {
      name: "Tom Gilbert",
      role: "CMO - Alpha Blockchain | Cake",
      image: "/imgs/Tom_Gilbert.jpg",
      href: "https://www.cake.me/me/tom-gilbert",
    },
    {
      name: "TRAN TUAN",
      role: "CEO - CJD Tech | Cake",
      image: "/imgs/TRAN_TUAN.jpg",
      href: "https://www.cake.me/me/tran-tuan-3be3fe",
    },
  ];

  // Vesting schedule data
  const vestingSchedule: VestingInfo[] = [
    {
      phase: "Seed Round",
      percentage: "15%",
      timeline: "6 months cliff, 18 months linear vesting",
      description: "Initial investors and early supporters",
      color: "border-red-500",
    },
    {
      phase: "Private Sale",
      percentage: "25%",
      timeline: "3 months cliff, 12 months linear vesting",
      description: "Strategic partners and institutional investors",
      color: "border-blue-500",
    },
    {
      phase: "Public Sale",
      percentage: "10%",
      timeline: "No cliff, 6 months linear vesting",
      description: "Community and public participants",
      color: "border-green-500",
    },
    {
      phase: "Team & Advisors",
      percentage: "20%",
      timeline: "12 months cliff, 24 months linear vesting",
      description: "Core team members and advisors allocation",
      color: "border-yellow-500",
    },
  ];

  // Partners and VCs data
  const partners: Partner[] = [
    {
      name: "Crypto Ventures",
      logo: "/imgs/avar8.jpg",
      type: "VC",
    },
    {
      name: "GameFi Capital",
      logo: "/imgs/avar5.jpg",
      type: "VC",
    },
    {
      name: "Crypto Ventures",
      logo: "/imgs/avar10.jpg",
      type: "VC",
    },
    {
      name: "GameFi Capital",
      logo: "/imgs/avar4.jpg",
      type: "VC",
    },
    {
      name: "Telegram Games",
      logo: "/imgs/avar10.jpg",
      type: "Partner",
    },
    {
      name: "Blockchain Alliance",
      logo: "/imgs/avar10.jpg",
      type: "Partner",
    },
    {
      name: "Telegram Games",
      logo: "/imgs/avar11.jpg",
      type: "Partner",
    },
    {
      name: "Blockchain Alliance",
      logo: "/imgs/avar4.jpg",
      type: "Partner",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const moleIndex = Math.floor(Math.random() * 6);
      setActiveMoles((prev) => [...prev, moleIndex]);

      setTimeout(() => {
        setActiveMoles((prev) => prev.filter((i) => i !== moleIndex));
      }, 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (showHammer) {
      setHammerPosition({ x: e.clientX, y: e.clientY });
    }
  };

  // Handles opening the Telegram bot
  const handleOpenTelegram = () => {
    window.open("https://t.me/SmashMoleBot", "_blank");
  };

  return (
    <div className="min-h-screen" onMouseMove={handleMouseMove}>
      {/* Header Component */}
      <Header />

      {/* Floating Hammer Cursor */}
      {showHammer && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: `${hammerPosition.x - 40}px`,
            top: `${hammerPosition.y - 40}px`,
            transform: "rotate(-30deg)",
          }}
        >
          <div className="w-20 h-20 bg-amber-800 rounded-b-full transform rotate-45"></div>
        </div>
      )}

      {/* Hero Section - adjusted to account for fixed header */}
      <section className="relative bg-gradient-to-b from-[#f3d2b8]/50 to-[#f1d8c4] overflow-hidden pt-28 sm:pt-40 pb-12 sm:pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col xm:flex-row items-center justify-between gap-8">
            <div className="w-3/4 xm:w-1/2 text-center xm:text-left">
              <div className="flex items-center mb-4 justify-center md:justify-start">
                <Coins className="w-8 h-8 text-game-blue mr-2" />
                <span className="bg-game-blue text-white py-1 px-3 rounded-full text-sm">
                  Built on Binance Network
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-game-blue drop-shadow-md">
                $<span className="text-game-blue">MOLE</span>
                <span className="text-game-red">SMASH</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-medium">
                The Binance ecosystem's leading Tap-to-Earn token with
                integrated prediction markets and daily rewards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <GameButton
                  size="lg"
                  color="primary"
                  onClick={handleOpenTelegram}
                  className="animate-bounce-slow"
                >
                  <Wallet className="mr-2 h-5 w-5" /> Play & Earn $MOLE
                </GameButton>
                <GameButton
                  size="lg"
                  color="secondary"
                  onClick={() => window.open("#tokenomics", "_self")}
                >
                  <ChartPie className="mr-2 h-5 w-5" /> View Tokenomics
                </GameButton>
              </div>
            </div>

            <div className="w-3/4 xm:w-1/2 relative h-[200px] xs:h-[300px]">
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1 xs:gap-4 lg:gap-8">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className="relative">
                    <div className="absolute bottom-0 left-2 lg:left-4 right-2 lg:right-4">
                      <img src="/imgs/pit.png" alt="pit" className="" />
                    </div>
                    {activeMoles.includes(index) && (
                      <div className="absolute bottom-8 left-2 lg:left-3 right-0 flex justify-center">
                        <img
                          src="/imgs/mole.png"
                          alt=""
                          style={{ width: "70%" }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="absolute top-0 right-0 -mr-16 -mt-16">
                <div className="text-6xl animate-spin-slow opacity-20">💰</div>
              </div>
              <div className="absolute bottom-0 right-0 -mr-10 -mb-10">
                <div className="text-6xl animate-float opacity-20">💎</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 text-5xl animate-float opacity-20">
          💰
        </div>
        <div className="absolute bottom-10 right-20 text-5xl animate-float opacity-20 delay-300">
          💎
        </div>
      </section>

      {/* Token Metrics Section */}
      <section className="pt-16 bg-[#f3d2b8]/50" id="tokenomics">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            $MOLE Token Metrics
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 lg:max-w-3xl mx-auto">
            The native utility token powering the MoleSmash ecosystem on Binance
            Network
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 items-center xs:mx-20 md:mx-20 lg:mx-auto">
            <div className="bg-white p-3 sm:p-6 rounded-2xl py-10 shadow-lg border-2 border-game-blue">
              <div className="flex justify-center mb-4">
                <Coins className="w-12 h-12 text-game-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">
                Total Supply
              </h3>
              <p className="text-3xl font-bold text-center text-game-blue">
                1,000,000,000
              </p>
              <p className="text-gray-600 text-center">$MOLE Tokens</p>
            </div>

            <div className="">
              <img src="/imgs/molemoney.png" alt="" className="" />
            </div>

            <div className="bg-white p-3 sm:p-6 rounded-2xl py-10 shadow-lg border-2 border-game-red">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-game-red" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">
                Initial Market Cap
              </h3>
              <p className="text-3xl font-bold text-center text-game-red">
                $500,000
              </p>
              <p className="text-gray-600 text-center">Fully Diluted: $10M</p>
            </div>

            <div className="">
              <img src="/imgs/molecom.png" alt="" className="" />
            </div>

            <div className="bg-white p-3 sm:p-6 rounded-2xl py-10 shadow-lg border-2 border-game-green">
              <div className="flex justify-center mb-4">
                <Wallet className="w-12 h-12 text-game-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Token Type</h3>
              <p className="text-3xl font-bold text-center text-game-green">
                BNB
              </p>
              <p className="text-gray-600 text-center">Binance Native Token</p>
            </div>

            <div className="">
              <img src="/imgs/molebike.png" alt="" className="" />
            </div>

            <div className="bg-white p-6 rounded-2xl py-10 shadow-lg border-2 border-game-yellow">
              <div className="flex justify-center mb-4">
                <ChartBar className="w-12 h-12 text-game-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">
                Initial Price
              </h3>
              <p className="text-3xl font-bold text-center text-game-yellow">
                $0.01
              </p>
              <p className="text-gray-600 text-center">Public Sale Price</p>
            </div>

            <div className="">
              <img src="/imgs/molespace.png" alt="" className="" />
            </div>
          </div>

          <div className="mt-20 mx-auto bg-white/90 p-10 rounded-2xl">
            <h3 className="text-2xl sm:text-4xl font-bold mb-8 text-center">
              Token Allocation Categories
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[15px] sm:text-[18px] ">
              <div className="bg-game-blue text-white px-4 py-4 rounded-full">
                Gameplay Rewards: 60%
              </div>
              <div className="bg-game-red text-white px-4 py-4 rounded-full">
                Community Incentives: 15%
              </div>
              <div className="bg-game-green text-white px-4 py-4 rounded-full">
                Development Fund: 15%
              </div>
              <div className="bg-game-yellow text-black px-4 py-4 rounded-full">
                Liquidity & Exchange Listings: 10%
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <img
            src="/imgs/molevillage.png"
            alt=""
            className="w-screen h-[600px]"
          />
        </div>
      </section>

      <section></section>

      {/* Vesting Schedule Section */}
      <section className="py-24 bg-[#f1d8c4]" id="vesting">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            $MOLE Token Vesting Schedule
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Transparent allocation and vesting of our $MOLE token
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vestingSchedule.map((item, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-lg border-2 ${item.color}`}
              >
                <div className="flex items-center mb-4">
                  <Calendar className="w-8 h-8 text-game-blue mr-3" />
                  <h3 className="text-xl font-bold">{item.phase}</h3>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold text-lg">{item.percentage}</span>
                  <span className="text-sm bg-game-blue/10 text-game-blue px-3 py-1 rounded-full">
                    {item.timeline}
                  </span>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Utility Section */}
      <section className="py-16 bg-[#f3d2b8]/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            $MOLE Token Utility
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            A multi-functional token powering the entire MoleSmash ecosystem
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              image="/imgs/mole1.png"
              icon={<Gamepad className="w-12 h-12 text-game-blue" />}
              title="In-Game Rewards"
              description="Earn $MOLE tokens by playing the game, completing daily missions, and smashing moles."
            />
            <FeatureCard
              image="/imgs/mole2.png"
              icon={<ChartPie className="w-12 h-12 text-game-red" />}
              title="Prediction Markets"
              description="Use $MOLE tokens to participate in the MOLE Predictor markets and win more tokens."
              color="bg-white"
            />
            <FeatureCard
              image="/imgs/mole3.png"
              icon={<TrendingUp className="w-12 h-12 text-game-green" />}
              title="Staking Rewards"
              description="Stake your $MOLE tokens to earn passive income and unlock premium game features."
            />
            <FeatureCard
              image="/imgs/mole4.png"
              icon={<WalletCards className="w-12 h-12 text-game-yellow" />}
              title="Governance"
              description="Vote on game development decisions and ecosystem proposals using your $MOLE holdings."
            />
            <FeatureCard
              image="/imgs/mole5.png"
              icon={<Trophy className="w-12 h-12 text-game-purple" />}
              title="Tournament Entry"
              description="Use $MOLE tokens to enter special tournaments with larger prize pools and rare rewards."
            />
            <FeatureCard
              image="/imgs/mole6.png"
              icon={<Handshake className="w-12 h-12 text-black" />}
              title="Binance Ecosystem Integration"
              description="Seamlessly interact with other Binance ecosystem projects and services using $MOLE."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#f1d8c4]" id="team">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-4 gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Our Team
            </h2>
            {/* <img src="/imgs/ourteam.jpg" alt="" className="w-16 rounded-xl" /> */}
          </div>

          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Meet the talented individuals behind MoleSmash
          </p>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <a href={member.href} target="_blank" className="">
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 bg-gray-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-game-blue">{member.role}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Partners and VCs Section */}
      <section className="py-16 bg-[#f3d2b8]/50" id="partners">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Partners & Investors
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Backed by industry leaders and strategic partners
          </p>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Venture Capital Partners
            </h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <a href={member.href} target="_blank" className="">
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 bg-gray-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-game-blue">{member.role}</p>
                  </div>
                </a>
              ))}
            </div>
            {/* <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
              {partners
                .filter((p) => p.type === "VC")
                .map((partner, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center aspect-square"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-24 h-24   mb-4 rounded-full"
                    />
                    <h4 className="font-bold text-center">{partner.name}</h4>
                  </div>
                ))}
            </div> */}
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Strategic Partners
            </h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <a href={member.href} target="_blank" className="">
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 bg-gray-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-game-blue">{member.role}</p>
                  </div>
                </a>
              ))}
            </div>
            {/* <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
              {partners
                .filter((p) => p.type === "Partner")
                .map((partner, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center aspect-square"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-24 h-24 mb-4 rounded-full"
                    />
                    <h4 className="font-bold text-center">{partner.name}</h4>
                  </div>
                ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* Game Features Section - Lower priority now */}
      <section className="bg-[#f1d8c4]" id="features">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 xm:gap-20 px-8 sm:px-12 md:px-20 pt-8 sm:pt-12 md:pt-20">
          <img
            src="/imgs/1.jpg"
            alt=""
            className="rounded-xl w-[90%] h-[90%]"
          />
          <img
            src="/imgs/2.jpg"
            alt=""
            className="rounded-xl w-[90%] h-[90%]"
          />
          <img
            src="/imgs/3.jpg"
            alt=""
            className="rounded-xl w-[90%] h-[90%]"
          />
          <img
            src="/imgs/4.jpg"
            alt=""
            className="rounded-xl w-[90%] h-[90%]"
          />
          <img
            src="/imgs/5.jpg"
            alt=""
            className="rounded-xl w-[90%] h-[90%]"
          />
          <img
            src="/imgs/6.jpg"
            alt=""
            className="rounded-xl w-[90%] h-[90%]"
          />
        </div>
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Game Features
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Earn $MOLE tokens while enjoying these exciting game features
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Trophy className="w-12 h-12 text-game-yellow" />}
              title="Dynamic Levels"
              description="Players progress through increasingly challenging stages with unique mole behaviors."
            />
            <FeatureCard
              icon={<Gamepad className="w-12 h-12 text-game-blue" />}
              title="Power-Ups"
              description="Special items appear during gameplay, providing advantages to players."
              color="bg-white"
            />
            <FeatureCard
              icon={<Rocket className="w-12 h-12 text-game-red" />}
              title="Leaderboards"
              description=" Weekly and monthly leaderboards keep the competition fierce and engaging. "
            />
            <FeatureCard
              icon={<Award className="w-12 h-12 text-game-green" />}
              title="Customizable Themes"
              description="Players can unlock and personalize their gaming environments. 
"
            />
            {/* <FeatureCard
              icon={<ChartPie className="w-12 h-12 text-game-purple" />}
              title="MOLE Predictor"
              description="Use your tokens in our prediction market to multiply your holdings."
            />
            <FeatureCard
              icon={<MessageCircle className="w-12 h-12 text-black" />}
              title="Referral System"
              description="Invite friends to earn a percentage of their $MOLE token earnings forever."
            /> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#f3d2b8]">
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Earning $MOLE Tokens?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of players already smashing moles and earning $MOLE
            tokens on Binance Network!
          </p>

          <div className="flex flex-col xl:flex-row gap-6 justify-center mx-6 xs:mx-20 sm:mx-40 xl:mx-auto">
            <GameButton
              size="xl"
              color="primary"
              onClick={handleOpenTelegram}
              className="animate-pulse"
            >
              <Wallet className="mr-2 h-6 w-6" /> Play & Earn Now
            </GameButton>
            <GameButton size="xl" color="accent">
              <ChartPie className="mr-2 h-6 w-6" /> Token Dashboard
            </GameButton>
          </div>

          <div className="mt-12 flex flex-col items-center xl:flex-row justify-center gap-6">
            <div className="flex items-center">
              <Star className="text-game-yellow fill-game-yellow h-6 w-6 mr-1" />
              <Star className="text-game-yellow fill-game-yellow h-6 w-6 mr-1" />
              <Star className="text-game-yellow fill-game-yellow h-6 w-6 mr-1" />
              <Star className="text-game-yellow fill-game-yellow h-6 w-6 mr-1" />
              <Star className="text-game-yellow fill-game-yellow h-6 w-6" />
              <span className="ml-2 font-bold">4.8/5</span>
              <span className="ml-2 text-gray-500">(1,243 Reviews)</span>
            </div>
            <span className="hidden xl:block text-gray-500">|</span>
            <div className="flex items-center">
              <Users className="h-6 w-6 mr-2 text-game-blue" />
              <span className="font-bold">50K+</span>
              <span className="ml-2">Active Users</span>
            </div>
            <span className="hidden xl:block text-gray-500">|</span>
            <div className="flex items-center">
              <Trophy className="h-6 w-6 mr-2 text-game-yellow" />
              <span className="font-bold">$150K+</span>
              <span className="ml-2">$MOLE Distributed</span>
            </div>
          </div>

          <div className="">
            <img
              src="/imgs/molefriend.png"
              alt=""
              className="absolute -bottom-10 -right-20 hidden xs:block w-56 sm:w-64 xl:w-80"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-game-blue text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <Coins className="w-6 h-6 mr-2" />
              <h2 className="text-2xl font-bold">
                $<span className="text-white">MOLE</span>
                <span className="text-game-red">SMASH</span>
              </h2>
            </div>

            <div className="flex flex-col xs:flex-row gap-2 xs:gap-4 mb-4 md:mb-0">
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/20"
              >
                Privacy Policy
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/20"
              >
                Terms of Service
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/20"
              >
                Contact Us
              </Button>
            </div>

            <div>
              <p className="text-sm text-gray-300">
                © 2025 MoleSmash. All Rights Reserved.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">About MoleSmash</h3>
              <p className="text-sm text-gray-300">
                MoleSmash is a Binance ecosystem-based crypto-game that combines
                tap-to-earn gameplay with tokenized rewards. Built on The Open
                Network with a focus on prediction markets and community
                engagement.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="#tokenomics"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Tokenomics
                </a>
                <a
                  href="#vesting"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Token Vesting
                </a>
                <a
                  href="#partners"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Partners
                </a>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Whitepaper
                </a>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  FAQ
                </a>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Blog
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/20 text-white bg-white/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/20 text-white bg-white/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/20 text-white bg-white/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm.003 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 7.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/20 text-white bg-white/10"
                >
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
