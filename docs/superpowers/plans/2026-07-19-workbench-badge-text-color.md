# Workbench Badge Text Color Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Change two workbench badge labels to the exact blue text color used by the selected model field.

**Architecture:** Make a focused presentational change in the existing `HomePage` component. Preserve the badges’ structure, green borders, and green backgrounds.

**Tech Stack:** Next.js, React, Tailwind CSS

## Global Constraints

- Use the exact text color `#3d5bff`.
- Change only the “Parallel” label and Agent Config “sonnet-5” badge.
- Do not change structure, behavior, spacing, borders, backgrounds, or other colors.
- Do not commit changes unless the user explicitly requests a commit.

---

### Task 1: Update Workbench Badge Text Colors

**Files:**
- Modify: `components/HomePage.js:180`
- Modify: `components/HomePage.js:259`

**Interfaces:**
- Consumes: Existing Tailwind utility classes in `HomePage`.
- Produces: Two labels rendered with `color: #3d5bff`.

- [ ] **Step 1: Confirm the current classes**

Verify that both target elements currently use `text-emerald-300` and that the reference model field uses `text-[#3d5bff]`.

- [ ] **Step 2: Apply the minimal class changes**

Change:

```jsx
<span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[9px] uppercase tracking-wide text-emerald-300">
```

to:

```jsx
<span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[9px] uppercase tracking-wide text-[#3d5bff]">
```

Change:

```jsx
<span className="inline-flex items-center gap-1.5 rounded border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-[9px] text-emerald-300">
```

to:

```jsx
<span className="inline-flex items-center gap-1.5 rounded border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-[9px] text-[#3d5bff]">
```

- [ ] **Step 3: Run static verification**

Run:

```bash
npm run lint
```

Expected: The command exits successfully with no new lint errors.

- [ ] **Step 4: Confirm scope**

Inspect the diff and verify that only the two target text-color classes changed in `components/HomePage.js`.
