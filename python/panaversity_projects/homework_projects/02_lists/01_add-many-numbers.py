total:int = 0

def main():
    global total
    numbers: list[int] = [1, 2, 3, 4, 5, 6]

    for number in numbers:
        total += number
        
    print(f'Sum of numbers in List: {total}')

if __name__ == "__main__":
    main()