import React from 'react';
import cx from 'classnames';

const MONTHS = {
	January: 31,
	February: (year: number) => (isLeapYear(year) ? 29 : 28),
	March: 31,
	April: 30,
	May: 31,
	June: 30,
	July: 31,
	August: 31,
	September: 30,
	October: 31,
	November: 30,
	December: 31,
};

const isLeapYear = (year: number) => {
	return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

const TRIPS: {
	destination: string;
	country: string;
	start: string;
	end: string;
}[] = [
	{
		destination: 'Malaga* Val de Abdalajís?',
		country: 'Spain',
		start: '2017-02-12',
		end: '2017-02-17',
	},
	{
		destination: 'Brno',
		country: 'Czech Republic',
		start: '2017-03-16',
		end: '2017-03-19',
	},
	{
		destination: 'Bologna',
		country: 'Italy',
		start: '2017-06-06',
		end: '2017-06-09',
	},
	{
		destination: 'Istanbul',
		country: 'Turkey',
		start: '2018-03-09',
		end: '2018-03-13',
	},
	{
		destination: 'Oslo',
		country: 'Norway',
		start: '2017-06-06',
		end: '2017-06-09',
	},
	{
		destination: 'Düsseldorf',
		country: 'Germany',
		start: '2018-12-13',
		end: '2018-12-17',
	},
	{
		destination: 'Lisbon',
		country: 'Portugal',
		start: '2019-01-05',
		end: '2019-01-10',
	},
	{
		destination: 'Cologne',
		country: 'Germany',
		start: '2019-01-22',
		end: '2019-01-26', // TODO: Check this
	},
	{
		destination: 'Frankfurt',
		country: 'Germany',
		start: '2019-02-14',
		end: '2019-02-20',
	},
	{
		destination: 'Frankfurt',
		country: 'Germany',
		start: '2019-03-14',
		end: '2019-03-27',
	},
	{
		destination: 'Berlin',
		country: 'Germany',
		start: '2019-07-09',
		end: '2019-07-15',
	},
	{
		destination: 'Barcelona',
		country: 'Spain',
		start: '2019-08-09',
		end: '2019-08-12',
	},
	{
		destination: 'London',
		country: 'United Kingdom',
		start: '2020-02-06',
		end: '2020-02-10',
	},
	{
		destination: 'Brugges',
		country: 'Belgium',
		start: '2020-08-15',
		end: '2020-08-17',
	},
	{
		destination: 'Festalemps',
		country: 'Belgium',
		start: '2020-08-17',
		end: '2020-08-22', // TODO: Check this
	},
	{
		destination: 'Barcelona',
		country: 'Spain',
		start: '2020-09-17', // TODO: When was this really?
		end: '2020-09-21',
	},
	{
		destination: 'Lindos',
		country: 'Greece',
		start: '2021-08-13',
		end: '2021-08-21',
	},
	{
		destination: 'London',
		country: 'United Kingdom',
		start: '2021-11-15',
		end: '2021-11-18',
	},
	{
		destination: 'Mexico City',
		country: 'Mexico',
		start: '2022-03-03',
		end: '2022-03-25',
	},
	{
		destination: 'Italy (Ambar)',
		country: 'Italy',
		start: '2022-05-29',
		end: '2022-06-02',
	},
	{
		destination: 'Brussels',
		country: 'Belgium',
		start: '2022-06-14',
		end: '2022-06-15',
	},
	{
		destination: 'Bordeaux',
		country: 'France', // TODO: France with Rose?
		start: '2022-06-15',
		end: '2022-06-16',
	},
	{
		destination: 'Marseilles',
		country: 'France',
		start: '2022-06-16',
		end: '2022-06-18',
	},
	{
		destination: 'Lucerne',
		country: 'Switzerland',
		start: '2022-06-18',
		end: '2022-06-19',
	},
	{
		destination: 'Innsbruck',
		country: 'Austria',
		start: '2022-06-19',
		end: '2022-06-20',
	},
	{
		destination: 'Verona',
		country: 'Italy',
		start: '2022-06-20',
		end: '2022-06-22',
	},
	{
		destination: 'Trieste',
		country: 'Italy',
		start: '2022-06-22',
		end: '2022-06-23',
	},
	{
		destination: 'Ljubljana',
		country: 'Slovenia',
		start: '2022-06-23',
		end: '2022-06-26',
	},
	{
		destination: 'Bratislava',
		country: 'Slovakia',
		start: '2022-06-26',
		end: '2022-06-27',
	},
	{
		destination: 'Vienna',
		country: 'Austria',
		start: '2022-06-27',
		end: '2022-06-29',
	},
	{
		destination: 'Prague',
		country: 'Czech Republic',
		start: '2022-06-29',
		end: '2022-06-30',
	},
	{
		destination: 'London',
		country: 'United Kingdom',
		start: '2022-11-09',
		end: '2022-11-20',
	},

	{
		destination: 'Naples/Sorrento/Rome',
		country: 'Italy',
		start: '2023-03-21',
		end: '2023-03-31',
	},
	{
		destination: 'Oslo (Ambar)',
		country: 'Norway',
		start: '2023-04-16',
		end: '2023-04-19',
	},
	{
		destination: 'Mexico City',
		country: 'Mexico',
		start: '2023-05-06',
		end: '2023-05-18',
	},
	{
		destination: 'London',
		country: 'United Kingdom',
		start: '2023-05-31',
		end: '2023-06-06',
	},
	{
		destination: 'Almuñécar',
		country: 'Spain',
		start: '2023-06-06',
		end: '2023-06-16',
	},
	{
		destination: 'Hereford',
		country: 'United Kingdom',
		start: '2023-06-22',
		end: '2023-06-24',
	},
	{
		destination: 'Aberdeen',
		country: 'Scotland',
		start: '2023-06-24',
		end: '2023-07-02',
	},
	{
		destination: 'Brighton',
		country: 'England',
		start: '2023-09-07',
		end: '2023-09-12',
	},
	{
		destination: 'Rotterdam',
		country: 'Netherlands',
		start: '2023-09-14',
		end: '2023-09-18',
	},
	{
		destination: 'Oslo (Ambar)',
		country: 'Norway',
		start: '2023-11-27',
		end: '2023-11-30',
	},
	{
		destination: 'Mexico City',
		country: 'Mexico',
		start: '2023-12-11',
		end: '2023-12-31',
	},
	{
		destination: 'Madrid',
		country: 'Spain',
		start: '2024-02-14',
		end: '2024-02-17',
	},
	{
		destination: 'Almuñécar',
		country: 'Spain',
		start: '2024-03-14',
		end: '2024-03-20',
	},
	{
		destination: 'Thessaloniki',
		country: 'Greece', // TODO: Lindos?
		start: '2024-04-09',
		end: '2024-04-16',
	},
	{
		destination: 'Oslo (Ambar)',
		country: 'Norway',
		start: '2024-05-11',
		end: '2024-05-15',
	},
	{
		destination: 'Aberdeen (Ambar)',
		country: 'Norway',
		start: '2024-06-06',
		end: '2024-06-09',
	},
	{
		destination: 'Porto',
		country: 'Portugal',
		start: '2024-08-18',
		end: '2024-08-25',
	},
	{
		destination: 'Riga',
		country: 'Latvia',
		start: '2024-08-08',
		end: '2024-08-12',
	},
	{
		destination: 'Costa Brava',
		country: 'Spain',
		start: '2024-09-02',
		end: '2024-09-09',
	},
	{
		destination: 'London',
		country: 'England',
		start: '2024-09-12',
		end: '2024-09-17',
	},
	{
		destination: 'Almuñécar',
		country: 'Spain',
		start: '2024-09-23',
		end: '2024-10-01',
	},
];

function findTripForDay(date: string) {
	return TRIPS.find((trip) => {
		return trip.start <= date && trip.end >= date;
	});
}

function zeroPad(n: number) {
	return n.toString().padStart(2, '0');
}

function createDateString(year: number, monthIndex: number, day: number) {
	return `${year}-${zeroPad(monthIndex + 1)}-${zeroPad(day)}`;
}

function App() {
	return (
		<div className="grid grid-cols-32">
			{[2018, 2019, 2020, 2021, 2022, 2023, 2024].map((year) => {
				return <Year key={year} year={year} />;
			})}
		</div>
	);
}

function Year({ year }: { year: number }) {
	return (
		<>
			<h2 className="text-3xl font-bold col-span-full">{year}</h2>
			{Object.entries(MONTHS).map(([month, maxDays], monthIndex) => {
				return (
					<React.Fragment key={month}>
						<h3 className="text-md pr-3">{month}</h3>
						{Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
							const dayInMonth =
								day <=
								(typeof maxDays === 'function' ? maxDays(2024) : maxDays);

							if (!dayInMonth) {
								return (
									<div key={day} className="px-1 flex justify-center"></div>
								);
							}

							const dateString = createDateString(year, monthIndex, day);
							const trip = findTripForDay(dateString);
							const isStartDate = trip?.start === dateString;
							const isEndDate = trip?.end === dateString;

							const className = cx('px-1 flex justify-center', {
								'bg-slate-500': trip,
								'rounded-l-full': isStartDate,
								'rounded-r-full': isEndDate,
							});

							return (
								<div key={day} className={className}>
									<span>{day}</span>
								</div>
							);
						})}
					</React.Fragment>
				);
			})}
		</>
	);
}

export default App;
