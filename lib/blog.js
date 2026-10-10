export const posts = [
  {
    slug: "the-requirements-spec-does-not-define-the-risk",
    title: "The Requirements Spec Does Not Define the Risk",
    category: "Scenario Studio",
    author: "Polarisk",
    description:
      "Financial crime controls lose meaning in the handoff from risk to software. Reviewed scenarios keep the original judgment close to the work.",
    intro: [
      "Most financial crime controls do not fail because the bank misunderstood the regulation.",
      "They fail because the bank loses the meaning of the risk while turning it into software.",
      "Someone sees a concern: an account receives funds and quickly moves them onward, with no credible reason for doing so. An investigator knows what that can mean. A risk owner writes a requirement. A modeller translates it into fields and thresholds. An engineer implements it. A validator tests the result.",
      "Every step is sensible. Together, they create distance.",
      "By the time the control is live, the original question - what behaviour were we trying to model? - can be surprisingly hard to answer.",
    ],
    sections: [
      {
        id: "the-threshold",
        title: "The threshold is usually not the real decision",
        paragraphs: [
          "Take a simple rule: alert when money comes in and a similar amount goes out within 48 hours.",
          "It catches something worth looking at. It also catches a scheduled treasury sweep between group entities. Or a routine payroll settlement. Or a merchant moving collections on its normal cycle.",
          "The issue is not that the rule is wrong. The issue is that it is being asked to make a judgment with only part of the story.",
          "The investigator’s original concern included things the rule cannot see on its own: whether the parties are connected, whether the movement is normal for that account, whether there is a documented purpose, and whether the beneficiary is new or expected.",
          "That knowledge often exists. It just does not survive the handoff in a form the next team can use.",
        ],
      },
      {
        id: "more-requirements",
        title: "More requirements will not fix this",
        paragraphs: [
          "When a control disappoints, the usual response is to write a more detailed requirement.",
          "That helps, up to a point. But a long document is still a document. It does not give a risk owner, an investigator, a modeller, and a validator something concrete to look at together.",
          "What they need is a small set of cases that make the decision visible.",
          "For the pass-through example, the set might include an unfamiliar payer and an unrelated beneficiary with no stated purpose. That case should alert. It might also include the same timing and amount under a documented group treasury mandate. That case should not.",
          "Now the discussion is no longer abstract. The team can ask whether the proposed control makes the distinction it is supposed to make.",
        ],
      },
      {
        id: "the-shared-object",
        title: "The scenario becomes the shared object",
        paragraphs: [
          "A reviewed scenario is not a toy example. It is a compact expression of risk judgment.",
          "It describes the behaviour, the context that changes its meaning, and the response the bank expects. It can then be represented in the bank’s data format, run through a control, and compared with the result.",
          "That gives every team the same reference point. Risk can review the behaviour. Engineering can build against it. Validation can challenge it. Governance can see the evidence.",
          "The work still moves through the organisation. The difference is that the original judgment moves with it.",
          "A requirement describes work. A reviewed scenario preserves intent.",
          "Scenario Studio is built for this moment: turning a risk concern into reviewed scenarios and corresponding data, so a bank can improve a control without losing sight of what it set out to catch.",
        ],
      },
    ],
    note: "Examples are illustrative and do not represent customer activity.",
  },
];

export function readingTime(post) {
  const words = [post.title, ...post.intro, ...post.sections.flatMap((section) => [section.title, ...section.paragraphs]), post.note]
    .join(" ").split(/\s+/).length;
  return `${Math.ceil(words / 200)} min read`;
}
