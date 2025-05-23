from random import randint


def main():

    for _ in range(1, 10):
        rand_number: int = randint(1, 100)
        print(rand_number)


if __name__ == '__main__':
    main()