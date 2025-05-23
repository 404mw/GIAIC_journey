def main():

    lst = []
    elem: str = input('Type something or press Enter to stop: ')

    while elem != '':
        lst.append(elem)
        elem: str = input('Type something or press Enter to stop: ')
        
    print(lst)

if __name__ == '__main__':
    main()
