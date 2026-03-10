import pytest
from optimizer import (
    find_matching_products, find_cheapest, find_applicable_coupons,
    build_optimal_cart, build_smart_cart,
)


class TestFindMatchingProducts:
    def test_filter_by_brand(self):
        results = find_matching_products({"brand": "Nike"})
        assert len(results) >= 4
        assert all(p["brand"] == "Nike" for p in results)

    def test_filter_by_category(self):
        results = find_matching_products({"category": "shoes"})
        assert len(results) >= 6
        assert all(p["category"] == "shoes" for p in results)

    def test_filter_by_color(self):
        results = find_matching_products({"color": "white", "category": "shoes"})
        assert all(p["color"] == "white" for p in results)

    def test_filter_by_min_rating(self):
        results = find_matching_products({"min_rating": 4.5})
        assert all(p["rating"] >= 4.5 for p in results)

    def test_filter_by_review_counts(self):
        results = find_matching_products({
            "min_five_star_reviews": 3000,
            "max_one_star_reviews": 50,
        })
        assert all(
            p["five_star_reviews"] >= 3000 and p["one_star_reviews"] <= 50
            for p in results
        )

    def test_name_contains_filter_case_insensitive(self):
        results = find_matching_products({"name_contains": "air"})
        assert all("air" in p["name"].lower() for p in results)
        assert len(results) >= 2  # Air Max + Air Force

    def test_excludes_out_of_stock_by_default(self):
        results = find_matching_products({"brand": "Puma", "category": "shoes"})
        # p12 (Puma Suede Classic) is out of stock
        assert all(p["in_stock"] for p in results)

    def test_sorted_by_price_ascending(self):
        results = find_matching_products({"brand": "Nike"})
        for i in range(1, len(results)):
            assert results[i]["price"] >= results[i - 1]["price"]

    def test_combined_filters(self):
        results = find_matching_products({
            "brand": "Nike",
            "category": "shoes",
            "min_rating": 4.5,
            "min_total_reviews": 3000,
        })
        assert all(
            p["brand"] == "Nike" and p["category"] == "shoes"
            and p["rating"] >= 4.5 and p["total_reviews"] >= 3000
            for p in results
        )


class TestFindCheapest:
    def test_finds_cheapest_nike_shoe(self):
        product = find_cheapest({"brand": "Nike", "category": "shoes"})
        assert product is not None
        assert product["brand"] == "Nike"
        assert product["price"] == 100  # Air Force 1

    def test_returns_none_for_impossible_requirement(self):
        product = find_cheapest({"brand": "Reebok"})
        assert product is None


class TestFindApplicableCoupons:
    def test_cross_store_coupon_triggers_at_threshold(self):
        # Two items totaling > $200
        items = [
            {"id": "p1", "name": "Nike Air Max 90", "brand": "Nike", "category": "shoes", "price": 130, "rating": 4.5, "color": "white", "size": "10", "total_reviews": 3500, "five_star_reviews": 2100, "one_star_reviews": 45, "monthly_sales": 450, "in_stock": True},
            {"id": "p3", "name": "Adidas Ultraboost", "brand": "Adidas", "category": "shoes", "price": 190, "rating": 4.7, "color": "white", "size": "10", "total_reviews": 5000, "five_star_reviews": 3800, "one_star_reviews": 25, "monthly_sales": 600, "in_stock": True},
        ]
        coupons = find_applicable_coupons(items)
        # Total is 320, so $20 off $200+ should apply
        assert any(c["id"] == "c1" for c in coupons)

    def test_same_brand_coupon_applies(self):
        items = [
            {"id": "p1", "name": "Nike Air Max 90", "brand": "Nike", "category": "shoes", "price": 130, "rating": 4.5, "color": "white", "size": "10", "total_reviews": 3500, "five_star_reviews": 2100, "one_star_reviews": 45, "monthly_sales": 450, "in_stock": True},
        ]
        coupons = find_applicable_coupons(items)
        # Nike total 130 >= 100, so Nike $15 off should apply
        assert any(c["id"] == "c2" for c in coupons)

    def test_sorted_by_discount_descending(self):
        items = [
            {"id": "p1", "name": "Nike Air Max 90", "brand": "Nike", "category": "shoes", "price": 130, "rating": 4.5, "color": "white", "size": "10", "total_reviews": 3500, "five_star_reviews": 2100, "one_star_reviews": 45, "monthly_sales": 450, "in_stock": True},
            {"id": "p3", "name": "Adidas Ultraboost", "brand": "Adidas", "category": "shoes", "price": 190, "rating": 4.7, "color": "white", "size": "10", "total_reviews": 5000, "five_star_reviews": 3800, "one_star_reviews": 25, "monthly_sales": 600, "in_stock": True},
            {"id": "p7", "name": "Adidas Trefoil Hoodie", "brand": "Adidas", "category": "tops", "price": 65, "rating": 4.5, "color": "gray", "size": "L", "total_reviews": 3200, "five_star_reviews": 2000, "one_star_reviews": 40, "monthly_sales": 500, "in_stock": True},
        ]
        coupons = find_applicable_coupons(items)
        for i in range(1, len(coupons)):
            assert coupons[i]["discount"] <= coupons[i - 1]["discount"]

    def test_no_coupons_when_under_all_thresholds(self):
        items = [
            {"id": "p8", "name": "Puma Essential Tee", "brand": "Puma", "category": "tops", "price": 25, "rating": 4.1, "color": "white", "size": "M", "total_reviews": 4500, "five_star_reviews": 2500, "one_star_reviews": 120, "monthly_sales": 800, "in_stock": True},
        ]
        coupons = find_applicable_coupons(items)
        assert len(coupons) == 0


class TestBuildOptimalCart:
    def test_builds_cart_for_simple_requirements(self):
        cart = build_optimal_cart({
            "requirements": [
                {"brand": "Nike", "category": "shoes"},
                {"brand": "Adidas", "category": "tops"},
            ],
        })
        assert cart is not None
        assert len(cart["items"]) == 2
        assert cart["items"][0]["brand"] == "Nike"
        assert cart["items"][1]["brand"] == "Adidas"
        assert cart["subtotal"] == sum(i["price"] for i in cart["items"])

    def test_picks_cheapest_per_requirement(self):
        cart = build_optimal_cart({
            "requirements": [
                {"brand": "Nike", "category": "shoes"},
            ],
        })
        assert cart is not None
        assert cart["items"][0]["price"] == 100  # Air Force 1 is cheapest

    def test_respects_budget(self):
        cart = build_optimal_cart({
            "requirements": [
                {"brand": "Nike", "category": "shoes"},
                {"brand": "Adidas", "category": "shoes"},
            ],
            "budget": 150,
        })
        # Nike AF1 (100) + Adidas Stan Smith (85) = 185 > 150
        assert cart is None

    def test_applies_coupons_when_optimize_coupons_is_true(self):
        cart = build_optimal_cart({
            "requirements": [
                {"brand": "Nike", "category": "shoes"},
                {"brand": "Nike", "category": "tops"},
                {"brand": "Adidas", "category": "shoes"},
            ],
            "optimize_coupons": True,
        })
        assert cart is not None
        assert cart["total_discount"] > 0
        assert cart["final_price"] == cart["subtotal"] - cart["total_discount"]
        assert len(cart["applied_coupons"]) > 0

    def test_no_coupons_when_optimize_coupons_is_false(self):
        cart = build_optimal_cart({
            "requirements": [
                {"brand": "Nike", "category": "shoes"},
                {"brand": "Adidas", "category": "shoes"},
            ],
            "optimize_coupons": False,
        })
        assert cart is not None
        assert cart["total_discount"] == 0
        assert len(cart["applied_coupons"]) == 0

    def test_returns_none_for_impossible_requirement(self):
        cart = build_optimal_cart({
            "requirements": [
                {"brand": "Reebok"},  # doesn't exist
            ],
        })
        assert cart is None


class TestBuildSmartCart:
    def test_may_find_cheaper_final_price_by_upgrading_products(self):
        # With Nike shoes + Nike top, basic cart: AF1(100) + Dri-FIT(35) = 135
        # Nike brand coupon: $15 off $100+ -> 135 - 15 = 120
        # Cross-store: not triggered ($200 threshold)
        #
        # If upgrade to Air Max (130) + Dri-FIT(35) = 165
        # Nike coupon: $15 off -> 150
        # Still no cross-store. Net 150 > 120
        #
        # So basic might be better here. But smart cart should still work.
        cart = build_smart_cart({
            "requirements": [
                {"brand": "Nike", "category": "shoes"},
                {"brand": "Nike", "category": "tops"},
            ],
            "optimize_coupons": True,
        })
        assert cart is not None
        assert cart["final_price"] <= cart["subtotal"]

    def test_smart_cart_returns_best_option(self):
        smart = build_smart_cart({
            "requirements": [
                {"brand": "Nike", "category": "shoes"},
                {"brand": "Adidas", "category": "shoes"},
                {"brand": "Adidas", "category": "tops"},
            ],
            "optimize_coupons": True,
        })
        basic = build_optimal_cart({
            "requirements": [
                {"brand": "Nike", "category": "shoes"},
                {"brand": "Adidas", "category": "shoes"},
                {"brand": "Adidas", "category": "tops"},
            ],
            "optimize_coupons": True,
        })
        assert smart is not None
        assert basic is not None
        # Smart should be <= basic final price
        assert smart["final_price"] <= basic["final_price"]
