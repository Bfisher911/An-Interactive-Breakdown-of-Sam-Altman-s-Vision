import React, { useState } from 'react';

// Helper for dynamic class names
const classNames = (...classes) => classes.filter(Boolean).join(' ');

// Icon Components (Lucide-React inspired SVGs)
const BrainCircuit = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5a3 3 0 1 0-5.993.129" /><path d="M12 5a3 3 0 1 1 5.993.129" /><path d="M12 12a3 3 0 1 0-5.993.129" /><path d="M12 12a3 3 0 1 1 5.993.129" /><path d="M12 19a3 3 0 1 0-5.993.129" /><path d="M12 19a3 3 0 1 1 5.993.129" /><path d="M19 12a7 7 0 1 0-14 0" /><path d="M12 19a7 7 0 1 0 0-14" />
  </svg>
);
const Rocket = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.1-3.1a2.46 2.46 0 0 0-3.2-.1c-.9.6-2.1.2-3.1-.1z" /><path d="m12 15-3-3a9 9 0 0 1 3-7 9 9 0 0 1 7 3l-3 3a9 9 0 0 1-7 3z" /><path d="m9 9 4-4" /><path d="m19 19-3-3" />
  </svg>
);
const Users = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const Recycle = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M7 19H4.5a1.5 1.5 0 0 1 0-3H7"/><path d="M12.55 5.56A2 2 0 0 0 12 5H9.5a1.5 1.5 0 0 0 0 3H12"/><path d="M16 15h2.5a1.5 1.5 0 0 0 0-3H16"/><path d="m16.9 12.2-1.4-1.4"/><path d="m11.1 12.2-1.4 1.4"/><path d="m14 19 2-2.5"/><path d="M10 5l-2 2.5"/><path d="m18 10 2.5.2"/><path d="M5.8 14.5.2 16"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.9 4.9 1.4 1.4"/><path d="m17.7 17.7 1.4 1.4"/>
    </svg>
);
const Lightbulb = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" />
  </svg>
);
const ShieldCheck = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
  </svg>
);
const Sparkles = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        <path d="M18 11.5a1.5 1.5 0 0 1 3 0" />
        <path d="M21.5 18a1.5 1.5 0 0 1 0-3" />
        <path d="M11.5 3.5a1.5 1.5 0 0 1 0 3" />
    </svg>
);
const X = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const tabs = [
  { name: 'The Gentle Singularity', icon: BrainCircuit, id: 'intro' },
  { name: 'The Near Future', icon: Rocket, id: 'future' },
  { name: 'The Flywheel Effect', icon: Recycle, id: 'flywheel' },
  { name: 'Society & Humanity', icon: Users, id: 'society' },
  { name: 'The Path Forward', icon: ShieldCheck, id: 'path' },
  { name: 'Profound Ideas', icon: Lightbulb, id: 'ideas' },
];

const content = {
  intro: {
    title: "The Gentle Singularity",
    quote: "We are past the event horizon; the takeoff has started... it’s much less weird than it seems like it should be.",
    points: [/* ... */],
    geminiPrompt: "You are a thoughtful AI analyst. Elaborate on Sam Altman's concept of a 'gentle singularity'. What are the strongest arguments for why the transition to superintelligence might be gradual and 'less weird' than expected? Conversely, what are the main counter-arguments or risks that could make it a more disruptive and abrupt event? Present your answer in a balanced way in markdown format."
  },
  future: {
    title: "A Glimpse into the Near Future",
    quote: "The ability for one person to get much more done in 2030 than they could in 2020 will be a striking change.",
    timeline: [/* ... */],
    outro: "By the 2030s, intelligence and energy will become incredibly abundant and cheap, removing two of the biggest historical limits on human progress.",
    geminiPrompt: "You are a creative futurist. Based on Sam Altman's predictions of cognitive agents by 2025 and novel insights by 2026, write a short, plausible 'day in the life' scenario for a scientific researcher in the year 2028. Show how they would interact with AI to accelerate their work and what new kinds of challenges or opportunities they might face. Format it as a short story in markdown."
  },
  flywheel: {
      title: "The Flywheel Effect: Self-Reinforcing Progress",
      quote: "If we can do a decade’s worth of research in a year, or a month, then the rate of progress will obviously be quite different.",
      points: [/* ... */],
      geminiPrompt: "You are an expert educator. Explain the concept of 'recursive self-improvement' in AI using a simple, clear analogy that a high school student could understand. Then, briefly discuss two potential societal benefits and two potential risks of this accelerating feedback loop. Please use markdown for formatting."
  },
  society: {
      title: "The Impact on Society and Humanity",
      quote: "People have a long-term important and curious advantage over AI: we are hard-wired to care about other people...",
      points: [/* ... */],
      geminiPrompt: "You are a speculative sociologist. Sam Altman suggests future jobs might seem 'fake' to us, much like our jobs would to a medieval farmer. Brainstorm three potential job titles that might be common in the year 2045, given abundant AI. For each job, provide a brief description of its responsibilities and why it would feel meaningful to the people doing it. Use markdown formatting."
  },
  path: {
      title: "The Path Forward: Challenges & Responsibilities",
      quote: "We do need to solve the safety issues, technically and societally...",
      steps: [/* ... */],
      geminiPrompt: "You are an AI ethics consultant. Sam Altman highlights the 'alignment problem' using social media as an example of misaligned AI. Propose a concrete strategy for how a large tech company could *begin* to solve the alignment problem for a new, powerful AI product. What are the first three practical steps they should take to ensure the AI's goals align with long-term human well-being? Use markdown for your response."
  },
  ideas: {
      title: "The Most Profound Ideas",
      quote: "It now looks to me like [the 'idea guys'] are about to have their day in the sun.",
      points: [/* ... */],
      geminiPrompt: "You are a philosopher of technology. Sam Altman claims that 'idea guys' will have their day in the sun. Critically analyze this statement. What are the strongest arguments in favor of this? What are the counterarguments? Does this shift in value from execution to ideation have any potential downsides for society? Present a nuanced argument using markdown."
  }
};
// Populating with original content to keep the component self-contained
content.intro.points = [
      {title: "What is the 'Singularity'?", text: "It's a hypothetical point in the future when technological growth becomes uncontrollable and irreversible, resulting in unforeseeable changes to human civilization. Altman calls it 'gentle' because it's happening gradually, becoming part of our daily lives without sudden, dramatic upheaval."},
      {title: "The 'Takeoff' Has Begun", text: "The fundamental scientific breakthroughs needed for superintelligence are behind us. Systems like GPT-4 are the foundation. The progress from here is more about scaling and refining these existing technologies."},
      {title: "Wonders Become Routine", text: "We quickly adapt to what was once considered science fiction. We go from being amazed that AI can write a paragraph to expecting it to write a novel. This rapid normalization is a key feature of the gentle singularity."}
];
content.future.timeline = [
      { year: "2025", event: "Cognitive Agents", description: "AI agents are already doing real work, like writing and debugging complex code, fundamentally changing fields like software development."},
      { year: "2026", event: "Novel Insights", description: "Expect AI systems that can make new scientific discoveries and figure out things that no human has before."},
      { year: "2027+", event: "Real-World Robots", description: "Robots will likely start performing physical tasks in the real world, from manufacturing to logistics."}
];
content.flywheel.points = [
    { title: "Recursive Self-Improvement", text: "This is the core of the flywheel. We are already using AI to accelerate AI research. This creates a feedback loop where smarter tools help us build even smarter tools, causing progress to speed up exponentially." },
    { title: "Compounding Infrastructure", text: "The massive economic value created by AI is funding an equally massive buildout of data centers and hardware. More powerful AI creates demand for more infrastructure, which enables even more powerful AI." },
    { title: "Robots Building Robots", text: "The ultimate accelerator. Once robots can manage their own supply chain—from mining materials to assembling new robots and data centers—the physical limits on growth will dramatically decrease. This will drive the cost of intelligence down towards the cost of energy." }
];
content.society.points = [
    { title: "The Future of Work", text: "Entire classes of jobs will change or disappear. However, immense new wealth will enable us to support society through this transition. History shows we invent new things to do. A farmer from 1000 years ago would see our office jobs as 'fake jobs'. The same will be true for us looking at the jobs of the future." },
    { title: "Human Connection is Key", text: "Our greatest advantage is our innate interest in other humans. We care about art made by people, stories about people, and services from people. This human-to-human connection will become even more valuable in a world of abundant AI." },
    { title: "Continuity in Change", text: "Despite the radical technological shifts, the core of human experience will remain. People will still love their families, play, create, and find meaning in their lives." }
];
content.path.steps = [
    { id: "01", title: "Solve the Alignment Problem", text: "We must ensure AI systems learn and act according to humanity's collective long-term values, not just short-term metrics. Misaligned AI is like social media feeds that are great at getting clicks, but may not be good for our well-being." },
    { id: "02", title: "Democratize Superintelligence", text: "Once safe, superintelligence must be made cheap, widely available, and not concentrated in the hands of a few. This ensures the immense benefits are shared broadly and prevents power imbalances." },
    { id: "03", title: "Foster a Global Conversation", text: "Society must collectively decide on the broad bounds for AI. This conversation needs to happen now to define what 'collective alignment' truly means and how to implement it." }
];
content.ideas.points = [
    { title: "Abundant Intelligence & Energy", text: "For all of history, ideas (intelligence) and the power to execute them (energy) have been scarce. Altman argues we are on the verge of making both nearly limitless. With these, almost any other problem becomes solvable." },
    { title: "The Value of 'Idea Guys'", text: "In a world where AI can execute complex tasks ('build it'), the limiting factor becomes the quality of the ideas themselves. People who can envision new products, new art, and new scientific questions will become the primary drivers of value." },
    { title: "Energy & Water Cost of a Query", text: "Altman provides concrete numbers: a ChatGPT query uses ~0.34 watt-hours (an oven in 1 second) and ~1/15th of a teaspoon of water. This grounds the abstract concept of AI in tangible, and surprisingly small, resource costs, suggesting a path to massive scalability." },
    { title: "The Exponential Curve", text: "Looking back, progress seems flat. Looking forward, it seems vertical. Altman's point is that we are on a smooth exponential curve. The pace of change feels manageable day-to-day, but the cumulative effect over a few years is staggering." }
];


const GeminiResponseModal = ({ content, isLoading, onClose, title }) => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4" onClick={onClose}>
        <div className="relative bg-slate-800 border border-slate-700 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-slate-800/80 backdrop-blur-sm z-10 p-4 border-b border-slate-700 flex justify-between items-center">
                <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    {title}
                </h3>
                <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                    <X className="w-6 h-6" />
                </button>
            </div>
            <div className="p-6">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center min-h-[200px] text-slate-400">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
                        <p className="mt-4">Thinking...</p>
                    </div>
                ) : (
                    <div className="prose prose-invert prose-cyan" dangerouslySetInnerHTML={{ __html: content }} />
                )}
            </div>
        </div>
    </div>
);


const App = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [modalTitle, setModalTitle] = useState("");

    const callGeminiAPI = async (prompt) => {
        let chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
        const payload = { contents: chatHistory };
        const apiKey = ""; // Left empty as per instructions
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error(`API call failed with status: ${response.status}`);
            }
            const result = await response.json();
            if (result.candidates && result.candidates.length > 0) {
                // A simple markdown to HTML converter
                let text = result.candidates[0].content.parts[0].text;
                text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;"); // Sanitize HTML tags first
                text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Bold
                text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');       // Italic
                text = text.replace(/`([^`]+)`/g, '<code>$1</code>');      // Inline code
                text = text.replace(/^(#+)\s*(.*)/gm, (match, hashes, content) => {
                    const level = hashes.length;
                    return `<h${level}>${content}</h${level}>`;
                });
                text = text.replace(/^\s*-\s(.*)/gm, '<ul><li>$1</li></ul>'); // Basic list items
                text = text.replace(/<\/ul>\s*<ul>/g, ''); // Merge consecutive lists
                text = text.replace(/\n/g, '<br />'); // Newlines
                return text;
            } else {
                return "No content received from AI. The response might be empty or blocked.";
            }
        } catch (error) {
            console.error("Gemini API call error:", error);
            return `Sorry, an error occurred while contacting the AI. Please check the console for details. Error: ${error.message}`;
        }
    };

    const handleExploreClick = async (prompt, title) => {
        if (!prompt) return;
        setModalTitle(title);
        setIsModalOpen(true);
        setIsGenerating(true);
        setModalContent("");

        const responseText = await callGeminiAPI(prompt);

        setModalContent(responseText);
        setIsGenerating(false);
    };

    const ExploreButton = ({ prompt, title }) => (
        <div className="mt-6 text-center">
            <button
                onClick={() => handleExploreClick(prompt, `Exploring "${title}"`)}
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full shadow-lg hover:scale-105 hover:shadow-cyan-400/50 transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-cyan-300"
            >
                <Sparkles className="w-5 h-5" />
                Explore with AI
            </button>
        </div>
    );

    const renderContent = () => {
        const data = content[activeTab];
        if (!data) return null;

        switch (activeTab) {
            case 'future':
                return (<div className="animate-fade-in"> <h2 className="text-3xl font-bold text-white mb-2">{data.title}</h2><p className="italic text-indigo-300 mb-6">"{data.quote}"</p><div className="space-y-6">{data.timeline.map((item, index) => (<div key={index} className="flex items-start space-x-4"><div className="flex-shrink-0 w-24 text-right"><span className="text-2xl font-bold text-cyan-400">{item.year}</span></div><div className="border-l-2 border-indigo-500 pl-4"><h3 className="text-xl font-semibold text-white">{item.event}</h3><p className="text-indigo-200">{item.description}</p></div></div>))}<p className="mt-8 text-center text-lg text-indigo-200 bg-slate-700/50 p-4 rounded-lg">{data.outro}</p></div><ExploreButton prompt={data.geminiPrompt} title={data.title} /></div>);
            case 'path':
                return (<div className="animate-fade-in"><h2 className="text-3xl font-bold text-white mb-2">{data.title}</h2><p className="italic text-indigo-300 mb-8">"{data.quote}"</p><div className="flex flex-col md:flex-row justify-center items-center gap-6">{data.steps.map((step) => (<div key={step.id} className="relative w-full md:w-1/3 p-6 bg-slate-800/70 border border-indigo-700 rounded-xl shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500 transition-all duration-300"><div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-900 font-bold w-12 h-12 flex items-center justify-center rounded-full border-4 border-slate-900">{step.id}</div><h3 className="text-xl font-semibold text-white mt-8 mb-3 text-center">{step.title}</h3><p className="text-indigo-200 text-center">{step.text}</p></div>))}</div><ExploreButton prompt={data.geminiPrompt} title={data.title} /></div>);
            default:
                return (<div className="animate-fade-in"><h2 className="text-3xl font-bold text-white mb-2">{data.title}</h2><p className="italic text-indigo-300 mb-6">"{data.quote}"</p><div className="space-y-4">{data.points.map((point, index) => (<div key={index} className="bg-slate-800/70 p-4 rounded-lg border border-slate-700 hover:border-indigo-500 transition-colors"><h3 className="text-xl font-semibold text-cyan-400 mb-2">{point.title}</h3><p className="text-indigo-200">{point.text}</p></div>))}</div><ExploreButton prompt={data.geminiPrompt} title={data.title} /></div>);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 font-sans text-white p-4 sm:p-6 md:p-8">
            <div className="max-w-5xl mx-auto">
                <header className="text-center mb-8">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 mb-2">The Gentle Singularity</h1>
                    <p className="text-lg text-indigo-300">An Interactive Breakdown of Sam Altman's Vision</p>
                </header>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={classNames('flex items-center gap-2 px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500', activeTab === tab.id ? 'bg-cyan-500 text-slate-900 shadow-lg' : 'bg-slate-800 text-indigo-200 hover:bg-slate-700')}><Icon className="w-5 h-5" /><span>{tab.name}</span></button>);
                    })}
                </div>

                <main className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-indigo-900/20 backdrop-blur-sm">
                    {renderContent()}
                </main>

                <footer className="text-center mt-8 text-sm text-slate-500">
                    <p>Based on the article "The Gentle Singularity" by Sam Altman. AI explorations powered by Gemini.</p>
                </footer>
            </div>
            {isModalOpen && <GeminiResponseModal content={modalContent} isLoading={isGenerating} onClose={() => setIsModalOpen(false)} title={modalTitle} />}
            <style>{`
                @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
                .prose h1{font-size:1.8em;margin-bottom:0.5em}.prose h2{font-size:1.5em;margin-bottom:0.5em}.prose h3{font-size:1.25em;margin-bottom:0.5em}.prose p{margin-bottom:1em}.prose strong{color:white}.prose em{color: #93c5fd;}.prose code{background-color:#374151;color:#e5e7eb;padding:0.2em 0.4em;border-radius:0.25rem;font-family:monospace}.prose ul{list-style-type:disc;padding-left:1.5em;margin-bottom:1em}.prose li{margin-bottom:0.5em}
                .prose a{color:#22d3ee;text-decoration:underline;transition:color .2s}.prose a:hover{color:#67e8f9}
                .prose blockquote{border-left:4px solid #4f46e5;padding-left:1em;margin-left:0;font-style:italic;color:#a5b4fc}
                .prose pre{background-color:#1f2937;padding:1em;border-radius:0.5rem;overflow-x:auto}
            `}</style>
        </div>
    );
};

// export default App; // Commented out for browser rendering
ReactDOM.render(React.createElement(App), document.getElementById('root'));
