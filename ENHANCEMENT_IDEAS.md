# TDC Scheduler - Enhancement Ideas

**Generated:** October 3, 2025
**Target:** GitHub Pages compatible enhancements
**Focus:** Practical features for alliance management and member coordination

---

## Overview

This document contains actionable enhancement ideas for the TDC Alliance Scheduler web application. All suggestions are designed to work within the current GitHub Pages hosting architecture (static frontend + GitHub API for data storage) and provide real value to alliance members and leadership.

---

## 🎯 High-Priority Enhancements

### 1. **Member Attendance Tracking & History**
**Problem:** Currently, there's no way to track whether members actually participated in scheduled events.
**Solution:** Add an attendance tracking feature that lets leaders mark members as present/absent after events.

**Benefits:**
- Track member participation rates over time
- Identify inactive members who need follow-up
- Reward consistent participants
- Make data-driven decisions about member engagement

**Implementation:**
- Add `events` array to data structure with event history
- Create admin panel for marking attendance post-event
- Display attendance percentage on member cards
- Add filtering by attendance rate (e.g., "active", "occasional", "inactive")

**GitHub Compatible:** ✅ (stores in data.json, no backend needed)

---

### 2. **Event Planning & RSVP System**
**Problem:** Members submit availability but there's no way to plan specific events and collect RSVPs.
**Solution:** Add an event creation system where leaders can schedule specific events and members can RSVP.

**Benefits:**
- Clear communication about upcoming events
- Accurate headcount before events start
- Ability to cancel/reschedule if insufficient RSVPs
- Historical record of planned events

**Features:**
- Leader creates event (date, time, type: raid/war/training)
- Members see upcoming events on dashboard
- One-click RSVP (Going / Maybe / Not Going)
- Real-time RSVP counter
- Automatic notifications for events matching member availability

**GitHub Compatible:** ✅ (events stored in data.json)

---

### 3. **Role-Based Member Classifications**
**Problem:** Alliance has different types of members (leadership, veterans, new recruits) with no way to distinguish them.
**Solution:** Add member roles/tags for better organization.

**Benefits:**
- Quick identification of leadership team
- Separate tracking for recruits vs veterans
- Role-specific notifications and features
- Better team composition planning

**Roles:**
- Leader / Co-Leader
- Officer
- Veteran
- Member
- Recruit
- Inactive (auto-tag based on attendance)

**GitHub Compatible:** ✅ (role field in member data)

---

### 4. **Team Power Calculator & Composition Planner**
**Problem:** Hard to quickly calculate total available power for a time slot or plan balanced teams.
**Solution:** Add team planning tools with power calculations.

**Benefits:**
- Instantly see total alliance power for any time slot
- Plan balanced teams for different game modes
- Identify when you have enough power for challenging content
- Strategic planning for events requiring specific power levels

**Features:**
- Total power display on optimal schedule calendar
- Team builder: drag-and-drop members into teams
- Power balance indicator (shows if teams are evenly matched)
- Export team compositions for sharing

**GitHub Compatible:** ✅ (calculations client-side, team compositions can be saved to data.json)

---

### 5. **Member Notes & Communication Log**
**Problem:** No way for leaders to record notes about members (performance, concerns, achievements).
**Solution:** Add private notes feature for leadership.

**Benefits:**
- Track member development over time
- Record important conversations or incidents
- Share context with other leaders
- Better member management decisions

**Features:**
- Text notes attached to each member (leader-only)
- Timestamp and author tracking
- Filter/search notes
- Category tags (Performance, Behavior, Achievement, etc.)

**GitHub Compatible:** ✅ (notes stored in data.json, client-side visibility controls)

---

## 🚀 Medium-Priority Enhancements

### 6. **Activity Streaks & Achievements**
**Problem:** No recognition for consistent participation.
**Solution:** Gamification through streaks and achievement badges.

**Benefits:**
- Encourage regular participation
- Boost member engagement
- Visual recognition of commitment
- Fun competitive element

**Examples:**
- "Week Warrior" - 7-day attendance streak
- "Always On Time" - 10 events without being late
- "Team Player" - High availability submission rate
- "Veteran" - 100 events attended

**GitHub Compatible:** ✅ (achievement data in member records)

---

### 7. **Conflict Detection & Warnings**
**Problem:** No visibility when scheduling overlaps with members' unavailability.
**Solution:** Smart warnings when planning events during low-availability periods.

**Benefits:**
- Avoid scheduling events when most members are unavailable
- Optimize event timing for maximum participation
- Reduce no-shows and cancellations

**Features:**
- Red/yellow/green indicators for proposed event times
- "X members would miss this" warnings
- Alternative time suggestions
- Blackout date marking (holidays, known conflicts)

**GitHub Compatible:** ✅ (client-side calculation)

---

### 8. **Multi-Language Alliance Support**
**Problem:** Current multi-language support only translates UI, not member-generated content.
**Solution:** Tools for managing multilingual alliances.

**Benefits:**
- Support international alliances
- Better communication across language barriers
- Inclusive environment for all members

**Features:**
- Member language preference field
- Language-based grouping/filtering
- Event descriptions in multiple languages
- Translation hints for common terms

**GitHub Compatible:** ✅ (language field in member data, UI already supports 6 languages)

---

### 9. **Availability Templates & Quick Fill**
**Problem:** Members with consistent schedules have to manually select the same slots repeatedly.
**Solution:** Save availability templates for quick reuse.

**Benefits:**
- Faster schedule updates
- Reduced friction for regular updates
- Higher update frequency from members
- Better data freshness

**Features:**
- "Save as template" button
- Named templates ("Weekday Schedule", "Weekend Schedule")
- One-click apply template
- Template modification without affecting saved version

**GitHub Compatible:** ✅ (templates stored in localStorage or member data)

---

### 10. **Statistics Dashboard**
**Problem:** No overview of alliance health and trends.
**Solution:** Analytics dashboard with key metrics.

**Benefits:**
- Leadership insights for decision-making
- Identify trends (declining participation, growth)
- Data-driven alliance management
- Progress tracking toward goals

**Metrics:**
- Total alliance power (sum and average)
- Availability coverage (% of hours with 50%+ members)
- Member growth over time
- Average tower level
- Most/least available time slots
- Attendance trends

**GitHub Compatible:** ✅ (client-side calculations from data.json)

---

## 💡 Low-Priority / Nice-to-Have Enhancements

### 11. **Backup/Restore Functionality**
**Problem:** No easy way to backup alliance data outside of GitHub.
**Solution:** Enhanced CSV export/import with versioning.

**Benefits:**
- Data safety and redundancy
- Easy migration if needed
- Historical snapshots
- Disaster recovery

**GitHub Compatible:** ✅ (download/upload JSON files)

---

### 12. **Mobile App Feel (PWA)**
**Problem:** Web app doesn't work well offline or as mobile app.
**Solution:** Convert to Progressive Web App (PWA).

**Benefits:**
- Install as mobile app
- Works offline (read-only)
- Push notifications for events
- Better mobile experience

**GitHub Compatible:** ✅ (PWA is static files)

---

### 13. **Custom Time Slot Intervals**
**Problem:** 2-hour slots may not match all game event durations.
**Solution:** Configurable time slot sizes.

**Features:**
- Choose 1-hour, 2-hour, 3-hour, or 4-hour intervals
- Alliance-wide setting
- Backward compatible with existing data

**GitHub Compatible:** ✅ (setting in data.json)

---

### 14. **Member Comparison Tool**
**Problem:** Hard to compare two members side-by-side.
**Solution:** Side-by-side comparison view.

**Benefits:**
- Easier recruitment decisions
- Identify complementary schedules
- Fairness in member evaluations

**GitHub Compatible:** ✅ (client-side comparison)

---

### 15. **Dark/Light Theme Toggle**
**Problem:** Current dark theme may not suit all preferences.
**Solution:** Theme switcher.

**Benefits:**
- User preference accommodation
- Better accessibility
- Professional appearance options

**GitHub Compatible:** ✅ (CSS variables, saved to localStorage)

---

## 🔐 Security & Quality of Life

### 16. **Role-Based Permissions**
**Problem:** All authenticated users have equal permissions.
**Solution:** Implement permission levels.

**Roles:**
- **Admin** - Full control (delete all, edit anyone, manage events)
- **Officer** - Moderate control (create events, mark attendance)
- **Member** - Basic control (own schedule only)

**GitHub Compatible:** ✅ (role field in member data, enforced client-side with PAT validation)

---

### 17. **Username Change History**
**Problem:** Members change usernames but no record of previous names.
**Solution:** Track username history.

**Benefits:**
- Maintain continuity of records
- Prevent identity confusion
- Track member identity over time

**GitHub Compatible:** ✅ (username history array in member data)

---

### 18. **Auto-Refresh Data**
**Problem:** Users must manually refresh to see updates.
**Solution:** Periodic background data refresh.

**Benefits:**
- Always see current data
- Better user experience
- Reduced need for manual refreshes

**GitHub Compatible:** ✅ (polling GitHub API every 60 seconds)

---

## 🎨 Visual & UX Improvements

### 19. **Member Profile Pictures/Avatars**
**Problem:** Text-only member cards are less engaging.
**Solution:** Add avatar support (initials or emoji-based).

**Benefits:**
- Easier visual recognition
- More engaging interface
- Personal touch

**Options:**
- Initials-based avatars (auto-generated)
- Emoji selection
- Color-coded by role or stats

**GitHub Compatible:** ✅ (avatar choice stored in member data, no image uploads needed)

---

### 20. **Drag-and-Drop Time Selection**
**Problem:** Clicking individual slots can be tedious.
**Solution:** Drag to select multiple slots at once.

**Benefits:**
- Faster schedule entry
- Better user experience
- Reduced friction

**GitHub Compatible:** ✅ (client-side UI enhancement)

---

## 📊 Prioritization Matrix

| Feature | Impact | Effort | Priority | GitHub Compatible |
|---------|--------|--------|----------|-------------------|
| Event Planning & RSVP | High | Medium | **HIGH** | ✅ |
| Attendance Tracking | High | Medium | **HIGH** | ✅ |
| Team Power Calculator | High | Low | **HIGH** | ✅ |
| Member Roles | Medium | Low | **HIGH** | ✅ |
| Statistics Dashboard | Medium | Medium | **MEDIUM** | ✅ |
| Conflict Detection | Medium | Low | **MEDIUM** | ✅ |
| Achievements System | Medium | Medium | **MEDIUM** | ✅ |
| PWA Conversion | Medium | High | **MEDIUM** | ✅ |
| Availability Templates | Low | Low | **LOW** | ✅ |
| Theme Toggle | Low | Low | **LOW** | ✅ |

---

## 🛠️ Implementation Recommendations

### Phase 1: Foundation (Weeks 1-2)
1. Member roles/classifications
2. Team power calculator
3. Auto-refresh data

### Phase 2: Engagement (Weeks 3-4)
1. Event planning & RSVP system
2. Attendance tracking
3. Conflict detection

### Phase 3: Advanced (Weeks 5-6)
1. Statistics dashboard
2. Achievements system
3. Member notes

### Phase 4: Polish (Week 7+)
1. PWA conversion
2. Visual improvements
3. Quality of life features

---

## 💭 Final Notes

All suggested enhancements are:
- ✅ Compatible with GitHub Pages static hosting
- ✅ Work with existing GitHub API data storage
- ✅ No backend/server requirements
- ✅ Provide real value to alliance management
- ✅ Implementable with current tech stack (React, Tailwind, GitHub API)

The highest impact features focus on **event coordination**, **member engagement**, and **leadership tools** - the core needs of alliance management in competitive games.
