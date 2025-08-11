import React, { useState } from 'react';

const principlesData = [
  {
    title: "Joy, Play, Beauty",
    items: [
      "Choose interesting. Design a life that stays interesting.",
      "Celebrate small wins like they're big. Joy is a force multiplier.",
      "Default to happy. Keep it light; nothing is worth losing your spark.",
      "Make it beautiful. Feed your work with warm, nostalgic feelings.",
      "Keep it novel without burning out. Rotate toys, not purpose.",
      "Life is worth living. Act like it daily."
    ]
  },
  {
    title: "Identity & Meaning",
    items: [
      "Give things your touch. Meaning comes from making it yours.",
      "Remember who you are. Love the weird niches that move you.",
      "Seek nothing outside; everything you need is already here.",
      "Detach from identities to see who you are."
    ]
  },
  {
    title: "Craft, Focus & Simplicity",
    items: [
      "Constraints are blessings. Start broad, then simplify and unify.",
      "No clever bypasses. Finish the real task, then optimize.",
      "Take a simple idea seriously. Go deep, not wide.",
      "Break complexity with action. Think by building.",
      "Make it work, push it hard, then clean it up.",
      "Focus like a magnifying glass. Small target, sustained heat."
    ]
  },
  {
    title: "Momentum & Action",
    items: [
      "Protect momentum. Never break the chain if you can help it.",
      "Progress calms the soul. Move one step—now.",
      "Motivation follows action, not the other way around.",
      "Ship a landing page, get real feedback. Always.",
      "Action generates energy. Move first, feel later.",
      "To re-enter flow, stack tiny wins until you're rolling.",
      "Use emotional surges to break escape velocity.",
      "If you're lost, change the search space."
    ]
  },
  {
    title: "Courage, Risk & Leadership",
    items: [
      "Leadership = show up in storms and pull a rabbit from the hat.",
      "The river test: stop staring at the water—jump.",
      "After a setback, stand up and go again. Courage is reps.",
      "Work where others give up. That's your edge.",
      "Belief without reasons. Plant your flag and stand."
    ]
  },
  {
    title: "Mind, Discipline & Grit",
    items: [
      "Repetition creates depth. Routine is meditation in motion.",
      "Guard the self-talk. Your words decide your weather.",
      "Train the uncomfortable-muscle every day.",
      "If the mind is noisy, train the body hard; then think.",
      "Answers are within. Check inside before you chase outside.",
      "When you don't feel like it—do it. Shoot that voice on sight.",
      "Take your mind into deep waters until it surrenders.",
      "Resist cheap dopamine. Easy things hollow you out.",
      "Do hard things to stay yourself.",
      "Kill insecurity with learning. Be a loud beginner.",
      "Unconform. Your difference is a weapon.",
      "Endure and cope when you must. Keep moving.",
      "Outlast your mind's story. You can rewrite it.",
      "Sometimes try softer—relax into skill (Musashi)."
    ]
  },
  {
    title: "Perspective & Renewal",
    items: [
      "Context matters. Advice only works in the moment you're in.",
      "Practice rebirth. Reset rituals > ruts.",
      "Borrow glasses. Use other perspectives to see clearly.",
      "Cure boredom with contribution. Start helping; energy follows.",
      "When foggy, go a little extreme to regain altitude.",
      "Touch grass. National parks are palette cleansers for the brain.",
      "Never return to the numbness of stagnation."
    ]
  },
  {
    title: "Purpose, Time & Legacy",
    items: [
      "Purpose keeps the body from sunsetting. Protect it.",
      "Stay in the game. Time in the arena beats talent on the couch.",
      "Remember time: you're not early anymore. Act like it matters.",
      "Build the man your future kid would admire.",
      "Read daily. Books keep the inner light on.",
      "Build tools that extend your brain. Augment, don't stall.",
      "When stuck, go animal—full commitment for a short burst.",
      "God felt right to me. Stay humble to the mystery."
    ]
  }
];

const Principles = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-6">Note to Myself</h1>
      
      {principlesData.map((section, index) => (
        <div key={index} className="border-b border-gray-700">
          <button
            onClick={() => toggleSection(index)}
            className="w-full text-left py-3 px-1 hover:bg-gray-900 transition-colors flex justify-between items-center"
          >
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <span className="text-gray-400 text-sm">
              {openSection === index ? '−' : '+'}
            </span>
          </button>
          
          {openSection === index && (
            <div className="pb-4 px-1">
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Principles