import dynamic from "next/dynamic"

const DynamicAppWithNoSSR = dynamic(() => import("../app/components/Chat"), {
  ssr: false,
  loading: () => <p></p>,
})

export default function Home() {
  return (
    <main>
      <DynamicAppWithNoSSR />
    </main>
  )
}
