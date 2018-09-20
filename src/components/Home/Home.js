import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
	ReactiveBase,
	DataSearch,
	ResultList,
	SelectedFilters,
} from '@appbaseio/reactivesearch';

import './Home.css';

class Home extends Component {
	render() {
		return (
				<div>
					<ResultList
						componentId="SearchResult"
						dataField="original_title"
						size={10}
						onData={this.onData}
						className="result-list-container"
						pagination
						react={{
								and: 'BookSensor',
						}}
					/>
				</div>

		);
	}

	onData() {
		console.log(this.props)
		return ({
			title: <div className="book-title" dangerouslySetInnerHTML={{ __html: data.original_title }} />,
			description: (
				<div className="flex column justify-space-between">
					<div>
						<div>by <span className="authors-list">{data.authors}</span></div>
						<div className="ratings-list flex align-center">
							<span className="stars">
								{
									Array(data.average_rating_rounded).fill('x')
										.map((item, index) => <i className="fas fa-star" key={index} />) // eslint-disable-line
								}
							</span>
							<span className="avg-rating">({data.average_rating} avg)</span>
						</div>
					</div>
					<span className="pub-year">Pub {data.original_publication_year}</span>
				</div>
			),
			image: data.image,
		});
	}
}

export default Home;