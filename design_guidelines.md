# BitKings NFT Staking Platform - Design Guidelines

## Design Approach
**Reference-Based Implementation**: Pixel-perfect recreation of provided Figma designs with cyberpunk/Web3 gaming aesthetic. All design decisions are predetermined by the Figma files - focus on accurate implementation of the existing design system.

## Core Visual System

### Color Palette
- **Primary Background**: Deep dark navy/purple (#0A0B1A or similar dark tone)
- **Neon Accent**: Bright electric green (#00FF00 or #0FFF50) - used for CTAs, highlights, borders, and glow effects
- **Card Backgrounds**: Semi-transparent dark panels with subtle borders
- **Text Primary**: White (#FFFFFF)
- **Text Secondary**: Light gray/muted white for descriptions
- **Rarity Colors**: Gold for Legendary, Purple for Mythical, Blue for Rare, Gray for Common badges

### Typography Hierarchy
- **Headings**: Bold, uppercase sans-serif for section titles and primary headings
- **Body Text**: Clean sans-serif for descriptions and content
- **Stats/Numbers**: Bold, prominent display for numerical data (staking power, earnings)
- **Labels**: Small caps or uppercase for form labels and category tags
- **Wallet Address**: Monospace font for blockchain addresses (e.g., 0X1632...6678)

### Layout System
**Spacing Units**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Compact spacing (p-2, p-4) for tight UI elements
- Standard spacing (p-6, p-8) for card padding
- Generous spacing (p-12, p-16, p-20) for section separation

### Component Library

**Navigation**
- Fixed sidebar on desktop with dark background, profile section at top, menu items with icons, social links at bottom
- Mobile: Bottom navigation bar with hamburger menu revealing full-screen overlay menu
- "Go to Main Site" button with neon green background and glow effect

**NFT Cards**
- Dark card background with rounded corners
- NFT image at top with circular platform/pedestal effect
- Rarity badge overlay (top-right corner)
- Card title and ID below image
- Hover state: Slight lift with enhanced glow border
- Grid layout: 4 columns desktop, 2 columns tablet, 1 column mobile

**Modals/Popups**
- Centered overlay with dark semi-transparent backdrop
- Modal container: Dark panel with neon green border glow
- Close button (X) in top-right corner
- Two-state wallet connection flow as specified in designs
- Claim popup with earnings breakdown table
- Configure staking with time multiplier options displayed as cards

**Buttons**
- Primary: Neon green background with bright glow effect, white text, rounded corners
- Secondary: Transparent with neon green border, glow on hover
- Disabled: Muted gray with no glow
- Hover: Intensified glow, slight scale increase (scale-105)
- Active: Slight press effect (scale-95)

**Filter System**
- Accordion-style filter categories on desktop (left sidebar)
- Each filter group expandable with checkboxes
- Mobile: Full-screen filter overlay with same structure
- "Reset Filters" option at bottom

**Stats Display**
- Large numerical values with labels
- Grid layout for multiple stats (2x2 or 4-column)
- Neon green highlights for emphasis on key metrics
- Icons accompanying each stat category

**Collection Detail View**
- Large NFT display with animated circular platform/stage
- 3D-style presentation of character
- Traits panel showing attributes in grid format
- "View on OpenSea" external link button
- Back navigation to collection

**Staking Interface**
- NFT selection grid with checkboxes
- Selected state: Neon green border glow
- Statistics summary panel showing total power, earnings
- "Configure Staking" and "Claim Rewards" action buttons
- Time-lock multiplier selector with clear multiplier badges (1.0x, 1.10x, 1.20x, 1.36x)

### Animation & Transitions
- **Modal Entry/Exit**: Fade in backdrop (300ms), scale and fade modal content (200ms delay)
- **Button Interactions**: Glow intensity increase on hover (150ms), scale transform on active
- **Card Hover**: Subtle lift (translateY -4px) with enhanced border glow (200ms)
- **Page Transitions**: Smooth fade between routes (300ms)
- **NFT Platform**: Gentle rotation animation on collection detail view
- **Filter Accordion**: Smooth expand/collapse (250ms)
- **Wallet Connection Flow**: Fade transition between two popup states
- **Glow Effects**: Pulsing animation on primary CTAs (2s infinite loop, subtle)

### Responsive Breakpoints
- **Desktop**: 1280px+ (sidebar navigation, 4-column NFT grid)
- **Tablet**: 768px-1279px (2-column grid, condensed sidebar)
- **Mobile**: <768px (bottom nav, 1-column grid, full-screen modals and filters)

### Images
**No large hero images** - This is an application interface, not a marketing site. All visual interest comes from:
- NFT character images in cards and detail views
- 3D platform/pedestal effects under NFT displays
- Neon glow effects and cyberpunk UI elements
- Background patterns or subtle gradients in dark theme

### Accessibility
- Maintain WCAG AA contrast ratios (white text on dark backgrounds)
- Focus states with visible neon green outline
- Keyboard navigation support for all interactive elements
- ARIA labels for wallet addresses and NFT data
- Screen reader friendly modal announcements