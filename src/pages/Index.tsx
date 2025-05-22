import { useState, useEffect } from 'react';
import GameButton from '@/components/GameButton';
import FeatureCard from '@/components/FeatureCard';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
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
  WalletCards
} from 'lucide-react';

// Team member type
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

// Vesting schedule type
interface VestingInfo {
  phase: string;
  percentage: string;
  timeline: string;
  description: string;
}

// Partner type
interface Partner {
  name: string;
  logo: string;
  type: 'VC' | 'Partner';
}

const Index = () => {
  const [showHammer, setShowHammer] = useState(false);
  const [hammerPosition, setHammerPosition] = useState({ x: 0, y: 0 });
  
  // Random mole pop-ups
  const [activeMoles, setActiveMoles] = useState<number[]>([]);

  // Team members data
  const teamMembers: TeamMember[] = [
    {
      name: "Alex Johnson",
      role: "Founder & Game Designer",
      image: "/placeholder.svg"
    },
    {
      name: "Maria Chen",
      role: "Lead Developer",
      image: "/placeholder.svg"
    },
    {
      name: "David Kim",
      role: "Blockchain Specialist",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Williams",
      role: "Marketing Lead",
      image: "/placeholder.svg"
    }
  ];

  // Vesting schedule data
  const vestingSchedule: VestingInfo[] = [
    {
      phase: "Seed Round",
      percentage: "15%",
      timeline: "6 months cliff, 18 months linear vesting",
      description: "Initial investors and early supporters"
    },
    {
      phase: "Private Sale",
      percentage: "25%",
      timeline: "3 months cliff, 12 months linear vesting",
      description: "Strategic partners and institutional investors"
    },
    {
      phase: "Public Sale",
      percentage: "10%",
      timeline: "No cliff, 6 months linear vesting",
      description: "Community and public participants"
    },
    {
      phase: "Team & Advisors",
      percentage: "20%",
      timeline: "12 months cliff, 24 months linear vesting",
      description: "Core team members and advisors allocation"
    }
  ];

  // Partners and VCs data
  const partners: Partner[] = [
    {
      name: "Crypto Ventures",
      logo: "/placeholder.svg",
      type: "VC"
    },
    {
      name: "GameFi Capital",
      logo: "/placeholder.svg",
      type: "VC"
    },
    {
      name: "Telegram Games",
      logo: "/placeholder.svg",
      type: "Partner"
    },
    {
      name: "Blockchain Alliance",
      logo: "/placeholder.svg",
      type: "Partner"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      const moleIndex = Math.floor(Math.random() * 6);
      setActiveMoles(prev => [...prev, moleIndex]);
      
      setTimeout(() => {
        setActiveMoles(prev => prev.filter(i => i !== moleIndex));
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
    window.open('https://t.me/SmashMoleBot', '_blank');
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
            transform: 'rotate(-30deg)'
          }}
        >
          <div className="w-20 h-20 bg-amber-800 rounded-b-full transform rotate-45"></div>
        </div>
      )}
      
      {/* Hero Section - adjusted to account for fixed header */}
      <section className="relative bg-gradient-to-b from-game-blue/20 to-white py-20 overflow-hidden pt-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <div className="flex items-center mb-4 justify-center md:justify-start">
                <Coins className="w-8 h-8 text-game-blue mr-2" />
                <span className="bg-game-blue text-white py-1 px-3 rounded-full text-sm">
                  Built on TON Network
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-game-blue drop-shadow-md">
                $<span className="text-game-blue">MOLE</span><span className="text-game-red">SMASH</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-medium">
                The TON ecosystem's leading Tap-to-Earn token with integrated prediction markets and daily rewards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
                  onClick={() => window.open('#tokenomics', '_self')}
                >
                  <ChartPie className="mr-2 h-5 w-5" /> View Tokenomics
                </GameButton>
              </div>
            </div>
            
            <div className="md:w-1/2 relative h-[300px] md:h-[400px]">
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-4">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className="relative">
                    <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-game-green rounded-t-full"></div>
                    {activeMoles.includes(index) && (
                      <div className="absolute bottom-0 left-0 right-0 h-full flex justify-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-brown-500 rounded-full animate-mole-pop">
                          <div className="w-full h-3/4 rounded-t-full flex justify-center items-start pt-2">
                            <div className="w-4 h-1 bg-black rounded-full mx-1"></div>
                            <div className="w-4 h-1 bg-black rounded-full mx-1"></div>
                          </div>
                          <div className="w-full flex justify-center">
                            <div className="w-8 h-2 bg-game-red rounded-full"></div>
                          </div>
                        </div>
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
        <div className="absolute top-20 left-10 text-5xl animate-float opacity-20">💰</div>
        <div className="absolute bottom-10 right-20 text-5xl animate-float opacity-20 delay-300">💎</div>
      </section>

      {/* Token Metrics Section */}
      <section className="py-16 bg-gray-50" id="tokenomics">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">$MOLE Token Metrics</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            The native utility token powering the MoleSmash ecosystem on TON Network
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-game-blue">
              <div className="flex justify-center mb-4">
                <Coins className="w-12 h-12 text-game-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Total Supply</h3>
              <p className="text-3xl font-bold text-center text-game-blue">1,000,000,000</p>
              <p className="text-gray-600 text-center">$MOLE Tokens</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-game-red">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-game-red" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Initial Market Cap</h3>
              <p className="text-3xl font-bold text-center text-game-red">$500,000</p>
              <p className="text-gray-600 text-center">Fully Diluted: $10M</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-game-green">
              <div className="flex justify-center mb-4">
                <Wallet className="w-12 h-12 text-game-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Token Type</h3>
              <p className="text-3xl font-bold text-center text-game-green">TON-20</p>
              <p className="text-gray-600 text-center">Native TON Ecosystem</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-game-yellow">
              <div className="flex justify-center mb-4">
                <ChartBar className="w-12 h-12 text-game-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Initial Price</h3>
              <p className="text-3xl font-bold text-center text-game-yellow">$0.01</p>
              <p className="text-gray-600 text-center">Public Sale Price</p>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-100 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-center">Token Allocation Overview</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-game-blue text-white px-4 py-2 rounded-full">Gameplay Rewards: 30%</div>
              <div className="bg-game-red text-white px-4 py-2 rounded-full">Team & Advisors: 20%</div>
              <div className="bg-game-green text-white px-4 py-2 rounded-full">Public Sale: 10%</div>
              <div className="bg-game-yellow text-black px-4 py-2 rounded-full">Private Sale: 25%</div>
              <div className="bg-game-purple text-white px-4 py-2 rounded-full">Ecosystem Growth: 15%</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vesting Schedule Section */}
      <section className="py-16 bg-white" id="vesting">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">$MOLE Token Vesting Schedule</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Transparent allocation and vesting of our $MOLE token
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vestingSchedule.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-200">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">$MOLE Token Utility</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            A multi-functional token powering the entire MoleSmash ecosystem
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Gamepad className="w-12 h-12 text-game-blue" />}
              title="In-Game Rewards"
              description="Earn $MOLE tokens by playing the game, completing daily missions, and smashing moles."
            />
            <FeatureCard 
              icon={<ChartPie className="w-12 h-12 text-game-red" />}
              title="Prediction Markets"
              description="Use $MOLE tokens to participate in the MOLE Predictor markets and win more tokens."
              color="bg-white"
            />
            <FeatureCard 
              icon={<TrendingUp className="w-12 h-12 text-game-green" />}
              title="Staking Rewards"
              description="Stake your $MOLE tokens to earn passive income and unlock premium game features."
            />
            <FeatureCard 
              icon={<WalletCards className="w-12 h-12 text-game-yellow" />}
              title="Governance"
              description="Vote on game development decisions and ecosystem proposals using your $MOLE holdings."
            />
            <FeatureCard 
              icon={<Trophy className="w-12 h-12 text-game-purple" />}
              title="Tournament Entry"
              description="Use $MOLE tokens to enter special tournaments with larger prize pools and rare rewards."
            />
            <FeatureCard 
              icon={<Handshake className="w-12 h-12 text-black" />}
              title="TON Ecosystem Integration"
              description="Seamlessly interact with other TON ecosystem projects and services using $MOLE."
            />
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white" id="team">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Team</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Meet the talented individuals behind MoleSmash
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
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
            ))}
          </div>
        </div>
      </section>
      
      {/* Partners and VCs Section */}
      <section className="py-16 bg-gray-50" id="partners">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Partners & Investors</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Backed by industry leaders and strategic partners
          </p>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Venture Capital Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {partners.filter(p => p.type === 'VC').map((partner, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center aspect-square">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-24 h-24 object-contain mb-4"
                  />
                  <h4 className="font-bold text-center">{partner.name}</h4>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Strategic Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {partners.filter(p => p.type === 'Partner').map((partner, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center aspect-square">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-24 h-24 object-contain mb-4"
                  />
                  <h4 className="font-bold text-center">{partner.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Game Features Section - Lower priority now */}
      <section className="py-16 bg-white" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Game Features</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Earn $MOLE tokens while enjoying these exciting game features
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Trophy className="w-12 h-12 text-game-yellow" />}
              title="Global Leaderboards"
              description="Compete with players worldwide and earn $MOLE tokens by climbing to the top."
            />
            <FeatureCard 
              icon={<Gamepad className="w-12 h-12 text-game-blue" />}
              title="Simple Gameplay"
              description="Tap to smash moles right inside Telegram - earn tokens with every successful hit!"
              color="bg-white"
            />
            <FeatureCard 
              icon={<Rocket className="w-12 h-12 text-game-red" />}
              title="Daily Missions"
              description="Complete daily tasks to earn bonus $MOLE tokens and special rewards."
            />
            <FeatureCard 
              icon={<Award className="w-12 h-12 text-game-green" />}
              title="The Huddle"
              description="Join our community events to earn double points and exclusive token rewards."
            />
            <FeatureCard 
              icon={<ChartPie className="w-12 h-12 text-game-purple" />}
              title="MOLE Predictor"
              description="Use your tokens in our prediction market to multiply your holdings."
            />
            <FeatureCard 
              icon={<MessageCircle className="w-12 h-12 text-black" />}
              title="Referral System"
              description="Invite friends to earn a percentage of their $MOLE token earnings forever."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-game-blue/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Earning $MOLE Tokens?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of players already smashing moles and earning $MOLE tokens on TON Network!</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GameButton size="xl" color="primary" onClick={handleOpenTelegram} className="animate-pulse">
              <Wallet className="mr-2 h-6 w-6" /> Play & Earn Now
            </GameButton>
            <GameButton size="xl" color="accent">
              <ChartPie className="mr-2 h-6 w-6" /> Token Dashboard
            </GameButton>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
            <div className="flex items-center">
              <Star className="text-game-yellow fill-game-yellow h-6 w-6 mr-1" />
              <Star className="text-game-yellow fill-game-yellow h-6 w-6 mr-1" />
              <Star className="text-game-yellow fill-game-yellow h-6 w-6 mr-1" />
              <Star className="text-game-yellow fill-game-yellow h-6 w-6 mr-1" />
              <Star className="text-game-yellow fill-game-yellow h-6 w-6" />
              <span className="ml-2 font-bold">4.8/5</span>
              <span className="ml-2 text-gray-500">(1,243 Reviews)</span>
            </div>
            <span className="hidden md:block text-gray-500">|</span>
            <div className="flex items-center">
              <Users className="h-6 w-6 mr-2 text-game-blue" />
              <span className="font-bold">50K+</span>
              <span className="ml-2">Active Users</span>
            </div>
            <span className="hidden md:block text-gray-500">|</span>
            <div className="flex items-center">
              <Trophy className="h-6 w-6 mr-2 text-game-yellow" />
              <span className="font-bold">$150K+</span>
              <span className="ml-2">$MOLE Distributed</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-game-blue text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <Coins className="w-6 h-6 mr-2" />
              <h2 className="text-2xl font-bold">$<span className="text-white">MOLE</span><span className="text-game-red">SMASH</span></h2>
            </div>
            
            <div className="flex gap-4 mb-4 md:mb-0">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20">
                Privacy Policy
              </Button>
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20">
                Terms of Service
              </Button>
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20">
                Contact Us
              </Button>
            </div>
            
            <div>
              <p className="text-sm text-gray-300">© 2025 MoleSmash. All Rights Reserved.</p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">About MoleSmash</h3>
              <p className="text-sm text-gray-300">
                MoleSmash is a TON ecosystem-based crypto-game that combines tap-to-earn gameplay with tokenized rewards. Built on The Open Network with a focus on prediction markets and community engagement.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <a href="#tokenomics" className="text-sm text-gray-300 hover:text-white">Tokenomics</a>
                <a href="#vesting" className="text-sm text-gray-300 hover:text-white">Token Vesting</a>
                <a href="#partners" className="text-sm text-gray-300 hover:text-white">Partners</a>
                <a href="#" className="text-sm text-gray-300 hover:text-white">Whitepaper</a>
                <a href="#" className="text-sm text-gray-300 hover:text-white">FAQ</a>
                <a href="#" className="text-sm text-gray-300 hover:text-white">Blog</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm.003 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 7.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/20">
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