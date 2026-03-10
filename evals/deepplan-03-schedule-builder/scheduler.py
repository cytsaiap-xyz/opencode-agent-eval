import json
import os

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "conference.json")) as _f:
    conference_data = json.load(_f)


def room_has_equipment(room: dict, session: dict) -> bool:
    """
    Check if a room has all the required equipment for a session.

    room: dict with keys id, name, capacity, equipment (list of str).
    session: dict with keys id, title, speaker, duration_minutes, track, priority,
             required_equipment (list of str), preferred_time_slot.
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def session_fits_slot(session: dict, slot: dict) -> bool:
    """
    Check if a session's duration fits within a time slot.
    Session must not exceed the slot's time range.
    Time slot duration = end - start in minutes.

    slot: dict with keys id, start, end, period.
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def detect_conflicts(schedule: dict) -> list[dict]:
    """
    Detect all conflicts in a schedule:
    - Room conflict: two sessions in the same room at overlapping times
    - Speaker conflict: same speaker in two sessions at overlapping times
    - Equipment conflict: room doesn't have required equipment

    schedule: dict with keys entries (list of entry dicts), unscheduled (list of str),
              score (number).
    Each entry: dict with session_id, room_id, time_slot_id, start_time, end_time.

    Return a list of conflict dicts, each with: type ('room'|'speaker'|'equipment'),
        description (str), entries (list of two entry dicts).
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def calculate_score(schedule: dict) -> int:
    """
    Calculate a quality score for a schedule (0-100):
    - +40 points: all "required" priority sessions are scheduled
    - +30 points: all "high" priority sessions are scheduled
    - +15 points: sessions are in their preferred time period (morning/afternoon)
    - +15 points: no conflicts

    Partial credit: proportional to the fraction achieved in each category.
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def build_schedule() -> dict:
    """
    Build an optimal conflict-free schedule.

    Algorithm requirements:
    1. Schedule all "required" sessions first, then "high", then "medium", then "low"
    2. Prefer rooms that match required equipment
    3. Prefer time slots matching the session's preferred period
    4. No speaker can be in two places at the same time
    5. No room can host two sessions at the same time
    6. Session duration must fit within the time slot
    7. Sessions with duration > 60 min may span into the next consecutive slot
       (treat two adjacent slots as one big slot if needed)

    Return dict with: entries (list of entry dicts), unscheduled (list of session IDs),
        score (number).
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def format_schedule(schedule: dict) -> str:
    """
    Get a human-readable schedule display grouped by time slot.
    Format:
    "09:00-10:00: [Main Hall] Keynote: Future of AI (Dr. Smith)"
    "09:00-10:00: [Room A] React Best Practices (Jane Doe)"
    ...

    Sort by time, then by room name.
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")
