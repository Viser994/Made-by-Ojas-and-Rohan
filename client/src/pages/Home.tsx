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

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Timeline of Events</h2>

          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex-shrink-0 w-64">
                  <Card className="p-6 h-full bg-white border-t-4 border-t-primary hover:shadow-lg transition-all">
                    <p className="text-sm font-semibold text-primary mb-3">
                      {event.date}
                    </p>
                    <h3 className="text-lg font-semibold mb-3">{event.title}</h3>
                  </Card>
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



      {/* FOOTER */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">
            This memorial website honors the passengers of the MS St. Louis and educates about
            this shameful chapter in Canadian history.
          </p>
          <p className="text-sm text-background/70">
            Sources: United States Holocaust Memorial Museum, Pier 21 Canada, Jewish Joint
            Distribution Committee, BBC News
          </p>
        </div>
      </footer>
    </div>
  );
}
