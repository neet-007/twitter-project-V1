import React from 'react'
import ListInfo from '../../components/ListInfo'
import PostFeed from '../../components/PostFeed'
import PageTopBar from '../../components/UI/PageTopBar'
import { useGetListPosts } from '../../data/queriesAndMutations'
import { useParams } from 'react-router-dom'

function Lists() {

  const {id} = useParams()
  const {data, isLoading} = useGetListPosts(id)

  if (isLoading) return (<h1>...Loading</h1>)

  return (
    <section>
      <PageTopBar name={'Lists'}/>
      <ListInfo listTitle={data[0].list[0].list_name}
                bio={data[0].list[0].descritpion}
                username={data[0].list[0].user_list.username}
                mention={data[0].list[0].user_list.mention}
                />
      <PostFeed posts={data}/>
    </section>
  )
}

export default Lists