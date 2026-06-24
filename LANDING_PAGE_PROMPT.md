# Laelia — Landing Page Prompt (for Stitch / Gemini)

Paste-ready prompt to generate the `laelia.app` launch landing page. Built from the Laelia
docs (PRODUCT, DESIGN, project-brief, APP_STORE_METADATA). Single marketing page, one job:
**drive App Store downloads.** Host on Vercel.

> How to use: paste everything inside the `─── PROMPT ───` block into Stitch 2.0. After it
> generates, use the "Tweak prompts" / refinement notes at the bottom to nudge specifics.
> Export the HTML/CSS and deploy to Vercel.

---

─── PROMPT ───

Design a single-page, responsive marketing landing page for an iOS app called **Laelia**.
Mobile-first, but beautiful on desktop. The page has one primary job: get visitors to tap
**Download on the App Store**. Output clean, production-ready HTML + CSS (no backend).

## The product, in one line
A happy, colorful orchid companion that teaches you to *read* your plant and celebrates the
rebloom — made for people who love orchids, not beginners who just want to keep a cactus alive.

## Brand personality
Warm, joyful, premium, honest. A knowledgeable friend, not a clinical diagnosis tool and not a
hype bot. Proud and alive — *pride and joy, not chore and diagnosis.* Calm confidence. Never
childish, never corporate-grey.

## Visual style — "happy glassmorphism"
- **Aesthetic:** colorful glassmorphism. Frosted-glass cards (subtle blur, soft white top-left
  edge highlight, two-layer soft shadow so cards float) sitting over a soft, luminous,
  warm-cream gradient background. Generous whitespace. Rounded, squircle corners (~24px).
- **Background:** warm cream base (`#FAF5EF`) with a soft diagonal petal-gradient wash
  (`#FBE4F1 → #F3E9FF → #FFF3DD`) and a faint warm top-trailing glow, so glass has light to
  catch. Keep all overlays low-opacity — text legibility always wins over decoration.
- **Color palette (orchid flower colors, not spreadsheet grey):**
  - Orchid Magenta `#C04AA0` — primary brand / buttons
  - Royal Orchid `#7B3F9E` — deep emphasis, gradient ends
  - Coral Bloom `#FF7E9D` — highlights, celebration
  - Sunlit Yellow `#FFD166` — joy, rebloom accent
  - Fresh Leaf `#34A877` — health / "good roots" / checkmarks
  - Deep Aubergine `#2E1A2E` — primary text (warmer than black)
  - Muted Mauve `#6E5A6B` — secondary text / captions
- **Gradients are 3-stop and glow** (tuned mid-tone, no banding): primary buttons use
  `Orchid Magenta → mid-rose → Coral Bloom`. The rebloom/celebration accent uses
  `Sunlit Yellow → amber → Coral`.
- **Typography:** a warm, friendly, rounded sans-serif (e.g. SF Pro Rounded, or Nunito /
  Quicksand as web fallback). Hierarchy through size + weight, not loud color. ONE deliberate
  exception: a single elegant **serif** headline for the rebloom/celebration moment, to mark it
  as special.
- **Imagery:** clean iPhone mockups showing the app's screens (library, a diagnosis result, an
  ID result, growth timeline, the rebloom celebration). Soft orchid/petal motifs allowed, but
  sparse — content is the star. No stock-photo clutter, no generic plant-app grey UI.
- **Accessibility:** WCAG AA contrast on every text/background pair. Text sits on glass or a
  solid scrim, never directly on a busy gradient.

## Page structure (top to bottom)

1. **Sticky slim header** — left: "Laelia" wordmark with a small orchid/flower mark. Right: a
   compact **Download on the App Store** badge button. Glass bar, subtle.

2. **Hero (above the fold)** — the conversion centerpiece.
   - Headline: **"Learn to read your orchid. Celebrate every rebloom."**
   - Subhead: "Laelia is the happy, private companion for people who love orchids — honest reads
     of your plant's roots, leaves, and spikes, and a real celebration when the bloom arrives."
   - Primary CTA: the official **Download on the App Store** black badge, large, unmissable.
   - Two trust chips directly under the CTA: **"No subscription, ever"** and **"Your data stays
     on your phone."**
   - Visual: a floating iPhone showing the app's "read my plant" diagnosis result on glass.
   - Small line: "Free to try · One-time Lifetime unlock · iPhone."

3. **The wedge / "not another plant scheduler"** — short section, 3 glass cards:
   - **Teach, don't oracle.** "Laelia shows you what it sees, what it likely means, how to
     confirm it, and how confident it is — instead of barking 'water now.'"
   - **Observation, not a calendar.** "Rigid 'water every Tuesday' reminders are what kill
     orchids. Laelia helps you read the plant, not obey an alarm."
   - **Built for enthusiasts.** "Care that actually differs by genus — Phalaenopsis, Cattleya,
     Dendrobium, Vanda, Oncidium — not one generic schedule."

4. **Feature highlights** — alternating image-left / image-right rows, each an iPhone screen +
   short copy:
   - **Read my plant.** "Photograph roots, leaves, or a spike for an honest, expert read: what's
     there, what it likely means, how to confirm, what to do — confidence always shown, never
     faked."
   - **Orchid ID.** "Snap a photo for the likely genus and species, with calibrated uncertainty.
     It never bluffs a cultivar."
   - **Growth journal.** "Build a photo timeline for each plant and watch its journey unfold over
     months — a scrapbook, not an alarm log."
   - **Celebrate the rebloom.** *(this is the emotional peak — use the serif headline and the
     Sunlit-Yellow → Coral celebration gradient, a warm confetti/petal-fall feel)* "The whole
     reason we grow orchids. Laelia supports the spike and gives you a genuine celebration when
     the bloom arrives."

5. **Privacy & no-subscription band** — a wide, reassuring glass panel (this is a headline
   selling point, not fine print):
   - Heading: **"Privacy is literal here, not marketing."**
   - Body: "Your collection lives on your device — every name, journal entry, and growth photo
     stays on your phone. The only thing that ever leaves is a photo you choose to send for a
     read, sent anonymously with location and metadata stripped, never stored, never used to
     train AI. No account. No login. No tracking. No ads."
   - Three pill stats: **"Pay once. Yours forever."** · **"No subscription, ever."** ·
     **"No account. No tracking."**

6. **Pricing clarity** — one calm glass card, honest and simple:
   - "**Free** — track up to 2 orchids with the full experience: ID, the read-my-plant
     diagnosis, genus-aware care, and the journal."
   - "**Lifetime unlock** — one payment for unlimited orchids, your whole collection. No
     subscription. Restore on your devices."
   - CTA under it: another **Download on the App Store** badge.

7. **Final CTA section** — full-width, the 3-stop orchid gradient on glass.
   - Headline: **"Your orchids deserve to be understood."**
   - Big **Download on the App Store** badge, centered.

8. **Footer** — slim, muted. "Laelia" wordmark, a one-line tagline, and text links:
   **Privacy Policy**, **Support**, **Terms of Use**. Plus a quiet maker line: "An indie app.
   Made with care." (Privacy → https://www.pigloboutique.com/#/privacy · Support →
   info@piglo.net · Terms → Apple Standard EULA.)

## Critical details
- The **Download on the App Store** button is the single most important element — repeat it in
  the header, hero, pricing, and final CTA. Use the official Apple "Download on the App Store"
  badge styling (black, rounded). Link target: **https://apps.apple.com/us/app/id6782402415**
- The two wedge phrases — **"No subscription, ever"** and **"your data stays on your phone"** —
  should be visually prominent, not buried. They are the sharpest reasons to trust this app over
  the subscription-trap incumbents.
- Voice throughout: honest, warm, calm, a little proud. Never salesy-shouty.
- Keep it fast and light — one page, no heavy frameworks needed.

─── END PROMPT ───

---

## Refinement nudges (if Stitch's first pass is off)
- *Too grey / clinical?* → "Make it warmer and more colorful — lean into the orchid magenta,
  coral, and sunlit-yellow palette; cream background, not white."
- *Glass too noisy / hard to read?* → "Reduce background gradient opacity; put all text on solid
  glass cards; increase contrast. Clarity over decoration."
- *CTA not dominant?* → "Make the App Store download badge larger and repeat it; it's the #1
  goal of the page."
- *Want the celebration to pop?* → "Give the rebloom feature a distinct sunlit-yellow-to-coral
  treatment and a serif headline, so it feels like the emotional peak."

## Post-generation checklist (before Vercel deploy)
- [ ] App Store badge links to `https://apps.apple.com/us/app/id6782402415`
- [ ] Footer Privacy link → `https://www.pigloboutique.com/#/privacy`
- [ ] Footer Support → `info@piglo.net`
- [ ] Real app screenshots swapped into the iPhone mockups
- [ ] Open Graph / favicon + page `<title>`: "Laelia — Orchid Care & ID"
- [ ] Mobile layout checked (most orchid-community traffic is mobile)
- [ ] AA contrast verified on hero + gradient sections
