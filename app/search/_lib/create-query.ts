export const createQuery = (rarity: string, skills: string[], name?: string, tags?: string[]) => {
	const rarityQuery = rarity ? `rarity=${rarity}` : null;
	const nameQuery = name ? `name=${name}` : null;
	const skillsQuery = skills?.length > 0 ? `skills=${skills.join(",")}` : null;
	const tagsQuery = tags && tags?.length > 0 ? `tags=${tags.join(",")}` : null;

	const queries = [rarityQuery, nameQuery, skillsQuery, tagsQuery].filter((query) => query !== null);
	return queries.join("&");
};
