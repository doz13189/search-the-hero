export const createQuery = (rarity: string, tags: string[]) => {
	const rarityQuery = rarity ? `rarity=${rarity}` : null;
	const tagsQuery = tags?.length > 0 ? `tags=${tags.join(",")}` : null;

	const queries = [rarityQuery, tagsQuery].filter((query) => query !== null);
	return queries.join("&");
};
