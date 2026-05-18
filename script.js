const TRAITS = {
  leadership: "Leadership",
  logic: "Logic",
  empathy: "Empathy",
  creativity: "Creativity",
  confidence: "Confidence",
  discipline: "Discipline",
  social: "Social Energy",
  calmness: "Emotional Balance"
};

const QUESTIONS = [
  {
    text: "When things don't go as planned, what do you usually do?",
    options: [
      { text: "Stay calm and find another solution ", scores: { calmness: 3, logic: 2, confidence: 1 } },
      { text: "Feel stressed but eventually manage ", scores: { calmness: 1, discipline: 2, empathy: 1 } },
      { text: "Get frustrated quickly ", scores: { confidence: 1, leadership: 1 } },
      { text: "Avoid dealing with it for a while ", scores: { creativity: 1, calmness: 1 } },
      { text: "Ask others for help immediately ", scores: { empathy: 2, social: 2 } }
    ]
  },
  {
    text: "Which environment makes you feel most comfortable?",
    options: [
      { text: "Quiet and peaceful ", scores: { calmness: 3, logic: 1, discipline: 1 } },
      { text: "Social and energetic ", scores: { social: 3, confidence: 2 } },
      { text: "Competitive and challenging ", scores: { leadership: 3, confidence: 2, discipline: 1 } },
      { text: "Creative and flexible ", scores: { creativity: 3, calmness: 1 } },
      { text: "Organized and structured ", scores: { discipline: 3, logic: 2 } }
    ]
  },
  {
    text: "What motivates you the most?",
    options: [
      { text: "Success and achievement ", scores: { leadership: 3, confidence: 2, discipline: 1 } },
      { text: "Happiness and peace ", scores: { calmness: 3, empathy: 1 } },
      { text: "Money and security ", scores: { discipline: 2, logic: 2 } },
      { text: "Knowledge and learning ", scores: { logic: 3, creativity: 1, discipline: 1 } },
      { text: "Relationships and connection ", scores: { empathy: 3, social: 2 } }
    ]
  },
  {
    text: "When making important decisions, you mostly rely on:",
    options: [
      { text: "Logic and facts ", scores: { logic: 3, discipline: 2 } },
      { text: "Emotions and intuition ", scores: { empathy: 2, creativity: 2 } },
      { text: "Advice from others ", scores: { social: 2, empathy: 2 } },
      { text: "Past experiences ", scores: { discipline: 2, logic: 2, calmness: 1 } },
      { text: "Whatever feels right in the moment ", scores: { creativity: 2, confidence: 1 } }
    ]
  },
  {
    text: "How do you usually handle conflicts?",
    options: [
      { text: "Solve them directly and calmly ", scores: { leadership: 2, calmness: 3, empathy: 1 } },
      { text: "Avoid them whenever possible ", scores: { calmness: 1, empathy: 1 } },
      { text: "Become emotional or defensive ", scores: { confidence: 1 } },
      { text: "Try to keep everyone happy ", scores: { empathy: 3, social: 1 } },
      { text: "Stay silent and distance yourself ", scores: { logic: 1, calmness: 1 } }
    ]
  },
  {
    text: "In a group, you usually prefer to:",
    options: [
      { text: "Lead the group ", scores: { leadership: 3, confidence: 3, social: 1 } },
      { text: "Support others ", scores: { empathy: 3, social: 2 } },
      { text: "Work independently ", scores: { logic: 2, discipline: 2, calmness: 1 } },
      { text: "Observe quietly first ", scores: { logic: 2, calmness: 2 } },
      { text: "Adapt depending on the situation ", scores: { creativity: 2, empathy: 1, calmness: 1 } }
    ]
  },
  {
    text: "What type of people do you enjoy most?",
    options: [
      { text: "Funny and energetic people ", scores: { social: 3, creativity: 1 } },
      { text: "Intelligent and thoughtful people ", scores: { logic: 3, calmness: 1 } },
      { text: "Ambitious and hardworking people ", scores: { leadership: 2, discipline: 3 } },
      { text: "Kind and caring people ", scores: { empathy: 3, social: 1 } },
      { text: "Calm and emotionally mature people ", scores: { calmness: 3, empathy: 1 } }
    ]
  },
  {
    text: "Which fear affects you the most?",
    options: [
      { text: "Failure ", scores: { discipline: 2, leadership: 1 } },
      { text: "Rejection ", scores: { empathy: 2, social: 1 } },
      { text: "Loneliness ", scores: { social: 2, empathy: 1 } },
      { text: "Losing control ", scores: { discipline: 2, logic: 1 } },
      { text: "Being misunderstood ", scores: { creativity: 2, empathy: 2 } }
    ]
  },
  {
    text: "Your ideal life would be:",
    options: [
      { text: "Successful and respected ", scores: { leadership: 3, confidence: 2 } },
      { text: "Peaceful and balanced ", scores: { calmness: 3, empathy: 1 } },
      { text: "Adventurous and exciting ", scores: { creativity: 3, confidence: 2 } },
      { text: "Financially secure and stable ", scores: { discipline: 3, logic: 2 } },
      { text: "Meaningful and emotionally fulfilling ", scores: { empathy: 3, creativity: 1 } }
    ]
  },
  {
    text: "What do people misunderstand about you most often?",
    options: [
      { text: "My intentions ", scores: { leadership: 1, empathy: 2 } },
      { text: "My emotions ", scores: { empathy: 2, calmness: 1 } },
      { text: "My confidence ", scores: { confidence: 3, leadership: 1 } },
      { text: "My personality ", scores: { creativity: 2, social: 1 } },
      { text: "My silence or behavior ", scores: { logic: 2, calmness: 2 } }
    ]
  },
  {
    text: "Under pressure, you usually become:",
    options: [
      { text: "More focused ", scores: { discipline: 3, logic: 2, confidence: 1 } },
      { text: "More emotional ", scores: { empathy: 2 } },
      { text: "More quiet ", scores: { calmness: 2, logic: 1 } },
      { text: "More aggressive ", scores: { confidence: 2, leadership: 1 } },
      { text: "More dependent on others ", scores: { social: 2, empathy: 1 } }
    ]
  },
  {
    text: "Which quality describes you best?",
    options: [
      { text: "Creative ", scores: { creativity: 3 } },
      { text: "Logical ", scores: { logic: 3 } },
      { text: "Loyal ", scores: { empathy: 3 } },
      { text: "Ambitious ", scores: { leadership: 2, confidence: 2 } },
      { text: "Adaptable ", scores: { creativity: 2, calmness: 2 } }
    ]
  },
  {
    text: "What matters more to you?",
    options: [
      { text: "Freedom ", scores: { creativity: 3, confidence: 1 } },
      { text: "Stability ", scores: { discipline: 3, calmness: 1 } },
      { text: "Recognition ", scores: { leadership: 2, confidence: 3 } },
      { text: "Relationships ", scores: { empathy: 3, social: 2 } },
      { text: "Personal growth ", scores: { discipline: 2, logic: 1, creativity: 1 } }
    ]
  },
  {
    text: "How do you recharge your energy?",
    options: [
      { text: "Spending time alone ", scores: { calmness: 3, logic: 1 } },
      { text: "Talking to friends ", scores: { social: 3, empathy: 1 } },
      { text: "Doing hobbies ", scores: { creativity: 2, discipline: 1 } },
      { text: "Sleeping / resting ", scores: { calmness: 2 } },
      { text: "Trying new experiences ", scores: { creativity: 3, confidence: 1 } }
    ]
  },
  {
    text: "If you had unlimited resources, what would you do first?",
    options: [
      { text: "Travel the world ", scores: { creativity: 3, confidence: 1 } },
      { text: "Build something impactful ", scores: { leadership: 3, creativity: 2, discipline: 1 } },
      { text: "Help family and friends ", scores: { empathy: 3, social: 1 } },
      { text: "Learn and explore new things ", scores: { logic: 2, creativity: 2, discipline: 1 } },
      { text: "Live peacefully without stress ", scores: { calmness: 3, empathy: 1 } }
    ]
  }
];

const PERSONALITY_ARCHETYPES = [
  {
    name: "Strategic Leader",
    icon: "assets/leader.png",
    needs: ["leadership", "confidence", "discipline"],
    strengths: ["Takes initiative", "Makes bold decisions", "Handles responsibility"],
    growth: ["Listen before leading", "Avoid forcing every situation", "Balance ambition with patience"]
  },
  {
    name: "Creative Explorer",
    icon: "assets/rocket.png",
    needs: ["creativity", "confidence", "social"],
    strengths: ["Original ideas", "High curiosity", "Fast adaptability"],
    growth: ["Build consistency", "Finish what you start", "Use structure to protect creativity"]
  },
  {
    name: "Logical Analyst",
    icon: "assets/brain.png",
    needs: ["logic", "discipline", "calmness"],
    strengths: ["Deep thinking", "Problem solving", "Careful planning"],
    growth: ["Do not overthink everything", "Trust emotions sometimes", "Communicate your thoughts clearly"]
  },
  {
    name: "Supportive Empath",
    icon: "assets/heart.png",
    needs: ["empathy", "social", "calmness"],
    strengths: ["Understands people", "Creates comfort", "Strong loyalty"],
    growth: ["Set boundaries", "Do not carry everyone's emotions", "Say no when needed"]
  },
  {
    name: "Balanced Achiever",
    icon: "assets/bolt.png",
    needs: ["discipline", "logic", "confidence"],
    strengths: ["Focused effort", "Reliable performance", "Practical mindset"],
    growth: ["Take creative risks", "Rest before burnout", "Be flexible when plans change"]
  }
];

let answers = {};
let userName = "";

const $ = id => document.getElementById(id);
const show = id => {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
};

function renderQuestions(filter = "") {
  const wrap = $("questionsWrap");
  wrap.innerHTML = "";
  const f = filter.trim().toLowerCase();

  QUESTIONS.forEach((q, i) => {
    const haystack = `${q.text} ${q.options.map(o => o.text).join(" ")}`.toLowerCase();
    if (f && !haystack.includes(f)) return;

    const card = document.createElement("article");
    card.className = "question-card";
    card.innerHTML = `
      <div class="q-number">Question ${i + 1} of ${QUESTIONS.length}</div>
      <div class="q-text">${q.text}</div>
      <div class="options">
        ${q.options.map((o, idx) => `
          <label class="option ${answers[i] === idx ? "selected" : ""}">
            <input type="radio" name="q${i}" ${answers[i] === idx ? "checked" : ""}/>
            <span>${o.text}</span>
          </label>
        `).join("")}
      </div>`;

    card.querySelectorAll(".option").forEach((label, idx) => {
      label.addEventListener("click", () => {
        answers[i] = idx;
        updateProgress();
        renderQuestions($("searchInput").value);
      });
    });

    wrap.appendChild(card);
  });

  if (!wrap.children.length) {
    wrap.innerHTML = '<p class="warning">No matching questions found. Clear the search to see all questions.</p>';
  }
}

function updateProgress() {
  const count = Object.keys(answers).length;
  $("answeredCount").textContent = count;
  $("progressFill").style.width = `${(count / QUESTIONS.length) * 100}%`;
  $("submitBtn").disabled = count !== QUESTIONS.length;
  $("warning").style.display = count === QUESTIONS.length ? "none" : "block";
}

function calculate() {
  const raw = Object.fromEntries(Object.keys(TRAITS).map(t => [t, 0]));
  const max = Object.fromEntries(Object.keys(TRAITS).map(t => [t, 0]));

  QUESTIONS.forEach((q, i) => {
    q.options.forEach(option => {
      Object.entries(option.scores).forEach(([trait, value]) => {
        max[trait] += value;
      });
    });

    const selected = q.options[answers[i]];
    Object.entries(selected.scores).forEach(([trait, value]) => {
      raw[trait] += value;
    });
  });

  const percentages = {};
  Object.keys(TRAITS).forEach(trait => {
    percentages[trait] = max[trait] ? Math.round((raw[trait] / max[trait]) * 100) : 0;
  });

  const ranked = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
  const topTraits = ranked.slice(0, 3);

  const archetype = PERSONALITY_ARCHETYPES
    .map(type => ({
      ...type,
      match: Math.round(type.needs.reduce((sum, trait) => sum + percentages[trait], 0) / type.needs.length)
    }))
    .sort((a, b) => b.match - a.match)[0];

  const summary = buildDynamicSummary(archetype, topTraits, percentages);
  return { percentages, ranked, topTraits, archetype, summary };
}

function buildDynamicSummary(archetype, topTraits, percentages) {
  const [first, second] = topTraits;
  const topName = TRAITS[first[0]];
  const secondName = TRAITS[second[0]];

  return `${userName}, your result is not fixed/static — it is calculated from your exact answer pattern. Your strongest trait is ${topName} at ${first[1]}%, followed by ${secondName} at ${second[1]}%. This creates a ${archetype.name} profile: someone who naturally shows ${topName.toLowerCase()} while also using ${secondName.toLowerCase()} in decisions, relationships, and pressure situations.`;
}

function iconImg(src, alt = "") {
  return `<img class="section-icon" src="${src}" alt="${alt}">`;
}

function showResult() {
  const { percentages, ranked, topTraits, archetype, summary } = calculate();
  const average = Math.round(Object.values(percentages).reduce((a, b) => a + b, 0) / Object.keys(percentages).length);

  $("resultContent").innerHTML = `
    <div class="result-card">
      <img class="result-icon" src="${archetype.icon}" alt="${archetype.name} icon">
      <small class="pill"><img class="mini-icon" src="assets/sparkle.png" alt=""> ${userName}'s Dynamic MindMap Profile</small>
      <div class="personality-type">${archetype.name}</div>
      <p>${summary}</p>
      <div class="chips">
        ${topTraits.map(([trait, score]) => `<span class="chip">${TRAITS[trait]} · ${score}%</span>`).join("")}
      </div>
    </div>

    <div class="traits">
      <h3>${iconImg("assets/chart.png")} Dynamic Trait Scores</h3>
      ${ranked.map(([trait, score]) => `
        <div class="trait-row">
          <div class="trait-name">${TRAITS[trait]}</div>
          <div class="trait-bg"><div class="trait-fill" style="width:${score}%"></div></div>
          <div class="trait-score">${score}%</div>
        </div>`).join("")}

      <h3>${iconImg("assets/strength.png")} Strengths Generated From Your Scores</h3>
      ${archetype.strengths.map(item => `<div class="insight">→ ${item}</div>`).join("")}

      <h3>${iconImg("assets/growth.png")} Growth Areas Generated From Your Scores</h3>
      ${archetype.growth.map(item => `<div class="insight">→ ${item}</div>`).join("")}

      <h3>${iconImg("assets/dna.png")} Your Trait Combination</h3>
      <div class="insight">→ Highest trait: ${TRAITS[ranked[0][0]]} (${ranked[0][1]}%)</div>
      <div class="insight">→ Lowest trait: ${TRAITS[ranked[ranked.length - 1][0]]} (${ranked[ranked.length - 1][1]}%)</div>
      <div class="insight">→ Overall personality intensity: ${average}/100</div>

      <p style="text-align:center;font-weight:900;color:#4f46e5">Result is calculated live from selected answers, not selected from a fixed page.</p>
    </div>`;

  show("resultScreen");
}

$("year").textContent = new Date().getFullYear();

$("startBtn").addEventListener("click", () => {
  const name = $("nameInput").value.trim();
  if (!name) {
    $("nameInput").focus();
    return;
  }
  userName = name;
  $("greeting").textContent = `Hey ${userName}!`;
  renderQuestions();
  updateProgress();
  show("questionScreen");
});

$("nameInput").addEventListener("keydown", e => {
  if (e.key === "Enter") $("startBtn").click();
});

$("searchInput").addEventListener("input", e => renderQuestions(e.target.value));
$("submitBtn").addEventListener("click", showResult);

$("retakeBtn").addEventListener("click", () => {
  answers = {};
  userName = "";
  $("nameInput").value = "";
  $("searchInput").value = "";
  show("nameScreen");
  window.location.hash = "quiz";
});
