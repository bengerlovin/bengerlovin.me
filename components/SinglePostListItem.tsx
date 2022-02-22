import { WordPressCategory } from '@/types/DataTypes';
import fetcher from 'lib/fetcher';
import { useEffect, useState } from 'react'
import useSWR from 'swr';

const SinglePostListItem = ({ title, link, publishDate, categories: categoriesFromPostData }: { title: string; link: string; publishDate?: string, categories: number[] }) => {


    const [postCategories, setPostCategories] = useState<WordPressCategory[]>([])
    const [postTitle, setPostTitle] = useState(title)
    // let { data: allCategories, error: categoryFetchError } = useSWR<WordPressCategory[]>('https://happyhealthytechie.com/wp-json/wp/v2/categories?per_page=100', fetcher)

    title = (title.replace('&#8217;', "'"))
    title = (title.replace('&#8211;', "-"))

    useEffect(() => {

        setPostTitle(title)

        const fetchAllCategories = async () => {

            let allCategories = await fetch('https://happyhealthytechie.com/wp-json/wp/v2/categories?per_page=100')

            let results = await allCategories.json();

            let filteredCategories = results.filter((category: WordPressCategory) => {
                return categoriesFromPostData.includes(category.id)
            })

            setPostCategories(filteredCategories);

        }

        fetchAllCategories();


    }, [])

    return (
        <>
            <div className=' py-4 border-b-[1px] border-gray-300/30'>
                <a href={link} target='_blank' className='flex items-center justify-start pr-2 transition-colors duration-200 ease-in-out text-zinc-800 md:text-base gap-x-4 group'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-4 h-4 transition-colors duration-200 md:mt-1 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <p className='font-medium text-[18px] md:text-[19px] tracking-[-0.02em] text-gray-900 transition-colors duration-200 group-hover:text-blue-500 leading-[1.28]'>{truncateString(postTitle, 80)}</p>
                </a>
                <div className='pl-6 md:pl-8 pb-2 pt-5 flex gap-x-2.5'>
                    {postCategories.map((categoryItem) => (
                        <p className='text-[12px] md:text-[13px] tracking-tight text-gray-700/70 px-2 py-1 bg-gray-400/10 rounded-md' key={categoryItem.name}>{categoryItem.name}</p>
                    ))}
                </div>
            </div>

        </>
    )
}

function truncateString(str, num) {
    if (str.length <= num) {
        return str
    }
    return str.slice(0, num) + '...'
}

export default SinglePostListItem
