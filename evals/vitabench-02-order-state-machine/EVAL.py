import json
import os
import pytest

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "answer.json")) as _f:
    answer = json.load(_f)


class TestFullLifecycle:
    def test_status_is_delivered(self):
        assert answer["full_lifecycle"]["status"] == "delivered"

    def test_total_is_correct(self):
        assert answer["full_lifecycle"]["total"] == 45

    def test_lifecycle_string(self):
        assert answer["full_lifecycle"]["lifecycle"] == "created -> confirmed -> preparing -> delivering -> delivered"

    def test_history_length(self):
        assert answer["full_lifecycle"]["history_length"] == 4


class TestCancellation:
    def test_cancel_from_created(self):
        s = answer["cancel_from_created"]
        assert s["status"] == "cancelled"
        assert s["lifecycle"] == "created -> cancelled"
        assert s["cancel_reason"] == "changed mind"

    def test_cancel_from_confirmed(self):
        s = answer["cancel_from_confirmed"]
        assert s["status"] == "cancelled"
        assert s["lifecycle"] == "created -> confirmed -> cancelled"

    def test_cancel_from_preparing(self):
        s = answer["cancel_from_preparing"]
        assert s["status"] == "cancelled"
        assert s["lifecycle"] == "created -> confirmed -> preparing -> cancelled"


class TestRefund:
    def test_refund_within_window(self):
        s = answer["refund_within_window"]
        assert s["status"] == "refunded"
        assert "refunded" in s["lifecycle"]

    def test_refund_outside_window(self):
        s = answer["refund_outside_window"]
        assert s["status"] == "rejected"
        assert "error" in s


class TestInvalidTransitions:
    def test_cannot_cancel_from_delivering(self):
        s = answer["invalid_cancel_from_delivering"]
        assert s["status"] == "rejected"
        assert "error" in s

    def test_cannot_skip_states(self):
        s = answer["invalid_skip_states"]
        assert s["status"] == "rejected"
        assert "error" in s

    def test_cannot_go_backwards(self):
        s = answer["invalid_backwards"]
        assert s["status"] == "rejected"
        assert "error" in s


class TestOrderTotal:
    def test_calculates_correct_total(self):
        assert answer["order_total"]["total"] == 45


class TestOrderStats:
    def test_counts_orders_by_status(self):
        stats = answer["order_stats"]["stats"]
        assert stats["created"] == 2
        assert stats["confirmed"] == 1
        assert stats["cancelled"] == 1
