import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
    const meals = db.prepare('SELECT * FROM meals').all();
    return meals;
}

export async function getMeal(slug) {
    return await db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function createMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (err) => {
        if (err) {
            throw new Error('Failed to save image');
        }
    });

    meal.image = `/images/${fileName}`;

    db.prepare('INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email) VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)').run(meal);
   
}