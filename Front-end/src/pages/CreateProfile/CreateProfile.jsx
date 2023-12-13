import React, { useEffect, useState } from 'react'
import Modal from '../../components/UI/Modal'
import ProfilePic from '../../components/ProfilePic'
import TwitterButton from '../../components/UI/TwitterButton'
import AdjustedProfileCard from '../../components/AdjustedProfileCard'
import { useSetAtom } from 'jotai'
import { modalAtom } from '../../lib/jotai/atoms'
function CreateProfile() {

  const [modalNum, setModalNum] = useState(1)
  const setModal = useSetAtom(modalAtom)

  useEffect(() => {
    setModal(true)
  },[])

  if (modalNum === 1) {
    return (
      <section>
          <Modal back={() => {setModalNum()}}>
            <h1 style={{margin:0}}>Pick Your Profile</h1>
            <p style={{margin:0}}>Have a favorite selfie? Upload it now.</p>
            <ProfilePic/>
            <TwitterButton Name='Skip for now' onClick={() => {setModalNum(2)}}/>
          </Modal>
      </section>
    )
  }

  if (modalNum === 2) {
    return (
      <section>
          <Modal back={() => {setModalNum(1)}} next={() => {setModalNum(3)}}>
            <h1 style={{margin:0}}>Pick a header</h1>
            <p style={{margin:0}}>People who visit your profile will see it. Show your style.</p>
            <img src="/src/assets/header.png" alt="" />
            <AdjustedProfileCard />
            <TwitterButton Name='Skip for now' onClick={() => {setModalNum(3)}}/>
          </Modal>
      </section>
    )
  }

  if (modalNum === 3) {
    return (
      <section>
          <Modal back={() => {setModalNum(2)}} next={() => {setModalNum(3)}}>
            <h1 style={{margin:0}}>Describe yourself</h1>
            <p style={{margin:0}}>What makes you special? Don't think too hard, just have fun with it.</p>
            <form>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </form>
            <TwitterButton Name='Skip for now' onClick={() => {setModalNum(4)}}/>
          </Modal>
      </section>
    )
  }

  if (modalNum === 4) {
    return (
      <section>
          <Modal back={() => {setModalNum(3)}} next={() => {setModalNum()}}>
          <h1 style={{margin:0}}>Where do you live?</h1>
            <p style={{margin:0}}>Find accounts in the same location as you.</p>
            <form>
              <textarea name="" id="" cols="30" rows="10" placeholder='Location'></textarea>
            </form>
            <TwitterButton Name='Skip for now' onClick={() => {setModalNum(2)}}/>
          </Modal>
      </section>
    )
  }
}

export default CreateProfile