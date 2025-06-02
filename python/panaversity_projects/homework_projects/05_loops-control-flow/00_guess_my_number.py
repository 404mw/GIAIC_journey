from random import randint

def main():
    number = randint(1, 100)
    print("Pick a number between 1 and 100")
    guess = int(input("Your guess: "))
    while guess != number:
        if guess > number:
            print("Too high")
        else:
            print("Too low")
        print()
        guess = int(input("Your guess: "))

    print(f"Gotcha! The number was {number}")


if __name__ == "__main__":
    main()