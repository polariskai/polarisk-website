# Workbench Badge Text Color Design

## Goal

Match the text color of the “Parallel” label and the Agent Config “sonnet-5” badge to the selected model field’s blue text color.

## Design

In `components/HomePage.js`, replace `text-emerald-300` with `text-[#3d5bff]` on only these two elements:

- The “Parallel” workflow label.
- The Agent Config “sonnet-5” badge.

Keep each element’s existing green border and background unchanged. No component structure, behavior, spacing, or other colors change.

## Verification

Run the project’s lint check and confirm both target labels use `#3d5bff`.
