import json
import os
import pytest
from solution import build_cart

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "task-data.json")) as _f:
    task_data = json.load(_f)

cart = build_cart()


class TestDeepPlanningShoppingTask:
    def test_cart_has_items(self):
        assert len(cart["items"]) > 0

    def test_all_items_have_required_fields(self):
        for item in cart["items"]:
            assert item["name"]
            assert item["brand"]
            assert item["price"] > 0
            assert item["matched_requirement"]

    def test_subtotal_matches_sum_of_item_prices(self):
        total = sum(item["price"] for item in cart["items"])
        assert abs(cart["subtotal"] - total) < 0.01

    def test_final_price_is_subtotal_minus_discount(self):
        assert abs(cart["final_price"] - (cart["subtotal"] - cart["total_discount"])) < 0.01

    def test_correct_level(self):
        assert cart["level"] == 2


    def test_within_budget(self):
        assert cart["final_price"] <= 2841
    def test_no_free_items_unless_explicitly_free(self):
        for item in cart["items"]:
            assert item["price"] > 0

    def test_no_duplicate_matched_requirements(self):
        reqs = [item["matched_requirement"] for item in cart["items"]]
        assert len(set(reqs)) == len(reqs)
