import json
import os
import pytest

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "answer.json")) as _f:
    answer = json.load(_f)


class TestFindMatchingProducts:
    def test_nike_products(self):
        results = answer["nike_products"]
        assert len(results) >= 4
        assert all(p["brand"] == "Nike" for p in results)

    def test_shoes_category(self):
        results = answer["shoes_category"]
        assert len(results) >= 6
        assert all(p["category"] == "shoes" for p in results)

    def test_high_rated(self):
        results = answer["high_rated"]
        assert all(p["rating"] >= 4.5 for p in results)

    def test_name_contains_air(self):
        results = answer["name_contains_air"]
        assert all("air" in p["name"].lower() for p in results)
        assert len(results) >= 2

    def test_excludes_out_of_stock(self):
        results = answer["nike_products"]
        assert all(p.get("in_stock", True) for p in results)

    def test_sorted_by_price(self):
        results = answer["nike_products"]
        for i in range(1, len(results)):
            assert results[i]["price"] >= results[i - 1]["price"]

    def test_combined_filters(self):
        results = answer["combined_nike_shoes"]
        assert all(
            p["brand"] == "Nike" and p["category"] == "shoes"
            and p["rating"] >= 4.5 and p["total_reviews"] >= 3000
            for p in results
        )


class TestFindCheapest:
    def test_cheapest_nike_shoe(self):
        product = answer["cheapest_nike_shoe"]
        assert product is not None
        assert product["brand"] == "Nike"
        assert product["price"] == 100

    def test_returns_null_for_impossible(self):
        assert answer["cheapest_impossible"] is None


class TestFindApplicableCoupons:
    def test_cross_store_coupon_triggers(self):
        coupons = answer["coupons_high_spend"]
        assert any(c["id"] == "c1" for c in coupons)

    def test_brand_coupon_applies(self):
        coupons = answer["coupons_nike_brand"]
        assert any(c["id"] == "c2" for c in coupons)

    def test_sorted_by_discount_descending(self):
        coupons = answer["coupons_high_spend"]
        for i in range(1, len(coupons)):
            assert coupons[i]["discount"] <= coupons[i - 1]["discount"]

    def test_no_coupons_under_threshold(self):
        assert len(answer["coupons_under_threshold"]) == 0


class TestBuildOptimalCart:
    def test_simple_cart(self):
        cart = answer["cart_simple"]
        assert cart is not None
        assert len(cart["items"]) == 2
        assert cart["subtotal"] == sum(i["price"] for i in cart["items"])

    def test_picks_cheapest(self):
        cart = answer["cart_cheapest"]
        assert cart is not None
        assert cart["items"][0]["price"] == 100

    def test_respects_budget(self):
        assert answer["cart_over_budget"] is None

    def test_applies_coupons(self):
        cart = answer["cart_with_coupons"]
        assert cart is not None
        assert cart["total_discount"] > 0
        assert cart["final_price"] == cart["subtotal"] - cart["total_discount"]
        assert len(cart["applied_coupons"]) > 0


class TestBuildSmartCart:
    def test_smart_cart_returns_best_option(self):
        smart = answer["smart_cart"]
        basic = answer["cart_with_coupons"]
        assert smart is not None
        assert smart["final_price"] <= smart["subtotal"]
