import React, { Component, PropTypes } from 'react';
import PhotosGallery from 'modules/page/views/photos-gallery';

export default class PhotosInfo extends Component {
	static propTypes = {
		photos: PropTypes.object.isRequired,
		actions: PropTypes.object.isRequired
	}

	constructor(...args) {
		super(...args);
		const { year: currYear, photos: { [currYear]: currPhotos } } = this.props;
		if (!currYear) {
			this.act('fetchYears');
		} else if (!currPhotos) {
			this.act('fetchPhotos', currYear);
		}
	}

	act(name, ...args) {
		this.props.actions[name](...args);
	}

	onYearClick(event) {
		const currYear = +event.target.dataset.year;
		this.act('fetchPhotos', currYear);
	}

	render() {
		let { year: currYear, photos } = this.props;

		return <div className='page photos-info'>
			<div className='years-list'>{
				Object.keys(photos).map(year => (
					<div className={'year' + (currYear === +year ? ' selected' : '')}
						key={year}
						data-year={year}
						onClick={this.onYearClick.bind(this)}>
						{year}
					</div>
				))
			}</div>
			<h3 className='current-year'>Year {currYear}</h3>
			<PhotosGallery photos={photos[currYear]}/>
		</div>;
	}
};