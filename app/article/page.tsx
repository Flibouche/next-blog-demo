"use client";

import { db } from '@/lib/db';
import React, { useEffect, useState } from 'react';

const ArticlePage = async () => {

    // Version 1
    // Récupérer la liste des articles
    // const articles = await db.article.findMany({
    //     orderBy: {
    //         createdAt: 'desc'
    //     },
    //     include: {
    //         tags: {
    //             include: {
    //                 tag: true
    //             }
    //         }
    //     }
    // });

    // Version 2 : Hooks
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch('/api/article');
            const data = await response.json();
            setArticles(data);
        }

        fetchArticles();
    });

    return (
        <>
            <h1 className='text-2xl font-bold uppercase'>Blog</h1>

            {/* Afficher la liste des articles */}
            {articles.map((article: any) => (
                <div key={article.id} className='mb-6'>
                    {/* Titre de l'article */}
                    <h2 className='text-2xl font-semibold text-emerald-700'>{article.title}</h2>
                    {/* Date de création de l'article */}
                    {article.createdAt && (
                        <p>{article.createdAt.toLocaleDateString()} {article.createdAt.toLocaleTimeString()}</p>
                    )}
                    {/* Tags de l'article */}
                    {article.tags.map((tagArticle: any) => (
                        <span key={tagArticle.tag.id}>
                            {tagArticle.tag.name}
                        </span>
                    ))}
                    {/* Texte de l'article */}
                    <p>{article.text}</p>
                </div>
            ))}
        </>
    )
}

export default ArticlePage