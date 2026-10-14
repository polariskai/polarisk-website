export const STUDIO_URL = "https://scenariostudio.polarisk.ai/";
export const products = [
  {
    slug: "scenario-studio",
    name: "Scenario Studio",
    status: "Available now",
    title: "Start with a scenario. Generate the data to explore it.",
    description:
      "Develop by example with realistic, end-to-end multimodal scenarios. Capture fraudulent cases and legitimate lookalikes, with customization for research and other domains.",
    cards: [
      [
        "Text",
        "Create narratives and conversations alongside tabular data such as accounts and transactions, and temporal data that captures event timing and sequences.",
      ],
      [
        "Documents",
        "Generate documents that provide the context and supporting evidence for a scenario.",
      ],
      [
        "Audio",
        "Generate scenario-based audio for testing and evaluating systems that work with speech and conversations.",
      ],
      [
        "Image",
        "Generate images that represent the visual details of a scenario for testing and evaluation.",
      ],
      [
        "Video",
        "Generate synthetic video to explore visual scenarios and evaluate how systems respond.",
      ],
    ],
    heading: "Your domain. Your evaluation question.",
    body: "Start with the publicly available product. When your work needs a different scenario, output, or workflow, Polarisk can customize Scenario Studio on request. Share your requirements so we can agree the scope, feasibility, and acceptance criteria.",
    steps: [
      "Describe the situation and the behaviour you want to explore.",
      "Generate text, documents, audio, images, or video for that scenario.",
      "Review the outputs with domain experts before using them in training or evaluation.",
      "Validate generated scenarios using AI agents, with findings available for review.",
    ],
  },
  {
    slug: "control-studio",
    name: "Control Studio",
    status: "Coming soon",
    title: "Turn risk scenarios into better control decisions.",
    description:
      "Control Studio enables scenario-driven financial crime control development and model risk review.",
    cards: [
      [
        "Control development",
        "Planned: connect a risk concern to test scenarios and expected control responses.",
      ],
      [
        "Model risk review",
        "Planned: support independent challenge using scenarios that probe assumptions and gaps.",
      ],
      [
        "Evidence for decisions",
        "Planned: bring expected outcomes, observed responses, and review findings into one workflow.",
      ],
    ],
    heading: "Help shape the workflow.",
    body: "Control Studio is coming soon. Talk to us about the controls you want to improve, your model review process, and the evidence your teams need. Scenario Studio is available today for synthetic data generation.",
    steps: [
      "Define a risk concern and the expected response.",
      "Compare control behaviour across suspicious cases and legitimate lookalikes.",
      "Review findings and document the basis for a change. These are planned workflows.",
    ],
  },
];
export const solutions = [
  {
    slug: "emerging-fraud-detection",
    name: "Emerging Fraud Detection",
    navDescription: "Test new fraud patterns and legitimate lookalikes.",
    group: "By use case",
    title: "Explore fraud patterns before you have enough examples.",
    description:
      "Use scenario-driven data to investigate new behaviours, rare events, and the legitimate activity that can look similar.",
    cards: [
      [
        "Define the pattern",
        "Describe actors, intent, and the sequence of events that makes a case suspicious.",
      ],
      [
        "Vary the conditions",
        "Explore plausible changes in timing, context, and behaviour instead of relying on a single example.",
      ],
      [
        "Challenge the detector",
        "Use reviewed examples in your evaluation workflow to examine misses and false positives.",
      ],
    ],
    example:
      "A suspected impersonation scam and a legitimate customer request may use similar language. Build examples of both, then examine which contextual differences your system actually uses.",
  },
  {
    slug: "risk-control-development",
    name: "Risk Control Development",
    navDescription: "Build controls around reviewed risk scenarios.",
    group: "By use case",
    title: "Build controls around the behaviour you mean to catch.",
    description:
      "Make risk intent concrete through scenarios that risk owners and developers can review together.",
    cards: [
      [
        "Make intent explicit",
        "Describe the risk and the circumstances in which an alert would be appropriate.",
      ],
      [
        "Include lookalikes",
        "Pair suspicious cases with legitimate examples to challenge overly broad detection logic.",
      ],
      [
        "Review the change",
        "Evaluate changes in your existing workflow. Control Studio is being built to connect this process; it is coming soon.",
      ],
    ],
    example:
      "Compare unexplained pass-through activity with a documented treasury movement. Similar transaction shapes should not automatically produce the same risk conclusion.",
  },
  {
    slug: "model-risk-management",
    name: "Model Risk Management",
    navDescription: "Challenge model assumptions with targeted cases.",
    group: "By use case",
    title: "Give model challenge a concrete set of scenarios.",
    description:
      "Support model risk teams with targeted examples that probe assumptions, boundaries, and behaviour beyond the average case.",
    cards: [
      [
        "Challenge assumptions",
        "Translate a model limitation or review question into situations a domain expert can inspect.",
      ],
      [
        "Test boundaries",
        "Explore rare and ambiguous cases alongside straightforward positive and negative examples.",
      ],
      [
        "Keep judgment independent",
        "Use scenario data within your validation process. Planned Control Studio workflows will focus on review and evidence.",
      ],
    ],
    example:
      "A detector performs well on familiar fraud language. Challenge it with indirect requests, ambiguous intent, and legitimate conversations that contain the same keywords.",
  },
  {
    slug: "scenario-based-audio-generation",
    name: "Scenario-based Audio Generation",
    navDescription: "Generate conversations for audio evaluation.",
    group: "By use case",
    title: "Generate audio with a situation behind every conversation.",
    description:
      "Scenario Studio generates synthetic audio for teams evaluating speech, conversation, and audio-based AI systems.",
    cards: [
      [
        "Start with context",
        "Define the interaction, participants, and behaviour the audio should represent.",
      ],
      [
        "Build evaluation examples",
        "Create scenario-based material for your own review, testing, and research workflows.",
      ],
      [
        "Customize on request",
        "Discuss language, speaker, acoustic, annotation, and output requirements with us. We will confirm what can be delivered for your scope.",
      ],
    ],
    example:
      "Compare a routine service conversation with an attempted social-engineering interaction. Define the distinction before generating the material, then review whether the audio expresses it.",
  },
  {
    slug: "framl-detection-and-investigation",
    name: "FRAML Detection and Investigation",
    navDescription: "Connect fraud and money laundering scenarios.",
    group: "By use case",
    title: "Explore fraud and money laundering as connected stories.",
    description:
      "Bring fraud and anti-money laundering (FRAML) perspectives into scenario design, detection testing, and investigator training.",
    cards: [
      [
        "Connect the behaviour",
        "Describe the relationship between the initial fraud and subsequent movement of funds.",
      ],
      [
        "Practice investigation",
        "Use synthetic narratives and conversations to discuss competing explanations and missing evidence.",
      ],
      [
        "Evaluate detection",
        "Review how existing tools respond to the scenarios. Scenario Studio supplies synthetic material; Control Studio is coming soon.",
      ],
    ],
    example:
      "Follow an illustrative scam from the initial conversation to a suspected mule account. Ask what each team would know, what remains uncertain, and what evidence would change its assessment.",
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    navDescription: "Develop and evaluate financial crime controls.",
    group: "By industry",
    title: "Financial crime is our core focus.",
    description:
      "Polarisk helps banks, fintechs, and financial institutions explore risk through scenarios, with a product direction centered on stronger controls and better model review.",
    cards: [
      [
        "Financial crime teams",
        "Develop examples of emerging fraud, laundering behaviour, and legitimate lookalikes.",
      ],
      [
        "Risk and control owners",
        "Make the intended behaviour of a control clear enough for teams to discuss and test.",
      ],
      [
        "Model risk teams",
        "Build targeted challenge examples to complement existing validation datasets and methods.",
      ],
    ],
    example:
      "Start with one control question: can the system distinguish suspicious pass-through behaviour from legitimate treasury activity? Define both stories and use them to guide evaluation.",
  },
  {
    slug: "telecom",
    name: "Telecom",
    navDescription: "Explore scams and communication risk.",
    group: "By industry",
    title: "Explore communication risk through realistic scenarios.",
    description:
      "Apply scenario-based text and audio generation to telecom fraud research, conversation analysis, and AI evaluation.",
    cards: [
      [
        "Social engineering",
        "Create illustrative interactions for studying deception and suspicious requests.",
      ],
      [
        "Legitimate lookalikes",
        "Include ordinary support and service conversations to challenge false positives.",
      ],
      [
        "Domain customization",
        "Work with Polarisk to scope terminology, scenario requirements, and the outputs your evaluation needs.",
      ],
    ],
    example:
      "Contrast an account-recovery request from a legitimate subscriber with an impersonation attempt. Use the pair to explore which evidence an assistant should ask for.",
  },
  {
    slug: "research-and-evaluation",
    name: "Research & AI Evaluation",
    navDescription: "Create multimodal scenarios for specialist research.",
    group: "By industry",
    title: "Synthetic text, documents, audio, images, and video for your research tasks.",
    description:
      "For research institutions and specialist teams that need scenario-based data beyond financial services. Start with Scenario Studio and work with us on domain-specific requirements.",
    cards: [
      [
        "Multimodal generation",
        "Explore scenarios through synthetic text, documents, audio, images, and video, using the publicly available Scenario Studio.",
      ],
      [
        "A defined evaluation scope",
        "Tell us the system you are evaluating, the conditions you want to cover, and how you will judge the outputs.",
      ],
      [
        "Customization on request",
        "Discuss domain, language, format, and workflow needs. Specialized capabilities and delivery requirements are agreed as part of the engagement.",
      ],
    ],
    example:
      "A research team needs audio examples for a specific interaction and supporting text or video material. Start by defining the scenarios and acceptance criteria; confirm modality alignment and any specialist requirements with Polarisk.",
  },
];
export const faqGroups = [
  {
    title: "Polarisk & our products",
    items: [
      [
        "What is Polarisk?",
        "Polarisk enables scenario-driven development for domains such as financial services and telecom. Teams use realistic scenarios to define risk behaviour, develop controls, and evaluate models.",
      ],
      [
        "What products do you offer?",
        "Scenario Studio is publicly available and provides end-to-end, realistic multimodal scenarios that capture fraudulent cases - including the actors, context, and sequence of events. Synthetic text, documents, audio, images, and video bring these scenarios to life so teams can examine fraud behaviour and evaluate how their systems respond. Control Studio is coming soon and is being built for scenario-driven control development, evaluation, and review.",
      ],
      [
        "Is Scenario Studio publicly available?",
        "Yes. Scenario Studio is publicly available at scenariostudio.polarisk.ai. For a walkthrough or a specialized requirement, contact the Polarisk team.",
      ],
      [
        "Is Control Studio available today?",
        "Control Studio is still in private development, but we are open to learning about your requirements and hearing your feedback.",
      ],
    ],
  },
  {
    title: "Solutions & industries",
    items: [
      [
        "Who is Polarisk built for?",
        "Financial crime, risk control, model development, and model risk management teams are our core audience. Scenario Studio also supports synthetic data generation for telecom and research or AI evaluation teams with domain-specific needs.",
      ],
      [
        "Can research institutions use Scenario Studio?",
        "Yes. Its text, documents, audio, images, and video generation can be used to explore scenarios outside financial services. Share the research objective and evaluation requirements with us to discuss customization.",
      ],
      [
        "Which use cases do you focus on?",
        "Emerging fraud detection, risk control development, model risk management, scenario-based audio generation, and fraud and anti-money laundering (FRAML) detection and investigation. Scenario Studio provides synthetic material for these workflows; Control Studio is the upcoming product for control development and review.",
      ],
      [
        "Can Polarisk customize Scenario Studio?",
        "Yes, customization is available on request. Tell us your domain, scenario types, output needs, and acceptance criteria. We will confirm feasibility and scope, including any language, annotation, integration, or deployment requirements, before committing to delivery.",
      ],
    ],
  },
  {
    title: "Scenario-driven data & detection",
    items: [
      [
        "What is scenario-driven synthetic data?",
        "It is generated data designed around a defined situation: who is involved, what happens, and why it matters. The scenario gives reviewers a way to assess the meaning of an example, rather than judging only whether its surface features look realistic.",
      ],
      [
        "Why can it help build a better crime detection engine?",
        "Historical datasets may contain few examples of emerging or rare behaviours. Scenario-driven data lets teams deliberately explore those cases and include legitimate lookalikes. Evaluating both can reveal missed detections and overly broad rules, giving developers specific questions to investigate and test.",
      ],
      [
        "How is this different from generating more random data?",
        "The starting point is a question about behaviour. For example: should these two similar-looking interactions produce different alerts? Scenarios let teams vary relevant conditions deliberately and review the intended distinction before using the generated data.",
      ],
      [
        "Does synthetic data prove a model is effective?",
        "No. Performance on generated scenarios is evidence about those scenarios, not proof of real-world effectiveness or complete coverage. Expert review, representative real-world evaluation, and ongoing monitoring remain necessary. Poorly designed scenarios can reproduce assumptions and blind spots.",
      ],
      [
        "Does Scenario Studio replace an AML or fraud detection engine?",
        "No. Scenario Studio generates synthetic data for your workflows. Polarisk’s broader direction is to help improve controls and their evaluation, with Control Studio coming soon.",
      ],
      [
        "Can synthetic data replace all production data?",
        "No. Synthetic scenarios complement existing data and evaluation methods. Review outputs for realism, privacy, and fitness for the intended use; generation alone does not guarantee that data is private, compliant, or representative.",
      ],
    ],
  },
];
