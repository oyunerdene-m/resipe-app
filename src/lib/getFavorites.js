export const getFavorites = (recipes, ids) => {
	return recipes.filter((recipe) => ids.includes(recipe.id));
};

export const isFavorited = (recipe, ids) => {
	return ids.includes(recipe.id);
};

export const getRecipe = (recipes, id) => {
	return recipes.filter((recipe) => recipe.id === id);
};
