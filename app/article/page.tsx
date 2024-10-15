import { db } from '@/lib/db';
import React from 'react';

const ArticlePage = async () => {

    // Récupérer la liste des articles
    const articles = await db.article.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    }); 

    return (
        <div>
            <h1 className='text-2xl font-bold uppercase'>Blog</h1>

            {/* Afficher la liste des articles */}
            {articles.map((article: any) => (
                <div key={article.id} className='mb-6'>
                    {/* Titre de l'article */}
                    <h2 className='text-2xl font-semibold text-emerald-700'>{article.title}</h2>
                    {/* Texte de l'article */}
                    <p>{article.text}</p>
                </div>
            ))}
        </div>
    )
}

export default ArticlePage