"use client";

import ArticleCard from '@/components/ArticleCard';
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
                    <ArticleCard article={article} />
                ))}
            </div>
        </>
    )
}

export default ArticlePage