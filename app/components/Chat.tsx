"use client"
import { Channel, ChannelList } from "@sendbird/uikit-react"
import SendbirdApp from "@sendbird/uikit-react/App"

import { useState } from "react"

const APP_ID = process.env.NEXT_PUBLIC_SENDBIRD_APP_ID!
const USER_ID = process.env.NEXT_PUBLIC_SENDBIRD_USER_ID!

const Chat = () => {
  const [currentChannel, setCurrentChannel] = useState<any>("")
  const [showSettings, setShowSettings] = useState<boolean>(false)
  const currentChannelUrl = currentChannel ? currentChannel.url : ""

  return (
    <div style={{ height: "95vh" }}>
      <SendbirdApp userId={USER_ID} appId={APP_ID} />
    </div>
  )
}

export default Chat
