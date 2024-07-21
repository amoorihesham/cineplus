export interface ICardMovieTypeProps {
	movie: {
		id: string;
		title: string;
		overview: string;
		backdrop_path: string;
	};
}
export interface IMovieType {
	id: string;
	title: string;
	overview: string;
	backdrop_path: string;
	vote_average: number;
	vote_count: number;
	release_date: string;
}

export interface IProductionCompany {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

export interface ISpokenLanguages {
	english_name: string;
	iso_639_1: string;
	name: string;
}

export interface IGenre {
	id: number,
	name: string
}