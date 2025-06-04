def print_divisors(num):
    for i in range(1, num + 1):
        if num % i == 0:
            print(i)


def main():
    
    num: int = int(input("Enter a number: "))
    if num <= 0:
        print("Please enter a positive number.")
    else:
        print(f"The divisors of {num} are:")
        print_divisors(num)


if __name__ == "__main__":
    main()