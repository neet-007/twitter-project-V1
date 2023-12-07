import { useRef, useEffect } from "react"
export const useClickOutSideToClose = (handler) => {
    let domNode = useRef()

    useEffect(() => {
        let CheckHandler = (e) => {
            if(!domNode.current.contains(e.target)){
                handler()
            }
        }

        document.addEventListener('mousedown', CheckHandler)

        return () => {
            document.removeEventListener('mousedown', CheckHandler)
        }
    })

    return domNode
}