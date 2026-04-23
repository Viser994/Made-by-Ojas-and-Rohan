import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * MS St. Louis Memorial Website
 * Kid-friendly memorial design
 */

export default function Home() {
  const [pollAnswer, setPollAnswer] = useState<string | null>(null);
  const [userResponse, setUserResponse] = useState("");
  const [responses, setResponses] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePollVote = (answer: string) => {
    setPollAnswer(answer);
  };

  const handleSubmitResponse = () => {
    if (userResponse.trim()) {
      setResponses([...responses, userResponse]);
      setUserResponse("");
      setPollAnswer(null);
    }
  };

  const timelineEvents = [
    { date: "May 1939", title: "The Journey Begins" },
    { date: "May 27, 1939", title: "Cuba Says No" },
    { date: "June 4, 1939", title: "America Says No" },
    { date: "June 7, 1939", title: "Canada Says No" },
    { date: "June 1939", title: "The Ship Goes Back" },
    { date: "1940-1945", title: "The Tragedy" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground animate-fade-in" style={{
      animation: 'fadeIn 2.5s ease-in-out'
    }}>
      <style>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663435319186/c89MvGPhZSRYavxhxQ4RwM/ms-st-louis-hero-JLyPciCYFJYJRBVAXAXqKY.webp')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div
          className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-white drop-shadow-lg mb-4">
            Remembering the MS St. Louis
          </h1>
          <h2 className="text-3xl md:text-4xl text-white drop-shadow-md mb-6">
            A Story of 937 Refugees (1939)
          </h2>
          <p className="text-lg md:text-xl text-gray-100 drop-shadow-md">
            A memorial to remember the people on the MS St. Louis
          </p>
          <p className="text-sm text-gray-200 drop-shadow-md mt-8">
            Made by Ojas and Rohan 607
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">What Happened?</h2>

          <div className="space-y-8 text-foreground">
            <p className="text-lg leading-relaxed">
              In 1939, a ship called the MS St. Louis carried 937 Jewish people who were running away from the Nazis. They were looking for a safe place to live. They tried to go to Cuba, but Cuba said no. They tried to go to America, but America said no. They even tried Canada, but Canada said no too. So the ship had to go back to Europe. When the Nazis took over, many of these people died. 254 of them were killed in the Holocaust.
            </p>
          </div>
        </div>
      </section>

      {/* MEMORIAL VISUAL SECTION */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">The Wheel of Consciousness</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://voicesintoaction.ca/wp-content/uploads/2021/09/u5_ch3_wheelofconscience_large.jpg"
                alt="Wheel of Consciousness - memorial to the MS St. Louis"
                className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>

            <div>
              <ul className="text-lg leading-relaxed space-y-4">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3 text-xl">•</span>
                  <span>This is a real memorial in Halifax, Canada that remembers the 937 people on the MS St. Louis.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3 text-xl">•</span>
                  <span>It has four gears with words like Hatred, Racism, and Prejudice. It shows how bad ideas spread when people don't speak up.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3 text-xl">•</span>
                  <span>It reminds us to treat everyone fairly and be kind to people who need help.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16">What Happened When</h2>

          <div className="relative">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform -translate-y-1/2"></div>

            {/* Timeline items */}
            <div className="flex justify-between items-center relative z-10">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  {/* Circle node */}
                  <div className="w-16 h-16 bg-white border-4 border-secondary rounded-full flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-125">
                    <div className="w-8 h-8 bg-secondary rounded-full group-hover:bg-white transition-all duration-300"></div>
                  </div>

                  {/* Text content */}
                  <div className="text-center opacity-60 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105">
                    <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                      {event.date}
                    </p>
                    <h3 className="text-sm font-semibold text-foreground max-w-xs">
                      {event.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KEY FACTS SECTION */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">The Numbers</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-t-4 border-t-primary hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                The People
              </h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    <strong>937 people</strong> were on the ship
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    Almost all were <strong>Jewish</strong> and running from the Nazis
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    They wanted to find a safe place to live
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    Only <strong>28 people</strong> were let off the ship in Cuba
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white border-t-4 border-t-primary hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                What Happened
              </h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    <strong>Three countries</strong> said no to the ship
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    <strong>620 people</strong> had to go back to Europe
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    When the Nazis invaded, <strong>532 people got trapped</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    <strong>254 people died</strong> in the Holocaust
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* WHAT WE CAN LEARN SECTION */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-center mb-12" style={{fontFamily: '"Tangerine", cursive', fontSize: '48px', color: '#154D57'}}>What Can We Learn?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Help People in Need", desc: "Imagine being on that ship - scared, desperate, just wanting safety. These were real people with families and dreams. When we see someone in trouble, we should help them. It could be a friend, a classmate, or someone from another country." },
              { title: "Stop Prejudice", desc: "The refugees were rejected just because they were Jewish. That's not fair. Prejudice happens when we judge people based on their religion, race, or where they come from. We can stop it by standing up for people and treating everyone as equals." },
              { title: "Leaders Make Choices", desc: "The leaders of Canada, America, and Cuba made a choice - and it cost lives. Our leaders today make choices that affect real people. We can speak up, ask questions, and demand that leaders do the right thing." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-background rounded-lg border-2" style={{borderColor: '#B7A08B'}}>
                <h3 className="font-bold text-lg mb-3" style={{color: '#154D57'}}>{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE POLL SECTION */}
      <section className="py-16" style={{backgroundColor: '#FEFAF7'}}>
        <div className="container max-w-3xl">
          <h2 className="text-center mb-12" style={{fontFamily: '"Tangerine", cursive', fontSize: '48px', color: '#154D57'}}>What Would You Do?</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <p className="text-lg mb-6 text-center leading-relaxed">Imagine you are a leader in 1939. A ship with 937 refugees arrives. They need help. What would you do?</p>
            
            <div className="space-y-4 mb-8">
              {['Let them in', 'Turn them away', 'Not sure'].map((option) => (
                <button
                  key={option}
                  onClick={() => handlePollVote(option)}
                  className="w-full p-4 text-left rounded-lg border-2 transition-all hover:shadow-md"
                  style={{
                    borderColor: pollAnswer === option ? '#154D57' : '#B7A08B',
                    backgroundColor: pollAnswer === option ? '#154D57' : 'white',
                    color: pollAnswer === option ? 'white' : '#000',
                    fontWeight: pollAnswer === option ? 'bold' : 'normal'
                  }}
                >
                  {option}
                </button>
              ))}
            </div>

            {pollAnswer && (
              <div className="bg-background p-4 rounded-lg mb-6 border-l-4" style={{borderColor: '#154D57'}}>
                <p className="font-semibold mb-2">Your answer: <span style={{color: '#154D57'}}>{pollAnswer}</span></p>
                <p className="text-sm">Now, tell us why you chose this answer below.</p>
              </div>
            )}
          </div>

          {/* RESPONSE INPUT */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8 border-2" style={{borderColor: '#154D57'}}>
            <label className="block text-lg font-bold mb-4" style={{color: '#154D57'}}>Tell us your thoughts:</label>
            <textarea
              value={userResponse}
              onChange={(e) => setUserResponse(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full p-4 border-2 rounded-lg focus:outline-none focus:ring-2 resize-none text-base"
              style={{borderColor: '#B7A08B'}}
              rows={6}
            />
            <button
              onClick={handleSubmitResponse}
              disabled={!pollAnswer || !userResponse.trim()}
              className="mt-4 w-full p-4 rounded-lg font-bold text-white text-lg transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              style={{backgroundColor: '#154D57'}}
            >
              Submit Your Response
            </button>
          </div>

          {/* VOICES SECTION */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-center mb-6" style={{color: '#154D57'}}>What People Think</h3>
            {responses.length === 0 ? (
              <p className="text-center text-gray-500">Be the first to share your thoughts...</p>
            ) : (
              <div className="space-y-4">
                {responses.map((response, idx) => (
                  <div key={idx} className="p-4 bg-background rounded-lg border-l-4" style={{borderColor: '#154D57'}}>
                    <p className="text-sm">{response}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHY WE MADE THIS WEBSITE SECTION */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-center mb-12" style={{fontFamily: '"Tangerine", cursive', fontSize: '48px', color: '#154D57'}}>Why We Made This Website</h2>
          
          <div className="bg-background p-8 rounded-lg border-2" style={{borderColor: '#B7A08B'}}>
            <p className="text-lg leading-relaxed">
              Well, the MS St. Louis story is important, so we wanted to be unique and enhance our idea. We didn't just want to tell this story to our class, we wanted to spread awareness to the world about this tragedy. This crisis killed 937 innocent people, so we wanted people to remember who they were. We want people to learn from history. And we want people to make better choices today.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-background/80">
            Made by Ojas and Rohan 607
          </p>
        </div>
      </footer>
    </div>
  );
}
