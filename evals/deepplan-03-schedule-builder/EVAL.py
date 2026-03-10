import pytest
from scheduler import (
    room_has_equipment, session_fits_slot, detect_conflicts,
    calculate_score, build_schedule, format_schedule,
)

test_session = {
    "id": "s1", "title": "Test", "speaker": "Speaker", "duration_minutes": 60,
    "track": "ai", "priority": "required",
    "required_equipment": ["projector", "microphone"],
    "preferred_time_slot": "morning",
}

main_room = {
    "id": "main", "name": "Main Hall", "capacity": 500,
    "equipment": ["projector", "microphone", "whiteboard"],
}

small_room = {
    "id": "c", "name": "Room C", "capacity": 50,
    "equipment": ["projector"],
}


class TestRoomHasEquipment:
    def test_room_with_all_equipment_returns_true(self):
        assert room_has_equipment(main_room, test_session) is True

    def test_room_missing_equipment_returns_false(self):
        assert room_has_equipment(small_room, test_session) is False

    def test_session_with_no_equipment_requirement(self):
        session = {**test_session, "required_equipment": []}
        assert room_has_equipment(small_room, session) is True


class TestSessionFitsSlot:
    def test_60_min_session_fits_60_min_slot(self):
        slot = {"id": "slot1", "start": "09:00", "end": "10:00", "period": "morning"}
        assert session_fits_slot(test_session, slot) is True

    def test_90_min_session_does_not_fit_60_min_slot(self):
        session = {**test_session, "duration_minutes": 90}
        slot = {"id": "slot1", "start": "09:00", "end": "10:00", "period": "morning"}
        assert session_fits_slot(session, slot) is False

    def test_30_min_session_fits_60_min_slot(self):
        session = {**test_session, "duration_minutes": 30}
        slot = {"id": "slot1", "start": "09:00", "end": "10:00", "period": "morning"}
        assert session_fits_slot(session, slot) is True


class TestDetectConflicts:
    def test_no_conflicts_in_empty_schedule(self):
        schedule = {"entries": [], "unscheduled": [], "score": 0}
        assert len(detect_conflicts(schedule)) == 0

    def test_detects_room_conflict(self):
        schedule = {
            "entries": [
                {"session_id": "s1", "room_id": "main", "time_slot_id": "slot1", "start_time": "09:00", "end_time": "10:00"},
                {"session_id": "s2", "room_id": "main", "time_slot_id": "slot1", "start_time": "09:00", "end_time": "10:00"},
            ],
            "unscheduled": [],
            "score": 0,
        }
        conflicts = detect_conflicts(schedule)
        assert any(c["type"] == "room" for c in conflicts)

    def test_detects_speaker_conflict(self):
        # Prof. Johnson has s2 and s6; if scheduled at same time
        schedule = {
            "entries": [
                {"session_id": "s2", "room_id": "a", "time_slot_id": "slot1", "start_time": "09:00", "end_time": "10:00"},
                {"session_id": "s6", "room_id": "b", "time_slot_id": "slot1", "start_time": "09:00", "end_time": "10:00"},
            ],
            "unscheduled": [],
            "score": 0,
        }
        conflicts = detect_conflicts(schedule)
        assert any(c["type"] == "speaker" for c in conflicts)

    def test_no_conflict_in_different_time_slots(self):
        schedule = {
            "entries": [
                {"session_id": "s1", "room_id": "main", "time_slot_id": "slot1", "start_time": "09:00", "end_time": "10:00"},
                {"session_id": "s2", "room_id": "main", "time_slot_id": "slot2", "start_time": "10:15", "end_time": "11:15"},
            ],
            "unscheduled": [],
            "score": 0,
        }
        conflicts = detect_conflicts(schedule)
        room_conflicts = [c for c in conflicts if c["type"] == "room"]
        assert len(room_conflicts) == 0


class TestCalculateScore:
    def test_empty_schedule_with_all_sessions_unscheduled_scores_15(self):
        schedule = {
            "entries": [],
            "unscheduled": ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10"],
            "score": 0,
        }
        score = calculate_score(schedule)
        # No required/high scheduled = 0+0, no sessions to judge preferences = 0, but 15 for no conflicts
        assert score == 15

    def test_perfect_schedule_gets_high_score(self):
        schedule = build_schedule()
        score = calculate_score(schedule)
        # Should be at least 40 (all required scheduled)
        assert score >= 40


class TestBuildSchedule:
    def test_schedules_all_required_sessions(self):
        schedule = build_schedule()
        # Required sessions: s1 (Keynote), s5 (Panel), s10 (Closing)
        scheduled = {e["session_id"] for e in schedule["entries"]}
        assert "s1" in scheduled
        assert "s5" in scheduled
        assert "s10" in scheduled

    def test_no_room_conflicts(self):
        schedule = build_schedule()
        conflicts = detect_conflicts(schedule)
        room_conflicts = [c for c in conflicts if c["type"] == "room"]
        assert len(room_conflicts) == 0

    def test_no_speaker_conflicts(self):
        schedule = build_schedule()
        conflicts = detect_conflicts(schedule)
        speaker_conflicts = [c for c in conflicts if c["type"] == "speaker"]
        assert len(speaker_conflicts) == 0

    def test_schedules_most_sessions(self):
        schedule = build_schedule()
        # Should schedule at least 7 out of 10
        assert len(schedule["entries"]) >= 7

    def test_equipment_requirements_met(self):
        schedule = build_schedule()
        conflicts = detect_conflicts(schedule)
        equip_conflicts = [c for c in conflicts if c["type"] == "equipment"]
        assert len(equip_conflicts) == 0

    def test_has_valid_score(self):
        schedule = build_schedule()
        assert schedule["score"] >= 0
        assert schedule["score"] <= 100
        # Score should match calculated score
        assert abs(schedule["score"] - calculate_score(schedule)) < 1

    def test_high_priority_sessions_scheduled(self):
        schedule = build_schedule()
        scheduled = {e["session_id"] for e in schedule["entries"]}
        # High priority: s2, s3, s7, s8
        high_scheduled = [sid for sid in ["s2", "s3", "s7", "s8"] if sid in scheduled]
        assert len(high_scheduled) >= 3  # at least 3 of 4


class TestFormatSchedule:
    def test_produces_readable_output(self):
        schedule = build_schedule()
        output = format_schedule(schedule)
        assert "Keynote: Future of AI" in output
        assert "Dr. Smith" in output
        assert "[" in output
        assert "]" in output
        # Should have multiple lines
        lines = output.strip().split("\n")
        assert len(lines) >= 7

    def test_sorted_by_time_then_room(self):
        schedule = build_schedule()
        output = format_schedule(schedule)
        lines = output.strip().split("\n")
        # Extract times from each line
        times = [line[:5] for line in lines]
        for i in range(1, len(times)):
            assert times[i] >= times[i - 1]
