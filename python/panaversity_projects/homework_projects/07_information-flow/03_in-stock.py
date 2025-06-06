stock = [
    {'apple': 27},
    {'banana': 83},
    {'orange': 6},
    {'mango': 55},
    {'grape': 41}
]

def check_stock(query: str):
    for item in stock:
        if query in item:
            quantity = item[query]
            if quantity == 0:
                print('Out of Stock')
            else:
                print(f'In Stock: {quantity} available')
            return
    print('We don’t sell that here')

def main():
    query = input('Enter a fruit name: ').strip().lower()
    check_stock(query)

if __name__ == "__main__":
    main()
