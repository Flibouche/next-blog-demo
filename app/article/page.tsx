"use client";

import { formatDate } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

const ArticlePage = () => {

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
    }, []);

    return (
        <>
            <h1 className='text-2xl font-bold uppercase m-5'>Blog</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* Afficher la liste des articles */}
                {articles.map((article: any) => (
                    <div key={article.id} className='border border-slate-500 p-6 rounded-md hover:bg-slate-700'>
                        {/* Titre de l'article */}
                        <h2 className='text-xl font-bold'>{article.title}</h2>

                        {/* Date de création de l'article */}
                        {article.createdAt && (
                            <p className='text-sm text-slate-300'>{formatDate(article.createdAt)}</p>
                        )}

                        <div className='flex flex-wrap gap-2 my-4'>
                            {/* Tags de l'article */}
                            {article.tags.map((tagArticle: any) => (
                                <span
                                    className='text-xs rounded-full bg-slate-600 px-3 py-2 select-none'
                                    key={tagArticle.tag.id}
                                >
                                    {tagArticle.tag.name}
                                </span>
                            ))}
                        </div>

                        {/* Texte de l'article */}
                        <p className='line-clamp-4'>{article.text}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ArticlePage