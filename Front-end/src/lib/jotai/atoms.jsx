import {atom, useAtom} from 'jotai'

export const isCommentAtom = atom(false)

export const mobileSideNavOnAtom = atom(false)
//export const commentIdAtom = atom(null)

export const commentDetailsAtom = atom({
    postIdComment:'',
    postContentComment:'',
    usernameComment:'',
    mentionComment:'',
    created_at:'',
    likesComment:'',
    user_id:''
})
