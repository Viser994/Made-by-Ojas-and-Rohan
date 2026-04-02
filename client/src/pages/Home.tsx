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
      title: "Departure from Germany",
      description:
        "The MS St. Louis departs from Hamburg with 937 Jewish passengers fleeing Nazi persecution.",
    },
    {
      date: "May 27, 1939",
      title: "Arrival in Cuba",
      description:
        "The ship arrives in Havana. Only 28 passengers are allowed to disembark. The remaining 908 are denied entry.",
    },
    {
      date: "June 4, 1939",
      title: "United States Refusal",
      description:
        "The ship sails near Florida, but the US government refuses to permit the passengers to disembark.",
    },
    {
      date: "June 7, 1939",
      title: "Canada's Denial",
      description:
        "Canada officially refuses entry to the passengers. The ship is forced to return to Europe.",
    },
    {
      date: "June 1939",
      title: "Return to Europe",
      description:
        "Jewish organizations negotiate with European governments. 288 go to Great Britain, 181 to Netherlands, 214 to Belgium, 224 to France.",
    },
    {
      date: "1940-1945",
      title: "The Holocaust",
      description:
        "Of the 620 passengers who returned to the continent, 532 become trapped when Germany invades. 254 perish in the Holocaust.",
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
              In May 1939, the German transatlantic liner MS St. Louis departed from Hamburg
              with 937 passengers—almost all Jewish refugees fleeing Nazi persecution. These
              were ordinary people: families, children, elderly individuals, and professionals
              who had been stripped of their possessions and rights. Most had applied for US
              visas and planned to stay in Cuba only temporarily, hoping to eventually reach
              safety in America. They carried with them the desperate hope that the world would
              offer them refuge, that humanity would prevail over hatred, and that they might
              rebuild their lives in freedom.
            </p>

            <p className="text-lg leading-relaxed">
              But the world was not ready to help. When the MS St. Louis arrived in Havana on
              May 27, 1939, the Cuban government refused to allow the passengers to land. The
              United States, despite its rhetoric about freedom and democracy, turned the ship
              away. And Canada—our Canada—made the shameful decision to deny entry to these
              desperate refugees. Forced to return to Europe, 620 passengers were distributed
              among European countries. When Germany invaded Western Europe in May 1940, 532 of
              these passengers became trapped. By the end of the Holocaust, 254 of the MS St.
              Louis passengers had perished. This tragedy stands as a stark reminder of what
              happens when governments prioritize fear over compassion, and when the world
              chooses indifference over action.
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
              <p className="text-lg leading-relaxed mb-6">
                The Wheel of Consciousness represents the inner experiences of the 937 MS St.
                Louis passengers. At its center are the passengers themselves—individuals with
                hopes, dreams, fears, and resilience. The concentric rings symbolize the layers
                of their consciousness: their memories of home, their fears of persecution, their
                desperate hope for safety, and their profound loss.
              </p>

              <p className="text-lg leading-relaxed">
                The symbols surrounding the wheel represent the forces that shaped their fate:
                the ship that carried them, the borders that rejected them, the hatred they fled,
                the hope they clung to, and the candle of remembrance that keeps their memory
                alive. This artwork invites us to see beyond statistics and recognize the profound
                humanity of each passenger—to understand that behind the numbers were real people
                with real dreams, real fears, and real worth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Timeline of Events</h2>

          <div className="space-y-4">
            {timelineEvents.map((event, index) => (
              <div key={index}>
                <Card
                  className="p-6 cursor-pointer hover:shadow-lg transition-all border-l-4 border-l-secondary hover:border-l-primary"
                  onClick={() =>
                    setExpandedTimeline(
                      expandedTimeline === index ? null : index
                    )
                  }
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-primary mb-2">
                        {event.date}
                      </p>
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-primary transition-transform flex-shrink-0 ${
                        expandedTimeline === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {expandedTimeline === index && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-base leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  )}
                </Card>
              </div>
            ))}
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

      {/* REFLECTION SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-12">Why This Matters Today</h2>

          <Card className="p-12 bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-primary">
            <blockquote className="text-2xl font-semibold text-primary mb-6 italic">
              "Those who cannot remember the past are condemned to repeat it."
            </blockquote>
            <p className="text-lg leading-relaxed mb-8">
              — George Santayana
            </p>

            <p className="text-lg leading-relaxed mb-8">
              The MS St. Louis tragedy reminds us that indifference is a choice—and it has
              consequences. Every person denied refuge, every border closed to the desperate,
              every "no" spoken without compassion—these decisions have real human costs. In
              2018, Prime Minister Justin Trudeau formally apologized for Canada's role in this
              tragedy, acknowledging that "we failed them."
            </p>

            <p className="text-lg leading-relaxed">
              But an apology alone is not enough. We must remember the 937 passengers and the
              254 who perished. We must educate ourselves and others about this historical event.
              And we must commit to never again turning away those in desperate need of refuge.
              The passengers of the MS St. Louis deserve to be remembered—not as statistics, but
              as human beings whose lives and deaths carry profound meaning for our world today.
            </p>
          </Card>

          <div className="mt-12 p-8 bg-primary text-white rounded-lg">
            <p className="text-xl font-semibold">
              "Never forget. Never again."
            </p>
            <p className="text-base mt-2">
              In memory of the 937 passengers of the MS St. Louis
            </p>
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
