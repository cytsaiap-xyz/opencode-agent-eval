# Conference Schedule Builder

Implement a conference schedule builder in `scheduler.ts` using data from `conference.json` (10 sessions, 4 rooms, 7 time slots).

## Your Task

Implement all functions in `scheduler.ts`:

1. **`roomHasEquipment(room, session)`** — Check if room has all equipment the session requires.

2. **`sessionFitsSlot(session, slot)`** — Check if session duration fits within the time slot's duration.

3. **`detectConflicts(schedule)`** — Find room conflicts (double-booked rooms), speaker conflicts (same speaker at same time), and equipment conflicts (room missing equipment).

4. **`calculateScore(schedule)`** — Score 0-100 based on:
   - 40 pts: required sessions scheduled (proportional)
   - 30 pts: high-priority sessions scheduled (proportional)
   - 15 pts: sessions in preferred time period (proportional)
   - 15 pts: no conflicts

5. **`buildSchedule()`** — Build an optimal conflict-free schedule:
   - Schedule by priority order: required > high > medium > low
   - Prefer matching equipment and preferred time period
   - No speaker or room conflicts
   - Sessions > 60 min can span consecutive time slots
   - Return schedule with entries, unscheduled list, and score

6. **`formatSchedule(schedule)`** — Human-readable display sorted by time then room, format: `"09:00-10:00: [Main Hall] Session Title (Speaker)"`
