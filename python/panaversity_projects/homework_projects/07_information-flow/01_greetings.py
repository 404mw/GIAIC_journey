def greet(name):
    return f'Greetings {name}!'

def main():
    name: str = str(input("What is your name?: "))
    print(greet(name))

if __name__ == "__main__":
    main()