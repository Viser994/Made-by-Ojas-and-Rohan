import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

/**
 * MS St. Louis Memorial Website
 * Design Philosophy: Emotional Narrative with Textured Depth
 * - Warm earth tones (ochre, rust, terracotta) with soft blues
 * - Serif headers (Playfair Display) for emotional impact
 * - Narrative-driven layout with overlapping sections
 * - Parallax and gentle animations for immersion
 */

export default function Home() {
  const [expandedTimeline, setExpandedTimeline] = useState<number | null>(null);

  const timelineEvents = [
    {
      date: "May 13, 1939",
      title: "The Voyage Begins",
      description:
        "The MS St. Louis departs from Hamburg, Germany with 937 Jewish passengers fleeing Nazi persecution. Most are German citizens; some are from Eastern Europe. The majority have applied for US visas and plan to stay in Cuba only temporarily.",
    },
    {
      date: "May 27, 1939",
      title: "Arrival in Havana",
      description:
        "The ship arrives in Havana harbor. Only 28 passengers are allowed to disembark—22 with valid US visas and 6 with valid entry documents. The remaining 908 passengers are denied entry by the Cuban government.",
    },
    {
      date: "June 4, 1939",
      title: "US Refusal",
      description:
        "The ship sails near the Florida coast, but the US government refuses to permit the passengers to disembark. Despite media coverage and public sympathy, President Franklin D. Roosevelt does not intervene.",
    },
    {
      date: "June 7, 1939",
      title: "Canada's Denial",
      description:
        "Canada officially refuses entry to the passengers. This shameful decision marks one of the darkest moments in Canadian immigration history. The ship is forced to return to Europe.",
    },
    {
      date: "June 1939",
      title: "Return to Europe",
      description:
        "Jewish organizations negotiate with four European governments. Great Britain takes 288 passengers, the Netherlands 181, Belgium 214, and France 224. Of the 620 who returned to the continent, 532 became trapped when Germany invaded Western Europe in May 1940.",
    },
    {
      date: "1940-1945",
      title: "The Holocaust",
      description:
        "Of the 937 passengers, 254 perished in the Holocaust—84 in Belgium, 84 in Holland, and 86 in France. Only 278 of those who returned to the continent survived. The refusal of Canada, the US, and Cuba sealed the fate of hundreds.",
    },
  ];

  const poem = `In the harbor of refusal, they stood at the rail,
937 souls seeking shelter from the gathering gale.
From Hamburg they came with hope in their eyes,
Fleeing the darkness beneath European skies.

Cuba said no, America turned away,
And Canada—our Canada—chose shame that day.
"You cannot land here," the officials declared,
While the world watched in silence, unprepared.

Back to the continent, back to the night,
Back to the terror they sought to escape from sight.
254 would perish in the years that would come,
Their voices now silent, their stories not sung.

Remember the St. Louis, remember the shame,
Remember the passengers we failed to reclaim.
Remember the borders we built with our fear,
And the refugees we turned away from here.

Let their memory guide us to open our doors,
To stand with the hunted upon distant shores.
For in remembering their pain and their loss,
We honor the price of indifference's cost.`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663435319186/c89MvGPhZSRYavxhxQ4RwM/memorial-stone-hero-4EYDXHTuJfQgH7bSRvTQGt.webp')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Remembering the MS St. Louis
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 drop-shadow-md">
            A memorial to the 937 Jewish passengers denied entry by Canada in 1939
          </p>
          <p className="text-lg text-gray-200 drop-shadow-md">
            "Never forget the price of indifference"
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            The Voyage of the Damned
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              In May 1939, the German transatlantic liner MS St. Louis sailed from
              Hamburg with 937 passengers—almost all Jewish refugees fleeing Nazi
              persecution. They had applied for US visas and planned to stay in Cuba
              only temporarily, hoping to eventually reach safety in America.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              But when the ship arrived in Havana on May 27, the Cuban government
              refused to allow the passengers to land. The United States and Canada
              also turned them away. Forced to return to Europe, 254 of these
              passengers would perish in the Holocaust.
            </p>
            <p className="text-lg leading-relaxed">
              This is their story. This is Canada's shame. This is a reminder of what
              happens when we choose indifference over compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        className="py-20 px-4"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663435319186/c89MvGPhZSRYavxhxQ4RwM/historical-archive-texture-XBZJn3vuWV4fQtmk8Ap7o9.webp')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Timeline of Events
          </h2>

          <div className="space-y-6">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                <Card
                  className="p-6 cursor-pointer hover:shadow-lg transition-shadow bg-white/95 backdrop-blur"
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
                      <h3 className="text-2xl font-bold">{event.title}</h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 transition-transform ${
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

      {/* Poem Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            A Memorial Poem
          </h2>

          <Card className="p-12 bg-gradient-to-br from-orange-50 to-blue-50 border-2 border-primary/20">
            <div className="whitespace-pre-line text-lg leading-relaxed font-serif text-center">
              {poem}
            </div>
          </Card>

          <p className="text-center mt-8 text-sm text-muted-foreground italic">
            A poem in memory of the 937 passengers and the 254 who perished
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Symbolic Remembrance
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Passenger Stories Abstract */}
            <div className="overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663435319186/c89MvGPhZSRYavxhxQ4RwM/passenger-stories-abstract-PCMLmKLM6cQPrsMfNF5WDC.webp"
                alt="Abstract representation of 937 passengers"
                className="w-full h-96 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-3">937 Souls</h3>
                <p className="text-base leading-relaxed">
                  Each watercolor shape represents one of the 937 passengers. Their
                  individuality, their humanity, their dreams—all denied by borders
                  and indifference.
                </p>
              </div>
            </div>

            {/* Information Card */}
            <div className="bg-white rounded-lg shadow-xl p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Key Facts</h3>
              <ul className="space-y-4 text-base">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-4">•</span>
                  <span>
                    <strong>937 passengers</strong> boarded the MS St. Louis in May
                    1939
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-4">•</span>
                  <span>
                    <strong>28 allowed to land</strong> in Cuba; the rest were turned
                    away
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-4">•</span>
                  <span>
                    <strong>Canada denied entry</strong> on June 7, 1939—a shameful
                    decision
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-4">•</span>
                  <span>
                    <strong>254 passengers perished</strong> in the Holocaust
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-4">•</span>
                  <span>
                    <strong>Canada apologized</strong> in 2018 for its role in this
                    tragedy
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Why This Happened
          </h2>

          <div className="space-y-8">
            <Card className="p-8 border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4">The Great Depression</h3>
              <p className="text-base leading-relaxed">
                In the late 1930s, many countries—including Canada, the US, and
                Cuba—were struggling with economic hardship. Unemployment was high,
                and citizens feared that refugees would compete for scarce jobs.
                Xenophobia and antisemitism flourished in this climate of fear.
              </p>
            </Card>

            <Card className="p-8 border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4">
                Political Pressure and Antisemitism
              </h3>
              <p className="text-base leading-relaxed">
                Right-wing movements and Nazi agents actively campaigned against the
                ship's arrival. In Cuba, a massive antisemitic rally of 40,000 people
                demanded that the government refuse the passengers. Politicians,
                fearing backlash, chose indifference over compassion.
              </p>
            </Card>

            <Card className="p-8 border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4">
                The Failure of Leadership
              </h3>
              <p className="text-base leading-relaxed">
                President Franklin D. Roosevelt could have saved the passengers by
                allowing them to enter the United States. Instead, he did nothing.
                Canada's government, despite having the capacity to help, chose to
                turn the ship away. This failure of leadership had catastrophic
                consequences.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action / Memory Box */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-100 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            How We Remember
          </h2>

          <p className="text-lg leading-relaxed mb-8">
            The MS St. Louis tragedy teaches us a vital lesson: indifference in the
            face of persecution is complicity. Every person denied refuge, every
            border closed to the desperate, every "no" spoken without compassion—these
            choices have real consequences.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            In 2018, Prime Minister Justin Trudeau formally apologized for Canada's
            role in this tragedy. But an apology alone is not enough. We must
            remember, we must educate, and we must commit to never again turning away
            those in need.
          </p>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="text-xl font-semibold text-primary mb-4">
              "Never forget. Never again."
            </p>
            <p className="text-base text-muted-foreground">
              In memory of the 937 passengers of the MS St. Louis, and the 254 who
              perished in the Holocaust.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">
            This memorial website honors the passengers of the MS St. Louis and
            educates about this shameful chapter in Canadian history.
          </p>
          <p className="text-sm text-background/70">
            Sources: United States Holocaust Memorial Museum, Pier 21 Canada, Jewish
            Joint Distribution Committee
          </p>
        </div>
      </footer>
    </div>
  );
}
