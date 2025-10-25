import { useState } from 'react';
import { Copy, Users, Trophy, Shield, Check, ChevronDown, Gamepad2, Target, MessageCircle } from 'lucide-react';

function App() {
  const [showAdvert, setShowAdvert] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedInvite, setCopiedInvite] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const serverCode = '#2LV9YV9PC';
  const discordInvite = 'https://discord.gg/2SSXFJg22H';
  const brandName = '❄𝓕𝓻𝓸𝓼𝓽𝓒𝓻𝓮𝓼𝓽❄';

  const copyToClipboard = (text: string, type: 'code' | 'invite') => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'code') {
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      } else {
        setCopiedInvite(true);
        setTimeout(() => setCopiedInvite(false), 2000);
      }
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const faqs = [
    {
      question: `What games does ${brandName} support?`,
      answer: `${brandName} is primarily focused on Brawl Stars and Clash Royale. We have dedicated channels for strategies, team formation, clan recruitment, and tournament announcements for both games.`
    },
    {
      question: "How do I join tournaments?",
      answer: "Tournament announcements are posted in our Discord server with registration details. Simply join our Discord, check the tournaments channel, and follow the instructions to participate. Prizes vary by event!"
    },
    {
      question: "Is the server active?",
      answer: "Yes! We have an active community with members online throughout the day. Whether you're looking for teammates, coaching, or just casual conversation, you'll find someone to connect with."
    },
    {
      question: "What language is spoken in the server?",
      answer: `${brandName} is an English-speaking server. All main channels require English to ensure everyone can participate in conversations and coordinate effectively.`
    },
    {
      question: "Can beginners join?",
      answer: "Absolutely! Players of all skill levels are welcome. We have experienced members who are happy to share tips, strategies, and help you improve your gameplay."
    },
    {
      question: "Are there any joining requirements?",
      answer: "No special requirements! Just join our Discord, read the rules, and start participating. For club recruitment, individual clubs may have their own trophy or skill requirements."
    }
  ];

  if (showAdvert) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <button
            onClick={() => {
              setShowAdvert(false);
              scrollToTop();
            }}
            className="mb-8 text-blue-300 hover:text-blue-200 transition-colors"
          >
            ← Back to Home
          </button>

          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {brandName} Advertisement
            </h1>

            <div className="space-y-6 mb-10">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">About Our Server</h2>
                <p className="text-gray-300 leading-relaxed">
                  {brandName} is a thriving Discord community for Brawl Stars and Clash Royale enthusiasts.
                  We host monthly tournaments, coaching sessions, and provide a friendly environment for
                  players of all skill levels. Join us to improve your gameplay, make new friends, and
                  compete for prizes!
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">Club Information</h2>
                <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xl font-mono">{serverCode}</p>
                    <button
                      onClick={() => copyToClipboard(serverCode, 'code')}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all transform hover:scale-105"
                    >
                      {copiedCode ? <Check size={18} /> : <Copy size={18} />}
                      {copiedCode ? 'Copied!' : 'Copy Code'}
                    </button>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">Server Rules</h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <Shield className="mt-1 text-blue-400 flex-shrink-0" size={20} />
                    <span>Respect all members and maintain a friendly atmosphere</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="mt-1 text-blue-400 flex-shrink-0" size={20} />
                    <span>English language only in main channels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="mt-1 text-blue-400 flex-shrink-0" size={20} />
                    <span>No spamming, advertising, or inappropriate content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="mt-1 text-blue-400 flex-shrink-0" size={20} />
                    <span>Participate actively and help fellow members grow</span>
                  </li>
                </ul>
              </section>
            </div>

            <div className="flex flex-col items-center gap-4">
              <a
                href={discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-2xl text-center"
              >
                Join Discord Now
              </a>
              <button
                onClick={() => copyToClipboard(discordInvite, 'invite')}
                className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
              >
                {copiedInvite ? <Check size={18} /> : <Copy size={18} />}
                {copiedInvite ? 'Invite Link Copied!' : 'Copy Invite Link'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="liquid-bg"></div>

      <nav className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1
            onClick={scrollToTop}
            className="text-2xl md:text-3xl font-bold cursor-pointer hover:scale-105 transition-transform bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
          >
            {brandName}
          </h1>
          <button
            onClick={() => setShowAdvert(true)}
            className="px-6 py-2 glass-button rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Advertisement
          </button>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-2 glass-card rounded-full text-sm md:text-base">
            <Trophy className="inline mr-2" size={20} />
            <span className="text-yellow-300 font-semibold">Monthly $10 Brawl Stars Competition - Winner Takes All!</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            Welcome to
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {brandName}
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the ultimate Discord community for Brawl Stars and Clash Royale players.
            Compete, learn, and dominate with fellow gamers!
          </p>

          <a
            href={discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-full text-xl font-bold transition-all transform hover:scale-110 shadow-2xl pulse-shadow"
          >
            Join Our Discord
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20 mb-24">
          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform">
            <Users className="mb-4 text-blue-400" size={40} />
            <h3 className="text-2xl font-bold mb-3">Active Community</h3>
            <p className="text-gray-300">
              Connect with passionate players, share strategies, and make lasting friendships in our vibrant server.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform">
            <Trophy className="mb-4 text-yellow-400" size={40} />
            <h3 className="text-2xl font-bold mb-3">Epic Tournaments</h3>
            <p className="text-gray-300">
              Compete in monthly tournaments with real prizes. Show off your skills and climb the leaderboards!
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform">
            <Shield className="mb-4 text-cyan-400" size={40} />
            <h3 className="text-2xl font-bold mb-3">Club Recruitment</h3>
            <p className="text-gray-300">
              Find the perfect club or recruit members. Grow together and push for glory in both games!
            </p>
          </div>
        </div>

        <section className="mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            About {brandName}
          </h2>
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-300 flex items-center gap-2">
                  <Target size={28} />
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {brandName} was created to bring together the most dedicated and passionate Brawl Stars and
                  Clash Royale players in one welcoming community. We believe in fostering growth, competition,
                  and camaraderie among gamers who share a love for these incredible Supercell titles.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-300 flex items-center gap-2">
                  <Trophy size={28} />
                  What We Offer
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Monthly tournaments with cash prizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Free coaching from experienced players</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Strategy discussions and meta analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Club recruitment and team building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Friendly matches and scrimmages</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4 text-blue-300 flex items-center gap-2">
                <MessageCircle size={28} />
                Community Values
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                At {brandName}, we prioritize respect, sportsmanship, and inclusivity. Whether you're a
                competitive player pushing for top ranks or a casual gamer looking for fun matches, you'll
                find your place here. Our moderators ensure a safe, positive environment where everyone can
                enjoy gaming together.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We regularly host monthly events, giveaways, and community game nights. Join us today and become
                part of a growing family of gamers who support each other both in-game and beyond!
              </p>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Game Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Gamepad2 className="text-yellow-400" size={40} />
                <h3 className="text-2xl font-bold">Brawl Stars</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Dedicated channels for each game mode</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Brawler tier lists and meta discussions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Club recruitment for competitive and casual clubs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Tournament organization with prize pools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Strategy guides and gameplay tips</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Gamepad2 className="text-blue-400" size={40} />
                <h3 className="text-2xl font-bold">Clash Royale</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Deck building advice from top players</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Meta updates and balance change discussions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Clan recruitment and war coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Friendly battle challenges and practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Arena pushing tips and tricks</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="glass-card p-8 md:p-12 rounded-3xl max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-slate-700 last:border-0 pb-4 last:pb-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between text-left py-2 hover:text-blue-300 transition-colors"
                  >
                    <span className="text-lg font-semibold pr-4">{faq.question}</span>
                    <ChevronDown
                      size={24}
                      className={`flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="text-gray-300 leading-relaxed pl-2">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center mb-12">
          <div className="glass-card p-12 rounded-3xl max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Ready to Join the Action?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't miss out on monthly tournaments, events, and an amazing gaming community. Join {brandName} today!
            </p>
            <a
              href={discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-full text-xl font-bold transition-all transform hover:scale-110 shadow-2xl pulse-shadow"
            >
              Join Our Discord
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 text-center py-12 text-gray-400">
        <p>{brandName} &copy; 2025 - English Speaking Server</p>
        <p className="mt-2">Server Code: {serverCode}</p>
      </footer>
    </div>
  );
}

export default App;
