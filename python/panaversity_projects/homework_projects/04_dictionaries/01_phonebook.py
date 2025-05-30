def phonebook_dict():
    phonebook: dict = {}

    while True:
        name = input("Contact Name: ").lower()
        if name == "":
            break
        number = int(input("Phone Number: "))
        phonebook[name] = number

    return phonebook


def lookup(phonebook):
    while True:
        name = input("Contact Name to lookup: ")
        if name == "":
            break
        if name.lower() not in phonebook:
            print(f"No contact found for {name}")
        else:
            print(f"{name} -> {phonebook[name]}")


def main():
    phonebook = phonebook_dict()
    lookup(phonebook)


if __name__ == "__main__":
    main()