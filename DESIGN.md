---
name: Solaris Energy System
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#424753'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#727784'
  outline-variant: '#c2c6d5'
  surface-tint: '#005cbd'
  primary: '#0056b3'
  on-primary: '#ffffff'
  primary-container: '#1e6fd9'
  on-primary-container: '#f7f7ff'
  inverse-primary: '#acc7ff'
  secondary: '#785900'
  on-secondary: '#ffffff'
  secondary-container: '#fdc003'
  on-secondary-container: '#6c5000'
  tertiary: '#006827'
  on-tertiary: '#ffffff'
  tertiary-container: '#008434'
  on-tertiary-container: '#e6ffe2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#acc7ff'
  on-primary-fixed: '#001a40'
  on-primary-fixed-variant: '#004591'
  secondary-fixed: '#ffdf9e'
  secondary-fixed-dim: '#fabd00'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#69ff87'
  tertiary-fixed-dim: '#3ce36a'
  on-tertiary-fixed: '#002108'
  on-tertiary-fixed-variant: '#00531e'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  headline-xl-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 34px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 20px
  stack-gap: 16px
  section-margin: 40px
  gutter: 12px
---

## Brand & Style
The design system is rooted in the **Corporate / Modern** aesthetic, specifically tailored for the renewable energy sector. It conveys reliability, technical precision, and optimistic sustainability. 

The visual language balances high-trust corporate blues with high-energy solar yellows. It utilizes generous whitespace and clean, structured layouts to reflect the efficiency of the technology it represents. The emotional response should be one of "effortless transition to green energy"—professional yet approachable, high-tech yet human-centric. The style employs soft depth through subtle shadows and deliberate radius choices to feel modern and "hardware-inspired."

## Colors
The palette is dominated by a **Solar Blue** (Primary), which establishes authority and technical stability. The **Vibrant Yellow** (Secondary) is used as an energy accent, reserved for high-impact calls to action and "power-on" indicators.

- **Primary:** Use for main interactive elements, primary buttons, and navigational headers.
- **Secondary:** Use for specialized highlights, urgent CTAs, or "Solar" thematic accents.
- **Tertiary (Green/Red):** Standardized semantic colors for energy efficiency (Green) and critical alerts (Red).
- **Surface Neutrals:** A range of very light cool-greys are used for background containment to prevent the interface from feeling "stark white" and to help elevate cards.

## Typography
This design system uses **Hanken Grotesk** for headlines to provide a sharp, engineering-forward appearance. Its geometric clarity aligns with modern hardware interfaces. **Inter** is utilized for body copy and UI labels to ensure maximum legibility across dense technical data.

Headers should maintain tight letter-spacing to feel impactful. Large displays (headline-xl) may use a text-shadow or high-contrast overlay when placed on top of imagery to ensure the "Energy" message remains the focal point.

## Layout & Spacing
The layout follows a **Fluid Mobile Grid** optimized for vertical scrolling. 
- **Margins:** A standard 20px horizontal margin is maintained for all screen edges.
- **Vertical Rhythm:** Elements are stacked using an 8px base grid. Sections are separated by 40px to give the content "breathable" room.
- **Card Spacing:** Internal card padding should be 16px or 24px depending on content density.
- **Safe Areas:** Ensure interactive elements (buttons) are at least 48px in height to accommodate mobile touch targets.

## Elevation & Depth
Hierarchy is achieved through **Ambient Shadows** and **Tonal Layering**. 
- **Surface 0 (Background):** Solid `#F8F9FA`.
- **Surface 1 (Cards/Containers):** Solid White `#FFFFFF`.
- **Shadows:** Use a soft, multi-layered shadow (0px 4px 20px rgba(0, 0, 0, 0.05)) to lift cards off the background without creating harsh edges. 
- **Interaction Depth:** On press, buttons should appear to "sink" slightly, either through a slight reduction in shadow spread or a darkening of the background color. 
- **Overlay:** Use a 40% blur backdrop for navigation menus or modals to maintain the clean, "glass-like" solar panel aesthetic.

## Shapes
The design system utilizes **Rounded** (Level 2) geometry to soften the technical nature of energy management. 
- **Standard Cards:** Use 1rem (16px) corner radius.
- **Buttons:** Use 2rem (32px) or full-pill shapes to emphasize interactivity and comfort.
- **Input Fields:** Match the 0.5rem (8px) base radius for a more structured, functional look.
- **Visual Containers:** Images within cards should inherit the card's top corner radius (16px) but remain flat on the bottom where they meet text containers.

## Components
- **Primary Buttons:** High-contrast blue background with white text. Include a right-pointing arrow icon to imply forward momentum.
- **Secondary Buttons (Action):** Vibrant yellow background with dark text, used exclusively for conversion points like "Ver Productos."
- **Feature Cards:** Vertical stack with an image at the top (full width of card), followed by a headline, short description, and a text-link or button.
- **Category Chips:** Circular icon containers (using the primary or semantic colors) with a title and subtitle below.
- **Energy Gauges:** Linear or circular progress bars using the Tertiary Green to indicate battery health or solar generation levels.
- **Input Fields:** Clean, outlined boxes with 1px borders in neutral-300, shifting to Primary Blue on focus.
- **Lists:** Clean dividers (1px, neutral-100) with generous vertical padding (16px) and chevron-right indicators for drill-down navigation.