
const createCell = (value, error) => {
	const cell = document.createElement('td');
	
	if (error) {
		cell.appendChild(createErrorBadge(error));
	}
	cell.appendChild(value);

	return cell;
};

const createLink = ({ name, link }) => {
	const anchor = document.createElement('a');

	anchor.setAttribute('href', link);
	anchor.appendChild(name);

	return anchor;
};

const wrapText = (value) => {
	return document.createTextNode(value);
};

const createInfo = () => {
	return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bg-danger rounded-pill color text-white m-1" viewBox="0 0 16 16">
		<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
	</svg>`;
};

const createErrorBadge = (error) => {
	const span = document.createElement('span');

	span.setAttribute('data-bs-toggle', 'tooltip');
	span.setAttribute('data-bs-placement', 'top');
	span.setAttribute('title', error);

	span.innerHTML = createInfo();

	return span;
};

const createRow = ({ name, link, registry, tag, master, generalError, tagError, masterError }) => {
	const row = document.createElement('tr');

	if (generalError) {
		row.classList.add('alert-danger');
	}

	row.appendChild(
		createCell(
			createLink({
				name: wrapText(name),
				link
			}),
			generalError
		)
	);

	row.appendChild(
		createCell(
			wrapText(registry || '')
		)
	);

	row.appendChild(
		createCell(
			wrapText(tag || ''),
			tagError,
		)
	);

	row.appendChild(
		createCell(
			wrapText(master || ''),
			masterError,
		)
	);

	return row;
};

export default createRow;
