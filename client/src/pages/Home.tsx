import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * MS St. Louis Memorial Website
 * Modern, visually powerful memorial design
 * Color Palette: Teal (#154D57), Beige (#B7A08B), Soft White (#FEFAF7)
 * Typography: Tangerine (script titles), Playfair Display (body)
 * Features: Hero section, about, memorial visual, timeline, facts, reflection
 */

export default function Home() {
  const [expandedTimeline, setExpandedTimeline] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [pollAnswer, setPollAnswer] = useState<string | null>(null);
  const [userResponse, setUserResponse] = useState("");
  const [responses, setResponses] = useState<string[]>([]);

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
    }
  };

  const timelineEvents = [
    {
      date: "May 1939",
      title: "A Desperate Journey Begins",
    },
    {
      date: "May 27, 1939",
      title: "Doors Close in Cuba",
    },
    {
      date: "June 4, 1939",
      title: "America Turns Away",
    },
    {
      date: "June 7, 1939",
      title: "Canada Refuses Entry",
    },
    {
      date: "June 1939",
      title: "Forced Return to Europe",
    },
    {
      date: "1940-1945",
      title: "Tragedy Unfolds",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
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
            Canada's Denial of Jewish Refugees (1939)
          </h2>
          <p className="text-lg md:text-xl text-gray-100 drop-shadow-md">
            A digital memorial to the 937 passengers and the 254 who perished in the Holocaust
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
          <h2 className="text-center mb-12">About the MS St. Louis</h2>

          <div className="space-y-8 text-foreground">
            <p className="text-lg leading-relaxed">
              The MS St. Louis was a German ship that carried over 900 Jewish refugees fleeing the Nazis in 1939. They hoped to find safety in Cuba and later the United States, but Cuba refused to let most of them enter. Since many countries refused, the ship had to go back to Europe, which later got invaded by the Nazis, killing most of the passengers.
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
                alt="Wheel of Consciousness - symbolic representation of passengers' experiences"
                className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>

            <div>
              <ul className="text-lg leading-relaxed space-y-4">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3 text-xl">•</span>
                  <span>The Wheel of Conscience is a memorial that remembers the 900+ Jewish refugees on the MS St. Louis who were not allowed to enter Canada in 1939.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3 text-xl">•</span>
                  <span>It has four gears with the words Hatred, Racism, Xenophobia, and Anti‑Semitism, showing how harmful ideas can spread when people don't speak up.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3 text-xl">•</span>
                  <span>The memorial is in Halifax at the Canadian Museum of Immigration, reminding everyone to treat others with fairness and kindness.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16">Timeline of Events</h2>

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
          <h2 className="text-center mb-12">Key Facts</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-t-4 border-t-primary hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                The Passengers
              </h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    <strong>937 passengers</strong> boarded the MS St. Louis in May 1939
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    Almost all were <strong>Jewish refugees</strong> fleeing Nazi persecution
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    Most had applied for <strong>US visas</strong> and planned to stay in Cuba
                    temporarily
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    Only <strong>28 passengers</strong> were allowed to disembark in Cuba
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white border-t-4 border-t-primary hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                The Tragedy
              </h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    <strong>USA and Canada</strong> both refused entry to the passengers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    <strong>620 passengers</strong> returned to Europe and were distributed among
                    four countries
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    When Germany invaded in 1940, <strong>532 became trapped</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <span>
                    <strong>254 passengers perished</strong> in the Holocaust
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* WHAT CAN WE LEARN SECTION */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-center mb-12" style={{fontFamily: '"Tangerine", cursive', fontSize: '48px', color: '#154D57'}}>What Can We Learn?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Importance of Helping Refugees", desc: "The MS St. Louis passengers were desperate for safety. When countries refused to help, many died. We must remember that refugees are real people in danger who need our compassion." },
              { title: "Dangers of Prejudice and Classism", desc: "Prejudice against Jewish people led to their rejection. Economic fears made people blame vulnerable groups. We must stand against discrimination and treat all people with equal dignity." },
              { title: "Responsibility of Governments", desc: "Governments have the power to save lives or condemn them. Leaders must make ethical choices, not just follow strict rules. We must hold leaders accountable for their decisions." }
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
          <h2 className="text-center mb-12" style={{fontFamily: '"Tangerine", cursive', fontSize: '48px', color: '#154D57'}}>Would You Let the Ship In?</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <p className="text-lg mb-6 text-center leading-relaxed">Imagine you are a government leader in 1939. The MS St. Louis arrives with 937 desperate refugees fleeing persecution. What would you do?</p>
            
            <div className="space-y-4 mb-8">
              {['Yes, let them in', 'No, turn them away', 'Not sure'].map((option) => (
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
                <p className="text-sm">Now, share your reasoning below. Why did you choose this answer?</p>
              </div>
            )}
          </div>

          {/* RESPONSE INPUT */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <label className="block text-sm font-semibold mb-3" style={{color: '#154D57'}}>Why did you choose this answer?</label>
            <textarea
              value={userResponse}
              onChange={(e) => setUserResponse(e.target.value)}
              placeholder="Share your thoughts here..."
              className="w-full p-4 border-2 rounded-lg focus:outline-none focus:ring-2"
              style={{borderColor: '#B7A08B', minHeight: '100px'}}
            />
            <button
              onClick={handleSubmitResponse}
              className="mt-4 px-6 py-2 rounded-lg font-semibold text-white transition-all hover:shadow-lg"
              style={{backgroundColor: '#154D57'}}
            >
              Share Your Response
            </button>
          </div>

          {/* DISPLAY RESPONSES */}
          {responses.length > 0 && (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-6" style={{color: '#154D57'}}>What Others Are Saying ({responses.length})</h3>
              <div className="space-y-4">
                {responses.map((response, idx) => (
                  <div key={idx} className="p-4 bg-background rounded-lg border-l-4" style={{borderColor: '#B7A08B'}}>
                    <p className="text-sm italic">"<span>{response}</span>"</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* VOICES IGNORED SECTION */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-center mb-8" style={{fontFamily: '"Tangerine", cursive', fontSize: '48px', color: '#154D57'}}>Voices Ignored</h2>
          
          <div className="bg-background p-8 rounded-lg border-l-4" style={{borderColor: '#154D57'}}>
            <p className="text-lg leading-relaxed mb-6">
              During the MS St. Louis voyage, many passengers asked for help and warned it was dangerous to return to Europe. But countries like Canada did not listen and followed strict rules instead. Because of this, many people were sent back and later died because of The Holocaust.
            </p>
            <p className="text-lg leading-relaxed font-semibold" style={{color: '#154D57'}}>
              This shows why it is important to listen and help people in danger.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground py-8 text-center">
        <div className="container">
          <p className="text-sm font-semibold text-background/80">
            Made by Ojas and Rohan 607
          </p>
        </div>
      </footer>
    </div>
  );
}
