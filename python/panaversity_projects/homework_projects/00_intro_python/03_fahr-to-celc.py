def main():
    fahrenheit: str = input('Enter temperature in Fahrenheit: ')
    fahrenheit: float = float(fahrenheit)

    celsius: float = (fahrenheit - 32) * 5.0 / 9.0
    celsius: str = str(round(celsius, 2))

    print(f'Temperature in Celsius -> {celsius} ')

if __name__ == "__main__":
    main()