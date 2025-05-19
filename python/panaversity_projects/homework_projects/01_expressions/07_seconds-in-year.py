days_per_year: float = 365.2422
hours_per_day: int = 24
mins_per_hour: int = 60
secs_per_min: int= 60


def main():

    secs_in_year = int(days_per_year * hours_per_day * mins_per_hour * secs_per_min)

    print(f'According to The Gregorian calendar(365.2422 days), there are {str(secs_in_year)} seconds in a year')

if __name__ == '__main__':
    main()