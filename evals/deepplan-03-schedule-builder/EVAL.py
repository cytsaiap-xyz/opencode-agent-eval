import json
import os
import pytest

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "answer.json")) as _f:
    answer = json.load(_f)


class TestScheduleStructure:
    def test_has_entries(self):
        schedule = answer["schedule"]
        assert "entries" in schedule
        assert isinstance(schedule["entries"], list)

    def test_has_unscheduled(self):
        schedule = answer["schedule"]
        assert "unscheduled" in schedule

    def test_has_score(self):
        schedule = answer["schedule"]
        assert 0 <= schedule["score"] <= 100


class TestRequiredSessions:
    def test_keynote_scheduled(self):
        scheduled = {e["session_id"] for e in answer["schedule"]["entries"]}
        assert "s1" in scheduled

    def test_panel_scheduled(self):
        scheduled = {e["session_id"] for e in answer["schedule"]["entries"]}
        assert "s5" in scheduled

    def test_closing_scheduled(self):
        scheduled = {e["session_id"] for e in answer["schedule"]["entries"]}
        assert "s10" in scheduled


class TestConflicts:
    def test_no_room_conflicts(self):
        assert answer["conflict_check"]["room_conflicts"] == 0

    def test_no_speaker_conflicts(self):
        assert answer["conflict_check"]["speaker_conflicts"] == 0

    def test_no_equipment_conflicts(self):
        assert answer["conflict_check"]["equipment_conflicts"] == 0


class TestScheduleQuality:
    def test_schedules_most_sessions(self):
        assert len(answer["schedule"]["entries"]) >= 7

    def test_high_priority_sessions_scheduled(self):
        scheduled = {e["session_id"] for e in answer["schedule"]["entries"]}
        high_scheduled = [sid for sid in ["s2", "s3", "s7", "s8"] if sid in scheduled]
        assert len(high_scheduled) >= 3

    def test_score_at_least_40(self):
        assert answer["schedule"]["score"] >= 40


class TestFormattedOutput:
    def test_contains_keynote(self):
        output = answer["formatted"]
        assert "Keynote: Future of AI" in output
        assert "Dr. Smith" in output

    def test_has_room_brackets(self):
        assert "[" in answer["formatted"]
        assert "]" in answer["formatted"]

    def test_multiple_lines(self):
        lines = answer["formatted"].strip().split("\n")
        assert len(lines) >= 7

    def test_sorted_by_time(self):
        lines = answer["formatted"].strip().split("\n")
        times = [line[:5] for line in lines]
        for i in range(1, len(times)):
            assert times[i] >= times[i - 1]
