// ==================== APP DATA ====================

const PHASE_QUESTS = {
    'phase-y1': {
        daily: [
            { id: '1d-1', title: 'Boolean Drill', desc: 'Solve 3 complex boolean reduction algorithms or K-Maps.' },
            { id: '1d-2', title: 'C-Programming Logic', desc: 'Code one data structure logic (linked list/pointers) in C.' },
            { id: '1d-3', title: 'Circuit Simulation', desc: 'Simulate one pure RLC/RC circuit in LTSpice.' },
            { id: '1d-4', title: 'Breadboard Comfort', desc: 'Wire up a simple logic gate or LED circuit physically.' },
            { id: '1d-5', title: 'The Linux Habit', desc: 'Spend 30m doing normal work entirely in Ubuntu terminal.' }
        ],
        weekly: [
            { id: '1w-1', title: 'The FSM Build', desc: 'Synthesize a Moore or Mealy state machine physically or in basic Verilog.' },
            { id: '1w-2', title: 'Symposium Concept', desc: 'Read 2 pages of a tech paper for your upcoming presentation.' }
        ]
    },
    'phase-y2': {
        daily: [
            { id: '2d-1', title: 'RTL Typing', desc: 'Write 1 isolated Verilog module (Mux, Decoder, Flip-Flop) from memory.' },
            { id: '2d-2', title: 'Shell Scripting', desc: 'Write a basic Bash script mapping out a directory structure.' },
            { id: '2d-3', title: 'Architecture Quiz', desc: 'Review instructions for a RISC-V pipeline stage.' },
            { id: '2d-4', title: 'Tool Familiarity', desc: 'Open ModelSim/Vivado and compile a module safely.' },
            { id: '2d-5', title: 'Portfolio Update', desc: 'Push 1 cleanly documented code piece to your hardware GitHub.' }
        ],
        weekly: [
            { id: '2w-1', title: 'Mini-Core Integration', desc: 'Combine 3-4 Verilog modules into a single Top-Level architecture with a testbench.' },
            { id: '2w-2', title: 'Lithography Study', desc: 'Watch an in-depth video on CMOS fabrication physics.' }
        ]
    },
    'phase-y3': {
        daily: [
            { id: '3d-1', title: 'STA Drill', desc: 'Calculate setup and hold slack for a simple path mathematically.' },
            { id: '3d-2', title: 'SystemVerilog OOP', desc: 'Write one SystemVerilog class using inheritance and polymorphism.' },
            { id: '3d-3', title: 'Scripting Authority', desc: 'Write a python script that parses a log file for "Error" tags.' },
            { id: '3d-4', title: 'Low Power Concept', desc: 'Review clock gating logic and multi-Vth threshold math.' },
            { id: '3d-5', title: 'Internship Prep', desc: 'Solve one core company interview question (Intel / Synopsys).' }
        ],
        weekly: [
            { id: '3w-1', title: 'UVM / PD Challenge', desc: 'Depending on track: Build a UVM sequence OR route a macro floorplan.' },
            { id: '3w-2', title: 'Protocol Deep-Dive', desc: 'Study the waveform diagrams of AMBA APB read/write cycles.' }
        ]
    },
    'phase-y4': {
        daily: [
            { id: '4d-1', title: 'Capstone Execution', desc: 'Spend 45 mins actively building your 8th-semester hardware project.' },
            { id: '4d-2', title: 'Placement Aptitude', desc: 'Solve 10 Quantitative Aptitude questions for screening rounds.' },
            { id: '4d-3', title: 'Resume Iteration', desc: 'Rewrite 1 bullet point on your resume using XYZ format.' },
            { id: '4d-4', title: 'The "Dad" Pitch', desc: 'Practice explaining your project out loud simply and confidently.' },
            { id: '4d-5', title: 'Advanced Verification', desc: 'Run a DRC geometry check or testbench code-coverage check.' }
        ],
        weekly: [
            { id: '4w-1', title: 'Mock Interview', desc: 'Conduct a 45-minute mock technical interview with a peer.' },
            { id: '4w-2', title: 'Direct Applications', desc: 'Reach out to 2 hiring managers or alumni on LinkedIn with your portfolio.' }
        ]
    },
    'phase-y5-6': {
        daily: [
            { id: '5d-1', title: 'Jira Breakdown', desc: 'Clear or escalate all pending Jira/Bug tickets assigned to your block.' },
            { id: '5d-2', title: 'Code Review', desc: 'Submit pull requests or review peer RTL code for optimization.' },
            { id: '5d-3', title: 'Parental Fund Transfer', desc: 'Ensure financial systems are tracking your ₹20K/month parent payout.' },
            { id: '5d-4', title: 'Toolsmithing', desc: 'Refine the automation script you built for your department.' },
            { id: '5d-5', title: 'Post-Silicon Analysis', desc: 'Review failure traces from lab testing.' }
        ],
        weekly: [
            { id: '5w-1', title: 'Mid-Level Strategy', desc: 'Map out exactly what impact you need to show for your next promotion cycle.' },
            { id: '5w-2', title: 'Ecosystem Up-skill', desc: 'Read a whitepaper on next-generation protocols (PCIe Gen7, CXL).' }
        ]
    },
    'phase-y7-8': {
        daily: [
            { id: '7d-1', title: 'Subsystem Sync', desc: 'Align caching and memory teams to ensure coherency specs are met.' },
            { id: '7d-2', title: 'Power Intent Check', desc: 'Run UPF extraction. Ensure power domains are correctly isolated.' },
            { id: '7d-3', title: 'Interviewing Candidates', desc: 'Spend 30 mins grading technical interview tests for entry-engineers.' },
            { id: '7d-4', title: 'Industry Networking', desc: 'Connect or exchange ideas with a Principal architect at a rival tier-1.' },
            { id: '7d-5', title: 'The Jumper Playbook', desc: 'Review RSU stock-vesting schedules and liquid asset growth.' }
        ],
        weekly: [
            { id: '7w-1', title: 'Conference Prep', desc: 'Write or review slides for your DAC/DVCon presentation.' },
            { id: '7w-2', title: 'Cross-Domain System Design', desc: 'Review physical floorplan macros vs Logical RTL requirements.' }
        ]
    },
    'phase-y9-10': {
        daily: [
            { id: '9d-1', title: 'Firmware Interface', desc: 'Review hardware/software stack boundaries with Kernel teams.' },
            { id: '9d-2', title: 'Node Physics Review', desc: 'Analyze metal pitch constraints and IR-drop boundaries on 2nm nodes.' },
            { id: '9d-3', title: 'Mentorship 1-on-1', desc: 'Unblock one of your junior engineers technically.' },
            { id: '9d-4', title: 'Patent Formulation', desc: 'Draft technical claims for your architectural methodology patent.' },
            { id: '9d-5', title: 'Financial Orbit', desc: 'Track your ₹3-Lakh+/month asset allocation & generation wealth.' }
        ],
        weekly: [
            { id: '9w-1', title: 'Architectural Specs', desc: 'Define bandwidth scaling and protocol generation for the 5-year roadmap.' },
            { id: '9w-2', title: 'Legacy Reflection', desc: 'Write journal entry reflecting on the distance from SKCET to ₹36 LPA.' }
        ]
    }
};

const VLSI_ROADMAP = [
    {
        id: 'phase-y1',
        title: '🆙 Year 1 (The Apprentice)',
        desc: 'Master the DNA. Final Level: Explain any Logic Gate truth table and internal transistor diagram instantly.',
        tasks: [
            { id: 'y1-1', category: 'Career', title: 'Achievement: >8.5 CGPA', desc: 'Lock in at least an 8.5 CGPA. This is your "shield" against being filtered out by MNCs.' },
            { id: 'y1-2', category: 'Core', title: 'Digital Electronics Mastery', desc: 'Master Boolean algebra, K-maps, Combinational and Sequential Finite State Machines (FSM).' },
            { id: 'y1-3', category: 'Core', title: 'Network & Circuit Theory', desc: 'Understand transient analysis, AC/DC logic, and core network theorems.' },
            { id: 'y1-4', category: 'Coding', title: 'C/C++ Foundation', desc: 'Practice Arrays, Pointers, and continuous memory management (critical for EDA tool dev).' },
            { id: 'y1-5', category: 'Tools', title: 'SPICE Simulation', desc: 'Download LTSpice. Manually simulate RLC circuits and simple transistor models.' },
            { id: 'y1-6', category: 'Projects', title: 'Hardware Board Build', desc: 'Build a physical 4-bit Calculator or Traffic Light Controller on a breadboard using ICs.' },
            { id: 'y1-7', category: 'Leadership', title: 'Symposium Debut', desc: 'Present your first technical paper or mini-project at a local college tech-fest.' }
        ]
    },
    {
        id: 'phase-y2',
        title: '🆙 Year 2 (The Coder)',
        desc: 'Transition from Theory to Silicon. Final Level: Complete an entire ALU design in Verilog.',
        tasks: [
            { id: 'y2-1', category: 'Tools', title: 'Achievement: EDA Tool Comfort', desc: 'Achieve total comfort navigating and simulating with tools like Xilinx Vivado or ModelSim.' },
            { id: 'y2-2', category: 'Coding', title: 'Verilog Synthesis Focus', desc: 'Learn to write synthesizable RTL code, not behavioral software code. Understand blocking vs non-blocking.' },
            { id: 'y2-3', category: 'Core', title: 'Computer Architecture', desc: 'Understand how a CPU actually works (RISC-V pipeline, Hazard detection).' },
            { id: 'y2-4', category: 'Tools', title: 'Bash/Awk Shell Scripting', desc: 'Master Linux pipelines. Automate file parsing using Grep, Awk, and Sed.' },
            { id: 'y2-5', category: 'Core', title: 'CMOS Fabrication Basics', desc: 'Understand the actual physics of how sand becomes silicon (Lithography, Etching, Doping).' },
            { id: 'y2-6', category: 'Projects', title: 'RTL to GDSII Walkthrough', desc: 'Build a small scale project taking a design down to physical layout on open-source ASIC tools.' },
            { id: 'y2-7', category: 'Career', title: 'The Hardware Portfolio', desc: 'Initialize a clean GitHub repository strictly for your hardware cores and testbenches.' }
        ]
    },
    {
        id: 'phase-y3',
        title: '🆙 Year 3 (The Specialist)',
        desc: 'Pick your niche. Final Level: Secure a "Core" internship in Bangalore or Coimbatore.',
        tasks: [
            { id: 'y3-1', category: 'Core', title: 'Achievement: STA Mastery', desc: 'Attain absolute mastery of Static Timing Analysis (Setup, Hold, Skew).' },
            { id: 'y3-2', category: 'Career', title: 'Track Selection', desc: 'Focus strictly on Verification (UVM) or Physical Design (PD/STA).' },
            { id: 'y3-3', category: 'Coding', title: 'SystemVerilog / UVM Core', desc: 'Study OOP logic, randomization, coverage, and the Universal Verification Methodology tree.' },
            { id: 'y3-4', category: 'Projects', title: 'AMBA Protocol Implementation', desc: 'Design and verify an industry-standard bus protocol like AHB or APB.' },
            { id: 'y3-5', category: 'Core', title: 'Low Power Design', desc: 'Learn architectural power savings (Clock Gating, Multi-Vth, Power Domains).' },
            { id: 'y3-6', category: 'Tools', title: 'Scripting Authority', desc: 'Master TCL or Python to automate massive batch workflows in Cadence/Synopsys tools.' },
            { id: 'y3-7', category: 'Career', title: 'The Core Internship', desc: 'Crack the placement drive for an internship at a solid semiconductor firm (e.g., Tessolve, Synopsys, Microchip).' }
        ]
    },
    {
        id: 'phase-y4',
        title: '🆙 Year 4 (The Placement Capstone)',
        desc: 'Cracking the Tier-1 MNC threshold and finalizing B.E. with extreme technical dominance.',
        tasks: [
            { id: 'y4-1', category: 'Projects', title: 'Tier-1 Technical Capstone', desc: 'Execute a highly complex 8th-semester project (e.g., PCIe Gen6 Protocol, Advanced AXI Bus integration, or DDR Controller).' },
            { id: 'y4-2', category: 'Core', title: 'Advanced Physical Design', desc: 'Master the dark arts of Floorplanning, Place & Route, and DRC/LVS physical verification.' },
            { id: 'y4-3', category: 'Career', title: 'Offer Negotiation Strategy', desc: 'Learn corporate negotiation. Do not just accept the first baseline stock block they offer.' },
            { id: 'y4-4', category: 'Leadership', title: 'The "Dad Interview" Prep', desc: 'Be able to fluently explain Moore\'s Law bottlenecks and 2nm gate-all-around (GAA) logic if ever put on the spot by her father.' },
            { id: 'y4-5', category: 'Leadership', title: 'Handing Over the Baton', desc: 'Mentor 2-3 college juniors. Teach them exactly what you did to crack the industry.' },
            { id: 'y4-6', category: 'Career', title: 'Initial Placement Target', desc: 'Secure the ₹15-18 LPA entry package at an elite tier (NVIDIA, Intel, TI, AMD, Qualcomm).' }
        ]
    },
    {
        id: 'phase-y5-6',
        title: '🆙 Years 5-6 (The Silicon Reality)',
        desc: 'Surviving your first professional years and transitioning from Junior to Mid-Level Engineer.',
        tasks: [
            { id: 'y5-1', category: 'Projects', title: 'First IP Tape-out', desc: 'Contribute core code or timing constraints to a genuine IP block that successfully hits silicon manufacturing.' },
            { id: 'y5-2', category: 'Coding', title: 'Advanced Verification/Timing', desc: 'Either build complete UVM testbenches from scratch OR achieve isolated PPA physical closure.' },
            { id: 'y5-3', category: 'Core', title: 'Post-Silicon Validation', desc: 'Encounter and successfully patch your first catastrophic "Real Silicon" functional bug.' },
            { id: 'y5-4', category: 'Tools', title: 'Workflow Automation', desc: 'Build a Python/TCL tool that automates a 3-hour manual job for your department down to 3 seconds.' },
            { id: 'y5-5', category: 'Career', title: 'Parental Fund Execution', desc: 'Officially establish the recurring ₹20K/month financial flow to your parents as planned.' },
            { id: 'y5-6', category: 'Career', title: 'The Mid-Level Bump', desc: 'Absorb immense workflow volume to secure your first major internal promotion, hitting the ₹22L+ mark.' }
        ]
    },
    {
        id: 'phase-y7-8',
        title: '🆙 Years 7-8 (The Strategic Pivot)',
        desc: 'Playing the corporate game: Specializing deeply and executing the massive stock negotiation.',
        tasks: [
            { id: 'y7-1', category: 'Leadership', title: 'Subsystem Ownership', desc: 'Stop managing individual modules and take ownership of a complete subsystem (like the entire L2/L3 Cache structure).' },
            { id: 'y7-2', category: 'Core', title: 'Advanced Power Architecture', desc: 'Model entire chip power intent using UPF/CPF standards for extreme low-power mobile nodes.' },
            { id: 'y7-3', category: 'Projects', title: 'Multi-Core Coherency', desc: 'Solve massive architectural design bugs relating to multi-core memory coherency.' },
            { id: 'y7-4', category: 'Leadership', title: 'Hiring Authority', desc: 'Begin conducting technical interviews for incoming entry-level candidates. Define the standard.' },
            { id: 'y7-5', category: 'Career', title: 'Industry Presence', desc: 'Present a paper or host a workshop at a major industry conference like DVCon or DAC.' },
            { id: 'y7-6', category: 'Career', title: 'The "Jumper" Negotiation', desc: 'Execute a highly strategic horizontal company switch (e.g. Intel to NVIDIA) specifically to double base pay and negotiate heavy RSUs.' }
        ]
    },
    {
        id: 'phase-y9-10',
        title: '🆙 Years 9-10 (The Architect Endgame)',
        desc: 'Hitting the absolute Tier-1 zenith. Total architectural control and ultimate financial payout.',
        tasks: [
            { id: 'y9-1', category: 'Core', title: 'Architectural System Design', desc: 'Cross the boundary from isolated hardware logic into mastering the Hardware/Software interface (Firmware, Kernels, Drivers).' },
            { id: 'y9-2', category: 'Core', title: 'Node Physics Authority', desc: 'Operate comfortably within the extreme physics constraints of 3nm/2nm foundries (managing massive leakage and IR-drops).' },
            { id: 'y9-3', category: 'Career', title: 'IP Generation', desc: 'File and obtain your very first corporate patent in chip design or architectural methodologies.' },
            { id: 'y9-4', category: 'Leadership', title: 'Technical Mentorship', desc: 'You are now the "Lead". Officially direct the workflow of 3 to 5 junior/mid engineers.' },
            { id: 'y9-5', category: 'Leadership', title: 'Strategic Roadmap Setting', desc: 'Assist in writing the 5-year technology node transition plan for your entire division.' },
            { id: 'y9-6', category: 'Career', title: 'The ₹36 LPA Zenith', desc: 'Base Pay + RSU vesting schedule officially breaches the ₹3 Lakh/Month (₹36,00,000+) barrier.' }
        ]
    }
];

const INSPIRATIONAL_QUOTES = [
    { text: "Great engineers don't just build; they document.", author: "Daily Grind" },
    { text: "Consistency transforms average into excellence.", author: "Daily Grind" },
    { text: "Hard work in VLSI is front-loaded; grind now, and your 30s will be incredibly comfortable.", author: "INGENIUM 36" },
    { text: "Hardware is just software crystallized.", author: "System Default" }
];

// ==================== STATE MANAGEMENT ====================
let state = {
    completedTasks: [],
    completedDailies: [],
    completedWeeklies: [],
    questHistory: [],
    streak: 0,
    lastCheckIn: null,
    startDate: new Date().toISOString(),
    theme: '#8b5cf6',
    notes: {
        mission: '',
        parents: '',
        future: '',
        self: ''
    },
    journals: []
};

function loadState() {
    const saved = localStorage.getItem('vlsi_app_state_v6');
    if (saved) {
        state = { ...state, ...JSON.parse(saved) };
        if (!state.questHistory) state.questHistory = [];
    } else {
        saveState();
    }
    applyTheme(state.theme);
}

function saveState() {
    localStorage.setItem('vlsi_app_state_v6', JSON.stringify(state));
    updateAnalyticsCharts();
}

function applyTheme(hex) {
    document.documentElement.style.setProperty('--accent-primary', hex);

    document.getElementById('themeColor').value = hex;

    let c = hex.substring(1).split('');
    if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    const glow = 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',0.4)';
    document.documentElement.style.setProperty('--accent-glow', glow);

    if (window.myCharts) {
        updateAnalyticsCharts();
    }
}

// ==================== CORE LOGIC ====================

function initApp() {
    loadState();
    updateDateDisplay();
    setupNavigation();
    renderDashboard();
    renderQuests();
    renderRoadmap('all');
    setupMotivationSection();

    // Check if Chart.js is already loaded
    if (window.Chart) {
        initCharts();
    } else {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        script.onload = () => {
            initCharts();
        };
        document.head.appendChild(script);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    setupEventListeners();
});

// ==================== UI RENDERING ====================

function updateDateDisplay() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('dateDisplay').textContent = new Date().toLocaleDateString('en-US', options);

    const hour = new Date().getHours();
    let greeting = 'Good Evening';
    if (hour < 12) greeting = 'Good Morning';
    else if (hour < 18) greeting = 'Good Afternoon';

    document.getElementById('greeting').innerHTML = `${greeting} 👋`;
}

function setupNavigation() {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-section');

            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            sections.forEach(s => s.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');

            if (targetId === 'analytics' && window.myCharts) {
                Object.values(window.myCharts).forEach(chart => chart.resize());
            }
        });
    });
}

function getCurrentPhase() {
    let active = VLSI_ROADMAP.find(phase => {
        return phase.tasks.some(t => !state.completedTasks.includes(t.id));
    });
    if (!active) active = VLSI_ROADMAP[VLSI_ROADMAP.length - 1];
    return active;
}

function renderQuests() {
    const activePhase = getCurrentPhase();
    const phaseQuests = PHASE_QUESTS[activePhase.id];

    const labelEl = document.getElementById('questPhaseLabel');
    if (labelEl) labelEl.textContent = `Active Protocol: ${activePhase.title.replace('🆙 ', '')}`;

    const dList = document.getElementById('dailyQuestList');
    dList.innerHTML = '';
    phaseQuests.daily.forEach(q => {
        const isCompleted = state.completedDailies.includes(q.id);
        dList.innerHTML += `
            <div class="task-item ${isCompleted ? 'completed' : ''}" style="margin-bottom: 0.5rem;">
                <div class="task-checkbox-container">
                    <input type="checkbox" class="quest-checkbox custom-checkbox" data-id="${q.id}" data-type="daily" ${isCompleted ? 'checked' : ''}>
                </div>
                <div class="task-content">
                    <h4>${q.title}</h4>
                    <p>${q.desc}</p>
                </div>
            </div>
        `;
    });

    const wList = document.getElementById('weeklyQuestList');
    wList.innerHTML = '';
    phaseQuests.weekly.forEach(q => {
        const isCompleted = state.completedWeeklies.includes(q.id);
        wList.innerHTML += `
            <div class="task-item ${isCompleted ? 'completed' : ''}" style="margin-bottom: 0.5rem;">
                <div class="task-checkbox-container">
                    <input type="checkbox" class="quest-checkbox custom-checkbox" data-id="${q.id}" data-type="weekly" ${isCompleted ? 'checked' : ''}>
                </div>
                <div class="task-content">
                    <h4>${q.title}</h4>
                    <p>${q.desc}</p>
                </div>
            </div>
        `;
    });

    document.querySelectorAll('.quest-checkbox').forEach(cb => {
        cb.addEventListener('change', (e) => {
            const id = e.target.getAttribute('data-id');
            const type = e.target.getAttribute('data-type');
            let arr = type === 'daily' ? state.completedDailies : state.completedWeeklies;

            if (e.target.checked) {
                if (!arr.includes(id)) arr.push(id);
                showToast(type === 'daily' ? 'Daily cleared! +10 XP ⚔️' : 'Boss Module Defeated! +50 XP 🛡️');
            } else {
                let idx = arr.indexOf(id);
                if (idx > -1) arr.splice(idx, 1);
            }
            saveState();
            renderQuests();
            if (typeof updateQuestMetrics === 'function') updateQuestMetrics();
        });
    });
}

function renderDashboard() {
    let totalTasks = 0;
    let currentPhase = VLSI_ROADMAP[0].title;
    let foundCurrent = false;

    VLSI_ROADMAP.forEach(phase => {
        totalTasks += phase.tasks.length;
        const phaseCompletedTasks = phase.tasks.filter(t => state.completedTasks.includes(t.id));

        if (!foundCurrent && phaseCompletedTasks.length < phase.tasks.length) {
            currentPhase = phase.title.split(':')[0].replace('🆙 ', '');
            foundCurrent = true;
        }
    });

    const completedCount = state.completedTasks.length;
    const overallPercent = Math.round((completedCount / totalTasks) * 100);

    document.getElementById('totalTasks').textContent = totalTasks;
    document.getElementById('totalCompleted').textContent = completedCount;
    document.getElementById('overallProgress').textContent = `${overallPercent}%`;
    document.getElementById('currentPhase').textContent = currentPhase;

    document.getElementById('journeyPercent').textContent = `${overallPercent}%`;
    document.getElementById('journeyBar').style.width = `${overallPercent}%`;

    const phaseGrid = document.getElementById('phaseProgressGrid');
    phaseGrid.innerHTML = '';

    VLSI_ROADMAP.forEach(phase => {
        const completed = phase.tasks.filter(t => state.completedTasks.includes(t.id)).length;
        const target = phase.tasks.length;
        const perc = Math.round((completed / target) * 100);

        const div = document.createElement('div');
        div.className = 'phase-card';
        div.innerHTML = `
            <div class="phase-card-header">
                <span class="phase-title">${phase.title.replace('🆙 ', '')}</span>
                <span class="phase-perc theme-text">${perc}%</span>
            </div>
            <div class="progress-bar-container" style="height: 6px; margin-bottom: 0;">
                <div class="progress-bar-fill theme-bg" style="width: ${perc}%; box-shadow: none;"></div>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem; text-align: right;">
                ${completed}/${target} Milestones
            </div>
        `;
        phaseGrid.appendChild(div);
    });

    updateStreakDisplay();
    renderUpcomingTasks();
}

function updateStreakDisplay() {
    const todayStr = new Date().toDateString();
    let isCheckedInToday = false;

    if (state.lastCheckIn) {
        const last = new Date(state.lastCheckIn).toDateString();
        if (last === todayStr) isCheckedInToday = true;
    }

    document.getElementById('streakCount').textContent = `${state.streak} days`;

    const btn = document.getElementById('checkInBtn');
    if (isCheckedInToday) {
        btn.textContent = 'Checked In!';
        btn.classList.remove('btn-glow');
        btn.classList.add('btn-outline');
        btn.disabled = true;
        document.getElementById('streakMsg').textContent = "Great job showing up today. Keep the momentum!";
    } else {
        btn.textContent = 'Check In Now';
        btn.classList.add('btn-glow');
        btn.classList.remove('btn-outline');
        btn.disabled = false;
        document.getElementById('streakMsg').textContent = "Small efforts daily = ₹3L/month eventually.";

        if (state.lastCheckIn) {
            const last = new Date(state.lastCheckIn);
            const diffTime = Math.abs(new Date() - last);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if (diffDays > 2) {
                state.streak = 0;
            }
        }
    }
}

function renderUpcomingTasks() {
    const container = document.getElementById('upcomingList');
    container.innerHTML = '';

    let upcoming = [];
    for (let phase of VLSI_ROADMAP) {
        for (let task of phase.tasks) {
            if (!state.completedTasks.includes(task.id)) {
                upcoming.push(task);
                if (upcoming.length >= 3) break;
            }
        }
        if (upcoming.length >= 3) break;
    }

    if (upcoming.length === 0) {
        container.innerHTML = '<p style="color: var(--success);">You have completed the INGENIUM 36 Protocol! 🎉 Time to Ace the Placement.</p>';
        return;
    }

    upcoming.forEach(task => {
        const div = document.createElement('div');
        div.style.padding = '1rem';
        div.style.background = 'rgba(255,255,255,0.02)';
        div.style.borderRadius = 'var(--radius-sm)';
        div.style.borderLeft = '3px solid var(--accent-primary)';
        div.innerHTML = `
            <div style="font-weight: 600; font-size: 0.95rem;">${task.title}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">${task.category}</div>
        `;
        container.appendChild(div);
    });
}

function renderRoadmap(filter) {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';

    // Determine current phase ID
    let currentPhaseId = null;
    for (let phase of VLSI_ROADMAP) {
        const completedTasksCount = phase.tasks.filter(t => state.completedTasks.includes(t.id)).length;
        if (completedTasksCount < phase.tasks.length) {
            currentPhaseId = phase.id;
            break;
        }
    }

    VLSI_ROADMAP.forEach(phase => {
        const totalPhaseTasks = phase.tasks.length;
        const completedTasksCount = phase.tasks.filter(t => state.completedTasks.includes(t.id)).length;
        const isPhaseCompleted = completedTasksCount === totalPhaseTasks;

        let filteredTasks = phase.tasks;
        if (filter === 'completed') {
            filteredTasks = phase.tasks.filter(t => state.completedTasks.includes(t.id));
        } else if (filter === 'upcoming') {
            filteredTasks = phase.tasks.filter(t => !state.completedTasks.includes(t.id));
        } else if (filter === 'current') {
            if (phase.id !== currentPhaseId) return;
        }

        if (filteredTasks.length === 0) return;

        const div = document.createElement('div');
        div.className = `timeline-phase ${isPhaseCompleted ? 'completed' : ''}`;

        let tasksHtml = filteredTasks.map(task => {
            const isCompleted = state.completedTasks.includes(task.id);
            return `
                <div class="task-item ${isCompleted ? 'completed' : ''}">
                    <div class="task-checkbox-container">
                        <input type="checkbox" class="custom-checkbox" data-id="${task.id}" ${isCompleted ? 'checked' : ''}>
                    </div>
                    <div class="task-content">
                        <h4>${task.title}</h4>
                        <p>${task.desc}</p>
                        <span style="display:inline-block; margin-top: 0.5rem; font-size: 0.75rem; padding: 0.2rem 0.5rem; background: rgba(255,255,255,0.05); border-radius: 4px; color: var(--accent-primary);">${task.category}</span>
                    </div>
                </div>
            `;
        }).join('');

        div.innerHTML = `
            <div class="timeline-marker">
                ${isPhaseCompleted ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>' : ''}
            </div>
            <div class="phase-header">
                <h2 class="phase-title-large">${phase.title}</h2>
                <p style="color: var(--text-secondary); margin-top: 0.5rem;">${phase.desc}</p>
            </div>
            <div class="task-list">
                ${tasksHtml}
            </div>
        `;
        timeline.appendChild(div);
    });

    document.querySelectorAll('#roadmap .custom-checkbox').forEach(cb => {
        cb.addEventListener('change', (e) => {
            const taskId = e.target.getAttribute('data-id');
            if (e.target.checked) {
                state.completedTasks.push(taskId);
                showToast('Hurdle cleared! Keep pushing. 🚀');
            } else {
                state.completedTasks = state.completedTasks.filter(id => id !== taskId);
            }
            saveState();
            renderDashboard();
            renderQuests(); // Added to update Action Quests phase dynamically
            renderRoadmap(document.querySelector('.filter-btn.active').getAttribute('data-filter'));
        });
    });
}

// ==================== MOTIVATION & JOURNAL ====================
function setupMotivationSection() {
    if (state.notes.mission && document.getElementById('missionText')) document.getElementById('missionText').textContent = state.notes.mission;
    if (state.notes.parents && document.getElementById('parentsNote')) document.getElementById('parentsNote').textContent = state.notes.parents;
    if (state.notes.future && document.getElementById('futureNote')) document.getElementById('futureNote').textContent = state.notes.future;
    if (state.notes.self && document.getElementById('selfNote')) document.getElementById('selfNote').textContent = state.notes.self;

    const saveNotes = () => {
        if (document.getElementById('missionText')) state.notes.mission = document.getElementById('missionText').textContent;
        if (document.getElementById('parentsNote')) state.notes.parents = document.getElementById('parentsNote').textContent;
        if (document.getElementById('futureNote')) state.notes.future = document.getElementById('futureNote').textContent;
        if (document.getElementById('selfNote')) state.notes.self = document.getElementById('selfNote').textContent;
        saveState();
    };

    ['missionText', 'parentsNote', 'futureNote', 'selfNote'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('blur', saveNotes);
    });

    document.getElementById('addJournalBtn').addEventListener('click', () => {
        const input = document.getElementById('journalInput');
        if (!input.value.trim()) return;

        state.journals.unshift({
            date: new Date().toISOString(),
            content: input.value
        });
        input.value = '';
        saveState();
        renderJournals();
        showToast('Log Saved! 📓');
    });

    document.getElementById('newQuoteBtn').addEventListener('click', setRandomQuote);
    setRandomQuote();
    renderJournals();
}

function renderJournals() {
    const list = document.getElementById('journalEntries');
    list.innerHTML = '';

    state.journals.forEach(journal => {
        const div = document.createElement('div');
        div.className = 'journal-entry';
        const date = new Date(journal.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
        div.innerHTML = `
            <span class="journal-date">${date}</span>
            <p>${journal.content}</p>
        `;
        list.appendChild(div);
    });
}

function setRandomQuote() {
    const q = INSPIRATIONAL_QUOTES[Math.floor(Math.random() * INSPIRATIONAL_QUOTES.length)];
    document.getElementById('dailyQuote').textContent = `"${q.text}"`;
    document.getElementById('quoteAuthor').textContent = `— ${q.author}`;
}

// ==================== CHARTS (Chart.js) ====================
window.myCharts = {};

function initCharts() {
    if (!window.Chart) return;
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.font.family = "'Inter', sans-serif";

    updateAnalyticsCharts();
    if (typeof updateQuestMetrics === 'function') updateQuestMetrics();

    const start = new Date(state.startDate);
    const daysActive = Math.max(1, Math.ceil((new Date() - start) / (1000 * 60 * 60 * 24)));
    document.getElementById('jDaysActive').textContent = daysActive;
    document.getElementById('jBestStreak').textContent = Math.max(state.streak, 0);

    const wks = Math.max(1, daysActive / 7);
    document.getElementById('jAvgWeekly').textContent = (state.completedTasks.length / wks).toFixed(1);

    const rate = state.completedTasks.length / daysActive;
    if (rate > 0) {
        let total = 0; VLSI_ROADMAP.forEach(p => total += p.tasks.length);
        const remaining = total - state.completedTasks.length;
        const daysLeft = remaining / rate;
        const dt = new Date();
        dt.setDate(dt.getDate() + daysLeft);
        document.getElementById('jEstCompletion').textContent = dt.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    } else {
        document.getElementById('jEstCompletion').textContent = '—';
    }
}

function updateAnalyticsCharts() {
    if (!window.Chart) return;

    let hex = state.theme;
    let c = hex.substring(1).split('');
    if (c.length === 3) c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    c = '0x' + c.join('');
    const bgSolid = `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')}, 0.8)`;
    const bgFaint = `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')}, 0.1)`;

    const phaseLabels = VLSI_ROADMAP.map(p => p.title.split(':')[0].replace('🆙 ', ''));
    const phaseData = VLSI_ROADMAP.map(p => p.tasks.filter(t => state.completedTasks.includes(t.id)).length);
    const phaseTotals = VLSI_ROADMAP.map(p => p.tasks.length);

    if (window.myCharts.phaseChart) window.myCharts.phaseChart.destroy();
    window.myCharts.phaseChart = new Chart(document.getElementById('phaseChart'), {
        type: 'bar',
        data: {
            labels: phaseLabels,
            datasets: [{
                label: 'Completed',
                data: phaseData,
                backgroundColor: bgSolid,
                borderRadius: 4
            }, {
                label: 'Total Milestones',
                data: phaseTotals,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 4
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' } }, x: { grid: { display: false } } } }
    });

    let categories = { 'Core': 0, 'Coding': 0, 'Tools': 0, 'Projects': 0, 'Career': 0, 'Leadership': 0 };
    VLSI_ROADMAP.forEach(p => p.tasks.forEach(t => {
        if (state.completedTasks.includes(t.id)) {
            if (!categories[t.category]) categories[t.category] = 0;
            categories[t.category]++;
        }
    }));

    if (window.myCharts.categoryChart) window.myCharts.categoryChart.destroy();
    window.myCharts.categoryChart = new Chart(document.getElementById('categoryChart'), {
        type: 'doughnut',
        data: {
            labels: Object.keys(categories).filter(k => categories[k] > 0 || k === 'Core'),
            datasets: [{
                data: Object.keys(categories).filter(k => categories[k] > 0 || k === 'Core').map(k => categories[k]),
                backgroundColor: [hex, '#4f46e5', '#10b981', '#f59e0b', '#ec4899', '#3b82f6', '#ef4444'],
                borderWidth: 0,
                cutout: '70%'
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'right' } } }
    });

    if (window.myCharts.skillChart) window.myCharts.skillChart.destroy();
    window.myCharts.skillChart = new Chart(document.getElementById('skillChart'), {
        type: 'radar',
        data: {
            labels: Object.keys(categories),
            datasets: [{
                label: 'Skill Proficiency',
                data: Object.values(categories).map(v => v * 10),
                backgroundColor: bgFaint,
                borderColor: hex,
                pointBackgroundColor: hex
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, scales: { r: { angleLines: { color: 'rgba(255,255,255,0.1)' }, grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { display: false } } } }
    });

    if (window.myCharts.activityChart) window.myCharts.activityChart.destroy();
    const actCtx = document.getElementById('activityChart');
    const ctx = actCtx.getContext('2d');
    let gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, `rgba(${c >> 16 & 255}, ${c >> 8 & 255}, ${c & 255}, 0.6)`);
    gradient.addColorStop(1, `rgba(${c >> 16 & 255}, ${c >> 8 & 255}, ${c & 255}, 0.0)`);

    window.myCharts.activityChart = new Chart(actCtx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Activity',
                data: [1, 2, 0, Math.min(3, state.completedTasks.length), 1, 4, 3],
                borderColor: hex,
                pointBackgroundColor: hex,
                pointBorderColor: hex,
                tension: 0.4,
                fill: true,
                backgroundColor: gradient
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { display: false }, x: { grid: { display: false } } } }
    });
}

// ==================== UTILS & EVENTS ====================

function setupEventListeners() {
    document.getElementById('checkInBtn').addEventListener('click', () => {
        // Defensive Guard: Prevent double-check-in if bug occurs or button is hacked
        const todayStr = new Date().toDateString();
        if (state.lastCheckIn && new Date(state.lastCheckIn).toDateString() === todayStr) {
            showToast('Already checked in for today! 🛡️');
            updateStreakDisplay(); // Re-sync UI state just in case
            return;
        }

        // Trigger Concept 1: Hot Streak Ignition
        const streakCounter = document.getElementById('streakCount');
        if (streakCounter) streakCounter.classList.add('streak-igniting');

        // Trigger Particle Ignition
        createIgnitionParticles(document.getElementById('checkInBtn'));

        state.streak += 1;
        state.lastCheckIn = new Date().toISOString();
        saveState();
        updateStreakDisplay();
        showToast('System Synchronized! 🔥 Streak increased.');

        // Cleanup after animation cycle
        setTimeout(() => {
            if (streakCounter) streakCounter.classList.remove('streak-igniting');
        }, 1500);
    });

    function createIgnitionParticles(target) {
        if (!target) return;
        const rect = target.getBoundingClientRect();
        for (let i = 0; i < 12; i++) {
            const p = document.createElement('div');
            p.className = 'ignition-particle';
            const angle = Math.random() * Math.PI * 2;
            const velocity = 50 + Math.random() * 50;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;

            p.style.left = `${rect.left + rect.width / 2 + window.scrollX}px`;
            p.style.top = `${rect.top + rect.height / 2 + window.scrollY}px`;
            p.style.setProperty('--tx', `${tx}px`);
            p.style.setProperty('--ty', `${ty}px`);

            document.body.appendChild(p);

            p.animate([
                { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
                { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1)`, opacity: 0 }
            ], {
                duration: 800 + Math.random() * 400,
                easing: 'cubic-bezier(0, .9, .57, 1)'
            }).onfinish = () => p.remove();
        }
    }

    document.getElementById('resetDailiesBtn').addEventListener('click', () => {
        if (state.completedDailies.length > 0) {
            state.questHistory.push({
                date: new Date().toISOString(),
                type: 'daily',
                xp: state.completedDailies.length * 10
            });
        }
        state.completedDailies = [];
        saveState();
        renderQuests();
        if (typeof updateQuestMetrics === 'function') updateQuestMetrics();
        showToast('Dailies Reset and XP logged! Let\'s go again! ⚔️');
    });

    document.getElementById('resetWeekliesBtn').addEventListener('click', () => {
        if (state.completedWeeklies.length > 0) {
            state.questHistory.push({
                date: new Date().toISOString(),
                type: 'weekly',
                xp: state.completedWeeklies.length * 50
            });
        }
        state.completedWeeklies = [];
        saveState();
        renderQuests();
        if (typeof updateQuestMetrics === 'function') updateQuestMetrics();
        showToast('Weeklies Reset and XP logged! Time for the next Boss Challenge! 🛡️');
    });

    // XP Hover Simulation Listeners
    const questsSection = document.getElementById('quests');
    if (questsSection) {
        questsSection.addEventListener('mouseover', (e) => {
            const taskItem = e.target.closest('.task-item');
            if (!taskItem) return;
            const cb = taskItem.querySelector('.quest-checkbox');
            if (!cb || cb.checked) return;

            const type = cb.getAttribute('data-type');
            simulateXP(type === 'daily' ? 10 : 50);
        });

        questsSection.addEventListener('mouseout', (e) => {
            const taskItem = e.target.closest('.task-item');
            if (!taskItem) return;
            clearXPSimulation();
        });
    }

    document.getElementById('themeColor').addEventListener('input', (e) => {
        applyTheme(e.target.value);
    });

    document.getElementById('themeColor').addEventListener('change', (e) => {
        state.theme = e.target.value;
        saveState();
        showToast('Color theme saved! 🎨');
    });

    const filters = document.querySelectorAll('.filter-btn');
    filters.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filters.forEach(f => f.classList.remove('active'));
            e.target.classList.add('active');
            renderRoadmap(e.target.getAttribute('data-filter'));
        });
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        document.getElementById('resetModal').classList.add('active');
    });
    document.getElementById('cancelReset').addEventListener('click', () => {
        document.getElementById('resetModal').classList.remove('active');
    });
    document.getElementById('confirmReset').addEventListener('click', () => {
        const rRoadmap = document.getElementById('resetOptRoadmap').checked;
        const rQuests = document.getElementById('resetOptQuests').checked;
        const rStreak = document.getElementById('resetOptStreak').checked;
        const rJournal = document.getElementById('resetOptJournal').checked;

        let didReset = false;

        if (rRoadmap) {
            state.completedTasks = [];
            didReset = true;
        }

        if (rQuests) {
            state.completedDailies = [];
            state.completedWeeklies = [];
            state.questHistory = [];
            didReset = true;
        }

        if (rStreak) {
            state.streak = 0;
            state.lastCheckIn = null;
            state.startDate = new Date().toISOString();
            didReset = true;
        }

        if (rJournal) {
            state.journals = [];
            state.notes = { mission: '', parents: '', future: '', self: '' };

            if (document.getElementById('missionText')) document.getElementById('missionText').textContent = "You are doing this for your parents and your girlfriend. On days when you feel tired of the complex math, remember: Chips run the world, and you are the one building them. Hard work in VLSI is front-loaded; if you grind now at SKCET, your 30s will be incredibly comfortable.";
            if (document.getElementById('parentsNote')) document.getElementById('parentsNote').textContent = 'Set aside a "Parental Fund" from your first salary (₹20k/month). Telling mom about this financial plan will turn her from a skeptic into my biggest supporter.';
            if (document.getElementById('futureNote')) document.getElementById('futureNote').textContent = "While I'm busy staring at RTL code and timing logs, I'm building a bulletproof life. Show her this trajectory. This grind secures the life she's used to.";
            if (document.getElementById('selfNote')) document.getElementById('selfNote').textContent = "When her dad checks in, speak with technical credibility (FinFETs, 2nm nodes). If he sees I am an expert with a highly lucrative plan, his ego will respect the competence.";
            didReset = true;
        }

        if (didReset) {
            saveState();
            document.getElementById('resetModal').classList.remove('active');

            document.getElementById('resetOptRoadmap').checked = false;
            document.getElementById('resetOptQuests').checked = false;
            document.getElementById('resetOptStreak').checked = false;
            document.getElementById('resetOptJournal').checked = false;

            initApp();
            showToast('Selected memory arrays wiped and reformatted.');
        } else {
            showToast('No modules selected. Format aborted.');
            document.getElementById('resetModal').classList.remove('active');
        }
    });
}

function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function updateQuestMetrics() {
    if (!window.Chart) return;

    let totalXP = 0;
    state.questHistory.forEach(q => totalXP += q.xp);
    totalXP += (state.completedDailies.length * 10);
    totalXP += (state.completedWeeklies.length * 50);

    const xpPerLevel = 150;
    const currentLevel = Math.floor(totalXP / xpPerLevel) + 1;
    const currentLevelXP = totalXP % xpPerLevel;
    const progressPercent = (currentLevelXP / xpPerLevel) * 100;

    let rankTitle = 'Silicon Initiate';
    if (currentLevel >= 3) rankTitle = 'RTL Apprentice';
    if (currentLevel >= 7) rankTitle = 'Logic Master';
    if (currentLevel >= 15) rankTitle = 'Physical Design Elite';
    if (currentLevel >= 30) rankTitle = 'The 36LPA Architect';

    const xpEl = document.getElementById('questTotalXP');
    const cyclesEl = document.getElementById('questCycles');
    const levelEl = document.getElementById('userLevel');
    const titleEl = document.getElementById('rankTitle');
    const progTextEl = document.getElementById('levelProgressText');
    const targetTextEl = document.getElementById('levelTargetText');
    const barEl = document.getElementById('levelProgressBar');

    if (xpEl) xpEl.textContent = totalXP;
    if (cyclesEl) cyclesEl.textContent = state.questHistory.length;
    if (levelEl) levelEl.textContent = currentLevel;
    if (titleEl) titleEl.textContent = rankTitle;
    if (progTextEl) progTextEl.textContent = currentLevelXP;
    if (targetTextEl) targetTextEl.textContent = xpPerLevel;
    if (barEl) barEl.style.width = `${progressPercent}%`;

    const actCtx = document.getElementById('questActivityChart');
    if (!actCtx) return;

    // Aggregate XP by precise calendar day, split by Daily and Weekly logic
    const dailyXPData = {};
    const weeklyXPData = {};
    const dateArr = [];

    state.questHistory.forEach(q => {
        const d = new Date(q.date);
        const dateKey = `${d.getDate()}/${d.getMonth() + 1}`;

        if (!dateArr.includes(dateKey)) dateArr.push(dateKey);

        if (q.type === 'daily') {
            if (!dailyXPData[dateKey]) dailyXPData[dateKey] = 0;
            dailyXPData[dateKey] += q.xp;
        } else if (q.type === 'weekly') {
            if (!weeklyXPData[dateKey]) weeklyXPData[dateKey] = 0;
            weeklyXPData[dateKey] += q.xp;
        }
    });

    let labels = dateArr;
    if (labels.length > 14) labels = labels.slice(-14);

    const dsDaily = labels.map(k => dailyXPData[k] || 0);
    const dsWeekly = labels.map(k => weeklyXPData[k] || 0);

    if (window.myCharts.questActivityChart) window.myCharts.questActivityChart.destroy();

    const ctx = actCtx.getContext('2d');
    let hex = state.theme;
    let c = hex.substring(1).split('');
    if (c.length === 3) c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    c = '0x' + c.join('');

    let gradientDaily = ctx.createLinearGradient(0, 0, 0, 200);
    gradientDaily.addColorStop(0, `rgba(${c >> 16 & 255}, ${c >> 8 & 255}, ${c & 255}, 0.5)`);
    gradientDaily.addColorStop(1, `rgba(${c >> 16 & 255}, ${c >> 8 & 255}, ${c & 255}, 0.0)`);

    let gradientWeekly = ctx.createLinearGradient(0, 0, 0, 200);
    gradientWeekly.addColorStop(0, `rgba(16, 185, 129, 0.5)`); // Success green for Boss Fights
    gradientWeekly.addColorStop(1, `rgba(16, 185, 129, 0.0)`);

    window.myCharts.questActivityChart = new Chart(actCtx, {
        type: 'bar',
        data: {
            labels: labels.length > 0 ? labels : ['No Data'],
            datasets: [
                {
                    label: 'Daily XP',
                    data: dsDaily.length > 0 ? dsDaily : [0],
                    backgroundColor: gradientDaily,
                    borderRadius: 4,
                    borderWidth: 1,
                    borderColor: hex
                },
                {
                    label: 'Boss Fight XP',
                    data: dsWeekly.length > 0 ? dsWeekly : [0],
                    backgroundColor: gradientWeekly,
                    borderRadius: 4,
                    borderWidth: 1,
                    borderColor: '#10b981'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: true, position: 'top', align: 'end', labels: { boxWidth: 10, color: 'rgba(255,255,255,0.5)', font: { size: 10 } } } },
            scales: {
                y: { stacked: true, beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' } },
                x: { stacked: true, grid: { display: false } }
            }
        }
    });
}

function simulateXP(bonusXP) {
    let totalXP = 0;
    state.questHistory.forEach(q => totalXP += q.xp);
    totalXP += (state.completedDailies.length * 10);
    totalXP += (state.completedWeeklies.length * 50);

    const xpPerLevel = 150;
    const currentXP = totalXP % xpPerLevel;

    let projectedXP = currentXP + bonusXP;
    let crossLevel = false;

    if (projectedXP >= xpPerLevel) {
        projectedXP = xpPerLevel;
        crossLevel = true;
    }

    const previewPercent = (projectedXP / xpPerLevel) * 100;
    const previewBar = document.getElementById('levelPreviewBar');
    const progText = document.getElementById('levelProgressText');

    if (previewBar) {
        previewBar.style.width = `${previewPercent}%`;
        previewBar.style.opacity = '0.6';
    }
    if (progText) {
        progText.textContent = `${currentXP} +${bonusXP}`;
        if (crossLevel) {
            progText.style.color = '#10b981';
            progText.style.textShadow = '0 0 10px rgba(16, 185, 129, 0.5)';
        }
    }
}

function clearXPSimulation() {
    let totalXP = 0;
    state.questHistory.forEach(q => totalXP += q.xp);
    totalXP += (state.completedDailies.length * 10);
    totalXP += (state.completedWeeklies.length * 50);

    const currentXP = totalXP % 150;

    const previewBar = document.getElementById('levelPreviewBar');
    const progText = document.getElementById('levelProgressText');

    if (previewBar) {
        previewBar.style.opacity = '0';
        setTimeout(() => { if (previewBar.style.opacity === '0') previewBar.style.width = '0%'; }, 300);
    }
    if (progText) {
        progText.textContent = currentXP;
        progText.style.color = 'var(--accent-primary)';
        progText.style.textShadow = 'none';
    }
}