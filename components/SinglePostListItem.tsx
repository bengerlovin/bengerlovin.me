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
            console.log("calling useEffect for", title, categoriesFromPostData, postCategories)
        }

        fetchAllCategories();


    }, [])

    return (
        <>
            <div className=' py-4 border-b-[1px] border-gray-300/30'>
                <a href={link} target='_blank' className='text-zinc-800 text-md flex justify-start gap-x-4 items-center group transition-colors duration-200 ease-in-out'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:text-blue-500 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <p className='text-zinc-900 transition-colors duration-200 group-hover:text-blue-500 text-lg leading-[1.28]'>{truncateString(postTitle, 80)}</p>
                </a>
                <div className='pl-8 pb-2 pt-5 flex gap-x-2.5'>
                    {postCategories.map((categoryItem) => (
                        <p className='text-[13px] tracking-normal text-gray-700/70 px-2 py-1 bg-gray-400/10 rounded-md' key={categoryItem.name}>{categoryItem.name}</p>
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
