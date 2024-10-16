import React, { FunctionComponent } from 'react';
import { formatDate } from '@/lib/utils';

const ArticleCard: FunctionComponent<any> = ({ article }) => {
    return (
        <div key={article.id} className='group border border-slate-500 p-6 rounded-md hover:bg-slate-700 cursor-pointer hover:-translate-y-2 duration-300'>
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
                        className='text-xs rounded-full bg-slate-600 px-3 py-2 select-none group-hover:bg-red-300 duration-300'
                        key={tagArticle.tag.id}
                    >
                        {tagArticle.tag.name}
                    </span>
                ))}
            </div>

            {/* Texte de l'article */}
            <p className='line-clamp-4'>{article.text}</p>
        </div>
    )
}

export default ArticleCard