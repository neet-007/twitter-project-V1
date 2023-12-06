import {atom} from 'jotai'

export const isCommentAtom = atom(false)

//export const commentIdAtom = atom(null)

export const commentDetailsAtom = atom({
    postIdComment:'',
    postContentComment:'',
    usernameComment:'',
    mentionComment:'',
    likesComment:''
})
