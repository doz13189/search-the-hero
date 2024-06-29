export const createQuery = (rarity: string, skills: string[]) => {
	const rarityQuery = rarity ? `rarity=${rarity}` : null;
	const skillsQuery = skills?.length > 0 ? `skills=${skills.join(",")}` : null;

	const queries = [rarityQuery, skillsQuery].filter((query) => query !== null);
	return queries.join("&");
};
