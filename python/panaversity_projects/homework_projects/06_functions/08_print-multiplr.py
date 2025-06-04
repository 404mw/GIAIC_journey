def print_multiple(message, repetitions):
    for _ in range(repetitions):
        print(message)


def main():
    msg: str = str(input("Please type a message: "))
    repetitions: int = int(input("Enter a number of times to repeat your message: "))

    if msg == "":
        print("You must enter a message.")
    elif repetitions <= 0:
        print("You must enter a positive number of repetitions.")
    else:
        print()
        print_multiple(msg, repetitions)


if __name__ == "__main__":
    main()