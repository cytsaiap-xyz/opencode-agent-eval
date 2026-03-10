# Conference Schedule Builder

You are a conference planning agent. Read the conference data in `conference.json` (10 sessions, 4 rooms, 7 time slots) and build an optimal schedule.

## Scheduling Rules

- Schedule by priority: required > high > medium > low
- Match room equipment to session requirements
- No speaker or room double-booking (same room or same speaker at same time)
- Sessions > 60 min can span consecutive time slots
- Prefer sessions in their preferred time period (morning/afternoon)

## Scoring (0-100)

- 40 pts: required sessions scheduled (proportional)
- 30 pts: high-priority sessions scheduled (proportional)
- 15 pts: sessions in preferred time period (proportional)
- 15 pts: no conflicts

## Your Task

Read `conference.json` and build an optimal schedule. Write your results to `answer.json`.

### Required Output

1. **schedule**: The complete schedule with:
   - `entries`: Array of `{session_id, room_id, time_slot_id, start_time, end_time}`
   - `unscheduled`: Array of session IDs that couldn't be scheduled
   - `score`: The schedule's score (0-100)

2. **formatted**: Human-readable schedule as a string, sorted by time then room. Format each line as: `"HH:MM-HH:MM: [Room Name] Session Title (Speaker Name)"`

3. **conflict_check**: Run conflict detection on your schedule. Provide:
   - `room_conflicts`: number of room conflicts (should be 0)
   - `speaker_conflicts`: number of speaker conflicts (should be 0)
   - `equipment_conflicts`: number of equipment conflicts (should be 0)

## Key Sessions

- Required: s1 (Keynote: Future of AI, Dr. Smith), s5 (Panel Discussion), s10 (Closing Remarks)
- High priority: s2, s3, s7, s8
- Note: Prof. Johnson speaks at both s2 and s6 — they cannot be at the same time

## Output Format

Write `answer.json` with the keys: `schedule`, `formatted`, `conflict_check`.
