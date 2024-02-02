import imgUrl from '@/assets/favicon.ico'
export default function Header() {
  const sidebarStore = useSidebarStore()

  return (
    <div className="h-16 flex justify-center items-center gap-2">
      <img
        width={28}
        src={imgUrl}
        alt=""
      />
      {!sidebarStore.isCollapse && <span>{AppMetadata.APP_NAME}</span>}
    </div>
  )
}
