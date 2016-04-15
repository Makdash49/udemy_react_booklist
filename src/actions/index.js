export function selectBook(book) {
	// selectBook is an ActionCreator, it needs to return an action,
	// a object with a type propoerty.
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}