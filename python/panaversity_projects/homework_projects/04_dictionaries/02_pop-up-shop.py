fruit_prices = {
    "apple": 0.99,
    "banana": 0.49,
    "mango": 1.29,
    "orange": 2.99,
    "kiwi": 0.79,
    "pineapple": 3.50
}

def main():
    final_cost = 0
    for fruit in fruit_prices:
        price = fruit_prices[fruit]
        quantity = int(input(f"How many {fruit}s are you buying? "))
        total = price * quantity
        final_cost += total
    print(f"Your total is ${final_cost}")

if __name__ == "__main__":
    main()