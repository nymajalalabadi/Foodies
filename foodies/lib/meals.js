import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    const meals =  db.prepare('SELECT * FROM meals').all();
    return meals;
}

export async function getMeal(slug) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const meal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
    return meal;
}

export async function createMeal(meal) {
    const result = await db.prepare('INSERT INTO meals (title, slug, image, summary, instructions, creator, creator_email) VALUES (?, ?, ?, ?, ?, ?, ?)').run(meal);
    return result.lastInsertRowid;
}