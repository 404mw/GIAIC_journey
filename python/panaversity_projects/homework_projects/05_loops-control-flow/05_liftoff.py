countdown: int = 10

def main():
    for i in range(countdown, 0, -1):
        print(i)
    print('Liftoff!')


if __name__ == '__main__':
    main()