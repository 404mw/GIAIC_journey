def count_even(lst):
    count: int = 0

    for num in lst:
        if num % 2 == 0:
            count += 1
    return count

def get_numbers():
    lst: list = []

    nums = input('Type a number or press enter to quit: ')
    while nums != '':
        lst.append(int(nums))
        nums = input('Type a number or press enter to quit: ')
    return lst

def main():
    lst = get_numbers()
    print(f'There are {count_even(lst)} even numbers in the list.')

if __name__ == '__main__':
    main()